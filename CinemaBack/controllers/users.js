const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { User, Role } = require('../database/models')

const controller = {
  list: async (req, res) => {
    const users = await User.findAll({
      include: [
        {
          model: Role,
          as: 'role'
        }
      ]
    })
    res.json(users)
  },

  test: async (req, res) => {
    let user = null
    try {
      user = await User.findOne({
        where: { userId: 1 },
        attributes: [
          'userId',
          'username',
          'roleId',
          'password',
          'connect',
          'role.name'
        ],
        include: [{ association: 'role' }]
      })
      return res.send(JSON.stringify(user))
    } catch (errores) {
      console.log('errores: ' + errores)
    }
  },

  login: async (req, res) => {
    let errors = validationResult(req)
    let nombre = req.body?.username?.trim()
    if (errors.isEmpty()) {
      await User.findOne({
        where: { username: nombre },
        attributes: ['userId', 'username', 'password', 'connect', 'roleId'],
        include: [{ association: 'role' }]
      })
        .then((userFound) => {
          if (
            userFound != null &&
            bcrypt.compareSync(req.body.password, userFound.dataValues.password)
          ) {
            res.send({ status: 200, token: 'superTokenPepito123' })
          } else {
            res.send({ status: 401, msg: 'Usuario o contraseña incorrectos.' })
          }
        })
        .catch((error) => res.send(error))
    } else {
      res.json(errors)
    }
  },
  create: async (req, res) => {
    let errors = validationResult(req)
    if (errors.isEmpty()) {
      let user = req.body
      user.password = bcrypt.hashSync(user.password, 10)
      user.connect = false
      user.roleId = req.body.roleId
      User.create(user)
        .then((userCreated) => {
          res.send({ status: 200, newUser: userCreated })
        })
        .catch((error) => res.send(error))
    } else {
      res.json(errors)
    }
  },
  delete: async (req, res) => {
    let errors = validationResult(req)
    if (errors.isEmpty()) {
      let user = req.body
      User.destroy({
        where: { userId: user.userId}, force: true 
      })
        .then((userDeleted) => {
          res.send({ status: 200, userDeleted })
        })
        .catch((error) => res.send(error))
    } else {
      res.json(errors)
    }
  },
  update: async (req, res) => {
    let errors = validationResult(req)
    if (errors.isEmpty()) {
      let user = req.body
      User.update(user, { where: { userId: user.userId } })
        .then((userUpdated) => {
          res.send({ status: 200, userUpdated })
        })
        .catch((error) => res.send(error))
    } else {
      res.json(errors)
    }
  }
}

module.exports = controller

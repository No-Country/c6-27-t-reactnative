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
        attributes: ['userId', 'username', 'password', 'connect', 'roleId', 'firstname', 'lastname', 'cardnumber'],
        include: [{ association: 'role' }]
      })
        .then((userFound) => {
          if (
            userFound != null &&
            bcrypt.compareSync(req.body.password, userFound.dataValues.password)
          ) {
            res.send(
              {
                cardnumber: userFound.cardnumber,
                firstname: userFound.firstname,
                lastname: userFound.lastname,
                status: 200, 
                token: 'superTokenPepito123',
                username: userFound.username
              })
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
      let user = {}      
      user.username = req.body.username
      user.password = bcrypt.hashSync(req.body.password, 10)
      user.connect = false
      user.roleId = 2 // 1 Admin y 2 Client
      user.firstname = req.body.firstname
      user.lastname = req.body.lastname
      user.cardnumber = req.body.cardnumber
      User.create(user)
        .then((userCreated) => {
          res.send({ status: 200, ...user})
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

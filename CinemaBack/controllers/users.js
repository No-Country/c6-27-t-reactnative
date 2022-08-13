const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
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

  processLogin: (req, res) => {
    let errors = validationResult(req)
    let nombre = req.body?.username?.trim()
    if (errors.isEmpty()) {
      User.findOne({
        where: { username: nombre },
        attributes: ['userId', 'username', 'password', 'connect', 'roleId'],
        include: [{ association: 'role' }]
      })
        .then((userFound) => {
          if (userFound != null && req.body.password == userFound.password) {
            res.send({ status: 200, token: 'pepito123' })
          } else {
            res.send({ status: 401, msg: 'Usuario o contraseña incorrectos.' })
          }
        })
        .catch((error) => res.send(error))
    } else {
      res.json(errors)
    }
  }
}

module.exports = controller

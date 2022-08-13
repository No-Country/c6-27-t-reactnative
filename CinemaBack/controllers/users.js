const { User, Role} = require('../database/models');

const controller = {
    list: async (req, res) => 
        {
            const users = await User.findAll({
                include: [
                    {
                        model: Role,
                        as: 'role'
                    }
                ]
            });
            res.json(users);
        },

    test: async (req, res) =>
        {
            let user = null;        
            try {
                user = await User.findOne(
                    {    
                        where: {userId: 1},                      
                        attributes: ['userId', 'username', 'roleId', 'password','connect', 'role.name'],
                        include: [{association: "role"}]
                    })
                return res.send(JSON.stringify(user));
            }
            catch(errores) { 
                console.log("errores: "+ errores)
                            }
        },
    }

module.exports = controller;
const usersExample = {
    "users": [
        {
            "id": 1,
            "name": "John Doe",
            "age": 30,
            "email": "john@gmail.com"
        },
        {
            "id": 2,
            "name": "Jane Doe",
            "age": 25,
            "email": "jane@gmail.com"
        },
    ]
}

const controller = {
    list: (req, res) => 
        {
        res.send(JSON.stringify(usersExample));          
        }
    }

module.exports = controller;
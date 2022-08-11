const filmsExample = {
    "films": [
        {
            "id": 1,
            "name": "Batman",
            "category": "Accion",
        },
        {
            "id": 2,
            "name": "Superman",
            "category": "Accion",
        },
    ]
}
const controller = {
    list: (req, res) => 
        {
        res.send(JSON.stringify(filmsExample));            
        }
    }

module.exports = controller;
module.exports = {
    getHouses: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_houses()
            .then( houses => {
                res.status(200).send(houses)
            })
            .catch( err => {
                res.status(500).send(err)
            })
    },

    createHouse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.create_house([req.body.data.state.name, req.body.data.state.address, req.body.data.state.city, req.body.data.state.state, req.body.data.state.zipcode, req.body.data.state.img, req.body.data.mortgage, req.body.data.rent])
            .then( house => {
                res.status(200).send(house)
            })
            .catch( err => {
                res.status(500).send(err)
                console.log(err)
            })
    },

    deleteHouse: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_house([req.body.address])
            .then(
                res.status(200)
            )
            .catch( err => {
                res.status(500).send(err)
            })
    }
}
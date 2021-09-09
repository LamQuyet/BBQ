class FoodController {
    //GET
    getAll(req, res) {
        res.json({ name: "Quyet dai ka" })
    }
}
module.exports = new FoodController
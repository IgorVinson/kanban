const cardCreate = require("./card/cardCreate");
const cardDelete = require("./card/cardDelete");
const cardUpdate = require("./card/cardUpdate");
const cardGetAll = require("./card/cardGetAll");

function routes(app){

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.delete('/cards/:cardId',cardDelete)
app.get('/cards', cardGetAll)
app.post('/cards',cardCreate)
app.patch('/cards/:cardId',cardUpdate);
}

module.exports = routes;
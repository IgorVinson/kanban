const cardCreate = require("./card/cardCreate");
const cardDelete = require("./card/cardDelete");
const cardUpdate = require("./card/cardUpdate");

let cards=[
	{id:'1',name:"card", status:'todo', priority: 2},
	{id:'2',name:"card2", status:'progress',priority: 5},
	{id:'3',name:"card3", status:'progress',priority: 3},
	{id:'4',name:"card4", status:'progress',priority: 3}
]

function routes(app){

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.delete('/cards/:cardId',cardDelete)

app.get('/cards', (req, res) => {
	res.send(cards);
})

app.post('/cards',cardCreate)

app.patch('/cards/:cardId',cardUpdate);
}

module.exports = routes;
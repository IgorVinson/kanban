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

app.delete('/cards/:cardId',(req,res)=>{
	let cardId = req.params.cardId;
	cards = cards.filter(el=>el.id !==cardId);
	res.send(cards);
})

app.get('/cards', (req, res) => {
	res.send(cards);
})

app.post('/cards',(req,res)=> {
	const card = req.body;
	cards.push({id: Math.random().toString(), ...card});
	res.send('Card create');
})

app.patch('/cards/:cardId',(req,res)=> {
	let cardId = req.params.cardId;
	const card = req.body;
	cards = cards.map(el=>el.id=== cardId ? ({id:el.id,...card}) : el);
	cards.push({id: Math.random().toString(), ...card});
	res.send('Card update');
});
}

module.exports = routes;
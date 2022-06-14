function cardDelete(req,res){
	let cardId = req.params.cardId;
	cards = cards.filter(el=>el.id !==cardId);
	res.send(cards);
}

module.exports = cardDelete;
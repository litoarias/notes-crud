module.exports = function(app, db) {

  app.post('/notes', (req, res) => {
  	console.log("1")
  	const note = { text: req.body.body, title: req.body.title };
  	console.log("2")
    db.collection('notes').insert(note, (err, result) => {
  	console.log("3")
      if (err) { 
  	console.log("4")
        res.send({ 'error': 'An error has occurred' }); 
      } else {
  	console.log("5")
      	console.log(result)
        res.send(result.ops[0]);
      }
    });
  });

};

let NoteModel = require('../models/note')

module.exports = function(app) {

  // Save new note
  app.post('/notes', (req, res) => {
    let note = new NoteModel({
      body: req.body.body,
      title: req.body.title
    })
    note.save().then(doc => {
      console.log(doc)
      res.status(200).send(doc);
    }).catch(err => {
      console.error(err)
      res.status(401).send({ 'error': 'An error has occurred' }); 
    })
  });


  // Get note for ID
  // app.get('/notes/:id', (req, res) => {
  //   const id = req.params.id;
  //   const details = { '_id': new ObjectID(id) };
  //   db.collection('notes').findOne(details, (err, item) => {
  //     if (err) {
  //       res.send({'error':'An error has occurred'});
  //     } else {
  //       console.log(item)
  //       res.send(item);
  //     }
  //   });
  // });


  // Delete note with id
  // app.delete('/notes/:id', (req, res) => {
  //   const id = req.params.id;
  //   const details = { '_id': new ObjectID(id) };
  //   db.collection('notes').remove(details, (err, item) => {
  //     if (err) {
  //       res.send({'error':'An error has occurred'});
  //     } else {
  //       res.send('Note ' + id + ' deleted!');
  //     } 
  //   });
  // });

  
};
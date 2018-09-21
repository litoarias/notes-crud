const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const VerifyToken = require('../_helpers/verifyToken');
const NoteModel = require('../models/note.model')

// Save new note
router.post('/new', VerifyToken, (req, res) => {
  let note = new NoteModel({
    body: req.body.body,
    title: req.body.title
  })
  note.save().then(doc => {
    res.status(200).json({
      data: doc
    })
  }).catch(err => {
    res.status(401).json({ 
      error: 'An error has occurred' 
    }); 
  })
});

// Get note for ID
router.get('/:id', VerifyToken, function(req, res) {
  const id = req.params.id;
  if(mongoose.Types.ObjectId.isValid(id)) {
    NoteModel.findById(id, function(err, item) {
      if (err) {
        res.status(500).json({
          error: err
        });
      } else {
        res.status(200).json({
          message: "Congrats!, you can give item",
          item: item
        });
      }
    });
  } else {
    res.status(500).json({
      error: 'Item not found'
    });
  }
});

// Delete note with id
router.delete('/:id', VerifyToken, function(req, res) {
  const id = req.params.id;
  if(mongoose.Types.ObjectId.isValid(id)) {
    NoteModel.deleteOne({_id: id}, function (err) {
      if (err) {
        res.status(500).json({
          error: '' + err
        });
      } else {
        res.status(200).json({
          message: 'Note successfully deleted',
          id: id
        });
      }
    });
  } else {
    res.status(500).json({
      message: 'Id isnt valid'
    });
  }
});

module.exports = router;

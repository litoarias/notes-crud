const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   email: {
     type: String,
     required: true
    },
   password: {
     type: String, 
     required: true
    }
});

// Make instance to PRE check if user already exist
const User = mongoose.model('User', userSchema);

userSchema.pre('save', function (next) {
  var self = this;
  User.find({ email : self.email }, function (err, docs) {
      if (!docs.length) {
          next();
      }else{                
          console.log('user exists: ', self.email);
          var err = new Error("User exists!");
          err.status = 409;
          next(err);
      }
  });
});

module.exports = User;
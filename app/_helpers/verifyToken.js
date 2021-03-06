var jwt = require('jsonwebtoken');
var config = require('../../config'); 

function verifyToken(req, res, next) {
  var token = undefined
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    token = req.headers.authorization.split(' ')[1]
  }
  if (!token) {
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }
  // verifies secret and checks exp
  jwt.verify(token, config.secret, function(err, decoded) {      
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;
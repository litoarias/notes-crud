var jwt = require('jsonwebtoken');
var config = require('../../config'); 

function verifyToken(req, res, next) {
  const authorization = req.get('authorization');
  const token = authorization.split('Bearer ')[1];
  if (!token) 
    return res.status(403).send({ auth: false, message: 'No token provided.' });

  // verifies secret and checks exp
  jwt.verify(token, config.secret, function(err, decoded) {      
    if (err) 
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });

}

module.exports = verifyToken;
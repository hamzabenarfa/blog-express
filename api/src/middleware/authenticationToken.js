const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const authenticateToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const [scheme, token] = authHeader.split(' ');

  if (scheme === 'Bearer' && token) {
    try {
      const { ACCESS_TOKEN_SECRET } = process.env;
      const decoded = await jwt.verify(token, ACCESS_TOKEN_SECRET);
      req.user = decoded.user;
      next();
    } catch (error) {
      switch (error.name) {
        case 'TokenExpiredError':
          return res.status(401).json({ message: 'Token has expired. Please log in again.' });
        case 'JsonWebTokenError':
          return res.status(401).json({ message: 'Token is invalid. Please provide a valid token.' });
        default:
          return res.status(401).json({ message: 'Authentication failed. Please try again.' });
      }
    }
  } else {
    const message = scheme !== 'Bearer' ? 'Authorization header must start with Bearer token' : 'Authorization header is missing token';
    return res.status(401).json({ message });
  }
});

module.exports = authenticateToken;

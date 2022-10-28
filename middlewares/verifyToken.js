const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;
    jwt.verify(token, JWT_SECRET, function(err, decoded) {
        if (err) {
            return res.status(403).json({ message: err.message });
        }

<<<<<<< HEAD
        console.log(token)

=======
>>>>>>> 79f4351b8f3a735e069d0a080ac4520723ffa3f7
        req.user = decoded;
        return next();
    });
}
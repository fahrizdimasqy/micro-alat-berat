// const { bcrypt } = require('bcrypt');
const bcrypt = require('bcrypt');
const { User } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();


module.exports = async (req, res) => {
    const schema = {
        email: 'email|empty:false',
        password: 'string|min:6'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const user = await User.findOne({
        where: { email: req.body.email }
    });

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'email not found '
        });
    }

    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword) {
        return res.status(404).json({
            status: 'error',
            message: 'password not found'
        });
    }

    return res.json({
        status: 'success',
        data: {
            id: user.id,
            name: user.name,
            gender: user.gender,
            no_tlp: user.no_tlp,
            email: user.email,
            password: user.password,
            role: user.role
        }
    })

}
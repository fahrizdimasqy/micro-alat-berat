// const { bcrypt } = require('bcrypt');
const bcrypt = require('bcrypt');
const { User } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();


module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false',
        email: 'string|empty:false',
        password: 'string|min:6',
        no_tlp: 'string|optional'
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

    if (user) {
        return res.status(409).json({
            status: 'error',
            message: 'email already exist'
        });
    }
    const password = await bcrypt.hash(req.body.password, 10);

    // untuk insert ke db
    const data = {
        password,
        name: req.body.name,
        email: req.body.email,
        no_tlp: req.body.no_tlp,
        gender: req.body.gender,
        role: 'customer'
    };

    const createUser = await User.create(data);
    return res.json({
        status: 'success',
        data: {
            id: createUser.id
        }
    })

}
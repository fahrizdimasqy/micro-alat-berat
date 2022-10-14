const { User } = require('../../../models');

module.exports = async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id, {
        attributes: ['id', 'name', 'email', 'gender', 'role', 'no_tlp']
    })

    if (!user) {
        return req.status(404).json({
            status: 'error',
            message: 'user not found'
        })
    }
    return res.json({
        status: 'success',
        data: user
    })
}
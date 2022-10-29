const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_ALAT
} = process.env;

const api = apiAdapter(URL_SERVICE_ALAT);

module.exports = async (req, res) => {
    console.log(req.params.id)
    try {

        const role = req.user.data.role
        if (role == "admin") {
            const id = req.params.id
            const type = await api.delete(`/type/id/${id}`);
            return res.json(type.data);
        } else {
            return res.status(401).json({
                status: 'Unauthorized',
                message: 'Anda bukan Admin'
            });

        }
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'service unavailable'
            });
        }
        console.log(error)

        const {
            status,
            data
        } = error.response;
        return res.status(status).json(data);
    }
}
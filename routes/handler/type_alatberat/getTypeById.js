const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_ALAT
} = process.env;

const api = apiAdapter(URL_SERVICE_ALAT);

module.exports = async (req, res) => {
    console.log(req.params.id)
    try {
        const id = req.params.id
        const type = await api.get(`/type/id/${id}`);
        return res.json(type.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        console.log(error)

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}
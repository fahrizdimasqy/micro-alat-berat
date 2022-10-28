const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_ALAT
} = process.env;

const api = apiAdapter(URL_SERVICE_ALAT);

module.exports = async (req, res) => {
    try {
        const id = req.params.id
        const type = await api.put(`/type/id/${id}`, req.body);
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
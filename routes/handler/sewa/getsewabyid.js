const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_SEWA
} = process.env;

const api = apiAdapter(URL_SERVICE_SEWA);

module.exports = async (req, res) => {
    try {
        const id_sewa = req.params.id_sewa
        const idsewa = await api.get(`/readDataUser/${id_sewa}`);
        return res.json(idsewa.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}
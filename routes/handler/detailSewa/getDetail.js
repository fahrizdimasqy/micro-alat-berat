const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_DETAIL
} = process.env;

const api = apiAdapter(URL_SERVICE_DETAIL);

module.exports = async (req, res) => {
    try {
        const detail = await api.get(`/detailsewa/detail}`);
        return res.json(detail.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}
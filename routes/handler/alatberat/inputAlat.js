const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_ALAT
} = process.env;

const api = apiAdapter(URL_SERVICE_ALAT);

module.exports = async (req, res) => {
    try {
        // const id = req.user.data.id
        const alatberat = await api.post(`/alatberat/`, req.body);
        console.log(req.body)
        return res.json(alatberat.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        res.status(500).json({
            message: "Ada kesalahan",
            error: error,
        });
    }
}
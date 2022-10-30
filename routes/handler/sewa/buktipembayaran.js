const apiAdapter = require('../../apiAdapter');

const {
    URL_SERVICE_SEWA
} = process.env;

const api = apiAdapter(URL_SERVICE_SEWA);

module.exports = async (req, res) => {
    try {
        const role = req.user.data.role
        console.log(role)
        if(role == "customer"){
        
        let buktipembayaran;
        let bukti_pembayaran;
        let id_sewa = req.body.id_sewa;

        bukti_pembayaran = req.file.filename;
        buktipembayaran = req.protocol + "://" + req.get("host") + "/transaksi/" + bukti_pembayaran;

        let send = {
            id_sewa: id_sewa,
            bukti_pembayaran: bukti_pembayaran,
            buktipembayaran: buktipembayaran
        }

        console.log(send);
        const pembayaran = await api.put(`/buktipembayaran`, send);

        return res.json(pembayaran.data);
    }
    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'service unavailable'
            });
        }

        const {
            status,
            data
        } = error.response;
        return res.status(status).json(data);
    }
}
const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_ALAT
} = process.env;

const api = apiAdapter(URL_SERVICE_ALAT);

module.exports = async (req, res) => {
   
    try {
        const role = req.user.data.role
        if (role == "admin") {
        
        const id = req.params.id;
        const {
            kode_type,
            merk,
            status,
            harga,
            denda,
            operator,
            bbm,
            ket
        } = await req.body;
        const foto_alat = await req.file;
        const gambar = foto_alat.filename
        const filenameUrl = gambar.replaceAll(" ", "%20")
        const url = await req.protocol + "://" + req.get('host') + "/alat-berat/img/" + filenameUrl;
        
        const send = {kode_type,
            merk,
            status,
            harga,
            denda,
            operator,
            bbm,
            gambar,
            ket,
            url_gambar:url
        }
        const alatberat = await api.put(`/alatberat/id/${id}`, send);
        return res.json(alatberat.data);}else {
            return res.status(401).json({
                status: 'Unauthorized',
                message: 'Anda bukan Admin'
            });

        }
    } catch (error) {

        console.log(req.body)

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }

        const { data } = error.response;
        return res.status(500).json(data);
    }
}
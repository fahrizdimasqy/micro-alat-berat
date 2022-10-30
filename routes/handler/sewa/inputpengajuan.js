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

        const pengajuan = await api.post('/api/createPengajuan', req.body);
        return res.json(pengajuan.data);
        }
        else{
            return res.status(401).json({ status: 'Unauthorized', message: 'Anda bukan Customer' });

        }
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ 
                status: 'error', 
                message: 'service unavailable' });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}



// const apiAdapter = require('../../apiAdapter');
// const {
//     URL_SERVICE_SEWA
// } = process.env;

// const api = apiAdapter(URL_SERVICE_SEWA);

// module.exports = async (req, res) => {
//     try {
//         const pengajuan = await api.post(`/api/createPengajuan`, req.body);
//         console.log(req.body)
//         return res.json(pengajuan.data);
//     } catch (error) {

//         if (error.code === 'ECONNREFUSED') {
//             return res.status(500).json({ status: 'error', message: 'service unavailable' });
//         }

//         const { status, data } = error.response;
//         return res.status(status).json(data);
//     }
// }
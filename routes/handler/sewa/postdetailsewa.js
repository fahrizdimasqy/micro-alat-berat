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

        const customer = await api.post('/detailsewa', req.body);
        return res.json(customer.data);
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
//         const detailsewa = await api.post(`/detailsewa`, req.body);
//         console.log(req.body)
//         return res.json(detailsewa.data);
//     } catch (error) {

//         if (error.code === 'ECONNREFUSED') {
//             return res.status(500).json({ 
//                 status: 'error', 
//                 message: 'service unavailable' });
//         }

//         const { status, data } = error.response;
//         return res.status(status).json(data);
//     }
// }
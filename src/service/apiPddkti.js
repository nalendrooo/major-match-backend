//CARI UNIVERSITAS DAN PRODI
// https://api-frontend.kemdikbud.go.id/hit/ump

// CARI DETAIL by ID_SP
// https://api-frontend.kemdikbud.go.id/v2/detail_pt/Q0U4QzYyMDEtRDEzMi00NkQyLTg1QzgtMjM1MTI2NEVFRDMz
// https://api-frontend.kemdikbud.go.id/v2/detail_pt_jumlah/MzZBQjRBN0EtMEY3OS00RjZDLTkwNkMtQzMwQTU2MEZCNDQ4

// LIHAT SEMUA PRODI DI UNIVERSITAS by ID_SP
// https://api-frontend.kemdikbud.go.id/v2/detail_pt_prodi/MzZBQjRBN0EtMEY3OS00RjZDLTkwNkMtQzMwQTU2MEZCNDQ4

// LIHAT DETAIL PRODI berdasarkan ID_SMS
// https://api-frontend.kemdikbud.go.id/detail_prodi/QUY2N0E1MzAtOUU2QS00MzhCLTg3NzEtMUJDOTYyM0IxNTZF

const axios = require('axios')

const URL_BACKEND = 'https://api-frontend.kemdikbud.go.id/'

const GET = (path, data) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${URL_BACKEND}${path}`, data)
			.then((result) => resolve(result.data))
			.catch((err) => reject(err))
	})
}

const SEARCHUniversity = (data) => GET(`hit/${data}`)
const SEARCHProdi = (data) => GET(`hit/${data}`)
const GETDetailUniversity = (data) => GET(`v2/detail_pt/${data}`)
const GETDataUniversity = (data) => GET(`v2/detail_pt_jumlah/${data}`)
const GETProdiAtUniversity = (data) => GET(`v2/detail_pt_prodi/${data}`)
const GETDetailProdiByIdSms = (data) => GET(`detail_prodi/${data}`)

module.exports = {
	SEARCHUniversity,
	SEARCHProdi,
	GETDetailUniversity,
	GETDataUniversity,
	GETProdiAtUniversity,
	GETDetailProdiByIdSms,
}

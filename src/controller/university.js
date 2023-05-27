const {
	SEARCHUniversity,
	SEARCHProdi,
	GETDataUniversity,
	GETDetailUniversity,
	GETProdiAtUniversity,
	GETDetailProdiByIdSms,
} = require('../service/apiPddkti')

const searchUniversity = async (req, res) => {
	const query = req.query.univ
	try {
		const response = await SEARCHUniversity(query)

		const result = response.pt.map((index) => {
			const data = index.text.split(', ')

			const university = data[0].split(': ')
			const npsn = data[1].split(':       ')
			const singkatan = data[2].split(': ')
			const alamat = data[3].split(': ')
			const id = index['website-link'].substring(index['website-link'].lastIndexOf('/') + 1)

			return {
				id_sp: id,
				university: university[1],
				npsn: npsn[1],
				singkatan: singkatan[1],
				alamat: alamat[1],
			}
		})

		res.json(result)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Internal Server Error' })
	}
}

const searchProdi = async (req, res) => {
	const query = req.query.prodi
	try {
		const response = await SEARCHProdi(query)
		const result = response.prodi.map((index) => {
			const data = index.text.split(', ')

			const prodi = data[0].split(': ')
			const jenjang = data[1].split(': ')
			const universitas = data[2].split(': ')
			const id = index['website-link'].substring(index['website-link'].lastIndexOf('/') + 1)
			return {
				id_sms: id,
				prodi: prodi[1],
				jenjang: jenjang[1],
				universitas: universitas[1],
			}
		})

		res.json(result)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Internal Server Error' })
	}
}
const universityDetail = async (req, res) => {
	const query = req.params.id_sp
	try {
		// const response = await GETDataUniversity(query)
		const response2 = await GETDetailUniversity(query)
		const result = {
			npsn: response2.npsn,
			status: response2.stat_sp,
		}

		res.json(result)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Internal Server Error' })
	}
}

const prodiAtUniversity = async (req, res) => {
	const response = await GETProdiAtUniversity()
	const response2 = await GETDetailProdiByIdSms(query)
	const result = {
		npsn: response2.npsn,
		status: response2.stat_sp,
	}
	return result
}
const prodiDetail = async () => {}

module.exports = { searchUniversity, searchProdi, universityDetail }

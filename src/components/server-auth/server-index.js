import crypto from 'crypto'

export default async function(req, res) {
	req.session.nonce = crypto.randomInt(111111, 999999)
	
	res.end(`Hey! Sign this message to prove you have access to this wallet. This won't cost you anything.\n\nSecurity code (you can ignore this): ${req.session.nonce}`)
}
import axios from 'axios'
import { ethers } from 'ethers'

// On production, you should use something like web3Modal
// to support additional wallet providers, like WalletConnect
const web3 = new ethers.providers.Web3Provider(window.ethereum)

const message = await axios.get('/api/auth/nonce').then(res => res.data)

await axios.post('/api/auth/login', {
	address: await web3.getSigner().getAddress(),
	signature: await web3.getSigner().signMessage(message),
})
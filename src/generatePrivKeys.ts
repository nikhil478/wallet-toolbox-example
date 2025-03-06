import { Setup } from '@bsv/wallet-toolbox'

console.log("priv keys : 1", Setup.getKeyPair().privateKey.toHex())
console.log("public keys : 1", Setup.getKeyPair().publicKey.toString())
console.log("address: 1", Setup.getKeyPair().address)

console.log("priv keys : 2", Setup.getKeyPair().privateKey.toHex())
console.log("public keys : 2", Setup.getKeyPair().publicKey.toString())
console.log("address: 2", Setup.getKeyPair().address)
import * as settings from 'settings'
import {WalletManager} from 'smartwallet-contracts'
import HTTPAgent from 'lib/agents/http'

// only for testing testSeed has some ether on ropsten testnet
const TEST_SEED = 'mandate print cereal style toilet hole' +
  ' cave mom heavy fork network indoor'

export default class WalletAgent {
  constructor() {
    this._manager = new WalletManager(settings.blockchain)
    this._httpAgent = new HTTPAgent({proxy: false})
  }

  generateSeedPhrase(entropy) {
    let seed = this._manager.generateSeedPhrase(entropy)
    // @TODO remove this
    seed = TEST_SEED
    return seed
  }

  retrieveEtherPrice() { // returns {ethForEur: <number>}
    return this._httpAgent.get(
      settings.blockchain.jolocomEtherAddress +
      '/ether/exchange-rate/ether'
    )
  }

  buyEther({stripeToken, walletAddress}) {
    console.log('in WALLET agent buyEther', {stripeToken, walletAddress})
    return this._httpAgent.post(
      'https://verification.jolocom.com/ether/buy/ether',
      {stripeToken, walletAddress}
    )
  }

  retrieveSeedPhrase({email, password}) {
    return this._manager.retrieveSeedPhrase({email, password})
  }

  registerWithSeedPhrase({userName, seedPhrase, pin}) {
    return this._manager.registerWithSeedPhrase({
      userName, seedPhrase, pin
    })
  }

  registerWithCredentials({userName, email, password, pin}) {
    return this._manager.registerWithCredentials({
      userName, email, password, pin
    })
  }

  loginWithSeedPhrase({seedPhrase, pin}) {
    return this._manager.loginWithSeedPhrase({seedPhrase, pin})
  }

  loginWithCredentials({email, password, pin}) {
    return this._manager.loginWithCredentials({email, password, pin})
  }
}
// TODO: DELETE THIS CLASS WHEN EDIT-CONTACT-UTIL and
// Login-webId exchange is updated
export class Wallet {
  constructor() {
    this.webId = localStorage.getItem('jolocom.webId')
    this.lightWallet = 'something'
  }

  updatePhone(phone) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }

  setPhone(phone) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }

  startConfirmEmail({email}) {
    return this._verification.startVerifyingEmail({webID: this.webID, email})
  }

  finishConfirmEmail({email, code}) {
    return this._verification.verifyEmail({webID: this.webID, email, code})
  }
}

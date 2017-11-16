// import AccountsAgent from 'lib/agents/accounts'
// import SolidAgent from 'lib/agents/solid-wallet'
// import WebIDAgent from 'lib/agents/webid'
import VerificationAgent from 'lib/agents/verification'
import GatewayAgent from 'lib/agents/gateway'
import * as settings from 'settings'

export default class Backend {
  constructor(gatewayUrl) {
    if (gatewayUrl === undefined) {
      this._gatewayUrl = settings.gateway
    } else {
      this._gatewayUrl = gatewayUrl
    }
  }

  /*
  get webId() {
    return new WebIDAgent()
  }

  get accounts() {
    return new AccountsAgent()
  }

  get solid() {
    return new SolidAgent()
  }

  */
  set gateway(gatewayUrl) {
    this._gatewayUrl = gatewayUrl
  }

  get gateway() {
    return new GatewayAgent(this._gatewayUrl)
  }


  get verification() {
    return new VerificationAgent()
  }
}

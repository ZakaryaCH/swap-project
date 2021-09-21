import { FortmaticConnector as FortmaticConnectorCore } from "@web3-react/fortmatic-connector";
import Fortmatic from "fortmatic";

export const OVERLAY_READY = "OVERLAY_READY";

export class FortmaticConnector extends FortmaticConnectorCore {
  async activate() {
    const { apiKey, chainId } = this as any;
    console.log(chainId);
    const BSCOptions = {
      rpcUrl: process.env.REACT_APP_NETWORK_URL || "",
      chainId: 56, // Smart Chain mainnet chain id
    };

    this.fortmatic = new Fortmatic(apiKey, BSCOptions);

    const provider = this.fortmatic.getProvider();

    const pollForOverlayReady = new Promise((resolve) => {
      const interval = setInterval(() => {
        if (provider.overlayReady) {
          clearInterval(interval);
          this.emit(OVERLAY_READY);
          resolve();
        }
      }, 200);
    });

    const [account] = await Promise.all([
      provider.enable().then((accounts: string[]) => accounts[0]),
      pollForOverlayReady,
    ]);

    return {
      provider: this.fortmatic.getProvider(),
      chainId: (this as any).chainId,
      account,
    };
  }
}

import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import  Web3 from "web3";
import { Contract } from 'web3-eth-contract';

const contractAbi = require('./contractABI.json');
declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private web3: Web3;
  private contract: Contract;
  private contractAddress = '0x48bE6ffCb89AE9866dA6DA5A38634112Df3Ed667';

  constructor(private zone: NgZone) {

    if (window.ethereum) {
      this.web3 = new Web3(window.ethereum);

      try {
        // Request account access if needed
        window.ethereum.enable().then(() => {
        })
      }
      catch(err) {
        console.log(err);
      }
    }
    // Legacy dapp browsers, checking if Web3 has been injected by the browser (Mist/MetaMask)
    else if (typeof this.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log('No web3? You should consider trying MetaMask!')
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      this.web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/98973459418248098ce499a5007c6746"));
    }

    console.log('web3: ', this.web3);

      this.contract = new this.web3.eth.Contract(
        contractAbi,
        this.contractAddress
      );

      window.ethereum.enable().catch((err) => {
        console.log(err);
      });
    }

  getAccount(): Promise<string> {
    return this.web3.eth.getAccounts().then((accounts) => accounts[0] || '');
  }

  async executeTransaction(fnName: string, ...args: any[]): Promise<void> {
    const acc = await this.getAccount();
    this.contract.methods[fnName](...args).send({ from: acc });
  }

  async call(fnName: string, ...args: any[]) {
    const acc = await this.getAccount();
    return this.contract.methods[fnName](...args).call({ from: acc });
  }

  onEvents(event: string) {
    return new Observable((observer) => {
      this.contract.events[event]().on('data', (data) => {
        // THIS MUST RUN INSIDE ANGULAR ZONE AS IT'S LISTENING FOR 'ON'
        this.zone.run(() => {
          observer.next({
            event: data.event,
            payload: data.returnValues,
          });
        });
      });
    });
  }

}

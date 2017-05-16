import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-rest';
import {shareService} from '../../providers/shareService';

@Component({
    selector: 'page-broker-detail',
    templateUrl: 'my-account.html',
    providers:[BrokerService, shareService]
})
export class MyAccountPage {
    
    broker: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public service: BrokerService, private shareService: shareService) {
        this.broker = this.navParams.data;
        
        console.log(this.shareService.getData());

        service.findById(this.shareService.getData()).then(
            broker => this.broker = broker
        );

    }

}

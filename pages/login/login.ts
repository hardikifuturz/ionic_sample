import {Component} from '@angular/core';
import {MenuController, NavController, NavParams, ToastController} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-rest';
import {WelcomePage} from '../welcome/welcome';
import {shareService} from '../../providers/shareService';

@Component({
    selector: 'page-broker-detail',
    templateUrl: 'login.html',
    providers:[BrokerService, shareService]
})
export class LoginPage {

    LoginDetails = {email:'', password:''};
    broker: any;

    constructor(public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams, public service: BrokerService, public toastCtrl: ToastController, private shareService: shareService) {
        this.broker = this.navParams.data;
        this.service.loginUserId = 2;
        service.findById(1).then(
            broker => this.broker = broker
        );
    }

    loginSubmit() {
        var me = this;
        this.service.login(this.LoginDetails.email,this.LoginDetails.password)
            .then(function(response) {
                var data = response.json();

                if(data.status) {
                    //me.service.loginUserId = data.data.userId;
                    me.shareService.setData();
                    me.enableAuthenticatedMenu();
                    me.navCtrl.setRoot(WelcomePage);
                
                    let toast = me.toastCtrl.create({
                        message: 'You have successfully logged in.',
                        cssClass: 'mytoast',
                        duration: 2000
                    });
                    toast.present(toast);
                } else {
                    let toast = me.toastCtrl.create({
                        message: 'Sorry! You have entered an invalid username or password.',
                        cssClass: 'mytoast',
                        duration: 2000
                    });
                    toast.present(toast);
                }
            });

            setInterval(() => {
                console.log('##'+this.shareService.loginUserId);
            }, 2000);
    }

    enableAuthenticatedMenu() {
      this.menuCtrl.enable(true, 'authenticated');
      this.menuCtrl.enable(false, 'unauthenticated');
    }
}

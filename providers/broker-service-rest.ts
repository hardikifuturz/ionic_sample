import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {SERVER_URL} from './config';
import {Http, Headers, RequestOptions} from '@angular/http';

let brokersURL = SERVER_URL + '/localapi';

@Injectable()
export class BrokerService {
    
    public loginUserId:any;

    constructor(public http: Http) {
        this.http = http;
    }

    setData() {
        this.loginUserId = 1; 
    }

    getData() {
        return this.loginUserId;
    }

    findAll() {
        return this.http.get(brokersURL + 'all')
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(brokersURL + "/ionic/dreamhouse-mobile-ionic/api/getprofile.php?id=" + id)
            .map(res => res.json())
            .toPromise();
    }

    login(email, password) {

        let body = JSON.stringify({email: email,password: password}),
            headers = new Headers({'Content-Type': 'application/json'}),
            options = new RequestOptions({headers: headers});
        return this.http.post(brokersURL + "/ionic/dreamhouse-mobile-ionic/api/login.php",body,options).toPromise();
    }

}

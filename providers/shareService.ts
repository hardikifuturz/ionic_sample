import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable()
export class shareService {  
 
    loginUserId: any;

    constructor() {
        //this.loginUserId = 'Blank';
    }
 
    setData() {
        this.loginUserId = 1;
    }

    getData() {
        return this.loginUserId; 
    }
}
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    constructor(private http: Http){
        console.log('PostsService Initialized...');
    }

    getIncomeProtection(){
        return this.http.get('https://api-dot-mlcinsurance-hackathon.appspot.com/_ah/api/yaama/v1/certificate')
            .map(res => res.json().items);
    }
}
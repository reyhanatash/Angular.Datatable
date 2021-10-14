import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class BaseService {

    url = environment.url;
    constructor(private http: HttpClient) {
    }

    GetData() {
        const uri = this.url + 'api/users?page=2';
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.http.get<any>(uri, httpOptions).pipe(map(result => {
            return result;
          }));      
    }

}
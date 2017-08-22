import { Injectable } from '@angular/core';
import { Colonist } from '../models/colonist';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ColonistService {
    colonistsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

    constructor(private http: Http){}

    getColonists(): Promise<Colonist[]> {
       return this.http.get(this.colonistsUrl)
                  .toPromise()
                  .then((response) => response.json().colonist)
                  .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
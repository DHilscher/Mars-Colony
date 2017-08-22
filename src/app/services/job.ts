import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobService {
    jobsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';

    constructor(private http: Http){}

    getAliens(): Promise<Job[]> {
       return this.http.get(this.jobsUrl)
                  .toPromise()
                  .then((response) => response.json().jobs)
                  .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
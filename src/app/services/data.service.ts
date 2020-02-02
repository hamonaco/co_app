import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HomeOption} from '../models/homeOption';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private httpClient: HttpClient) {
    }

    getHomeOptions() {
    return this.httpClient.get<HomeOption[]>('../assets/data/homeOptions.json');

    }
}

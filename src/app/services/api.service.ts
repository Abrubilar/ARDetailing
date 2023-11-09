import { HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "https://webpay3gint.transbank.cl"

  constructor(public http: HttpClient) { }

  urlApi = ""

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  // url for the data
  private apiUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  constructor(private http: HttpClient) { }

  // This method makes a request to the server and returns 
  // an observable
  getQuotes(): Observable<Quote[]> {
    // get this data for me from the url
    return this.http.get<Quote[]>(this.apiUrl);
  }

}

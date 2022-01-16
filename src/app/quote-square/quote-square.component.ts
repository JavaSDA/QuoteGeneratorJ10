import { Component, OnInit } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-quote-square',
  templateUrl: './quote-square.component.html',
  styleUrls: ['./quote-square.component.css']
})
export class QuoteSquareComponent implements OnInit {

  // Variables to hold the quote, facebook and twitter icons.
  faQuoteLeft = faQuoteLeft;
  faTwitter = faTwitter;
  faFacebook = faFacebook;

  // quote field to hold the quote
  quote = {
    quote: '',
    author: ''
  };

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void { // lifecycle method
    // ngOnInit runs immediately the component is loaded.
    this.quoteService.getQuotes().subscribe((data: any) => {
      console.log(data)
      this.quote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
    })
  }

  nextQuote(): void {

  }

}

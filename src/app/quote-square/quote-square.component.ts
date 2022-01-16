import { Component, OnInit, Renderer2 } from '@angular/core';
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

  colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  constructor(private quoteService: QuoteService, private renderer: Renderer2) { }

  ngOnInit(): void { // lifecycle method
    // ngOnInit runs immediately the component is loaded.
    this.quoteService.getQuotes().subscribe((data: any) => {
      this.quote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
    });

    // update the background color when the page is loaded
    this.renderer.setStyle(document.body, 'background', this.colors[Math.floor(Math.random() * this.colors.length)]);
  }

  nextQuote(): void {
    this.quoteService.getQuotes().subscribe((data: any) => {
      console.log(data)
      this.quote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
    });

    // update the background color when a new quote is displayed
    this.renderer.setStyle(document.body, 'background', this.colors[Math.floor(Math.random() * this.colors.length)]);
  }

}

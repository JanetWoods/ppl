import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number=0;
  protected rate: number = 0;

  cropWidth: number = 75;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void{
    this.cropWidth = this.rating * 75/5;
  }
  onClick(): void{
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);

    console.log(`this rate: ${this.rate}, this rating: ${this.rating}`)

  }
}

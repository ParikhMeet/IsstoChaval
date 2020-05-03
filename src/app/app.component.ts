import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  kaudis: number;
  clickTime: Date;
  private NORMAL_NUMBERS = [1, 2, 3];
  private FOUR_NUMBERS = 4;
  private EIGHT_NUMBERS = 8;
  private colours = ['AntiqueWhite', 'White', 'AliceBlue', 'Aqua', 'Azure', 'Ivory', 'HoneyDew', 'Lavender', 'LavenderBlush', 'Khaki',
    'LemonChiffon', 'LightGreen', 'LightSalmon', 'LightSkyBlue', 'LightSeaGreen'
  ];
  bgColour: string;

  ngOnInit(): void {
    this.nextKaudis();
  }

  nextKaudis() {
    const probability = Math.random();
    if (probability > 0.92) {
      this.kaudis = this.EIGHT_NUMBERS;
    } else if (probability > 0.75) {
      this.kaudis = this.FOUR_NUMBERS;
    } else {
      this.kaudis = _.sample(this.NORMAL_NUMBERS);
    }
    this.clickTime = new Date();
    this.bgColour = _.sample(this.colours);
  }
}

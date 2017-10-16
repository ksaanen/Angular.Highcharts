import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = true;
  title = 'app loaded!';
  labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];

  // shared configuration options.
  global_configuration = {
    colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce', '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
    plotOptions: {
      series: {
        lineWidth: 3,
        marker: {
          enabled: false
        }
      }
    },
    credits: {
      enabled: false
    }
  };

  randomNumber = function(){
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    return getRandomInt(0, 120);
  };

  dataSet1 = [
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber()
  ];
  dataSet2 = [
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber()
  ];
  dataSet3 = [
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber()
  ];
  dataSet4 = [
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber()
  ];
  dataSet5 = [
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber()
  ];
  dataSet6 = [
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber(),
    this.randomNumber()
  ];

}

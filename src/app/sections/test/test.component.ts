import { Component, OnInit } from '@angular/core';

export class Car {
  constructor(private _id: string, private _year: number, private _make: string, private _model: string, private _article: string) { }
  public get id(): string { return this._id; }
  public get year(): number { return this._year; }
  public get make(): string { return this._make; }
  public get model(): string { return this._model; }
  public get article(): string { return this._article; }
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  _cars = [
    new Car('car1', 2002, 'bmw', 'm3', 'https://en.wikipedia.org/wiki/BMW_M3'),
    new Car('car2', 2017, 'acura', 'nsx', 'https://en.wikipedia.org/wiki/Honda_NSX'),
    new Car('car3', 2016, 'chevy', 'camaro', 'https://en.wikipedia.org/wiki/Chevrolet_Camaro')
  ];

  _arr = [1,2,3,4,2,1,2,3,5,3];

  constructor() { }

  ngOnInit() {
  
    let newArr = [...this._arr,7,7];
    let newSet = new Set(newArr);
    console.log(newArr);
    console.log(newSet);
  }

  showCar(event) {
    const desc = event.target.parentElement.dataset.desc;
    // if (window.confirm('If you click "ok" you would be redirected to an article about the ' + desc + '. Cancel will load this website ')) { 
    //   window.location.href = event.target.parentElement.dataset.article; 
    // };

  }

}

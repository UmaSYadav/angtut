import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() NValue:any;
  @Input() NUsers:any;
  @Input() NUser:any;
  @Output() formParent:EventEmitter<any>= new EventEmitter();

  ngOnInit(): void {
    //this.formParent.emit({name: "Uma", age: "32.3"})
  }

  syncData() {
    let data= {name: "Uma", age: "32.3"}
    this.formParent.emit(data);
  }
}

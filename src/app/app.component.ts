import { Component } from '@angular/core';
import { UserdataService } from './userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular tutorials';
  user= "Uma Shankar Yadav";
  getChannel() {
    return "BKC"
  }
  getUser() {
    return this.user;
  }
  vartest= {
    name: "Uma", age: "32"
  }
  a=500
  b=500
  cuurentUrl= window.location.href;
  getOtaname() {
    alert("Channel manager")
  }
  getOtaname2(name:any) {
    alert(name)
  }
  inpName= '';
  getValue(val:any) {
    this.inpName=val;
    console.warn(val);
  }
  number1= 0;
  number2= 0;
  sum= 0;
  addition(num1:any, num2:any) {
    this.sum= parseFloat(num1) + parseFloat(num2);
  }
  EventHandling(value:any) {
    console.warn(value);
  }
  success= "success";
  failure= "failure";
  underline= "underline";
  bold= "bold";
  hasError= true;
  multiClass= ['success', 'failure', 'bold', "underline"];
  conditionMultiClass= {
    "success": !this.hasError,
    "failure": this.hasError
  }
  textcolor= "green";
  multiSelection= {
    color: 'red', textDecoration: 'underline', fontWeight: 'bold'
  }
  isError= true;
  txt= "";
  HideShow:boolean= false;
  age= 18;
  color= "yellow";
  names= ["Uma", "Shankar", "Yadav", "Advait"]
  users= [{name: "uma", age: 32}, {name:"Sapna", age: 30}, {name: "Advait", age: 1}]
  parentCompValue= "this is parent data";
  singleuser= {name: "uma s", age: 32.2};
  syncUsername="";
  syncUserage="";
  formParent(data:any) {
    this.syncUsername= data.name;
    this.syncUserage= data.age;
    console.log(data);
  }
  num= 23.56789;
  item= ["mobile", "laptop", "tab"];
  value=5;
  allServiceData:any= [];
  constructor(private api:UserdataService) {
    this.allServiceData= this.api.getAllData();
  }
}

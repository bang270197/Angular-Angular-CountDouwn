import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countdounw';
  isDis = false;
  toggleTime() {
    this.isDis = !this.isDis;
  }
  showMessage(){
    window.alert("ket thuc CountDounw");
  }

}

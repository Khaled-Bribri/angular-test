import { Component, OnInit, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  constructor() {

  }

  ngOnInit(): void {

  }

  sayHello(): void {
    alert("Bonjour !");
  }

  toggleHidden(): any {
    const testButton = document.getElementById('testButton') as HTMLInputElement;
    testButton.hidden = !testButton.hidden;
  }
}

import { Component } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { StudentComponent } from "./components/student/student";

@Component({
  selector: 'app-root',
  imports: [Navbar, StudentComponent, Footer],
  templateUrl: './app.html',
  // template:`<h1>Hello from controller</h1>`,
  // styles:[`h1{color: red;}`]
  styleUrl: './app.css'
})
export class App {
}

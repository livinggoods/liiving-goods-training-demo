import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  backend_res = [];

  constructor(private _http: HttpClient) {

  }

  getIndex() {
    this._http.get('http://localhost:5000/')
    .subscribe((v: { msg: string; time: string; }) => {
      this.backend_res.push(v);
    });
  }
}

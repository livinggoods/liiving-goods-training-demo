import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

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
    this._http.get(`${environment.host}/`)
    .subscribe((v: { msg: string; time: string; }) => {
      this.backend_res.push(v);
    });
  }
}

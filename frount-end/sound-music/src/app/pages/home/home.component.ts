import { Component, Input } from '@angular/core';
import { Index, IndexService } from '../index/services/index.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private indexServ:IndexService){}
  data: Index | undefined;
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.indexServ.fetchDataTable().subscribe(
      (res) => {
        this.data! = res;
      },
      (err) => {
        console.log("error");
        console.log(err);
      }
    );
  }
}

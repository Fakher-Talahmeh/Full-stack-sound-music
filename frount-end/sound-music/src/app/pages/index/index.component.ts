import { Component } from '@angular/core';
import { Index, IndexService } from './services/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  constructor(private indexServ: IndexService) {}
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

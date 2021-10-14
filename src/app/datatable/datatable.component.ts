import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  items: any = [];
  // hasData: boolean = false;

  userModel = {
    id: 0,
    firstName: '', 
    lastName: '',
    email: ''
  }
  constructor(
    private base: BaseService
  ) { }

  ngOnInit(): void {
    this.getData();
  }


  async getData() {
    this.items = await this.base.GetData().toPromise();
    this.items = this.items['data'];
  }

  showDetail(item: any) {
    this.userModel.id = item['id'];
    this.userModel.firstName = item['first_name'];
    this.userModel.lastName = item['last_name'];
    this.userModel.email = item['email'];

  }
}

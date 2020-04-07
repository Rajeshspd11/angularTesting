import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../service/api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  dataArray: any[] =[];

  values: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getData().subscribe((data) => {
      this.dataArray.push(data);
      this.values=data[0].name;
    })

    this.apiService.getData().subscribe((data:[]) =>{
      data.forEach(element => {
        this.dataArray.push(element)
      });
    })
}

}

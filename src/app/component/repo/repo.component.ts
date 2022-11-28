import { Component, OnInit } from '@angular/core';
import { GitwebService } from 'src/app/service/gitweb.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  mapArray: any[] = [];
  totalrecords!: any;
  page: number = 1;

  constructor(private _gitservices: GitwebService) { }

  ngOnInit(): void {
    this._gitservices.getrepositories().then((data) => {
      console.log("<<<<<<<<<<<<<<<<<", data)
      for (let i = 0; i < data.length; i++) {
        this.mapArray.push({
          name: data[i].name,
          visibility: data[i].visibility,
          description: data[i].description,
          language:data[i].language,
        }); console.log("array", this.mapArray)
        this.page = 0;
      }

      this.totalrecords = data.length;
    });
  }
  gty(page: any) {
    console.log(page, '<<');
  }
}

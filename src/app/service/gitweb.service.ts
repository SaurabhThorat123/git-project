import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'

})
export class GitwebService {

  constructor(private http: HttpClient) { }
  getrepositories(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get('https://api.github.com/users/SaurabhThorat123/repos')
        .pipe(map((Response) => Response))
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
}

  
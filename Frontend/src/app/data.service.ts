import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usersclass } from './users';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    get(getId: any) {
        throw new Error('Method not implemented.');
    }
    update(getId: any, value: any) {
        throw new Error('Method not implemented.');
    }

  url = "http://localhost:3000";


  constructor(private http: HttpClient) { }
   show_info()
   {
      return this.http.get(`${this.url}`);
   }

  adduser( add: Usersclass): Observable<any> {
    return this.http.post<Usersclass>(this.url,add);
  }

  deleteUser( id: any ): Observable<any> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
  
  editUser( id: any, data: any ): Observable<any> {
    return this.http.put(`${this.url}/update/${id}`,data);
  }


  findByfname( fname: String ): Observable<any[]> {
    return this.http.get<any>(`${this.url}?fname=${fname}`);
  }


  
}
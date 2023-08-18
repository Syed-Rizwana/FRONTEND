import { Injectable } from '@angular/core';
import {
  Crud,
  InsertedSuccess,
  Read,
  Share1,
  UniqueConstraintError,
} from './share1';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Share1Service {
  
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:3000/';
  Insert(
    Details: Share1
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'share/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Delete(catg: String): Observable<InsertedSuccess> {
    console.log(`${this.url}share/Delete${catg}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}share/Delete${catg}`
    );
  }
  // Read(catg:String): Observable<Read> {
  //     console.log(`${this.url}DA/Read${catg}`);
  //   return this.http.get<Read>(
  //     `${this.url}DA/Read${catg}`
  //   );
  // }
  Read(catg: String): Observable<InsertedSuccess> {
    console.log(`${this.url}share/Read${catg}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}share/Read${catg}`
    );
  }
  update(catg: String,Details:Share1){
    return this.http.put(`${this.url}share/Update${catg}`,Details,{headers:this.headers}
    );
  }
 


  FoodHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '9d95c08d75mshae57f7f480c131ap1443f3jsn5525ed1bd303',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
  });


  
  
  Insert1(
    Details: Crud
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'feedback/Insert',
      Details,
      { headers: this.headers }
    );
  }

  Read1(email: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Students/Read${email}`);
  }
  Delete1(email: String): Observable<InsertedSuccess> {
    console.log(`${this.url}feedback/Delete/${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}feedback/Delete/${email}`
    );
  }
  Update1(email: String, Details: Crud) {
    return this.http.put(`${this.url}feedback/Update/${email}`, Details, {
      headers: this.headers,
    });
  }
}
 




  




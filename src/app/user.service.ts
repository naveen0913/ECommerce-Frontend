import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(id:string):Observable<any>{
    return this.http.get<any>("http://localhost:8080/user/"+id)
  }

  updateUser(id:string,name:string,email:string,password:string):Observable<any>{
    const body={name,email,password}
    return this.http.put<any>(`http://localhost:8080/user/${id}/update`,body)
  }

}

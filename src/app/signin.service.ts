import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private usersignupApi="http://localhost:8080/user/signup";
  private userloginApi="http://localhost:8080/user/login";
  private userlogoutApi="http://localhost:8080/user/logout";


  private loggedInuserKey="user"
  private loggedIn = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<string | null>(null);


  constructor(private http:HttpClient,private router:Router) { 
  
  }

  userSignup(name:string,email:string,password:string):Observable<any>{
    return this.http.post<any>(this.usersignupApi,{name,email,password})
  }

  login(email:string,password:string):Observable<any>{
    return this.http.post<any>(this.userloginApi,{email,password})
  }

  userLogout():Observable<any>{
     localStorage.clear()
     return this.http.post<any>(this.userlogoutApi,{})
  }

  get isUserLoggedIN(){
    return this.loggedIn.asObservable();
  }

  get currentUser() {
    return this.user.asObservable();
  }

  get isLoggedIn():any{
    return !!localStorage.getItem(this.loggedInuserKey)
    
  }

  loggedInUser():string|null{
    const storedUser=localStorage.getItem(this.loggedInuserKey);
    if(storedUser){
      return JSON.parse(storedUser)
    }
    return null
    
}
}



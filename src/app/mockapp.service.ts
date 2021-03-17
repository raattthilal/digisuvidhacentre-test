import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockappService {

  constructor(private http:HttpClient) { }


  getAllUsers(){
    return this.http.get<any>('Profile/api/MockUser')
  }
  getEachUsers(id){
    return this.http.get<any>(`Profile/api/MockUser/${id}`)
  }
  addUsers(body){
    return this.http.post<any>('Profile/api/MockUser',body)
  }
  
  deleteUsers(id){
    return this.http.delete<any>(`Profile/api/MockUser/Delete/${id}`)
  }
  
}

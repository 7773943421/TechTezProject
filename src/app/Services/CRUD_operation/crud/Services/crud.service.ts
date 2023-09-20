import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  postUrl="https://jsonplaceholder.typicode.com/posts/"
  constructor(private http:HttpClient) { }

  GetAllPost(){
   return this.http.get(this.postUrl);
  }

  GetPostById(Id:any){
 return this.http.get(this.postUrl+ Id);
  }

  UpdatePostById(Id:any,body:any){
    return this.http.put(this.postUrl +Id,body);
  }

  DeletedPostById(Id:any){
    return this.http.delete(this.postUrl +Id)
  }

  CreatedPost(body:any){
    return this.http.post(this.postUrl,body)
  }
}

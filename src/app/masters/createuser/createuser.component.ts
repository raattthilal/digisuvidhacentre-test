import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockappService } from 'app/mockapp.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {
  data = {
      userName: '',
      email: '',
      phone: '',
      gender: '',
      age: Number
  }
  
      constructor(private user:MockappService, private router:Router) { }
    
      ngOnInit() {
       
        
      }
      sub(data){
        console.log("submitting..");
        console.log(JSON.stringify(this.data));
        this.save()
       
      }
      save(){
        this.user.addUsers(this.data).subscribe((res)=>{
          if(res.status!="400"){
            console.log('added succesfully')
            this.router.navigate(['/users'])
          }
          else{
            alert(JSON.stringify(res.errors))
          }
        })
      }
    

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { MockappService } from 'app/mockapp.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  Data: MatTableDataSource<any>;
  perPage=10
  page=0

  displayedColumns: string[] = ['id','userName','email','phone','gender','age','actions'];
  searchKey: string;
  
eachuser={
  id: '',
  userName: '',
  email: '',
  phone: '',
  gender: '',
  age: ''
}
  constructor(private user:MockappService, private router:Router) { }
  
applyFilter() {
  this.Data.filter = this.searchKey.trim().toLowerCase()

}
length;

onPaginate(pageEvent: PageEvent) {
  this.perPage = pageEvent.pageSize;
  this.page = pageEvent.pageIndex;
  this.getdata()
}
  ngOnInit() {
       this.getdata()  
  }
  
getdata(){

  this.user.getAllUsers().subscribe(res=>{
    console.log(res);
    this.Data = new MatTableDataSource(res)
    this.length=res.length
    console.log(this.Data);
    
  })
  
}


onSearchClear() {
  this.searchKey = "";
  this.applyFilter();
}

view_user(id){
 this.user.getEachUsers(id).subscribe(res=>{
   if(!res.errors){
     this.eachuser=res.data;
   }else{
     alert(res.errors[0])
   }
 })
}

Delete(id){
  confirm("Are you sure to delete ?") ?
  this.user.deleteUsers(id).subscribe(()=>{
    console.log('succesfully Deleted');
    this.ngOnInit()
  }):null
}
  


}

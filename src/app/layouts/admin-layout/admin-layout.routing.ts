import { Routes } from '@angular/router';

import { UserlistComponent } from 'app/masters/userlist/userlist.component';
import { CreateuserComponent } from 'app/masters/createuser/createuser.component';


export const AdminLayoutRoutes: Routes = [
 
    { path: 'users',  component: UserlistComponent},
    { path: 'users/create',  component: CreateuserComponent},
     
];

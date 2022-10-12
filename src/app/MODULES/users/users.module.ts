
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/COMPONENTS/CustomerSection/login/login.component';
import { RegisterComponent } from 'src/app/COMPONENTS/CustomerSection/register/register.component';
import { CategoryComponent } from 'src/app/COMPONENTS/AdminSection/category/category.component';
import { AddEditCategoryComponent } from 'src/app/COMPONENTS/AdminSection/add-edit-category/add-edit-category.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent,CategoryComponent,AddEditCategoryComponent],
  imports: [
    CommonModule,
  
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    AddEditCategoryComponent
  ]
})
export class UsersModule { }

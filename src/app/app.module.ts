import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { DumbStudentsComponent } from './dumb-students/dumb-students.component';
import { SmartStudentsComponent } from './smart-students/smart-students.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    TeachersComponent,
    DumbStudentsComponent,
    SmartStudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
       
        {
          path : 'students',
          component : StudentsComponent,
          children : [
            {
              path : 'dumb',
              component : DumbStudentsComponent
            },
            {
              path : 'smart',
              component : SmartStudentsComponent
            }
          ]
        },
        {
          path : 'teachers',
          component : TeachersComponent
        }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

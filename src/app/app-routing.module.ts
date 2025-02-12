import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { QuestionListComponent } from './question-list/question-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: '**', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

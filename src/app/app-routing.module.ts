import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent, TodoComponent } from './todo_UI';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
  },
  {
    path: 'refresh',
    component: DummyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

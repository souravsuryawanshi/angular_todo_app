import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { TodoService } from '../Services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  //variables block
  todo: string = '';
  work: any = [];

  //constructor and ngOnInit

  constructor(private _todos: TodoService, private _route: Router) {}

  ngOnInit() {
    this.work = this._todos.getTodos();
    console.log('%c sourav suryawanshi', 'color : red');
  }

  //Action Handlers

  addWork(item: any) {
    if (item) {
      this._todos.addTodos({
        todo: item,
        date: this._todos.getDate(),
        time: this._todos.getTime(),
      });
      this._route
        .navigateByUrl('refresh', { skipLocationChange: true })
        .then(() => {
          this._route.navigateByUrl('');
        });
      this.todo = '';
    } else {
      alert('Please add todo!');
    }
  }

  markDone(i: any) {
    this._todos.removeTodos(this.work.length - i - 1);
    this._route
      .navigateByUrl('refresh', { skipLocationChange: true })
      .then(() => {
        this._route.navigateByUrl('');
      });
  }

  clearList() {
    this._todos.clearAllTodos();
    this._route
      .navigateByUrl('refresh', { skipLocationChange: true })
      .then(() => {
        this._route.navigateByUrl('');
      });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todo: string = '';
  work: any = [];

  addWork(work: any) {
    if (work) {
      this.work.push(work);
      this.todo = '';
      this.work.sort();
    } else {
      alert('Please add todo work');
    }
  }

  markDone(i: any) {
    this.work.splice(i, 1);
  }

  clearList() {
    this.work.splice(0, this.work.length);
  }
}

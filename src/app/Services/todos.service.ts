import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  todos: any[] = [];
  today: any;

  addTodos(item: any) {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
      this.todos.push(item);
      localStorage.setItem('todos', JSON.stringify(this.todos));
      return;
    }

    this.todos.push(item);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodos(i: any) {
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
    this.todos.splice(i, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  clearAllTodos() {
    this.todos.splice(0, this.todos.length);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getDate() {
    this.today = new Date();
    return (
      this.today.getDate() +
      '/' +
      (this.today.getMonth() + 1) +
      '/' +
      this.today.getFullYear()
    );
  }

  getTime() {
    this.today = new Date();
    return this.today.getHours() + ':' + this.today.getMinutes();
  }

  getTodos() {
    return JSON.parse(localStorage.getItem('todos') || '[]');
  }
}

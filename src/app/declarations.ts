import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TodoService } from './Services/todos.service';
import { TodoComponent, DummyComponent } from './todo_UI';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AutofocusDirective } from './Helpers/autofocus';

export const components = [
  AppComponent,
  TodoComponent,
  DummyComponent,
  AutofocusDirective,
];

export const providers = [TodoService];

export const bootstrap = [AppComponent];

export const imports = [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  HttpClientModule,
];

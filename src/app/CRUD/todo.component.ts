
import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
// import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 
  todoList: any = [];
  newTodo: any = { title: '' };

  constructor(private todoService:TodoService) { }
  ngOnInit() {
    this.listToDos();
  }
  createTodo() {
    let todo = {
      id: new Date().getTime(),
      title: this.newTodo.title
    }
    this.todoService.create(todo).subscribe((response) => {
      console.log('todo create', response);
      this.listToDos();
      this.newTodo.title = '';
    }, (error => {
      console.log(error)
    }))
  }
  listToDos() {
    this.todoService.list().subscribe((res) => {
      console.log(res)
      this.todoList = res;
    }, (error=> {
      console.log(error);
    }))
  }
  editTodo(todo: any) {
    let editData = {
      id: new Date().getTime(),
      title: `Edited title`
    }
    this.todoService.update(todo.id, editData).subscribe(res=> {
      this.listToDos();
    })
  }
  deleteTodo(id: any) {
    this.todoService.delete(id).subscribe(res => {
      console.log('Record has been deleted');
      this.listToDos();
    })
  }
}

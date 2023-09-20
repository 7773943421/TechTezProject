import { Component } from '@angular/core';
import { TodoService } from 'src/app/CRUD/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
 
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

    this.todoService.create(todo).subscribe((response: any) => {
      console.log('todo create', response);
      this.listToDos();
      this.newTodo.title = '';
    }, ((error: any) => {
      console.log(error)
    }))
  }

  listToDos() {
    this.todoService.list().subscribe((res: any) => {
      console.log(res)
      this.todoList = res;
    }, ((error: any)=> {
      console.log(error);
    }))
  }

  editTodo(todo: any) {
    let editData = {
      id: new Date().getTime(),
      title: `Edited title`
    }
    this.todoService.update(todo.id, editData).subscribe((res: any)=> {
      this.listToDos();
    })
  }

  deleteTodo(id: any) {
    this.todoService.delete(id).subscribe((res: any) => {
      console.log('Record has been deleted');
      this.listToDos();
    })
  }
}

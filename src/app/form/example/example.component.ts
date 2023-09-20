import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  constructor(){
    function reapeatchar(input:any) {
      for (let i = 0;i < input.length;i++) {
        var char=input.chatAt(i)
        
        if (input.indexOf(char)==input.lastIndexOf(char)) {
          
          return char
        }
      }
      return null
     }
     var input="GeeksforGeeks";
    var result= reapeatchar(input)
    console.log("The out put is",result);
  }
  
}

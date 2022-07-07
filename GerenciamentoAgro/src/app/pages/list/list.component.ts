import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  description: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  showModal(){
    var modal = document.getElementById('add-background');
    if(modal != null){
      //console.log(modal);
      modal.style.display = 'flex';   
    }
  }

  add(){
    console.log(this.description);
    
  }

  closeModal(){
    var modal = document.getElementById('add-background');
    if(modal != null){
      modal.style.display = 'none';   
    }
  }

}

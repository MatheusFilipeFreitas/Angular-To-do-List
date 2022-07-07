import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  items: Item[] = [];
  sidebar: boolean = false;

  constructor(private itemService: ItemService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.itemService.getItens().subscribe(items => {
        this.items = items;
      }
    )
  }

  showSidebar(){
    const sidebar = document.getElementById("sidenav");
    if(sidebar != null){
      if(this.sidebar === false){
        sidebar.style.display = 'block';
        this.sidebar = true;
      }else{
        sidebar.style.display = 'none';
        this.sidebar = false;
      }
    }
  }

  logout() {
    //this.loginService.logout();
    this.router.navigate(['/login']);
  }
}

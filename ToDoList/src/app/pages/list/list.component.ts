import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  description: string = '';
  item: Item = new Item();
  items: Item[] = [];
  sidebar: boolean = false;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.itemService.getItens().subscribe((items) => {
      this.items = items;
    });
  }

  showModal() {
    const modal = document.getElementById('add-background');
    if (modal != null) {
      //console.log(modal);
      modal.style.display = 'flex';
    }
  }

  add() {
    this.item.popular(0, this.description, false, '');
    this.itemService.postItem(this.item).subscribe({
      next: (data: Item) => {
        console.log('Item cadastrado com sucesso >> ', data);
      },
    });
    location.reload();
  }

  closeModal() {
    const modal = document.getElementById('add-background');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }

  setStatus(item: Item) {
    if (item.status == true) {
      item.status = false;
      item.terminada = '';
    } else {
      item.status = true;
      item.terminada = new Date(Date.now()).toDateString();
    }
    this.itemService.putItem(item, item.id).subscribe({
      next: (data: Item) => {
        console.log('Item alterado com sucesso >> ', data);
      },
    });
  }

  delete(item: Item) {
    this.itemService.deleteItem(item.id).subscribe({
      next: (data: Item) => {
        console.log('Item deletado com sucesso >> ', data);
      },
    });
    location.reload();
  }

  showSidebar() {
    const sidebar = document.getElementById('sidenav');
    if (sidebar != null) {
      if (this.sidebar === false) {
        sidebar.style.display = 'block';
        this.sidebar = true;
      } else {
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

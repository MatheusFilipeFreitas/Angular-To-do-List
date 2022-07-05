import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  data: any = [
    {
      name: "Usuario 1",
      email: "user1@gerenciamentoagro.com",
      telefone: "(99) 9 9999-9999",
      data: "27/06/2022",
      status: true
    },
    {
      name: "Usuario 2",
      email: "user2@gerenciamentoagro.com",
      telefone: "(99) 9 9999-9999",
      data: "27/06/2022",
      status: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

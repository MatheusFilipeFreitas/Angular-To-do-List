import { Injectable, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MensagemService {
  constructor(private snackBar: MatSnackBar) {}

  mensagem(msg: string) {
    this.snackBar.open(msg, '', { duration: 3000 });
  }
}

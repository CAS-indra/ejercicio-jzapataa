import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaccion, TransaccionService } from '../data/transaccion.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css'],
})
export class TransaccionesComponent implements OnInit {
  public transacciones?: Transaccion[];
  public transacciones$: Observable<{ data: Transaccion[] }> = [];

  constructor(private route: ActivatedRoute, private transacctionService: TransaccionService) {}

  ngOnInit(): void {
    this.getTransacciones();
  }

  getTransacciones() {
    const transacciones$: Observable<{ data: Transaccion[] }> =
      this.transacctionService.getTransacciones$();
    transacciones$.subscribe(
      res => (this.transacciones = res.data),
      err => console.log(err),
    );
  }

  public balance = this.balanceTotal();

  public balanceTotal(): number {
    let balanceTotal = 0;
    for (var i = 0; i < this.transacciones.length; i++) {
      if (this.transacciones[i].kind == 'income') {
        balanceTotal = balanceTotal + this.transacciones[i].amount;
      } else if (this.transacciones[i].kind == 'spent') {
        balanceTotal = balanceTotal - this.transacciones[i].amount;
      }
    }
    return balanceTotal;
  }

  public color = this._color();

  public _color(): string {
    if (this.balance < 0) {
      return 'spent';
    } else {
      return 'income';
    }
  }
}

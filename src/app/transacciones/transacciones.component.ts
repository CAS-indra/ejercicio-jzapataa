import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransaccionService } from '../data/transaccion.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css'],
})
export class TransaccionesComponent implements OnInit {
  public transacctionId = '';
  public transacction = { name: '', amount: 0 };

  constructor(private route: ActivatedRoute, private transacctionService: TransaccionService) {}

  ngOnInit(): void {
    this.transacctionId = this.route.snapshot.params['id'];
    const transactions = this.transacctionService.getTransacciones();
    this.transacction = transactions.find((t: { id: string }) => t.id === this.transacctionId);
  }
  /*
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
  }*/
}

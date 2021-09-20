import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransaccionService } from 'src/app/data/transaccion.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css'],
})
export class TransaccionComponent implements OnInit {
  public transacctionId = '';
  public transacction = { name: '', description: '', amount: 0, date: new Date() };

  constructor(private route: ActivatedRoute, private transacctionService: TransaccionService) {}

  ngOnInit(): void {
    this.transacctionId = this.route.snapshot.params['id'];
    const transactions = this.transacctionService.getTransacciones();
    this.transacction = transactions.find((t: { id: string }) => t.id === this.transacctionId);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type Transaccion = {
  id: string;
  name: string;
  description: string;
  kind: string;
  amount: number;
  /* date: new Date(),*/
  projectId: string;
  ownerId: string;
};

@Injectable({
  providedIn: 'root',
})
export class TransaccionService {
  private url = 'https://proton-angular-builders.herokuapp.com/v1/projects';

  /*private transacciones = [
    {
      id: 'design_a_virus',
      name: 'Design a virus',
      description: 'Design a modified version of a current virus',
      kind: 'spent',
      amount: 500,
      date: new Date(2020, 0, 1),
      projectId: 'rule_the_world',
      ownerId: 'world_admin',
    },
    {
      id: 'produce_the_virus',
      name: 'produce the virus',
      description: 'Clone the virus in a secret lab',
      kind: 'spent',
      amount: 1200,
      date: new Date(2020, 1, 1),
      projectId: 'rule_the_world',
      ownerId: 'world_admin',
    },
    {
      id: 'buy_fuel',
      name: 'Buy fuel',
      description: 'A lot of fuel ',
      kind: 'spent',
      amount: 900,
      date: new Date(2024, 0, 1),
      projectId: 'conquer_mars',
      ownerId: 'world_admin',
    },
    {
      id: 'sell_view_seats',
      name: 'Sell view seats',
      description: 'Seats to view launches ',
      kind: 'income',
      amount: 80,
      date: new Date(2025, 0, 1),
      projectId: 'conquer_mars',
      ownerId: 'world_admin',
    },
  ];*/

  constructor(private http: HttpClient) {}

  /*public getTransaccion(): any {
    return <any>this.transacciones;
  }

  public getTransacciones(): any[] {
    return <any[]>this.transacciones;
  }*/

  public getTransacciones$(): Observable<{ data: Transaccion[] }> {
    return this.http.get<{ data: Transaccion[] }>(this.url);
  }
  public getTransaccionById$(id: string): Observable<Transaccion> {
    return this.http.get<Transaccion>(this.url + id).pipe(map(res => res));
  }
}

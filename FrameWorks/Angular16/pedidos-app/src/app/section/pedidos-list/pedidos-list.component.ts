import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.scss']
})
export class PedidosListComponent {
  clienteSelecionadoId = "";
  clientes:Cliente[];

  constructor(private dadosService: DadosService){
    this.clientes = dadosService.getClientes();
  }
}

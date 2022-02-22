import { Component, OnInit } from '@angular/core';
import { Country } from '../../entities/pais.entity';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  titulo: string = 'Por Capital';
  paises: Country[] = [];
  hayError: boolean = false;

  constructor(private readonly paisService: PaisService) {}

  ngOnInit(): void {}
  buscar(dato: string) {
    this.paisService.buscarPorPais(dato).subscribe({
      next: (res: Country[]) => ((this.paises = res), (this.hayError = false)),
      error: (res: any) => ((this.paises = []), (this.hayError = true)),
    });
  }
  sugerencias(e: string) {}
}

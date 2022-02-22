import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { Country } from '../../entities/pais.entity';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent implements OnInit {
  titulo: string = 'Por Capital';
  paises: Country[] = [];
  hayError: boolean = false;

  constructor(private readonly paisService: PaisService) {}

  ngOnInit(): void {}
  buscar(dato: string) {
    this.paisService.buscarPorCapital(dato).subscribe({
      next: (res: Country[]) => ((this.paises = res), (this.hayError = false)),
      error: (res: any) => ((this.paises = []), (this.hayError = true)),
    });
  }
}

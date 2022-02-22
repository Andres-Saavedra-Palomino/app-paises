import { Component, OnInit } from '@angular/core';
import { Country } from '../../entities/pais.entity';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent implements OnInit {
  titulo: string = 'Por Capital';
  paises: Country[] = [];
  hayError: boolean = false;

  constructor(private readonly paisService: PaisService) {}

  ngOnInit(): void {}
  buscar(dato: string) {
    this.paisService.buscarPorRegion(dato).subscribe({
      next: (res: Country[]) => ((this.paises = res), (this.hayError = false)),
      error: (res: any) => ((this.paises = []), (this.hayError = true)),
    });
  }
}

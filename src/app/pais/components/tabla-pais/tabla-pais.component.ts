import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html',
  styleUrls: ['./tabla-pais.component.css'],
})
export class TablaPaisComponent implements OnInit {
  @Input() paises: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}

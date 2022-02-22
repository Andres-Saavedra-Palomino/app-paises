import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-pais',
  templateUrl: './titulo-pais.component.html',
  styleUrls: ['./titulo-pais.component.css'],
})
export class TituloPaisComponent implements OnInit {
  @Input() titulo: string = '';
  constructor() {}

  ngOnInit(): void {}
}

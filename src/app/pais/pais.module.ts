import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PaisRoutingModule } from './pais-routing.module';
import { InputPaisComponent } from './components/input-pais/input-pais.component';
import { TablaPaisComponent } from './components/tabla-pais/tabla-pais.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TituloPaisComponent } from './components/titulo-pais/titulo-pais.component';

@NgModule({
  declarations: [
    InputPaisComponent,
    TablaPaisComponent,
    PorPaisComponent,
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent,
    TituloPaisComponent,
  ],
  exports: [
    InputPaisComponent,
    TablaPaisComponent,
    PorPaisComponent,
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent,
    TituloPaisComponent,
  ],
  imports: [
    CommonModule,
    PaisRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class PaisModule {}

import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficosComponent } from './graficos/graficos.component';
import { ReceitasDespesaComponent } from './receitas-despesa/receitas-despesa.component';
import { ReactiveFormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ChartsModule, ThemeService } from 'ng2-charts';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    GraficosComponent,
    ReceitasDespesaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  },
    ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

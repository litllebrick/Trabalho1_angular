import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraficosComponent } from './graficos/graficos.component';
import { ReceitasDespesaComponent } from './receitas-despesa/receitas-despesa.component';


const routes: Routes = [
  { path: "receitas-despesas", component: ReceitasDespesaComponent },
  { path: "graficos", component: GraficosComponent },
  { path: "", redirectTo: "receitas-despesas", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

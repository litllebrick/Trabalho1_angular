import { Injectable } from '@angular/core';
import { ReceitaDespesa } from './ReceitaDespesa';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  newReceitaDespesa(receitaDespesa: ReceitaDespesa) {
    let receitasDespesas = JSON.parse(localStorage.getItem('receitas-despesas') || '[]')
    receitasDespesas.push(receitaDespesa)
    localStorage.setItem('receitas-despesas', JSON.stringify(receitasDespesas))
  }


  editReceitaDespesa(newreceitaDespesa) {
    let emps = JSON.parse(localStorage.getItem('receitas-despesas'));
    for (let i = 0; i < emps.length; i++) {
      if (emps[i].id == newreceitaDespesa.id) {
        emps[i] = newreceitaDespesa;
      }
    }
    localStorage.setItem('receitas-despesas', JSON.stringify(emps));
  }

  listReceitaDespesa() {
    return JSON.parse(localStorage.getItem('receitas-despesas'))
  }

  deleteReceitaDespesa(id) {
    let emps = JSON.parse(localStorage.getItem('receitas-despesas'));
    for (let i = 0; i < emps.length; i++) {
      if (emps[i].id == id) {
        emps.splice(i, 1);
      }
    }
    localStorage.setItem('receitas-despesas', JSON.stringify(emps));
  }

  getReceitasDespesasGraph() {
    let emps = JSON.parse(localStorage.getItem('receitas-despesas'));
    let sumValuesReceitas = []
    let sumValuesDespesas = []

    for (let i = 0; i < 12; i++) {
      sumValuesReceitas.push(0)
      sumValuesDespesas.push(0)
    }

    for (let i = 0; i < emps.length; i++) {

      for (let v = 0; v < 12; v++) {
        let data = new Date(emps[i].dataPg)
        if (data.getMonth() == v) {
          if (emps[i].tipoConta == 'receita')
            sumValuesReceitas[v] += emps[i].valor
          else sumValuesDespesas[v] += emps[i].valor
          break;
        }
      }


    }
    console.log(sumValuesReceitas)
    console.log(sumValuesDespesas)
    return { 'receitas': sumValuesReceitas, 'despesas': sumValuesDespesas }
  }

  revisedRandId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '')
  }

}

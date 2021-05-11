import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageService } from '../page.service';
import { ReceitaDespesa } from '../ReceitaDespesa';

@Component({
  selector: 'app-receitas-despesa',
  templateUrl: './receitas-despesa.component.html',
  styleUrls: ['./receitas-despesa.component.css']
})
export class ReceitasDespesaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private pgService: PageService) { }
  formReceitaDespesa: FormGroup;
  receitasDespesasArr = [];
  ngOnInit() {
    this.list();
    this.createForm();
  }

  createForm() {
    let id = this.pgService.revisedRandId()
    this.formReceitaDespesa = this.formBuilder.group({
      id: [id],
      tipoConta: [null],
      descricao: [null],
      dataPg: [null],
      valor: [null],
      isEdit: [false]
    })
  }

  list() {
    this.receitasDespesasArr = []
    this.receitasDespesasArr = this.pgService.listReceitaDespesa()
  }

  save() {
    console.log(this.formReceitaDespesa.value)
    if (!this.formReceitaDespesa.value['isEdit'])
      this.pgService.newReceitaDespesa(this.formReceitaDespesa.value)
    else
      this.pgService.editReceitaDespesa(this.formReceitaDespesa.value)

    this.list();
    this.newForm()
  }

  edit(item) {
    item['isEdit'] = true
    this.formReceitaDespesa.patchValue(item)
    this.list()
  }

  async delete(id) {
    await this.pgService.deleteReceitaDespesa(id)
    this.list()
  }

  newForm() {
    this.formReceitaDespesa.reset();
    let id = this.pgService.revisedRandId()
    this.formReceitaDespesa.patchValue({ id: id })
  }

}

import { Injectable } from '@angular/core';
import { listData } from './list';

interface Disciplinas {
  nome: string;
  diaDaSemana: string;
  horario: string;
}

@Injectable()
export class DisciplinasService {
  list: Array<Disciplinas> = listData;

  constructor() {}

  getList() {
    return this.list;
  }

  add(disciplina: Disciplinas) {
    this.list.push(disciplina);
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}

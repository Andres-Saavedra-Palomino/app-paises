import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input-pais',
  templateUrl: './input-pais.component.html',
  styleUrls: ['./input-pais.component.css'],
})
export class InputPaisComponent implements OnInit {
  formPais: FormGroup | any;
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  constructor() {
    this.setForm();
  }
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe({
      next: (res: any) => {
        this.onDebounce.emit(res);
      },
    });
  }
  setForm() {
    this.formPais = new FormGroup({
      dato: new FormControl('', Validators.required),
    });
  }

  buscar() {
    this.onEnter.emit(this.formPais.get('dato').value);
  }
  teclaPresionada() {
    this.debouncer.next(this.formPais.get('dato').value);
  }
}

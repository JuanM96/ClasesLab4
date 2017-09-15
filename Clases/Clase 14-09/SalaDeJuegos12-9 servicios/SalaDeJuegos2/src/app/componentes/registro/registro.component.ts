import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private builder:FormBuilder) {}
  email:FormControl = new FormControl("",[
    Validators.required,
    Validators.minLength(6)
  ]);
  pass:FormControl = new FormControl("",[
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(12)
  ]);
  passRepetida:FormControl = new FormControl("",[
    Validators.required
  ]);
  regForm:FormGroup = this.builder.group([]);

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentarios-screen',
  templateUrl: './comentarios-screen.component.html',
  styleUrls: ['./comentarios-screen.component.sass']
})
export class ComentariosScreenComponent implements OnInit {

  commentForm: FormGroup

  constructor(private _builder: FormBuilder) 
  { 
    this.commentForm = this._builder.group({
      comment:['',Validators.required]
    })
  }

  enviar(values) {
    console.log(values);
  }


  ngOnInit(): void {
  }

}
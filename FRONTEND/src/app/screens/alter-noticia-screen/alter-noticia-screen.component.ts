import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';

@Component({
  selector: 'app-alter-noticia-screen',
  templateUrl: './alter-noticia-screen.component.html',
  styleUrls: ['./alter-noticia-screen.component.sass']
})
export class AlterNoticiaScreenComponent implements OnInit {

  
  public newNoticiaFormGroup: FormGroup;

  constructor(private newNoticiaProvider: NoticiaProviderService, private _builder: FormBuilder) {
      this.newNoticiaFormGroup = this._builder.group({
        titulo: ['', Validators.required],
        entradilla: ['', Validators.required],
        imagenURL: [''],
        videoURL: [''],
        audioURL: [''],
        cuerpo: ['', Validators.required],
        categoria: ['', Validators.required],
        privado: ['', Validators.required]
      })
  }
  
  public async addNoticia() {
    let noticia: Partial<Noticia> = {
      titulo: this.newNoticiaFormGroup.get('titulo').value,
      entradilla: this.newNoticiaFormGroup.get('entradilla').value,
      imagenURL: this.newNoticiaFormGroup.get('imagenURL').value,
      videoURL: this.newNoticiaFormGroup.get('videoURL').value,
      audioURL: this.newNoticiaFormGroup.get('audioURL').value,
      cuerpo: this.newNoticiaFormGroup.get('cuerpo').value,
      categoria: this.newNoticiaFormGroup.get('categoria').value,
      privado: this.newNoticiaFormGroup.get('privado').value
    }

    try {
      await this.newNoticiaProvider.addNoticia(noticia).toPromise();
      alert("La noticia ha sido creada con exito");
    } catch (error) {
      
    }
  }

  ngOnInit(): void {
  }

}

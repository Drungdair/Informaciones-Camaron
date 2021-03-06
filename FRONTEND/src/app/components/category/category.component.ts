import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {

  @Input()
  public categoria: string;
  @Input()
  public _id: string;
  @Input()
  public limit: number;
  public noticias$: Observable<Noticia[]>;
  
  constructor(private noticiaProvider: NoticiaProviderService) {
    this.noticias$ = this.getNoticiasPublicas();
  }

  ngOnInit(): void {
    
  }

  getNoticiasPublicas(): Observable<Noticia[]> {
    return this.noticiaProvider.getNoticiasPublicas();
  }
}

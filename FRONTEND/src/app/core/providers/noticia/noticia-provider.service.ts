import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Noticia } from '../../models/noticia.model';
import { HttpService } from '../../services/http/http.service';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class NoticiaProviderService {

  constructor(private httpService: HttpService) { }

  public getNoticias(): Observable<Noticia[]> {
    return this.httpService.get<Noticia[]>('/noticia/all');
  }
  
  public addNoticia(noticia: Partial<Noticia>): Observable<Noticia> {
    return this.httpService.post<Noticia>('/noticia/add', noticia);
  }

  public getNoticiaById(id: string): Observable<Noticia> {
    return this.getNoticias().pipe(map((noticias: Noticia[]) => {
      return noticias.find((noticia: Noticia) => noticia._id == id)
    }));
  }

  public deleteNoticia(_id: string): Observable<Noticia> {
    return this.httpService.delete<Noticia>('/noticia/delete:' + _id);
  }

}

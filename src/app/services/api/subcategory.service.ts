import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ISubcategory } from '../../models/subcategory.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SubcategoryService extends BaseService {

  constructor(http: HttpClient, router: Router, toaster: ToastrService) {
    super(http, router, toaster);
  }

  getSubcategories(): Observable<ISubcategory[]> {
    return this.http.get<{data: ISubcategory[]}>("http://127.0.0.1:8000/api/warehouse/subcategories/filter/") // Asegúrate de que esta URL sea correcta
      .pipe(map(res => res.data));
    // return this.sendRequest<ISubcategory[]>('subcategories', this.GET);
  }

}
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from '../../models/category.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService extends BaseService {

  constructor(http: HttpClient, router: Router, toaster: ToastrService) {
    super(http, router, toaster);
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<{data: ICategory[]}>("http://127.0.0.1:8000/api/warehouse/categories/filter/")
      .pipe(map(res => res.data));
    // return this.sendRequest<ICategory[]>('categories', this.GET);
  }

}
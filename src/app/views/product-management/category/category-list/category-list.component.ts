import { Component, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/api/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent {
  categoryList: ICategory[] = [];
  displayedColumns: string[] = ['item','category_id', 'created', 'modified', 'code', 'description', 'order'];
  columnNames: string[] = ['Item','ID Categoría', 'Creado', 'Modificado', 'Código', 'Descripción', 'Orden'];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(res => {
      this.categoryList = res;
    });
  }

  handleAction({event, element}) {

  }

}

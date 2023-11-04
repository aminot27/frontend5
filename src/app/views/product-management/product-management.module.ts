import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { TableComponent } from 'src/app/containers/table/table.component';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { SubcategoryAddComponent } from './subcategory/subcategory-add/subcategory-add.component';
import { SubcategoryDeleteComponent } from './subcategory/subcategory-delete/subcategory-delete.component';
import { SubcategoryListComponent } from './subcategory/subcategory-list/subcategory-list.component';
import { SubcategoryUpdateComponent } from './subcategory/subcategory-update/subcategory-update.component';


@NgModule({
  declarations: [
    CategoryComponent,
    SubcategoryComponent,
    TableComponent,
    CategoryListComponent,
    CategoryUpdateComponent,
    CategoryDeleteComponent,
    CategoryAddComponent,
    SubcategoryAddComponent,
    SubcategoryDeleteComponent,
    SubcategoryListComponent,
    SubcategoryUpdateComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ProductManagementModule { }

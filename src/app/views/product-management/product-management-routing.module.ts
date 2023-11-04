import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestión de Almacén',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'gestion',
      },
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          title: 'Categoría',
        },
      },
      {
        path: 'subcategory',
        component: SubcategoryComponent,
        data: {
          title: 'Subcategoría',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }

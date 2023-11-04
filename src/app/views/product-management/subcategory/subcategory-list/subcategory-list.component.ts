import { Component } from '@angular/core';
import { ISubcategory } from 'src/app/models/subcategory.model';
import { SubcategoryService } from 'src/app/services/api/subcategory.service';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.scss']
})
export class SubcategoryListComponent {
  subcategoryList: ISubcategory[] =[];
  displayedColumns: string[] = ['item', "subcategory_id","created", "modified", "code", "description", "category"];
  columnNames: string[] = ['Item', "ID Subcategoría", "Creado", "Modificado", "Código", "Descripción", "ID Categoría"];

  constructor(private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.subcategoryService.getSubcategories().subscribe(res=>{
      this.subcategoryList = res;
      console.log(res);
      
    });
  }

  handleAction({event, element}) {
  }
}

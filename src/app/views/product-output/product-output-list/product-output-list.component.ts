import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProductOutput } from 'src/app/models/product-output.model';
import { ProductOutputService } from 'src/app/services/api/product-output.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductOutputAddComponent } from '../product-output-add/product-output-add.component';
import { CrudEventsService } from 'src/app/services/crud-events.service'; 
import { ProductOutputDeleteComponent } from '../product-output-delete/product-output-delete.component';
import { ProductOutputEditComponent } from '../product-output-edit/product-output-edit.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-output-list',
  templateUrl: './product-output-list.component.html',
  styleUrls: ['./product-output-list.component.scss']
})
export class ProductOutputListComponent implements OnInit, OnDestroy{
  displayedColumns: string[] = ['product_output_id', 'created', 'modified', 'status', 'product', 'quantity', 'movement_date', 'reason'];
  columnNames: string[] = ['ID Producto Salida', 'Creado', 'Modificado', 'Estado', 'ID Producto', 'Cantidad', 'Fecha de Movimiento', 'Razón'];
  dataSource: MatTableDataSource<IProductOutput>;
  private unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    private productOutputService: ProductOutputService,
    private dialog: MatDialog,
    private crudEventsService: CrudEventsService) { 
    this.dataSource = new MatTableDataSource<IProductOutput>([]);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.updateTableData();
    this.crudEventsService.itemAdded
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(() => {
      this.updateTableData();
    });
  }

  updateTableData(): void {
    this.productOutputService.getProductOutputs()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(res => {
      this.dataSource.data = res;
    });
  }

  openEditModal(element: any){
    const dialogRef = this.dialog.open(ProductOutputEditComponent, {
      data: { productOutput: element }
    });
    dialogRef.afterClosed()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(result => {
      if (result) {
        this.updateTableData();
      }
    });
  }

  openDeleteModal(element: any){
    const dialogRef = this.dialog.open(ProductOutputDeleteComponent, {
      data: { product_output_id: element.product_output_id }
    });
    dialogRef.afterClosed()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(result => {
      if (result) {
        this.updateTableData();
      }
    });
  }

  addProductOutputModal(){
    const dialogRef = this.dialog.open(ProductOutputAddComponent, {});
    dialogRef.afterClosed()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(result => {
      if (result) {
        this.updateTableData();
      }
    });
  }
}
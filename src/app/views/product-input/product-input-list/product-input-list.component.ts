import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProductInput } from 'src/app/models/product-input.model';
import { ProductInputService } from 'src/app/services/api/product-input.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductInputAddComponent } from '../product-input-add/product-input-add.component';
import { CrudEventsService } from 'src/app/services/crud-events.service'; 
import { ProductInputDeleteComponent } from '../product-input-delete/product-input-delete.component';
import { ProductInputEditComponent } from '../product-input-edit/product-input-edit.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-input-list',
  templateUrl: './product-input-list.component.html',
  styleUrls: ['./product-input-list.component.scss']
})
export class ProductInputListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['product_input_id', 'created', 'modified', 'status', 'product', 'quantity', 'movement_date', 'reason'];
  columnNames: string[] = ['ID Producto Entrada', 'Creado', 'Modificado', 'Estado', 'ID Producto', 'Cantidad', 'Fecha de Movimiento', 'Razón'];
  dataSource: MatTableDataSource<IProductInput>;
  private unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    private productInputService: ProductInputService,
    private dialog: MatDialog,
    private crudEventsService: CrudEventsService) { 
    this.dataSource = new MatTableDataSource<IProductInput>([]);
  }

  ngOnInit(): void {
    this.updateTableData();
    this.crudEventsService.itemAdded
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(() => {
      this.updateTableData();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

  updateTableData(): void {
    this.productInputService.getProductInputs()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(res => {
      this.dataSource.data = res;
    });
  }

  openEditModal(element: any){
    const dialogRef = this.dialog.open(ProductInputEditComponent, {
      data: { productInput: element }
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
    const dialogRef = this.dialog.open(ProductInputDeleteComponent, {
      data: { product_input_id: element.product_input_id }
    });
    dialogRef.afterClosed()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(result => {
      if (result) {
        this.updateTableData();
      }
    });
  }

  addProductInputModal(){
    const dialogRef = this.dialog.open(ProductInputAddComponent, {});
    dialogRef.afterClosed()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(result => {
      if (result) {
        this.updateTableData();
      }
    });
  }
}
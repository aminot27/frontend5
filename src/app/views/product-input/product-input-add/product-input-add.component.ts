import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductInputService } from 'src/app/services/api/product-input.service';
import { CrudEventsService } from 'src/app/services/crud-events.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-input-add',
  templateUrl: './product-input-add.component.html',
  styleUrls: ['./product-input-add.component.scss']
})
export class ProductInputAddComponent implements OnInit, OnDestroy {
  title = 'AÑADIR ENTRADA DE PRODUCTOS';
  private unsubscribe$: Subject<any> = new Subject<any>();

  formConfig = [
    { name: 'product', label: 'Product ID', type: 'number', required: true },
    { name: 'quantity', label: 'Quantity', type: 'number', required: true },
    { name: 'movementDate', label: 'Movement Date', type: 'date', required: true },
    { name: 'reason', label: 'Reason', type: 'text', required: false, maxLength: 100 }
  ];

  constructor(
    private ProductInputService: ProductInputService,
    private crudEventsService: CrudEventsService,
    private dialogRef: MatDialogRef<ProductInputAddComponent>,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

  onFormSubmit(formValue: any) {
    this.ProductInputService.addProductInput(formValue)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      data => {
        this.crudEventsService.itemAdded.next();
        this.dialogRef.close();
      },
      error => {
      }
    );
  }
}

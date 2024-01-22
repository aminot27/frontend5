import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductOutputService } from 'src/app/services/api/product-output.service';
import { CrudEventsService } from 'src/app/services/crud-events.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-output-add',
  templateUrl: './product-output-add.component.html',
  styleUrls: ['./product-output-add.component.scss']
})
export class ProductOutputAddComponent implements OnInit, OnDestroy {
  title = 'AÑADIR SALIDA DE PRODUCTOS';
  private unsubscribe$: Subject<any> = new Subject<any>();

  formConfig = [
    { name: 'product', label: 'Product ID', type: 'number', required: true },
    { name: 'quantity', label: 'Quantity', type: 'number', required: true },
    { name: 'movementDate', label: 'Movement Date', type: 'date', required: true },
    { name: 'reason', label: 'Reason', type: 'text', required: false, maxLength: 100 }
  ];

  constructor(
    private productOutputService: ProductOutputService,
    private crudEventsService: CrudEventsService,
    private dialogRef: MatDialogRef<ProductOutputAddComponent>,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

  onFormSubmit(formValue: any) {
    this.productOutputService.addProductOutput(formValue)
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
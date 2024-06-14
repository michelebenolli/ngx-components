import { Injectable } from '@angular/core';
import { ColumnDirective } from './column.directive';

// Service used by the column templates directive to store the default column templates
@Injectable({
  providedIn: 'root'
})
export class ColumnTemplates {
  directives: Array<ColumnDirective> = [];
}
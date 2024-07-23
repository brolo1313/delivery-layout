import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {
  MatCell, MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort, MatSortHeader} from '@angular/material/sort';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInput} from "@angular/material/input";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {ColumnModel} from "./table-models/column-model.interface";

export interface DemoData {
  id: number;
  name: string;
  category: string;
}

const ELEMENT_DATA: DemoData[] = [
  {id: 1, name: 'Item 1', category: 'A'},
  {id: 2, name: 'Item 2', category: 'B'},
  {id: 3, name: 'Item 3', category: 'A'},
  // Add more demo data here
];

@Component({
  selector: 'app-smart-table',
  standalone: true,
  imports: [
    MatPaginator,
    MatTable,
    MatLabel,
    MatFormField,
    MatHeaderRow,
    MatSortHeader,
    MatRow,
    MatCell,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatColumnDef,
    MatIconButton,
    MatIcon,
    MatHeaderRowDef,
    MatRowDef,
    DatePipe,
    MatSort,
    FlexLayoutModule,
    MatInput,
    MatChipSet,
    MatChip,
    MatCardContent,
    MatCard,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatButton,
    NgIf,
    NgForOf
  ],
  templateUrl: './smart-table.component.html',
  styleUrl: './smart-table.component.scss',
  providers: [
    {provide: MatPaginatorIntl, useValue: CustomPaginator()}  // Here
  ]
})
export class SmartTableComponent implements OnInit, OnChanges, AfterViewInit {

  @Input({required: true}) columns: ColumnModel[] = [];
  @Input({required: true}) data: any[] = [];
  // @Input({required: true}) displayedColumns;

  public displayedColumns:string[] = []
  public dataColumns:string[] = []
  public dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
  }

  ngOnInit() {
    // this.getAllOwners();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges, `, changes);
    if (changes[`columns`] && changes[`columns`].currentValue) {
      this.displayedColumns = changes[`columns`].currentValue.map((col: ColumnModel) => {
        return col.displayName
      });
      this.dataColumns = changes[`columns`].currentValue.map((col: ColumnModel) => {
        return col.dataName
      });
    }

    if (changes[`data`] && changes[`data`].currentValue) {
      // this.dataSource.data = changes[`data`].currentValue;
      this.getAllOwners();
    }

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllOwners = () => {
    this.dataSource.data = [{name: 'andre'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}, {name: 'adsad'}]
  }
  public redirectToDetails = (id: string) => {

  }
  public redirectToUpdate = (id: string) => {

  }
  public redirectToDelete = (id: string) => {

  }

  doFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
}


export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'דגשדשג';

  return customPaginatorIntl;
}

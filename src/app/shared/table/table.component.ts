import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    TitleCasePipe
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements AfterViewInit {
  @Input() displayedColumns!: string[];
  @Input() dataSource!: any[];
  @Output() rowClicked = new EventEmitter<any>();

  ngAfterViewInit(): void {
    if (!this.displayedColumns || !this.dataSource) {
      throw new Error('Missing required input for table');
    }
  }
}

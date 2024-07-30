import {AfterViewInit, Component, Input} from '@angular/core';
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
  @Input() callback!: (data: any) => void;

  ngAfterViewInit(): void {
    if (!this.displayedColumns || !this.dataSource || !this.callback) {
      throw new Error('Missing required input for table');
    }
  }
}

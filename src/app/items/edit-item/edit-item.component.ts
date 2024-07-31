import {Component} from '@angular/core';
import {BottomSheetComponent} from "../../shared/bottom-sheet/bottom-sheet.component";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {EditItemService} from "./edit-item.service";

@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [
    BottomSheetComponent,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.scss'
})
export class EditItemComponent {
  constructor(protected editItemService: EditItemService) {
  }

}

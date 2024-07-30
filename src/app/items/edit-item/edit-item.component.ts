import { Component } from '@angular/core';
import {BottomSheetComponent} from "../../shared/bottom-sheet/bottom-sheet.component";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {EditItemService} from "./edit-item.service";

@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [
    BottomSheetComponent,
    MatButton,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatSuffix
  ],
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.scss'
})
export class EditItemComponent {
  constructor(protected editItemService: EditItemService) {
  }

}

import {Component} from '@angular/core';
import {ConfigService} from "../config.service";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    MatIcon,
    MatFabButton
  ],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
  constructor(protected configService: ConfigService) {
  }

}

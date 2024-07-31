import {Component} from '@angular/core';
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {BadgeService} from "./badge.service";
import {NgOptimizedImage} from "@angular/common";

export interface Badge {
  name: string,
  icon: string
}

@Component({
  selector: 'app-category-badge',
  standalone: true,
  imports: [
    MatChipsModule,
    MatIconModule,
    NgOptimizedImage
  ],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  constructor(protected badgeService: BadgeService) {
  }

}

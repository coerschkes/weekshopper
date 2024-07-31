import {Component, EventEmitter, Output} from '@angular/core';
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {BadgeService} from "./badge.service";
import {NgOptimizedImage} from "@angular/common";

export interface Badge {
  name: string,
  icon: string
}

@Component({
  selector: 'app-badge',
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
  @Output() onRemove: EventEmitter<Badge> = new EventEmitter();

  constructor(protected badgeService: BadgeService) {
  }

}

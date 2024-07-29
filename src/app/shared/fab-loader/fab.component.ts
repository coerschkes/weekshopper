import {Component} from '@angular/core';
import {BrowserService} from "../../browser.service";
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {FabService} from "./fab.service";
import {NgIf} from "@angular/common";

export interface RouteMapping {
  Route: string,
  DisplayName: string,
  DesktopIcon: string
  MobileIcon: string,
  Callback?: () => void
}

@Component({
  selector: 'app-fab-loader',
  standalone: true,
  imports: [
    MatFabButton,
    MatIcon,
    NgIf
  ],
  templateUrl: './fab.component.html',
  styleUrl: './fab.component.scss'
})
export class FabComponent {

  constructor(protected browserService: BrowserService, protected fabLoaderService: FabService) {
  }
}

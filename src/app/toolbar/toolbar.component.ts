import {Component} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatFabButton, MatIconButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {NgStyle, TitleCasePipe} from "@angular/common";
import {BrowserService} from "../browser.service";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatSidenavContent,
    MatToolbar,
    MatIconButton,
    MatSidenavContainer,
    MatSidenav,
    MatNavList,
    MatListItem,
    RouterLink,
    MatIconModule,
    RouterOutlet,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatSlideToggle,
    NgStyle,
    MatFabButton,
    TitleCasePipe,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',

})
export class ToolbarComponent {

  constructor(protected browserService: BrowserService) {
  }
}

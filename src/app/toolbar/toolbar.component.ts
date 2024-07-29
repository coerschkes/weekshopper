import {AfterViewInit, Component, ViewChild} from '@angular/core';
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
import {environment} from "../../environments/environment";
import {FabComponent} from "../shared/fab/fab.component";

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
    FabComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',

})
export class ToolbarComponent implements AfterViewInit {
  protected readonly environment = environment;

  @ViewChild("sidenav") sidenav!: MatSidenav;

  constructor(protected browserService: BrowserService) {
  }

  ngAfterViewInit(): void {
    this.browserService.bindSidenav(this.sidenav);
  }
}

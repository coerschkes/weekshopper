import {Component, HostBinding, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {BrowserService} from "./browser.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weekshopper';

  constructor(private _configService: BrowserService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this._configService.updateIsMobile()
  }

  @HostBinding('class')
  currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';
}

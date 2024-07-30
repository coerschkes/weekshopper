import {Injectable, Signal, signal, WritableSignal} from "@angular/core";
import {Router} from "@angular/router";
import {MatDrawer} from "@angular/material/sidenav";

@Injectable({providedIn: 'root'})
export class BrowserService {
  private _isMobile: WritableSignal<boolean> = signal(false);
  private _drawers: MatDrawer[] = [];

  constructor(private _router: Router) {
    this.updateIsMobile()
  }

  updateIsMobile() {
    this._isMobile.update(() => window.innerWidth <= 600)
  }

  bindDrawer(drawer: MatDrawer) {
    this._drawers.push(drawer);
  }

  removeDrawer(drawer: MatDrawer) {
    this._drawers = this._drawers.filter(d => d !== drawer);
  }

  get isMobile(): Signal<boolean> {
    return this._isMobile.asReadonly();
  }

  get currentRoute(): Signal<string> {
    return signal(this._router.url);
  }

  get drawerOpened(): Signal<boolean | undefined> {
    return signal(this._drawers.filter(d => d.opened).length > 0);
  }
}

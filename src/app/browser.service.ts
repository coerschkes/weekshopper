import {Injectable, Signal, signal, WritableSignal} from "@angular/core";
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";

@Injectable({providedIn: 'root'})
export class BrowserService {
  private _isMobile: WritableSignal<boolean> = signal(false);
  private _sidenav: MatSidenav | undefined;

  constructor(private _router: Router) {
    this.updateIsMobile()
  }

  updateIsMobile() {
    this._isMobile.update(() => window.innerWidth <= 600)
  }

  bindSidenav(sidenav: MatSidenav) {
    this._sidenav = sidenav;
  }

  get isMobile(): Signal<boolean> {
    return this._isMobile.asReadonly();
  }

  get currentRoute(): Signal<string> {
    return signal(this._router.url);
  }

  get sidenavExpanded(): Signal<boolean | undefined> {
    return signal(this._sidenav?.opened)
  }
}

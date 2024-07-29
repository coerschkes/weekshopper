import {Injectable, Signal, signal, WritableSignal} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class BrowserService {
  private _isMobile: WritableSignal<boolean> = signal(false);

  constructor(private _router: Router) {
    this.updateIsMobile()
  }

  get isMobile(): Signal<boolean> {
    return this._isMobile.asReadonly();
  }

  get currentRoute(): Signal<string> {
    return signal(this._router.url);
  }

  updateIsMobile() {
    this._isMobile.update(() => window.innerWidth <= 600)
  }
}

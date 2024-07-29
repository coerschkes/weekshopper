import {Injectable, Signal, signal, WritableSignal} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ConfigService {
  private _isMobile: WritableSignal<boolean> = signal(false);

  constructor() {
    this.updateIsMobile()
  }

  get isMobile(): Signal<boolean> {
    return this._isMobile.asReadonly();
  }

  updateIsMobile() {
    this._isMobile.update(() => window.innerWidth <= 600)
  }
}

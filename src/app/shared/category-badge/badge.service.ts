import {Injectable, Signal, signal, WritableSignal} from "@angular/core";
import {Badge} from "./badge.component";

@Injectable({providedIn: "root"})
export class BadgeService {
  private readonly _badges: WritableSignal<Badge[]> = signal([])

  addBadge(badge: Badge) {
    if (!this._badges().find(b => b.name === badge.name)) {
      this._badges.update(badges => [...badges, badge])
    }
  }

  removeBadge(badge: Badge) {
    this._badges.update(badges => badges.filter(b => b.name !== badge.name))
  }

  get badges(): Signal<Badge[]> {
    return this._badges.asReadonly()
  }
}

import {Injectable, Signal, signal, WritableSignal} from "@angular/core";
import {Item} from "../../core/domain/item";
import {BadgeService} from "../../shared/badge/badge.service";
import {Category} from "../../core/domain/category";
import {Badge} from "../../shared/badge/badge.component";

@Injectable({providedIn: 'root'})
export class EditItemService {
  private _item: WritableSignal<Item | undefined> = signal(undefined);

  constructor(private _badgeService: BadgeService) {
  }

  updateItem(item: Item) {
    this._item.update(() => item)
    this._badgeService.reset()
    this._item()?.category.forEach(category => this._badgeService.addBadge({name: category.name, icon: category.icon}))
  }

  get item(): Signal<Item | undefined> {
    return this._item.asReadonly();
  }

  removeBadge(badge: Badge) {
    this._badgeService.removeBadge(badge)
    this._item.update(item => {
      item!.category = item!.category.filter(category => category.name !== badge.name);
      return item
    })
  }

  addCategory(category: Category) {
    console.log(category)
    this.item()?.category.push(category)
    this._badgeService.addBadge({name: category.name, icon: category.icon})
  }
}

import {Injectable, Signal, signal, WritableSignal} from "@angular/core";
import {Item} from "../../core/domain/item";
import {BadgeService} from "../../shared/badge/badge.service";
import {Category} from "../../core/domain/category";
import {Badge} from "../../shared/badge/badge.component";
import {BackendDummyService} from "../../core/external/backend.service";
import {tap} from "rxjs";

@Injectable({providedIn: 'root'})
export class EditItemService {
  private _item: WritableSignal<Item | undefined> = signal(undefined);

  constructor(private _badgeService: BadgeService, private _backendService: BackendDummyService) {
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
  }

  addCategory(category: Category) {
    this._badgeService.addBadge({name: category.name, icon: category.icon})
  }

  saveItem(value: string) {
    this._item.update(item => {
      return {...item!, category: this.calculateChangedCategories()}
    })
    this._item.update(item => {
      return {...item!, price: parseFloat(value)}
    })
    this._backendService.updateItem(this._item()!)
  }

  private calculateChangedCategories() {
    let categories: Category[] = []
    this._badgeService.badges().forEach(badge => {
      this._backendService.findCategory(badge.name).pipe(
        tap(category => {
          if (category && !this.item()!.category.includes(category)) {
            categories.push(category)
          }
        })
      ).subscribe()
    })
    return categories;
  }
}

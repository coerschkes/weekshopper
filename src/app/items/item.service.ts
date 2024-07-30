import {Injectable, Signal, signal, WritableSignal} from "@angular/core";
import {Item} from "../core/domain/item";

@Injectable({providedIn: 'root'})
export class ItemService {
  private _item: WritableSignal<Item | undefined> = signal(undefined);

  updateItem(item: Item) {
    this._item.update(() => item)
  }

  get item(): Signal<Item | undefined> {
    return this._item.asReadonly();
  }

}

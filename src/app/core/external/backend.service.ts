import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Category} from "../domain/category";
import {Item} from "../domain/item";
import {environment} from "../../../environments/environment";

export interface BackendService {
  loadCategories(): Observable<Category[]>

  loadItems(): Observable<Item[]>

  updateItem(item: Item): void

  createItem(item: Item): void

  deleteItem(item: Item): void
}

@Injectable({providedIn: 'root'})
export class BackendDummyService implements BackendService {
  private _items: Item[] = [];

  constructor() {
    this._items = [{
      id: 1,
      name: "Test",
      price: 1.99,
      category: [environment.INITIAL_CATEGORIES[5]]
    },
      {
        id: 2,
        name: "Paprika",
        price: 0.99,
        category: [environment.INITIAL_CATEGORIES[0]]
      }
    ];
  }

  updateItem(item: Item): void {
    this._items = this._items.map(i => i.id === item.id ? item : i);
  }

  createItem(item: Item): void {
    if (this._items.find(i => i.id === item.id)) {
      throw new Error("Item already exists");
    } else {
      this._items.push(item);
    }
  }

  deleteItem(item: Item): void {
    this._items = this._items.filter(i => i.id !== item.id);
  }

  loadCategories(): Observable<Category[]> {
    return of(environment.INITIAL_CATEGORIES);
  }

  loadItems(): Observable<Item[]> {
    return of(Object.assign([], this._items))
  }
}

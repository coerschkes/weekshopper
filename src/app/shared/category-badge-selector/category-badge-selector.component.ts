import {Component, EventEmitter, Output} from '@angular/core';
import {Category} from "../../core/domain/category";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {map, Observable, of, startWith} from "rxjs";
import {BrowserService} from "../../browser.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AsyncPipe} from "@angular/common";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-category-badge-selector',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatInput
  ],
  templateUrl: './category-badge-selector.component.html',
  styleUrl: './category-badge-selector.component.scss'
})
export class CategoryBadgeSelectorComponent {
  @Output() onChange: EventEmitter<Category> = new EventEmitter();
  protected categoryControl: FormControl<string | null>;
  protected filteredCategories: Observable<string[]> = of();

  constructor(protected browserService: BrowserService) {
    this.categoryControl = new FormControl('', {
      updateOn: 'change',
    });
  }

  ngOnInit(): void {
    this.filteredCategories = this.categoryControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        if (value !== null) {
          return this._filter(value || '')
        } else {
          return []
        }
      }),
    );
  }

  emitSelection() {
    if (this.categoryControl.value !== undefined) {
      let categories = this.initialData.filter(value => value.name === this.categoryControl.value!);
      if (categories.length === 1) {
        this.onChange.emit(categories[0])
      }
      this.categoryControl.setValue('');
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.initialData.map(ed => ed.name).filter(edition => edition.toLowerCase().startsWith(filterValue));
  }

  initialData: Category[] = [
    {id: 1, name: "Vegetables", icon: "cabbage.png"},
    {id: 2, name: "Canned food", icon: "canned-food.png"},
    {id: 3, name: "Frozen food", icon: "frozen-food.png"},
    {id: 4, name: "Noodles", icon: "noodles.png"},
    {id: 5, name: "Drugstore", icon: "drugstore.png"}
  ]
}

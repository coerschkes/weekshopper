import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {map, Observable, of, startWith} from "rxjs";
import {BrowserService} from "../../browser.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AsyncPipe} from "@angular/common";
import {MatInput} from "@angular/material/input";

export interface Filterable {
  name: string
}

@Component({
  selector: 'app-autocomplete-selector',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatInput
  ],
  templateUrl: './autocomplete-selector.component.html',
  styleUrl: './autocomplete-selector.component.scss'
})
export class AutocompleteSelector implements OnInit {
  @Input() label!: string;
  @Input() fullDataset!: Filterable[];
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  protected inputControl: FormControl<string | null>;
  protected filteredValues: Observable<string[]> = of();

  constructor(protected browserService: BrowserService) {
    this.inputControl = new FormControl('', {
      updateOn: 'change',
    });
  }

  ngOnInit(): void {
    this.filteredValues = this.inputControl.valueChanges.pipe(
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
    if (this.inputControl.value !== undefined) {
      let filteredSelection = this.fullDataset.filter(value => value.name === this.inputControl.value!);
      if (filteredSelection.length === 1) {
        this.onChange.emit(filteredSelection[0])
      }
      this.inputControl.setValue('');
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.fullDataset.map(ed => ed.name).filter(edition => edition.toLowerCase().startsWith(filterValue));
  }
}

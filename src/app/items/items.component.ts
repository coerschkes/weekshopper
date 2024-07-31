import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FabService} from "../shared/fab/fab.service";
import {TableComponent} from "../shared/table/table.component";
import {Item} from "../core/domain/item";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {BrowserService} from "../browser.service";
import {MatIcon} from "@angular/material/icon";
import {ItemService} from "./item.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {EditItemComponent} from "./edit-item/edit-item.component";
import {EditItemService} from "./edit-item/edit-item.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-items',
  standalone: true,
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
  imports: [
    TableComponent,
    MatButton,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    MatIcon,
    MatFormFieldModule,
    FormsModule,
    MatInput,
    MatIconButton,
  ]
})
export class ItemsComponent implements OnInit, AfterViewInit, OnDestroy {
  // todo: Move into separate service -> substitute with connection to database later on
  dataSource: Item[] = [
    {
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
  ]

  @ViewChild('drawer') public drawer!: MatDrawer;

  constructor(protected fabService: FabService,
              protected itemService: ItemService,
              private _browserService: BrowserService,
              private _bottomSheet: MatBottomSheet,
              private _editItemService: EditItemService) {
  }

  openBottomSheet(item: Item): void {
    this._editItemService.updateItem(item)
    this._bottomSheet.open(EditItemComponent);
  }

  ngOnDestroy(): void {
    this._browserService.removeDrawer(this.drawer);
  }

  ngAfterViewInit(): void {
    this._browserService.bindDrawer(this.drawer)
  }

  toggleDrawer() {
    this.drawer.toggle()
  }

  ngOnInit(): void {
    this.fabService.createFabForRoute({
      Route: "/items",
      DisplayName: "Add",
      MobileIcon: "add",
      DesktopIcon: "my_library_add",
      Callback: () => {
        this.toggleDrawer()
      }
    })
  }
}

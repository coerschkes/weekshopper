import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FabService} from "../shared/fab/fab.service";
import {TableComponent} from "../shared/table/table.component";
import {Item} from "../core/domain/item";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {BrowserService} from "../browser.service";
import {MatIcon} from "@angular/material/icon";
import {ItemService} from "./item.service";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";

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
  dataSource: Item[] = [{id: 1, name: "test", image: "", price: 1.99}, {
    id: 2,
    name: "Paprika",
    image: "https://minio.luke-software.de/1000/articles/b1cde6db-3d27-4a95-8086-a002312fc372/98143-manss-frischeservice-paprika-rot-flow-3er-web.jpg",
    price: 0.99
  }]

  @ViewChild('drawer') public drawer!: MatDrawer;

  constructor(protected fabService: FabService,
              protected itemService: ItemService,
              private _browserService: BrowserService) {
  }

  ngOnDestroy(): void {
    this._browserService.removeDrawer(this.drawer);
  }

  ngAfterViewInit(): void {
    this._browserService.bindDrawer(this.drawer)
  }

  openDetailDrawer(item: Item) {
    this.itemService.updateItem(item)
    this.drawer.toggle()
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
        console.log("test")
      }
    })
  }
}

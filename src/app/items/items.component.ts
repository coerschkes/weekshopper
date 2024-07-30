import {Component, OnInit} from '@angular/core';
import {FabService} from "../shared/fab/fab.service";
import {TableComponent} from "../shared/table/table.component";
import {Item} from "../core/domain/item";

@Component({
  selector: 'app-items',
  standalone: true,
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
  imports: [
    TableComponent
  ]
})
export class ItemsComponent implements OnInit {
  dataSource: Item[] = [{id: 1, name: "test", image: "", market: [], price: 1.99}, {
    id: 2,
    name: "Paprika",
    image: "",
    market: [],
    price: 0.99
  }]

  constructor(protected fabService: FabService) {
  }

  log(data: any) {
    console.log(data)
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

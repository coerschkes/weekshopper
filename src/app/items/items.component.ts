import {Component, OnInit} from '@angular/core';
import {FabService} from "../shared/fab-loader/fab.service";

@Component({
  selector: 'app-items',
  standalone: true,
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent implements OnInit {
  constructor(protected fabService: FabService) {
  }

  ngOnInit(): void {
    console.log("creating fab")
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

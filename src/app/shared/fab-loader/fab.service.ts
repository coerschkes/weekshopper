import {RouteMapping} from "./fab.component";
import {BrowserService} from "../../browser.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class FabService {
  private readonly _routeMappings: Array<RouteMapping> = new Array<RouteMapping>();

  constructor(protected browserService: BrowserService) {
  }

  createFabForRoute(routeMapping: RouteMapping) {
    this.removeMapping(routeMapping);
    this._routeMappings.push(routeMapping)
  }

  matchedMapping(): RouteMapping | undefined {
    let routeMappings = this._routeMappings.filter(mapping => mapping.Route === this.browserService.currentRoute());
    if (routeMappings.length === 1) {
      return routeMappings[0];
    }
    return undefined
  }

  private removeMapping(routeMapping: RouteMapping) {
    let find = this._routeMappings.find(mapping => mapping.Route === routeMapping.Route);
    if (find) {
      const index = this._routeMappings.indexOf(find, 0);
      if (index > -1) {
        this._routeMappings.splice(index, 1);
      }
    }
  }
}

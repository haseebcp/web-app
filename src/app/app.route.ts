import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes=[

  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"**",
    redirectTo:"home",
    pathMatch:"full"
  }




]
export const routing = RouterModule.forRoot(appRoutes);

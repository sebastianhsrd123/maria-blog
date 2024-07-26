import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./modules/copmonents/pages/index/index.component";
import { WorkshopsComponent } from "./modules/copmonents/pages/workshops/workshops.component";
import { ResourcesComponent } from "./modules/copmonents/pages/resources/resources.component";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "workshop",
    component: WorkshopsComponent,
  },
  {
    path: "resources",
    component: ResourcesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

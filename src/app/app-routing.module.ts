import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./modules/copmonents/pages/index/index.component";
import { WorkshopsComponent } from "./modules/copmonents/pages/workshops/workshops.component";
import { ResourcesComponent } from "./modules/copmonents/pages/resources/resources.component";
import { SurveysComponent } from "./modules/copmonents/pages/surveys/surveys.component";
import { ProjectStoreComponent } from "./modules/copmonents/pages/project-store/project-store.component";
import { MindComputerComponent } from "./modules/copmonents/pages/mind-computer/mind-computer.component";

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
  {
    path: "surveys",
    component: SurveysComponent,
  },
  {
    path: "projects",
    component: ProjectStoreComponent,
  },
  {
    path: "computer",
    component: MindComputerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

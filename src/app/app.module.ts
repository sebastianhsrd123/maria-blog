import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/copmonents/header/header.component';
import { IndexComponent } from './modules/copmonents/pages/index/index.component';
import { InformationBoxComponent } from './modules/copmonents/information-box/information-box.component';
import { EducstivePlacesComponent } from './modules/copmonents/educstive-places/educstive-places.component';
import { FooterComponent } from './modules/copmonents/footer/footer.component';
import { WorkshopsComponent } from './modules/copmonents/pages/workshops/workshops.component';
import { ResourcesComponent } from './modules/copmonents/pages/resources/resources.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    InformationBoxComponent,
    EducstivePlacesComponent,
    FooterComponent,
    WorkshopsComponent,
    ResourcesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

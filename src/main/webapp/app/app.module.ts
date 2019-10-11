import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jhipster2SharedModule } from 'app/shared/shared.module';
import { Jhipster2CoreModule } from 'app/core/core.module';
import { Jhipster2AppRoutingModule } from './app-routing.module';
import { Jhipster2HomeModule } from './home/home.module';
import { Jhipster2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jhipster2SharedModule,
    Jhipster2CoreModule,
    Jhipster2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jhipster2EntityModule,
    Jhipster2AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class Jhipster2AppModule {}

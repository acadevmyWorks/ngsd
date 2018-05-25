import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { WidgetModule } from './widget/widget.module';
import { AppAuthModule } from './auth/auth.module';
import { AppSystemModule } from './system/system.module';
import { AppDashboardModule } from './dashboard/dashboard.module';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { SidenavListComponent } from './navigation/sidenav/sidenav-list.component';
import { UiService } from './shared/ui.service';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavListComponent
  ],
  imports: [
    WidgetModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AppAuthModule
  ],
  providers: [AuthService, UiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

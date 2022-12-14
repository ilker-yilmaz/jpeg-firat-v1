import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropComponent } from './components/drop/drop.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharebuttonComponent } from './components/sharebutton/sharebutton.component';
import { DeadlineanimationComponent } from './components/deadlineanimation/deadlineanimation.component';

import {ToastrModule} from "ngx-toastr";
import { ComparisonimageComponent } from './components/comparisonimage/comparisonimage.component';
import { SettingsComponent } from './components/settings/settings.component';
import { InputimageComponent } from './components/inputimage/inputimage.component';
import { OutputimageComponent } from './components/outputimage/outputimage.component';

import {AuthModule} from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { ImageCompressComponent } from './components/image-compress/image-compress.component'

import {NgxImageCompressService} from 'ngx-image-compress';
import { DropAndDragComponent } from './components/drop-and-drag/drop-and-drag.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuantizationTablesComponent } from './components/quantization-tables/quantization-tables.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DropComponent,
    NavbarComponent,
    SharebuttonComponent,
    DeadlineanimationComponent,
    ComparisonimageComponent,
    SettingsComponent,
    InputimageComponent,
    OutputimageComponent,
    AuthButtonComponent,
    ImageCompressComponent,
    DropAndDragComponent,
    FooterComponent,
    QuantizationTablesComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: environment.API_URL_AUTH0_DOMAIN,
      clientId: environment.API_URL_AUTH0_CLIENT_ID
    }),
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}


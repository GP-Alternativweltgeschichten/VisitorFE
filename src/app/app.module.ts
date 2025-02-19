import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PromptingComponent } from './prompting/prompting.component';
import {MenubarModule} from 'primeng/menubar';
import { ResetComponent } from './reset/reset.component';
import {Button} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {ToggleButtonModule} from "primeng/togglebutton";
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CalendarModule} from 'primeng/calendar';
import { ErrorComponent } from './error/error.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from "primeng/inputtext";
import { ThematicWorldsComponent } from './thematic-worlds/thematic-worlds.component';
import { ProgressComponent } from './progress/progress.component';
import {SliderModule} from 'primeng/slider';
import {OverlayPanelModule} from "primeng/overlaypanel";
import {RadioButtonModule} from 'primeng/radiobutton';

// Factory function for ngx-translate
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PromptingComponent,
    ResetComponent,
    HomeComponent,
    ErrorComponent,
    ThematicWorldsComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    Button,
    CardModule,
    ImageModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToggleButtonModule,
    FormsModule,
    SelectButtonModule,
    DialogModule,
    FileUploadModule,
    TableModule,
    ProgressSpinnerModule,
    CalendarModule,
    CheckboxModule,
    InputTextModule,
    SliderModule,
    OverlayPanelModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

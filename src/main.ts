/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { ErrorInterceptor } from './app/core/interceptors/ErrorInterceptor';
import { routes } from './app/app-routing.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([ErrorInterceptor])
    ),
  ],
}).catch((err) => console.error(err));
*/

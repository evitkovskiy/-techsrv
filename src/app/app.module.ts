import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NgRx
import { AppStoreModule } from './store/store.module';

// Components
import { AppComponent } from './app.component';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';

// Services 
import { RequestInterceptorService } from './interceptors/custom-http-interceptors';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { HeaderViewModule } from './views/header-view/header-view.module';
import { PageNotFoundModule } from './views/page-not-found/page-not-found.module';
import { MaterialExampleModule } from 'src/global/material.module';


@NgModule({
  declarations: [
    AppComponent, PreloaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStoreModule,
    HttpClientModule,
    MaterialExampleModule,
    PageNotFoundModule,
    HeaderViewModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

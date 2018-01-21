import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowCaseComponent } from './components/show-case/show-case.component';

import { SharedComponentModule } from './shared-component/shared-component.module';


@NgModule({
    declarations: [
        AppComponent,
        ShowCaseComponent,
    ],
    imports: [
        BrowserModule,
        SharedComponentModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

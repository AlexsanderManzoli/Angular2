import './util/rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {AppRoutingModule}  from './app-routing.module';
import {contatosModule} from './contatos/contatos.module';
import {DialogService} from './dialog.service';

@NgModule({
    imports:[
        AppRoutingModule,
        BrowserModule,
        contatosModule,
        HttpModule,
        FormsModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)        
    ],
    declarations:[AppComponent],
    providers:[
        DialogService
    ],
    bootstrap:[AppComponent]
})
export class AppModule{} 
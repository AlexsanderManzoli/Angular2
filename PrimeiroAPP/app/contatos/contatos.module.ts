import {NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ContatoBuscaComponent} from './contato-busca.component';
import {ContatoDetalheComponent} from './contato.detalhe.component';
import {ContatosListaComponent} from './contatos-lista.component';
import {ContatoRoutingModule} from './contato-routing.module';
import{ContatoService} from './contato.service';

@NgModule({
    imports:[
        CommonModule,
        ContatoRoutingModule,
        FormsModule
    ],
    declarations:[
        ContatoDetalheComponent,
        ContatosListaComponent,
        ContatoBuscaComponent
    ],
    exports:[
        ContatoBuscaComponent,
        ContatosListaComponent
    ],
    providers:[
        ContatoService
    ]  
})
export class contatosModule{}
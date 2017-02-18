import { Component,EventEmitter, OnInit,Input,OnChanges,Output,SimpleChanges,SimpleChange} from '@angular/core';
import {Router} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html'
})
export class ContatoBuscaComponent implements OnInit, OnChanges {

    @Input() busca:string;
    @Output() buscaChange:EventEmitter<String> = new EventEmitter<string>();
    contatos:Observable<Contato[]>;
    private termosdabusca:Subject<string> = new Subject<string>();

    constructor(
        private contatoService:ContatoService,
        private router:Router
    ) { }

    ngOnInit():void { 
        this.contatos = this.termosdabusca
        .debounceTime(300)//agauade por 300 milisegundo para fazer mais pesquisa
        .distinctUntilChanged()//ignore se o proximo termo de bsuca for igual o tero anterior
        .switchMap(term =>{
            return term? this.contatoService.search(term): Observable.of<Contato[]>([]);
        }).catch(err=>{
            console.log(err);
            return Observable.of<Contato[]>([]);
        });

        this.contatos.subscribe((contatos:Contato[])=>{
           console.log('retornou do servido',contatos); 
        });
    }

    ngOnChanges(changes:SimpleChanges):void{
        let busca:SimpleChange = changes['busca'];
        this.search(busca.currentValue);
    }


    search(termo:string):void{    
        this.termosdabusca.next(termo);
        this.buscaChange.emit(termo);
    }

    verDetalhe(contato:Contato):void{
        let link = ['contato/save',contato.id];
        this.router.navigate(link);
        this.buscaChange.emit('');
    }

}
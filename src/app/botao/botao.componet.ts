import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-botao',
    templateUrl:'./botao.component.html',
    styleUrls:['./botao.component.css']
})

export class BotaoComponent {

    @Input()
    largura:String
    @Input()
    altura:String
    @Input()
    funcao:String
    @Input()
    conteudo:String
    @Output()
    acaoBotao =new EventEmitter()

    
    acao(conteudo):void{
        this.acaoBotao.emit(conteudo)
    }

}
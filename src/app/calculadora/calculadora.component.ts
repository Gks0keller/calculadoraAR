import { Component } from "@angular/core";

@Component({
    selector: 'app-calculadora',
    templateUrl:'./calculadora.component.html',
    styleUrls:['./calculadora.component.css']
})

export class CalculadoraComponent {

    digitado:string=""

    colocarItem(conteudo):void{
        console.log(conteudo)   
        if(conteudo=="<--"){
            this.deletar()
        }else if(conteudo=="Apagar"){
            this.apagar()
        }else if(conteudo=="="){
            this.digitado=eval(this.digitado)
        } else{
            this.digitado+=conteudo;
        }
    }
    deletar():void {
        this.digitado=this.digitado.slice(0,this.digitado.length-1)
    }
    apagar():void{
        this.digitado=this.digitado.slice(0,0)
    }
}
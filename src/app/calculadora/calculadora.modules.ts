import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CalculadoraComponent } from "./calculadora.component";

@NgModule({
    declarations:[CommonModule],
    imports:[CalculadoraComponent],
    exports:[CalculadoraComponent]
})


export class CalculadoraModules{}
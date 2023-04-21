import { CommonModule } from "@angular/common";
import { NgModule, Output } from "@angular/core";
import { BotaoComponent } from "./botao.componet";

@NgModule({
    declarations:[CommonModule,Output],
    imports:[BotaoComponent],
    exports:[BotaoComponent]

})

export class BotaoModules {}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DisplayComponent } from "./display.component";

@NgModule({
    declarations:[CommonModule],
    imports:[DisplayComponent],
    exports: [DisplayComponent]

})

export class DisplayModules{}
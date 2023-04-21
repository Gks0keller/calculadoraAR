import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotaoComponent } from './botao/botao.componet';
import { DisplayComponent } from './display/display.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    DisplayComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

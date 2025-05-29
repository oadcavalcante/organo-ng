import { Component } from '@angular/core';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { LivroComponent } from './componentes/livro/livro.component';

@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent, LivroComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'organo';
}

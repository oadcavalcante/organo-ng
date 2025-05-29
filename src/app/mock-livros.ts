import { Livro } from './componentes/livro/livro';

export const livros: Livro[] = [
  {
    titulo: 'Mais Esperto que o Diabo',
    autoria: 'Napoleon Hill',
    genero: {
      id: 'pessoal',
      value: 'Desenvolvimento Pessoal',
      livros: [],
    },
    favorito: false,
    imagem: 'capa-mais-esperto-que-o-diabo.jpg',
  },
];

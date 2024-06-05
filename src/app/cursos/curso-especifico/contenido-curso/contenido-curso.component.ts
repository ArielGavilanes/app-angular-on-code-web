import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido-curso',
  templateUrl: './contenido-curso.component.html',
  styleUrls: ['./contenido-curso.component.css']
})
export class ContenidoCursoComponent implements OnInit {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

 

  sections: Section[] = [
    {
      title: 'Sección 1: Introducción',
      description: 'En esta sección, cubriremos los conceptos básicos de Angular y cómo empezar.',
      content: [
        { type: 'image', url: 'https://edteam-media.s3.amazonaws.com/blogs/original/152d4886-6290-4084-8de9-28a382fd40d1.png' }
      ]
    },
    {
      title: 'Sección 2: Componentes y Directivas',
      description: 'En esta sección, profundizaremos en los componentes y directivas de Angular.',
      content: [
        { type: 'image', url: 'https://i.ytimg.com/vi/v-CDlR2neQA/maxresdefault.jpg' }
      ]
    },
    {
      title: 'Sección 3: Servicios y Routing',
      description: 'En esta sección, exploraremos los servicios y el enrutamiento en Angular.',
      content: [
        { type: 'image', url: 'https://miro.medium.com/v2/resize:fit:869/1*tS8pIuNVtIUJK8LnB2XShg.jpeg' }
      ]
    }
  ];

  nodes: any[] | undefined;
  selectedNodes: any[] | undefined;

  ngOnInit() {
    this.nodes = [
      {
        label: 'Texto',
        data: 'Texto',
        icon: 'pi pi-file'
      },
      {
        label: 'Imagen',
        data: 'Imagen',
        icon: 'pi pi-image'
      },
      {
        label: 'Video',
        data: 'Video',
        icon: 'pi pi-video'
      }
    ];

    this.selectedNodes = [];
  }
}

interface Section {
  title: string;
  description: string;
  content: ContentItem[];
}


interface ContentItem {
  type: 'image';
  value?: string;
  url?: string; // Hacer esta propiedad opcional también

}

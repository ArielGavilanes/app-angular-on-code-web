import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CertificacionService } from 'src/app/service/certificacion.service';

@Component({
  selector: 'app-contenido-curso',
  templateUrl: './contenido-curso.component.html',
  styleUrls: ['./contenido-curso.component.css'],
})
export class ContenidoCursoComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private certificacionService: CertificacionService
  ) {}

  generarCertificado() {
    return this.certificacionService.generarCertificado()
  }
  visible: boolean = false;

  @Input() contenidoDeCurso: any;

  showDialog() {
    this.visible = true;
  }

  getPortadaBase64(portadaCurso: any): string {
    const buffer = portadaCurso?.data;
    const array = Array.from(new Uint8Array(buffer));
    const binary = array.map((byte) => String.fromCharCode(byte)).join('');
    return 'data:image;base64,' + btoa(binary);
  }

  generarEnlaceIncrustadoYouTube(link: string): SafeResourceUrl | null {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([^\/\n\s]+)/;
    const match = link.match(regex);
    if (match) {
      const codigo = match[1];
      const enlaceIncrustado = 'https://www.youtube.com/embed/' + codigo;
      return this.sanitizer.bypassSecurityTrustResourceUrl(enlaceIncrustado);
    }
    return null;
  }

  encodeURIcomponent(title: string): string {
    return encodeURIComponent(title);
  }
  sections: Section[] = [
    {
      title: 'Sección 1: Introducción',
      description:
        'En esta sección, cubriremos los conceptos básicos de Angular y cómo empezar.',
      content: [
        {
          type: 'image',
          url: 'https://edteam-media.s3.amazonaws.com/blogs/original/152d4886-6290-4084-8de9-28a382fd40d1.png',
        },
      ],
    },
    {
      title: 'Sección 2: Componentes y Directivas',
      description:
        'En esta sección, profundizaremos en los componentes y directivas de Angular.',
      content: [
        {
          type: 'image',
          url: 'https://i.ytimg.com/vi/v-CDlR2neQA/maxresdefault.jpg',
        },
      ],
    },
    {
      title: 'Sección 3: Servicios y Routing',
      description:
        'En esta sección, exploraremos los servicios y el enrutamiento en Angular.',
      content: [
        {
          type: 'image',
          url: 'https://miro.medium.com/v2/resize:fit:869/1*tS8pIuNVtIUJK8LnB2XShg.jpeg',
        },
      ],
    },
  ];

  nodes: any[] | undefined;
  selectedNodes: any[] | undefined;

  ngOnInit() {
    this.nodes = [
      {
        label: 'Texto',
        data: 'Texto',
        icon: 'pi pi-file',
      },
      {
        label: 'Imagen',
        data: 'Imagen',
        icon: 'pi pi-image',
      },
      {
        label: 'Video',
        data: 'Video',
        icon: 'pi pi-video',
      },
    ];

    this.selectedNodes = [];

    console.log('contenido', this.contenidoDeCurso);
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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ConfirmationService, TreeNode } from 'primeng/api';
import { CertificacionService } from 'src/app/service/certificacion.service';

@Component({
  selector: 'app-contenido-curso',
  templateUrl: './contenido-curso.component.html',
  styleUrls: ['./contenido-curso.component.css'],
})
export class ContenidoCursoComponent implements OnInit {
  @Input() id_rol: number | null = 0;
  @Input() curso: any;

  @Input() permission: boolean = false;
  onUpload(event: any) {
    if (event.files.length > 0) {
      this.uploaded = true;
      this.archivoSubidoNombre = event.files[0].name;

      this.uploadedFile = event.files[0];
      this.imagen_contenido = this.uploadedFile;
    }
  }
  @Input() id_curso: any;
  url_video: any | undefined;
  texto: any | undefined;
  imagen_contenido: any | undefined;

  emitDataForCreateContent() {
    this.formSubmitted = true;

    this.dataForCreateContent.nombre_seccion_contenido =
      this.crearContenidoForm.get('nombre_seccion_contenido')?.value;

    this.dataForCreateContent.descripcion_contenido =
      this.crearContenidoForm.get('descripcion_contenido')?.value;

    this.dataForCreateContent.id_categoria =
      this.crearContenidoForm.get('id_categoria')?.value.data;

    this.url_video = this.crearContenidoForm.get('url_video')?.value;

    this.texto = this.crearContenidoForm.get('texto')?.value;

    if (this.texto || this.url_video || this.imagen_contenido) {
      this.errorMessage = '';

      if (this.url_video) {
        this.dataForCreateContent.url_video_contenido = this.url_video;
      }

      if (this.texto) {
        this.dataForCreateContent.texto_contenido = this.texto;
      }

      if (this.imagen_contenido) {
        this.dataForCreateContent.imagen_contenido = this.imagen_contenido;
      }

      if (this.crearContenidoForm.valid) {
        const data = {
          ...this.dataForCreateContent,
          id_curso: this.id_curso,
        };

        const formData = new FormData();
        for (const key in data) {
          formData.append(key, data[key]);
        }

        this.emitirData.emit(data);
      }
    } else {
      this.errorMessage = 'Este campo es obligatorio';
    }
  }

  @Output() emitirData: EventEmitter<any> = new EventEmitter<any>();

  dataForCreateContent: any = {};

  errorMessage: string = '';

  formSubmitted: boolean = false;

  crearContenidoForm: FormGroup = new FormGroup({}); // FormGroup para el formulario

  archivoSubidoNombre: string = '';

  uploadedFile: any = null;

  uploaded: boolean = false;
  constructor(
    private sanitizer: DomSanitizer,
    private certificacionService: CertificacionService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService
  ) {
    this.crearContenidoForm = this.formBuilder.group({
      nombre_seccion_contenido: ['', [Validators.required]],
      descripcion_contenido: ['', [Validators.required]],
      id_categoria: ['', [Validators.required]],
      url_video: [''],
      texto: [''],
    });
  }

  @Input() tiposContenido: TreeNode[] = [];
  opcionSeleccionada: any | undefined;

  generarCertificado() {
    return this.certificacionService.generarCertificado();
  }
  visible: boolean = false;

  @Input() contenidoDeCurso: any;

  @Output() emitirDataParaMatricula: EventEmitter<any> =
    new EventEmitter<any>();

  showDialog() {
    this.visible = true;
  }

  matricula: any = {};
  comprarCurso(event: Event) {
    this.confirmationService.confirm({
      message: '¿Comprar este curso?',
      header: 'Confirmación',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      icon: 'pi pi-exclamation-circle',
      accept: () => {
        this.matricula = { id_curso: this.curso.id_curso };
        this.emitirDataParaMatricula.emit(this.matricula);
      },
      reject: () => {
        console.log('Compra cancelada');
      },
    });
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

  ngOnInit() {
    console.log('tipo en componente', this.tiposContenido);
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

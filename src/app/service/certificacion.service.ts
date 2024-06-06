import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf'; // Importa la biblioteca jsPDF

@Injectable({
  providedIn: 'root',
})
export class CertificacionService {
  constructor() {} // Constructor del servicio

  generarCertificado(): void {
    const doc = new jsPDF.jsPDF({ // Crea una instancia de jsPDF con configuración personalizada
      orientation: 'landscape', // Orientación horizontal
      unit: 'px', // Unidad de medida en píxeles
      format: [800, 600] // Tamaño personalizado (ancho x alto)
    });

    // Fondo blanco
    doc.setFillColor('#fff'); // Establece el color de relleno en blanco
    doc.rect( // Dibuja un rectángulo blanco que cubre toda la página
      0,
      0,
      doc.internal.pageSize.getWidth(), // Ancho de la página
      doc.internal.pageSize.getHeight(), // Alto de la página
      'F' // 'F' indica que el rectángulo se rellena con el color establecido
    );

    // Texto "Certificado"
    doc.setTextColor('#000'); // Establece el color del texto en negro
    doc.setFontSize(48); // Establece el tamaño de fuente en 48 puntos
    doc.text('Certificado', doc.internal.pageSize.getWidth() / 2, 100, { // Agrega el texto centrado en la página
      align: 'center',
    });

    // Texto "Por haber completado el curso"
    doc.setFontSize(24); // Establece el tamaño de fuente en 24 puntos
    doc.text(
      'Por haber completado el curso',
      doc.internal.pageSize.getWidth() / 2,
      200,
      { align: 'center' } // Agrega el texto centrado en la página
    );

    // Texto "de Angular"
    doc.text('de Angular', doc.internal.pageSize.getWidth() / 2, 250, { // Agrega el texto centrado en la página
      align: 'center',
    });

    // Descarga del PDF
    doc.save('certificado.pdf'); // Guarda el PDF con el nombre "certificado.pdf"
  }
}

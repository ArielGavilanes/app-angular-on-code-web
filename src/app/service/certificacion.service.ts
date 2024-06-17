import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class CertificacionService {
  logoPath = 'assets/img/onCodeWeb.png';
  logoWidth = 200;

  constructor() {}

  generarCertificado(cursoNombre: string, estudianteNombre: string): void {
    const doc = new jsPDF.jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [800, 600],
    });

    doc.setFillColor('#000');
    doc.rect(
      0,
      0,
      doc.internal.pageSize.getWidth(),
      doc.internal.pageSize.getHeight(),
      'F'
    );

    const logoImg = new Image();
    logoImg.src = this.logoPath;
    const logoHeight = (logoImg.height * this.logoWidth) / logoImg.width;
    const startX = (doc.internal.pageSize.getWidth() - this.logoWidth) / 2;
    const startY = 50;
    doc.addImage(logoImg, 'PNG', startX, startY, this.logoWidth, logoHeight);

    doc.setTextColor('#fff');
    doc.setFontSize(58);
    doc.text(
      'Certificado de reconocimiento',
      doc.internal.pageSize.getWidth() / 2,
      250,
      {
        align: 'center',
      }
    );

    doc.setFontSize(44);
    doc.text('otorgado a', doc.internal.pageSize.getWidth() / 2, 300, {
      align: 'center',
    });

    doc.setFontSize(44);
    doc.setFont('times', 'italic');
    doc.text(estudianteNombre, doc.internal.pageSize.getWidth() / 2, 350, {
      align: 'center',
    });

    doc.setLineWidth(2);
    doc.setDrawColor('#fff');
    doc.line(
      doc.internal.pageSize.getWidth() / 2 - 150,
      360,
      doc.internal.pageSize.getWidth() / 2 + 150,
      360
    );

    doc.setFontSize(28);
    doc.setFont('times', 'normal');
    doc.text(
      'Por haber completado el curso de',
      doc.internal.pageSize.getWidth() / 2,
      400,
      {
        align: 'center',
      }
    );

    doc.setFontSize(28);
    doc.text(cursoNombre, doc.internal.pageSize.getWidth() / 2, 430, {
      align: 'center',
    });

    doc.save('certificado.pdf');
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeComponent as ExternalQRCodeComponent } from 'angularx-qrcode'; // 👈 renamed import

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [CommonModule, ExternalQRCodeComponent], // 👈 use renamed import
  templateUrl: './qr-code.html',
  styleUrls: ['./qr-code.scss']
})
export class QRCodeDisplayComponent {
qrValue = 'http://192.168.243.43:4200/login';
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner'; // ✅ FIXED

@Component({
  selector: 'app-scan',
  standalone: true,
  imports: [CommonModule, FormsModule, ZXingScannerModule],
  templateUrl: './scan.html',
  styleUrls: ['./scan.scss']
})
export class ScanComponent {
  scanned = false;
customerName: any;
customerMobile: any;

  constructor(private router: Router) {}

  handleScan(result: string) {
    if (!this.scanned) {
      this.scanned = true;
      this.router.navigate(['/login']); // ✅ Simple redirect to login
    }
  }
}

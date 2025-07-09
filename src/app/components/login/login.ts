import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  customerName: string = '';
  customerMobile: string = '';
tableNumber:string='';
  constructor(private router: Router) {}

  submitLogin() {
    const customerData = {
      name: this.customerName,
      mobile: this.customerMobile,
    table: this.tableNumber  // 👈 Important
    };

    localStorage.setItem('customerInfo', JSON.stringify(customerData));
    this.router.navigate(['/menu']);
  }
}

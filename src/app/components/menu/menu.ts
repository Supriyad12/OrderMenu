import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class MenuComponent {
  customerName: string = '';
  customerMobile: string = '';
tableNumber;
showPaymentPopup: boolean = false;

  cart: any[] = [];
  showBill: boolean = false;
orderConfirmed: boolean = false;
orderTime: Date = new Date(); // save time

  foodItems = [
    {
      category: 'Starter',
      items: [
        { name: 'Veg Manchurian', price: 160 },
        { name: 'Paneer Tikka', price: 190 },
        { name: 'Sweet Corn Soup', price: 110 }
      ]
    },
    {
      category: 'Main Course',
      items: [
        { name: 'Paneer Butter Masala', price: 220 },
        { name: 'Veg Biryani', price: 180 },
        { name: 'Tandoori Roti', price: 25 }
      ]
    },
    {
      category: 'Dessert',
      items: [
        { name: 'Gulab Jamun', price: 50 },
        { name: 'Rasgulla', price: 60 },
        { name: 'Ice Cream', price: 70 }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {
  const data = localStorage.getItem('customerInfo');
if (data) {
  const customer = JSON.parse(data);
  this.customerName = customer.name || '';
  this.customerMobile = customer.mobile || '';
  this.tableNumber = customer.table || 'Unknown';
}
  }

  addToCart(item: any) {
    this.cart.push(item);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  toggleBill() {
    this.showBill = !this.showBill;
  }

  scrollToCart() {
    const cartElement = document.querySelector('.cart-section');
    if (cartElement) {
      cartElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  get total(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }
  placeOrder() {
  this.showPaymentPopup = true;
}

confirmPayment() {
  const order = {
    customerName: this.customerName,
    customerMobile: this.customerMobile,
    tableNumber: this.tableNumber,
    items: this.cart,
    total: this.total,
    time: new Date()
  };

  localStorage.setItem('lastOrder', JSON.stringify(order));

  this.orderTime = order.time;
  this.orderConfirmed = true;
  this.showBill = true;
  this.showPaymentPopup = false;

  alert('✅ Payment successful. Order placed!');
}


}

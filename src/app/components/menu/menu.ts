import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.service';

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
  tableNumber: string | number = 'Unknown';

  foodItems: any[] = [];
  cart: any[] = [];

  showBill: boolean = false;
  showPaymentPopup: boolean = false;
  orderConfirmed: boolean = false;
  orderTime: Date = new Date();

  confirmedItems: any[] = [];
  confirmedTotal: number = 0;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {
    // Load customer info from local storage
    const data = localStorage.getItem('customerInfo');
    if (data) {
      const customer = JSON.parse(data);
      this.customerName = customer.name || '';
      this.customerMobile = customer.mobile || '';
      this.tableNumber = customer.table || 'Unknown';
    }

    // Load food items from service
    this.foodItems = this.menuService.getMenu();
  }

  // Add item to cart or increase quantity
  addToCart(item: any) {
    const existing = this.cart.find(i => i.name === item.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
  }

  // Decrease quantity or remove item
  decreaseQuantity(index: number) {
    const item = this.cart[index];
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.cart.splice(index, 1);
    }
  }

  // Remove item from cart
  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  // Show/hide bill section
  toggleBill() {
    this.showBill = !this.showBill;
  }

  // Calculate total bill
  get total(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Open payment popup
  placeOrder() {
    this.showPaymentPopup = true;
    this.showBill = false;
  }

  // Confirm payment and finalize order
  confirmPayment() {
    const order = {
      customerName: this.customerName,
      customerMobile: this.customerMobile,
      tableNumber: this.tableNumber,
      items: this.cart,
      total: this.total,
      time: new Date()
    };

    // Save to localStorage for history
    localStorage.setItem('lastOrder', JSON.stringify(order));

    // Store confirmed items separately for final display
    this.confirmedItems = [...this.cart];
    this.confirmedTotal = this.total;
    this.orderTime = order.time;

    // Finalize order and reset
    this.orderConfirmed = true;
    this.cart = [];
    this.showBill = false;
    this.showPaymentPopup = false;
  }
}

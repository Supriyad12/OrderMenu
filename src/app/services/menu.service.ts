// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class Menu {

//   constructor() { }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private foodItems = [
    {
      category: 'Starter',
      items: [
        { name: 'Veg Manchurian', price: 160 },
        { name: 'Paneer Tikka', price: 190 },
        { name: 'Sweet Corn Soup', price: 110 },
        { name: 'Spring Rolls', price: 150 },
        { name: 'Hara Bhara Kabab', price: 170 },
        { name: 'Crispy Corn', price: 140 }
      ]
    },
    {
      category: 'Main Course',
      items: [
        { name: 'Paneer Butter Masala', price: 220 },
        { name: 'Veg Biryani', price: 180 },
        { name: 'Tandoori Roti', price: 25 },
        { name: 'Dal Makhani', price: 150 },
        { name: 'Shahi Paneer', price: 210 },
        { name: 'Kadai Mushroom', price: 200 },
        { name: 'Mix Veg Curry', price: 170 },
        { name: 'Jeera Rice', price: 130 }
      ]
    },
    {
      category: 'South Indian',
      items: [
        { name: 'Masala Dosa', price: 100 },
        { name: 'Idli Sambhar', price: 80 },
        { name: 'Medu Vada', price: 90 },
        { name: 'Uttapam', price: 95 },
        { name: 'Pongal', price: 85 },
        { name: 'Rava Dosa', price: 110 },
        { name: 'Onion Dosa', price: 120 }
      ]
    },
    {
      category: 'Chinese',
      items: [
        { name: 'Veg Noodles', price: 130 },
        { name: 'Fried Rice', price: 120 },
        { name: 'Chilli Paneer', price: 160 },
        { name: 'Schezwan Rice', price: 140 },
        { name: 'Veg Hakka Noodles', price: 135 },
        { name: 'Manchow Soup', price: 100 },
        { name: 'Gobi 65', price: 150 }
      ]
    },
    {
      category: 'Pizza',
      items: [
        { name: 'Margherita Pizza', price: 220 },
        { name: 'Farmhouse Pizza', price: 280 },
        { name: 'Paneer Tikka Pizza', price: 260 },
        { name: 'Cheese Burst Pizza', price: 300 },
        { name: 'Veggie Delight Pizza', price: 240 }
      ]
    },
    {
      category: 'Burger & Sandwich',
      items: [
        { name: 'Veg Burger', price: 120 },
        { name: 'Cheese Burger', price: 150 },
        { name: 'Grilled Sandwich', price: 110 },
        { name: 'Club Sandwich', price: 130 },
        { name: 'Paneer Sandwich', price: 140 }
      ]
    },
    {
      category: 'Dessert',
      items: [
        { name: 'Gulab Jamun', price: 50 },
        { name: 'Rasgulla', price: 60 },
        { name: 'Ice Cream', price: 70 },
        { name: 'Chocolate Brownie', price: 90 },
        { name: 'Fruit Salad', price: 65 },
        { name: 'Falooda', price: 100 },
        { name: 'Kulfi', price: 80 }
      ]
    },
    {
      category: 'Beverages',
      items: [
        { name: 'Lassi', price: 40 },
        { name: 'Soft Drink', price: 30 },
        { name: 'Masala Tea', price: 20 },
        { name: 'Cold Coffee', price: 60 },
        { name: 'Fresh Lime Soda', price: 50 },
        { name: 'Iced Tea', price: 55 },
        { name: 'Milkshake', price: 70 }
      ]
    }
  ];

  constructor() {}

  getMenu() {
    return this.foodItems;
  }
}

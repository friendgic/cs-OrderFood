export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  items: CartItem[];
  message: string;
  total: number;
  timestamp: Date;
}



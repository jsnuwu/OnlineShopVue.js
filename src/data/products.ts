import type { Product } from '../types/product'
import WhiteShirtImg from '../assets/images/t-shirts/WhiteShirt.png'
import BlackShirtImg from '../assets/images/t-shirts/BlackShirt.png'
import BlackHoodieImg from '../assets/images/hoodies/BlackHoodie.png'
import WhiteHoodieImg from '../assets/images/hoodies/WhiteHoodie.png'
import WhiteShoesImg from '../assets/images/shoes/WhiteShoes.png'  


export const products: Product[] = [
  { id: 1, name: 'WhiteShirt', price: 20, description: 'Cooles T-Shirt', image: WhiteShirtImg },
  { id: 2, name: 'BlackShirt', price: 20, description: 'Cooles T-Shirt', image: BlackShirtImg },
  { id: 3, name: 'BlackHoodie', price: 40, description: 'Warmer Hoodie', image: BlackHoodieImg },
  { id: 4, name: 'WhiteHoodie', price: 40, description: 'Warmer Hoodie', image: WhiteHoodieImg },
  { id: 5, name: 'WhiteShoes', price: 60, description: 'Stylische Sneaker', image: WhiteShoesImg },
]

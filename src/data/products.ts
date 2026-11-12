import type { Product } from '../types/product'
import WhiteShirtImg from '../assets/images/t-shirts/WhiteShirt.png'
import BlackShirtImg from '../assets/images/t-shirts/BlackShirt.png'
import BlackHoodieImg from '../assets/images/hoodies/BlackHoodie.png'
import WhiteHoodieImg from '../assets/images/hoodies/WhiteHoodie.png'
import WhiteShoesImg from '../assets/images/shoes/WhiteShoes.png'  


export const products: Product[] = [
  { id: 1, name: 'T-Shirt — White', price: 20, description: 'Unkompliziertes Shirt aus weichem Jersey.', image: WhiteShirtImg },
  { id: 2, name: 'T-Shirt — Black', price: 20, description: 'Ein ruhiger Klassiker für jeden Tag.', image: BlackShirtImg },
  { id: 3, name: 'Hoodie — Black', price: 40, description: 'Wärmender Layer mit entspannter Silhouette.', image: BlackHoodieImg },
  { id: 4, name: 'Hoodie — White', price: 40, description: 'Leichter Hoodie in klarer, heller Optik.', image: WhiteHoodieImg },
  { id: 5, name: 'Sneaker — White', price: 60, description: 'Reduzierter Sneaker für den Alltag.', image: WhiteShoesImg },
]

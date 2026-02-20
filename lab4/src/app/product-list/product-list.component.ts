import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 14',
    description: 'Apple iPhone 14 — 128 GB, смартфон с отличной камерой и высоким качеством.',
    price: 450000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23',
    description: 'Samsung Galaxy S23 — мощный смартфон с ярким дисплеем.',
    price: 420000,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/hf4/86025936404510.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h56/hf4/86025936404510.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd1/h4a/86025936437278.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3a/h7b/86025936502814.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000'
  },
  {
    id: 3,
    name: 'Samsung Galaxy S24',
    description: 'Samsung Galaxy S24 — следующий уровень камеры и производительности.',
    price: 480000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb9/hec/84952826642462.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb9/hec/84952826642462.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h73/h08/84952826675230.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9d/h73/84952826740766.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-zelenyi-128142993/?c=750000000'
  },
  {
    id: 4,
    name: 'Apple iPhone 15',
    description: 'Apple iPhone 15 — новая модель с обновлённой камерой.',
    price: 580000,
    rating: 4.8,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777971',
    images: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777971',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777491',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923778550'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
  },
  {
    id: 5,
    name: 'Apple iPhone 16 Pro',
    description: 'Apple iPhone 16 Pro — флагманский смартфон с мощным чипом A18 Pro.',
    price: 680000,
    rating: 4.9,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1725247102053',
    images: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1725247102053',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1725247102555',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1725247102008'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
  },
  {
    id: 6,
    name: 'Apple iPhone 13',
    description: 'Apple iPhone 13 — проверенная временем классика с отличной автономностью.',
    price: 320000,
    rating: 4.9,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1656455648589',
    images: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1656455648589',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1656455641774',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1656455641551'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
  },
  {
    id: 7,
    name: 'Apple AirPods Pro 2',
    description: 'Apple AirPods Pro 2 — беспроводные наушники с активным шумоподавлением.',
    price: 120000,
    rating: 4.8,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985',
    images: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014872017',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871810'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
  },
  {
    id: 8,
    name: 'Apple AirPods 3',
    description: 'Apple AirPods 3 — комфортные наушники с поддержкой пространственного аудио.',
    price: 950000,
    rating: 4.7,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000',
    images: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861331000',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861336000'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=750000000'
  },
  {
    id: 9,
    name: 'Apple MacBook Pro 14',
    description: 'Apple MacBook Pro 14" — мощный ноутбук для творческих задач.',
    price: 1500000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pb6/p44/15673150.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pb6/p44/15673150.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p7e/p44/15673152.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p9a/p44/15673151.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-8-gb-ssd-512-gb-macos-mtl73-114455855/'
  },
  {
    id: 10,
    name: 'Asus ROG Strix SCAR',
    description: 'Asus ROG Strix SCAR — игровой ноутбук с высокой производительностью.',
    price: 950000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pa2/p4a/32805163.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pa2/p4a/32805163.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p69/p4a/32805165.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p4d/p4a/32805166.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-scar-18-g834jy-n6036w-90nr0cg1-m001l0-chernyi-109041285/'
  }
];

  currentImageIndex: number[] = [];

  constructor() {
    this.currentImageIndex = this.products.map(() => 0);
  }

  setCurrentImage(productIndex: number, imageIndex: number) {
    this.currentImageIndex[productIndex] = imageIndex;
  }

  prevImage(productIndex: number) {
    const length = this.products[productIndex].images.length;
    this.currentImageIndex[productIndex] =
      (this.currentImageIndex[productIndex] - 1 + length) % length;
  }

  nextImage(productIndex: number) {
    const length = this.products[productIndex].images.length;
    this.currentImageIndex[productIndex] =
      (this.currentImageIndex[productIndex] + 1) % length;
  }

  shareWhatsApp(product: Product) {
    const url = `https://wa.me/?text=${encodeURIComponent(`Check out this product: ${product.link}`)}`;
    window.open(url, '_blank');
  }

  shareTelegram(product: Product) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }
}
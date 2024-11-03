import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cuisineItems = [
    {
      id: 1,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/11/3/fdde9ae7-1ec7-4490-a244-ed4b03185906_sandwich.png',
      altTag: 'restaurants curated for sandwich'
    },
    {
      id: 2,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png',
      altTag: 'restaurants curated for biryani'
    },
    {
      id: 3,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
      altTag: 'restaurants curated for pizza'
    },
    {
      id: 4,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png',
      altTag: 'restaurants curated for burger'
    },
    {
      id: 5,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png',
      altTag: 'restaurants curated for dosa'
    },
    {
      id: 6,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png',
      altTag: 'restaurants curated for south indian'
    },
    {
      id: 7,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png',
      altTag: 'restaurant curated for shawarma'
    },
    {
      id: 8,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png',
      altTag: 'restaurant curated for chinese'
    },
    {
      id: 9,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png',
      altTag: 'restaurant curated for cake'
    },
    {
      id: 10,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North Indian.png',
      altTag: 'restaurants curated for north indian'
    },
    {
      id: 11,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png',
      altTag: 'restaurants curated for shakes'
    },
    {
      id: 12,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png',
      altTag: 'restaurants curated for idly'
    },
    {
      id: 13,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate icecream.png',
      altTag: 'restaurants curated for icecream'
    },
    {
      id: 14,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png',
      altTag: 'restaurants curated for paratha'
    },
    {
      id: 15,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png',
      altTag: 'restaurants curated for khichdi'
    },
    {
      id: 16,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png',
      altTag: 'restaurant curated for noodles'
    },
    {
      id: 17,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png',
      altTag: 'restaurants curated for roll'
    },
    {
      id: 18,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png',
      altTag: 'restaurant curated for Pastry'
    },
    {
      id: 19,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad.png',
      altTag: 'restaurant curated for salad'
    },
    {
      id: 20,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png',
      altTag: 'restaurant curated for poori'
    }
  ];

  restaurantChains = [
    {
      id: 1,
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/0ea1daf5-b64e-43d2-80db-b460ed92e05c_11091.jpg',
      alt: 'Pizza Hut',
      restaurantName: 'Pizza Hut',
      rating: '4.1 • 25-30 mins',
      desc: 'Pizzas',
      location: 'Attapur'
    },
    {
      id: 2,
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1ba9479c-6527-4f4f-a2e6-f8c070a2171c_655339.JPG',
      alt: 'KFC',
      restaurantName: 'KFC',
      rating: '4.1 • 15-20 mins',
      desc: 'Burgers, Fast Food, Rolls & Wraps',
      location: 'Inner Ring Road'
    },
    {
      id: 3,
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_362596.JPG',
      alt: 'Burger King',
      restaurantName: 'Burger King',
      rating: '4.1 • 20-25 mins',
      desc: 'Burgers, American',
      location: 'Attapur'
    },
    {
      id: 4,
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qems028i3da5rxf81rbp',
      alt: 'Lucky Restaurant',
      restaurantName: 'Lucky Restaurant',
      rating: '4.1 • 35-40 mins',
      desc: 'Biryani, Tandoor',
      location: 'Banjara Hills'
    },
    {
      id: 5,
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/b3739937-c8ca-40ea-96cd-03b049b4600e_612602.JPG',
      alt: 'Kwality Walls Ice Cream and More',
      restaurantName: 'Kwality Walls Ice Cream',
      rating: '4.6 • 20-25 mins',
      desc: 'Desserts, Ice Cream, Ice Cream...',
      location: 'Charminar'
    },
    {
      id: 6,
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11',
      alt: 'The Belgian Waffle Co.',
      restaurantName: 'The Belgian Waffle Co.',
      rating: '4.5 • 35-40 mins',
      desc: 'Waffle, Desserts, Ice Cream',
      location: 'Attapur'
    },
    {
      id: 7,
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/14/5648d5ba-577a-4e2e-95cb-75d661b0ac6d_376914.JPG',
      alt: 'Theobroma',
      restaurantName: 'Theobroma',
      rating: '4.6 • 30-35 mins',
      desc: 'Desserts',
      location: 'Somajiguda & Khairtabad'
    },
    {
      id: 8,
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b374f789191669e20eb97a17f01bf23f',
      alt: 'Dum Safar Biryani',
      restaurantName: 'Dum Safar Biryani',
      rating: '3.8 • 30-35 mins',
      desc: 'Biryani, Kebabs, Tandoor, Indian',
      location: 'Attapur'
    },
    {
      id: 9,
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yeednzto1jusnnhswke0',
      alt: 'Imperial Multicuisine Restaurant',
      restaurantName: 'Imperial Multicuisine',
      rating: '4.3 • 25-30 mins',
      desc: 'Biryani, Chinese, Indian, Kebabs',
      location: 'Mehdipatnam'
    },
    {
      id: 10,
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ks4d93rjtcbitkzkbqx0',
      alt: 'Shah Ghouse Hotel &amp; Restaurant',
      restaurantName: 'Shah Ghouse Hotel',
      rating: '4.3 • 25-30 mins',
      desc: 'Biryani, Chinese, Mughlai, Tandoor',
      location: 'Tolichowki'
    }
  ]

}

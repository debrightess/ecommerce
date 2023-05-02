import productImg01 from '../images/playstation-01.jpg'
import productImg02 from '../images/series-x.jpg'
import productImg03 from '../images/console1.jpg'
import productImg04 from '../images/ps4-slim.webp'
import productImg05 from '../images/2.jpg'

import productImg06 from '../images/1.jpg'
import productImg07 from '../images/3.jpg'
import productImg08 from '../images/hp-01.jpg'
import productImg09 from '../images/iphone-11-pro-max.jpg'

import productImg10 from '../images/iphone-12.jpg'
import productImg11 from '../images/phone-02.jpg'
import productImg12 from '../images/iphone-14.jpg'
import productImg13 from '../images/iphone-14-pro.jpg'
import productImg14 from '../images/iphone-14-pro-max.jpg'
import productImg15 from '../images/samsung-galaxy-s23.jpg'

import productImg16 from '../images/samsung-galaxy-s22.jpg'
import productImg17 from '../images/samsung-galaxy-s21.jpg'
import productImg18 from '../images/apple-ipad-pro.jpg'
import productImg19 from '../images/oculus.jpg'

import productImg20 from '../images/steam_deck.jpg'
import productImg21 from '../images/apple-watch.jpg'
import productImg22 from '../images/wireless-04.jpg'
import productImg23 from '../images/beat-01.jpg'
import productImg24 from '../images/wireless-04.jpg'

const products = [
  {
    id: '01',
    productName: 'Sony PlayStation 5 Console ',
    imgUrl: productImg01,
    category: 'console',
    price: 600,
    shortDesc:
      'Brand new Sony PlayStation 5 with free extra controller and game',
    description:
      'The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games. The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.',
    reviews: [
      {
        rating: 4.7,
        text: 'High quality product, at a great price.',
      },
    ],
    avgRating: 4.5,
  },

  {
    id: '02',
    productName: 'Xbox series x',
    imgUrl: productImg02,
    category: 'console',
    price: 450,
    shortDesc: 'Brand new Xbox series x with free extra console and game',
    description:
      'The Xbox Series X delivers sensationally smooth frame rates of up to 120FPS with the visual pop of HDR. Immerse yourself with sharper characters, brighter worlds, and impossible details with true-to-life 4k',
    reviews: [
      {
        rating: 4.8,
        text: 'I love the new x-box system, the speed is lightening fast, no lagging and almost no buffer periods.',
      },
      {
        rating: 4.8,
        text: 'The graphic quality is really great, totally having fun.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '03',
    productName: 'Xbox Series S',
    imgUrl: productImg03,
    category: 'console',
    price: 299.99,
    shortDesc: 'The Xbox Velocity Architecture, powered by  ',
    description:
      'Experience next-gen speed and perfromance with our largest digital libary yet. Enjoy more dynamic worlds, faster load times, and add Xbox Games Pass Ultimate (membership sold separately) to play new games on day one. Plus, enjoy hundreds of high-quality games like Minecraft, Forza Horizon 5, and Halo Infinite with friends on console, PC, and cloud.',
    reviews: [
      {
        rating: 4.6,
        text: 'Screen quality is very good. Amazing graphics. Very strong and durable',
      },
      {
        rating: 4.9,
        text: 'The gameplay so far is great, I love the graphics.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '04',
    productName: 'Sony PlayStation 4',
    imgUrl: productImg04,
    category: 'console',
    price: 450,
    shortDesc: 'Sony PlayStation 4 1TB Slim - Black',
    description:
      'The PlayStation 4 system is smart enough to learn about your preferences, it is smart to detect your likes and dislikes, allowing you to discover pre-loaded content and ready to go on your console in your favourite game genres. PS4 users also can look over information for games shared by friends; you can also view friends gameplay, or obtain information about recommended content which includes games and movies',
    reviews: [
      {
        rating: 4.6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '05',
    productName: 'Apple MacBook Pro 14',
    imgUrl: productImg05,
    category: 'computer',
    price: 99,
    shortDesc:
      'Apple MacBook Pro 14 M1 Pro Chip 16GB RAM,512GB(2021 Model)Silver ',
    description:
      'Apple M1 Pro chip for a massive leap in CPU, GPU, and machine learning performance 8-core CPU delivers up to 3.7x faster performance to fly through pro workflows quicker than ever³ 14-core GPU with up to 13x faster performance for graphics-intensive apps and games 16-core Neural Engine for up to 11x faster machine learning performance³ Longer battery life, up to 17 hours¹ 16GB of unified memory so everything you do is fast and fluid 512GB of superfast SSD storage launches apps and opens files in an instant Stunning 14-inch Liquid Retina XDR display with extreme dynamic range and contrast ratio² 1080p FaceTime HD camera with advanced image signal processor for sharper video calls Six-speaker sound system with force-canceling woofers Studio-quality three-microphone array captures your voice more clearly Three Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port Next-generation Wi-Fi 6 for faster connectivity Backlit Magic Keyboard with Touch ID for secure unlock and payments',
    reviews: [
      {
        rating: 4.6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '06',
    productName: 'Apple MacBook Pro 13.3',
    imgUrl: productImg06,
    category: 'computer',
    price: 173,
    shortDesc:
      'Apple MacBook Pro 13.3" - 512GB - 8cores - Space Grey - M2 - 2022',
    description:
      'This lightweight mobile workstation features an Apple M2 8-Core processor that is designed to deliver up to 18 percent greater, or 1.4x faster, performance compared to the previous M1 CPU while maintaining high battery efficiency. Its 10-core integrated GPU is also 35 percent faster than the M1, which significantly cuts down rendering times when working with intensive applications. The 13.3" Retina display features a 2560 x 1600 resolution, 500 nits of brightness, wide P3 color gamut support, and more. With 8GB of memory and 512GB of SSD storage, you can quickly multitask applications and load large video clips and project file',
    reviews: [
      {
        rating: 4.6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '07',
    productName: 'Apple 13.3 MacBook Pro',
    imgUrl: productImg07,
    category: 'computer',
    price: 89,
    shortDesc: 'Apple 13.3" MacBook Pro M1 Chip 8GB/ 256GB (Late 2020)',
    description:
      'The Apple M1 chip gives the 13‑inch MacBook Pro speed and power beyond belief. With up to 2.8x CPU performance. Up to 5x the graphics speed. Our most advanced Neural Engine for up to 11x faster machine learning. And up to 20 hours of battery life — the longest of any Mac ever. It’s Apple most popular pro notebook, taken to a whole new level.',
    reviews: [
      {
        rating: 4.6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '08',
    productName: 'Hp Omen 15 Gaming',
    imgUrl: productImg08,
    category: 'computer',
    price: 112,
    shortDesc:
      'Hp Omen 15 Gaming,10th Gen Intel Core I7,16GB RAM,1TB SSD, 6GB RTX Graphics,15.6" Win 10',
    description:
      'The OMEN 15 Laptop is geared for easy upgrades and maintenance with single panel access to HDD, SSD, and RAM. Plus, take advantage of a generous port selection for your favorite accessories and external displays. Get lost in an immersive narrow bezel display with breathtaking resolution. A zoned backlit keyboard with 26-key rollover is strategically designed to accelerate your gaming reflexes. With NVIDIA® graphics, a high-performance Intel® Core™ processor[1], and an enhanced thermal solution - you’ve got the power to hone your skills anywhere.',
    reviews: [
      {
        rating: 4.6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '09',
    productName: 'iPhone 11 Pro Max 256gb',
    imgUrl: productImg09,
    category: 'mobile',
    price: 450,
    shortDesc:
      'Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch,(12MP+12MP+12MP) - Pacific Blue',
    description:
      'Get infinitely spectacular possibilities with the iPhone 12 Pro Max. It features the powerful A14 Bionic chip, 5G to download and stream high-quality video, a bright 6.7" Super Retina XDR display, and Ceramic Shield for better drop performance. Other features include a LiDAR scanner, a triple-camera system with cinema-grade Dolby Vision, MagSafe accessories for wireless charging, and much more',
    reviews: [
      {
        rating: 4.8,
        text: 'Packed perfectly arrived quickly thank you very much for the gifts. Its a very cool place for gadgets',
      },
      {
        rating: 4.9,
        text: 'Everything is fine, everything came whole, without any damage, a huge gratitude to the seller, as well as to the logistics staff.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '10',
    productName: 'iPhone 12',
    imgUrl: productImg10,
    category: 'mobile',
    price: '600',
    shortDesc:
      'Apple IPhone 14 Pro Max 6.7 6GB 256GB ROM Nano SIM - Deep Purple',
    description:
      'The best iPhone ever, version 2022, size XL - we have the iPhone 14 Pro Max. The list of novelties this year includes the notch morphing into a pill, the introduction of an Always-On display, and an all-new primary camera - and while you can get all of that on the 14 Pro, the extra screen estate and longevity coupled with the Maxs ultimate status mean it has a market niche of its own.',
    reviews: [
      {
        rating: 4.8,
        text: 'Very quick delivery, original product.',
      },
      {
        rating: 4.9,
        text: 'Outstanding price for such a quality product, and I like how the delivery is free.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '11',
    productName: 'iPhone 13 Pro Max',
    imgUrl: productImg11,
    category: 'mobile',
    price: 900,
    shortDesc: 'Apple iPad Pro 12.9 cellular 256gb 6th gen',
    description:
      '8K SUPER STEADY VIDEO: Shoot videos that rival how epic your life is with stunning 8K recording, the highest recording resolution available on a smartphone; Video captured is effortlessly smooth, thanks to Auto Focus Video Stabilization on Galaxy S22 Ultra.Form_factor : Smartphone NIGHTOGRAPHY plus PORTAIT MODE: Capture the night with crystal clear, bright pics and videos, no matter the lighting with Night Mode; Portrait Mode auto-detects and adjusts to what you want front and center, making all your photos worthy of a frame',
    reviews: [
      {
        rating: 4.8,
        text: 'I have alway been a fan of Samsung, great product.',
      },
      {
        rating: 4.9,
        text: 'Very quick delivery and it was totally free.',
      },
    ],
    avgRating: 4.8,
  },
  {
    id: '12',
    productName: 'iPhone 14 ',
    imgUrl: productImg12,
    category: 'mobile',
    price: 950,
    shortDesc:
      'Apple IPhone 13 Pro 6.1 Inch Super Retina XDR Display With ProMotion, (6GB RAM + 256GB ROM), IOS 15, 5G, FaceTime - Graphite',
    description:
      '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos. Pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography;',
    reviews: [
      {
        rating: 4.8,
        text: 'I am pleased with the price and delivery.',
      },
      {
        rating: 4.9,
        text: 'Its amazing how low the price is and how fast it took to get the package delivered to me.',
      },
    ],
    avgRating: 4.8,
  },
  {
    id: '13',
    productName: 'iPhone 14 pro',
    imgUrl: productImg13,
    category: 'mobile',
    price: 1200,
    shortDesc:
      'Apple IPhone 13 Pro 6.1 Inch Super Retina XDR Display With ProMotion, (6GB RAM + 256GB ROM), IOS 15, 5G, FaceTime - Graphite',
    description:
      '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos. Pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography;',
    reviews: [
      {
        rating: 4.8,
        text: 'I am pleased with the price and delivery.',
      },
      {
        rating: 4.9,
        text: 'Its amazing how low the price is and how fast it took to get the package delivered to me.',
      },
    ],
    avgRating: 4.8,
  },
  {
    id: '14',
    productName: 'iPhone 14 pro max 256gb',
    imgUrl: productImg14,
    category: 'mobile',
    price: 1400,
    shortDesc:
      'Apple IPhone 13 Pro 6.1 Inch Super Retina XDR Display With ProMotion, (6GB RAM + 256GB ROM), IOS 15, 5G, FaceTime - Graphite',
    description:
      '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos. Pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography;',
    reviews: [
      {
        rating: 4.8,
        text: 'I am pleased with the price and delivery.',
      },
      {
        rating: 4.9,
        text: 'Its amazing how low the price is and how fast it took to get the package delivered to me.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '15',
    productName: 'Samsung galaxy s23 Ultra',
    imgUrl: productImg15,
    category: 'mobile',
    price: 800,
    shortDesc:
      'SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Burgundy',
    description:
      '8K SUPER STEADY VIDEO: Shoot videos that rival how epic your life is with stunning 8K recording, the highest recording resolution available on a smartphone; Video captured is effortlessly smooth, thanks to Auto Focus Video Stabilization on Galaxy S22 Ultra.Form_factor : Smartphone NIGHTOGRAPHY plus PORTAIT MODE: Capture the night with crystal clear, bright pics and videos, no matter the lighting with Night Mode; Portrait Mode auto-detects and adjusts to what you want front and center, making all your photos worthy of a frame',
    reviews: [
      {
        rating: 4.8,
        text: 'I have alway been a fan of Samsung, great product.',
      },
      {
        rating: 4.9,
        text: 'Very quick delivery and it was totally free.',
      },
    ],
    avgRating: 4.8,
  },
  {
    id: '16',
    productName: 'Samsung galaxy s22 Ultra',
    imgUrl: productImg16,
    category: 'mobile',
    price: 800,
    shortDesc:
      'SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Burgundy',
    description:
      '8K SUPER STEADY VIDEO: Shoot videos that rival how epic your life is with stunning 8K recording, the highest recording resolution available on a smartphone; Video captured is effortlessly smooth, thanks to Auto Focus Video Stabilization on Galaxy S22 Ultra.Form_factor : Smartphone NIGHTOGRAPHY plus PORTAIT MODE: Capture the night with crystal clear, bright pics and videos, no matter the lighting with Night Mode; Portrait Mode auto-detects and adjusts to what you want front and center, making all your photos worthy of a frame',
    reviews: [
      {
        rating: 4.8,
        text: 'I have alway been a fan of Samsung, great product.',
      },
      {
        rating: 4.9,
        text: 'Very quick delivery and it was totally free.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '17',
    productName: 'Samsung galaxy s21 ultra',
    imgUrl: productImg17,
    category: 'mobile',
    price: 500,
    shortDesc:
      'Samsung Galaxy Note10+ N12+256GB Note10 Plus Android9 Single Sim 6.8 Inch + Pouch - Aura Glow',
    description:
      'Brand / Model Samsung Galaxy Note10+ N975U/Note 10 PlusOS Android 9CPU Qualcomm Snapdragon 855 Octa Core 2.8GHzGPU Adreno 640RAM 12GBROM 256GBExtend card MAX supports 512GB Class 10 Micro SD Memory Card (TF-Card)Display Size 6.8 inch Quad HD+Screen Resolution 3040 x 1440Screen Type Dynamic AMOLED',
    reviews: [
      {
        rating: 4.8,
        text: 'MY order just came in, it was fast and exactly according to the specifications.',
      },
      {
        rating: 4.9,
        text: 'The communication was great, the delivery fast. Absolutely recommend',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '18',
    productName: 'Apple iPad Pro',
    imgUrl: productImg18,
    category: 'mobile',
    price: 1000,
    shortDesc: 'Apple iPad Pro 12.9 cellular 256gb 6th gen',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '19',
    productName: 'Oculus Quest',
    imgUrl: productImg19,
    category: 'wireless',
    price: 400,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '20',
    productName: 'Steam deck',
    imgUrl: productImg20,
    category: 'wireless',
    price: 750,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
    reviews: [
      {
        rating: 4.8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '21',
    productName: 'Apple Watch',
    imgUrl: productImg21,
    category: 'wireless',
    price: 399,
    shortDesc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
    description:
      'WHY APPLE WATCH ULTRA — Rugged and capable, built to meet the demands of endurance athletes, outdoor adventurers, and water sports enthusiasts — with a specialized band for each. Up to 36 hours of battery life, plus all the Apple Watch features that help you stay healthy, safe, and connected. EXTREMELY RUGGED, INCREDIBLY CAPABLE — 49mm corrosion-resistant titanium case. Larger Digital Crown and more accessible buttons. 100m water resistance. Customizable Action button for instant physical control over a variety of functions. FOR ENDURANCE ATHLETES — Advanced metrics in the Workout app, including Heart Rate Zones and Running Form. Precision dual-frequency GPS for accuracy, distance, route, and pace calculations. Trail Loop band is thin, light, and flexible, designed especially for runners. FOR OUTDOOR ADVENTURERS — Redesigned Compass app delivers all-new views and functionality. Mark your location with Compass Waypoints. Backtrack uses GPS to map where you have been so you can retrace your steps. Alpine Loop band is extremely rugged and secure to meet the needs of hikers and climbers. FOR WATER SPORTS ENTHUSIASTS — Made for high-impact water sports and diving. The Oceanic+ app puts a dive computer on your wrist. Ocean Band is light and flexible, with a titanium buckle and adjustable loop for a secure fit even during high-speed water sports. MOST ADVANCED HEALTH AND SAFETY FEATURES — Advanced health sensors give you deep insights into your health. Fall Detection and Crash Detection can automatically connect you with emergency services in the event of a hard fall or a severe car crash. Hold the Action button to activate a siren that can be heard up to 600 feet away.',
    reviews: [
      {
        rating: 4.8,
        text: 'No doubt my best import ever madePassionate my watch is 100% original, packaging and bracelets are not but are of excellent quality! Everything works even until the Apple Pay that was my biggest fear, not to mention that it arrived long before the deadline.',
      },
      {
        rating: 4.9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '22',
    productName: 'Beats By Dre Studio Buds',
    imgUrl: productImg22,
    category: 'wireless',
    price: 199,
    shortDesc:
      'Beats By Dre Studio Buds With Noise Cancelling Earphones - Black',
    description:
      'True wireless noise cancelling Beats Studio Bud are made for music. Designed with a custom acoustic platform, Beats Studio Bud are engineered to deliver powerful, balanced sound in a compact, in-ear form factor. The result — immersive sound that pulls the emotion of music from the studio to your ears to keep you inspired. These earphones feature two listening modes, Active Noise Cancelling (ANC) and Transparency mode, to give you total control of your sound. Each earbud has up to 8 hours of listening time⁴ with two additional charges provided by its pocket-sized charging case to give you up to 24 hours of combined playback.',
    reviews: [
      {
        rating: 4.8,
        text: 'Beats trendy and cool earphones are still very good. I have bought his earphones several times before, and this earphone is very light and comfortable. It has excellent sound insulation effect and is not easy to fall off.',
      },
      {
        rating: 4.9,
        text: 'The actual product is very beautiful, and purple is really stunning! Sound quality and sound effect: The original feeling is still good, and the sound quality is as good as ever. Comfort: The ear wing design is good, which has a good fixation effect for sports.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '23',
    productName: 'Beats By Dre 3',
    imgUrl: productImg23,
    category: 'wireless',
    price: 199,
    shortDesc:
      'Beats By Dre Beats Studio 3 Wireless Bluetooth Headphone - Matte Black',
    description:
      'Premium sound with fine-tuned acoustics and Pure ANC Beats Studio3 Wireless headphones deliver a premium listening experience with Pure Adaptive Noise Canceling (Pure ANC) to actively block external noise and real-time audio calibration to preserve clarity, range, and emotion. They continuously pinpoint external sounds to block while automatically responding to individual fit in real time, optimizing sound output to preserve a premium listening experience the way artists intended.',
    reviews: [
      {
        rating: 4.8,
        text: 'Excellent product, original beats, high level sound quality, super fast shipping.',
      },
      {
        rating: 4.9,
        text: 'Good headphones and connect very well with laptop and the calls of teams are heard and heard very well.',
      },
    ],
    avgRating: 4.8,
  },
  {
    id: '24',
    productName: 'Xbox Wireless Headset',
    imgUrl: productImg24,
    category: 'wireless',
    price: 199,
    shortDesc: 'Xbox Series X|S, Xbox One, and Windows 10 Devices',
    description:
      'Pair directly to your console with Xbox Wireless radio without the need for dongles, cables, or a base station. Surround yourself with spatial sound technologies including Windows Sonic, Dolby Atmos, and DTS Headphone X. Use auto-mute and voice isolation to reduce noise interruption for crystal-clear chat. Adjust your volume and game/chat levels with the rotating earcup dials.',
    reviews: [
      {
        rating: 4.8,
        text: 'The product is great, has all the advanced features for noise cancellation. The sound is perfect really nothing to say! Very happy with my order.',
      },
      {
        rating: 4.9,
        text: 'Perfect. Sound amazing.',
      },
    ],
    avgRating: 4.8,
  },
]

export default products

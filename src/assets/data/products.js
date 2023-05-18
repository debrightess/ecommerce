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
import productImg22 from '../images/beat-02.jpg'
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
      'Model Number CFI-1215A01X Stunning Games - Marvel at incredible graphics and experience new PS5 features. Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology. Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.',
    reviews: [
      {
        name: 'Damion Smith',
        rating: 5.0,
        text: "My son absolutely loves the PS5! The graphics are incredible and the gameplay is smooth and immersive. The selection of games is also impressive, with something for everyone. It's been a great addition to our household entertainment and my son is always excited to play. Highly recommend for anyone looking for a high-quality gaming experience.",
      },
      {
        name: 'Mike Jh',
        rating: 5.0,
        text: 'This thing is perfect and the graphics are insane. My only issue is my current HDMI cable has to be upgraded. The display will not show anything without an HDMI 2.1. So if you need a longer cable than what comes with the system beware you will need to replace it',
      },
      {
        name: 'Laura Winn',
        rating: 4.0,
        text: 'This thing is perfect and the graphics are insane. My only issue is my current HDMI cable has to be upgraded. The display will not show anything without an HDMI 2.1. So if you need a longer cable than what comes with the system beware you will need to replace it.',
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
    shortDesc:
      'The Xbox Series X delivers sensationally smooth frame rates of up to 120FPS with the visual pop of HDR. Immerse yourself with sharper characters, brighter worlds, and impossible details with true-to-life 4k',

    description:
      'XBOX SERIES X: The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming.* FASTER LOAD TIMES: Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS – all powered by Xbox Velocity Architecture. LOOKS AND PLAYS BEST: Enjoy thousands of games from four generations of Xbox, with hundreds of optimized titles that look and play better than ever. IN THE BOX: Xbox Series X console, one Xbox Wireless Controller, an ultra high-speed HDMI cable, power cable, and 2 AA batteries. SURROUND SOUND: Enhance gameplay with both full-spectrum visuals and immersive audio with Dolby Vision and Dolby Atmos',
    reviews: [
      {
        name: 'SuperginraiX',
        rating: 4.8,
        text: "You open the box up and there is the Series X all wrapped up like it's in a treasure chest. It was great! I actually had to take some video of it because it was above and beyond what I expected from unboxing a new console. So good job on that!",
      },
      {
        name: 'TDot2020',
        rating: 4.8,
        text: 'Incredible machine. Sets up in a flash. The App is key for easy set up. Feels so smooth. HDR is incredible for upscaling games. Nice to have 800gb and purchasable expandable memory now.',
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
    shortDesc:
      'Experience next-gen speed and perfromance with our largest digital libary yet. Enjoy more dynamic worlds, faster load times, and add Xbox Games Pass Ultimate (membership sold separately) to play new games on day one. Plus, enjoy hundreds of high-quality games like Minecraft, Forza Horizon 5, and Halo Infinite with friends on console, PC, and cloud. ',
    description:
      'Go all digital with Xbox Series S and experience next-gen speed and performance at a great price. Bundle includes: Xbox Series S console, one Xbox Wireless Controller, a high-speed HDMI cable, power cable, and 2 AA batteries. Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all powered by Xbox Velocity Architecture. Enjoy digital games from four generations of Xbox, with hundreds of optimized titles that look and play better than ever. Add Xbox Game Pass Ultimate (membership sold separately) to play new games day one. Enjoy hundreds of high-quality games with friends on console, PC, and cloud. Plus, now you can skip the install and jump in with cloud gaming. Hardware-accelerated ray tracing gives your games a heightened level of realism. Bring your games and movies to life with advanced 3D Spatial Sound, which produces rich, dynamic audio environments.',
    reviews: [
      {
        name: 'Mr. Campbell',
        rating: 4.0,
        text: 'I love my Xbox Series S. PC snobs can preach all they like from the tops of their $2000 desktop rigs and it will fall on deaf ears when you have this $250 white box and the matching controller. A PC can be used for many things, I’m aware, but if you just want to play games there is absolutely no reason NOT to buy an Xbox Series S.',
      },

      {
        name: 'Max Isaacs',
        rating: 4.9,
        text: 'French version (I live in the USA) but you can change the language easily enough',
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
      'Incredible games; Endless entertainment; All new lighter slimmer PS4; 1 TB hard drive; Blu-ray technology, delivers exceptional video quality; Redefine your gaming expectations and immerse yourself in moments so intense your intuition takes over.',
    reviews: [
      {
        name: 'Angel marcel',
        rating: 5.0,
        text: 'This was bought to replace my old ps4 when it was stolen this is one awesome upgrade.',
      },
      {
        name: 'Becky Archie',
        rating: 5.0,
        text: 'I love my new gaming system!!',
      },
      {
        name: 'Sarah Dobbs',
        rating: 5.0,
        text: 'Me and my mom bought this as a Christmas present for my sibling and they play it constantly now. It runs smoothly and is pretty snazzy. Highly recommend.',
      },
    ],
    avgRating: 5.0,
  },

  {
    id: '05',
    productName: 'Apple 2021 MacBook Pro 14-inch',
    imgUrl: productImg05,
    category: 'computer',
    price: 1948,
    shortDesc:
      'Apple 2021 MacBook Pro (14-inch, M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) ',
    description:
      'Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and machine learning performance,Up to 10-core CPU delivers up to 3.7x faster performance to fly through pro workflows quicker than ever, Up to 32-core GPU with up to 13x faster performance for graphics-intensive apps and games, 16-core Neural Engine for up to 11x faster machine learning performance, Longer battery life, up to 17 hours, Up to 64GB of unified memory so everything you do is fast and fluid, Up to 8TB of superfast SSD storage launches apps and opens files in an instant',
    reviews: [
      {
        name: 'James',
        rating: 5.0,
        text: 'For once apple step up its game and finally made a pro laptop that fits the need of professionals. Yes it thicker then their previous models and yes it weighs more. The new M series chips are beyond impressive. Running my broadcast software, my dj software and multitasking I barely see the CPU bars jump and I have yet to hear the fans on this thing spin up. The screen clarity makes u feel like u can reach inside the screen and touch objects. The amount of ports is just what is needed. This is 5 star material on every level.',
      },
      {
        name: 'Anthony',
        rating: 5.0,
        text: 'Definitely loving how much faster this computer is compared to my old HP.',
      },
    ],
    avgRating: 5.0,
  },

  {
    id: '06',
    productName: 'Apple 2022 MacBook Pro 13-inch',
    imgUrl: productImg06,
    category: 'computer',
    price: 1549,
    shortDesc:
      'Apple MacBook Pro M2 Chip (13-inch, 16GB RAM, 256GB SSD Storage) - Space Gray (2022 Model) - Z16R0005S2',
    description:
      'This lightweight mobile workstation features an Apple M2 8-Core processor that is designed to deliver up to 18 percent greater, or 1.4x faster, performance compared to the previous M1 CPU while maintaining high battery efficiency. Its 10-core integrated GPU is also 35 percent faster than the M1, which significantly cuts down rendering times when working with intensive applications. The 13.3" Retina display features a 2560 x 1600 resolution, 500 nits of brightness, wide P3 color gamut support, and more. With 16GB of memory and 256GB of SSD storage, you can quickly multitask applications and load large video clips and project file',
    reviews: [
      {
        name: 'Laura',
        rating: 4.6,
        text: 'This store had the best price for this color and model. My laptop died right before taxes were due and this was fabulous.',
      },
      {
        name: 'Katy H',
        rating: 4.9,
        text: 'I would just like to point out that shipping was VERY quick . I was expecting it 7 days after I ordered… got it in 2 ! Just keep in mind , this package requires a signature so plan on being home. I bought mine under “new” so I was very impressed to see the packaging was intact and damage free. Start up and set up was a breeze. I’ve never had a MacBook so I’m still looking around on how things work but other..',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '07',
    productName: 'Apple 13.3 MacBook Pro',
    imgUrl: productImg07,
    category: 'computer',
    price: 1499,
    shortDesc:
      'Apple MacBook Pro 13.3" with Retina Display, M2 Chip with 8-Core CPU and 10-Core GPU, 16GB Memory, 256GB SSD, Mid 2022',
    description:
      'Apple MacBook Pro 13.3" with Retina Display - 67W USB-C Power Adapter - USB-C Charge Cable (2m) - Apple 1 Year Limited Warranty with 90 Day Free Technical Support, M2 chip makes the 13.3" MacBook Pro more capable than ever, Featuring a brilliant Retina display, a FaceTime HD camera, and studio-quality mics, Can rip through workflows with a more powerful 8-core CPU, Create stunning graphics with a lightning-fast 10-core GPU',
    reviews: [
      {
        name: 'Rebecca J. Vinson',
        rating: 4.0,
        text: "I do a lot of graphic design and video editing. Overall this computer does what I need it to. Obviously it doesn't have the power of a desktop but for small edits and projects on the go it's great. The battery life is a little lackluster but that's to be expected when processing high quality audio and video. I wish it had more USB ports so I didn't have to buy an adapter but it is Apple so I expected to buy add ons. Overall it's a good little laptop.",
      },
      {
        name: 'Angel C.',
        rating: 5.0,
        text: 'It is super light, super fast and as always looks great!',
      },
      {
        name: 'Mary Rivers',
        rating: 4.9,
        text: 'I would recommend this product.. it is very fast and beautiful.. my first MacBook experiences very good',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '08',
    productName: 'Hp Omen 15 Gaming',
    imgUrl: productImg08,
    category: 'computer',
    price: 1599,
    shortDesc:
      'OMEN by HP 2019 15-inch Gaming Laptop, 9th Gen Intel i7-9750H, NVIDIA GeForce RTX 2070 with Max-Q (8 GB), 16 GB RAM, 512 GB Solid-State Drive, VR Ready, Windows 10 Home (15-dc1060nr, Shadow Black)',
    description:
      'Hyper-realistic graphics: NVIDIA(R) GeForce(R) RTX 2070 with Max-Q design for cooler and quieter efficiency (8 GB GDDR6 dedicated). Cutting-edge NVIDIA(R) Turing architecture immerses you in incredible realism and performance, plus NVIDIA(R) G-SYNC(TM) technology helps ensure sharp, stutter-free gaming. VR READY. 15.6-inch diagonal FHD IPS anti-glare micro-edge WLED-backlit display (1920 x 1080) with 144Hz refresh rate; OMEN command center: Easily turn up your performance with included software that enables control over your CPU overclocking settings and prioritizes your gaming traffic to minimize latency; Cutting-edge gaming performance: Play the latest games, including Fortnite, PUBG, and Overwatch, from anywhere—without sacrificing performance; Super-fast processor: 9th Generation Intel(R) Core(TM) i7-9750H Processor, 6-Core, 2.6 GHz base frequency, up to 4.5 GHz base with Intel(R) Turbo Boost Technology for superior gaming performance; Memory: 16 GB DDR4-2666 SDRAM (upgradable with 2 accessible memory slots); Storage: 512 GB PCIe(R) NVMe(TM) M.2 Solid State Drive. Chipset Intel HM370.',
    reviews: [
      {
        name: 'Collin Klopfenstein',
        rating: 5.0,
        text: 'Hard to find a G-sync Laptop with these specs. I read that some Omen 15 have had heat dissipation issues. I found this to be untrue. It gets a bit warm on the outside but that is to be expected for something this small and reasonably light. I overclocked it a tad and it runs Overwatch on Ultra settings with about 100+ fps (G-sync and overwatch dont play well so that doesnt function for that game, but that is true for all my computers)',
      },
      {
        name: 'Zachory',
        rating: 4.0,
        text: 'Great gaming laptop! Only con is the screen is a little dark even when turned all the way up.',
      },
      {
        name: 'Alex De Freitas',
        rating: 4.0,
        text: 'It gets hot but the heating never affected its performance as far as I experienced (with and without cooling). Been using it and playing games for almost 2 months now.',
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
      'Apple IPhone 11 Pro Max 6.5-Inch (4GB RAM, 256GB ROM ),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Space Grey',
    description:
      'Memory: (4GB ROM, 512GB RAM); Display: 6.5-Inch Super Retina XDR display; Camera: 12MP Selfie, 12MP Tripple Rear Cameras; Single Nano Sim; iOS: 13; Face Unlock; A13 Bionic chip Processor',
    reviews: [
      {
        name: 'Trisha Williams',
        rating: 5.0,
        text: 'I have the iPhone 11, but wanted something bigger. This Pro Max is the perfect size! For it to be a refurbished phone, it’s in GREAT condition. One small scratch in the corner that I wouldn’t have even noticed if I wasn’t looking for scratches lol. Camera and audio quality is great, no issues setting it up and they are absolutely right, it works like new! Will post a picture later',
      },
      {
        name: 'Kiesha',
        rating: 5.0,
        text: 'Everything is fine, everything came whole, without any damage, a huge gratitude to the seller, as well as to the logistics staff.',
      },
      {
        name: 'Tannis Vanderploeg',
        rating: 4.0,
        text: 'Happy with it',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '10',
    productName: 'iPhone 12',
    imgUrl: productImg10,
    category: 'mobile',
    price: 600,
    shortDesc: 'Apple IPhone 12, 6.1-Inch 5G, 256GB, Black ',
    description:
      'iPhone 12 smartphone was launched on 13th October 2020. The phone comes with a 6.1-inch touchscreen display with a resolution of 1170x2532 pixels at a pixel density of 460 pixels per inch (ppi). The iPhone 12 supports wireless charging, as well as proprietary fast charging. As far as the cameras are concerned, the iPhone 12 on the rear packs a 12-megapixel primary camera with an f/1.6 aperture and a second 12-megapixel camera with an f/2.4 aperture. The rear camera setup has autofocus. It sports a 12-megapixel camera on the front for selfies, with an f/2.2 aperture. iPhone 12 based on iOS 14.1 and packs 128GB of inbuilt storage. The iPhone 12 is a dual-SIM (GSM and GSM) smartphone that accepts Nano-SIM cards. The iPhone 12 measures 146.70 x 71.50 x 7.40mm (height x width x thickness) and weighs 164.00 grams. It was launched in Black, Blue, Green, Red, and White colours. It features an IP68 rating for dust and water protection.',
    reviews: [
      {
        name: 'Joshua Ralston',
        rating: 5.0,
        text: 'Perfect! Exceeded my expectations.',
      },
      {
        name: 'Enrique García Presenda',
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
    shortDesc: 'Apple iPhone 13 Pro Max, 128GB, Graphite ',
    description:
      '6.7" Super Retina XDR display with ProMotion. 5G Superfast downloads, highquality streaming; Cinematic mode in 1080p at 30 fps. Dolby Vision HDR video recording up to 4K at 60 fps. 6X Optical zoom range; A15 Bionic chip. New 6-core CPU with 2 performance and 4 efficiency cores. New 5-core GPU. New 16-core Neural Engine; Up to 28 hours video playback. Face ID. Ceramic Shield front. Surgical-grade stainless steel; Water resistant to a depth of 6 meters for up to 30 minutes. Compatible with MagSafe accessories and wireless chargers',
    reviews: [
      {
        name: 'Emily Swanagan',
        rating: 5.0,
        text: 'This phone… is ridiculous. I always tried to convince myself that android was better than apple, that I wasn’t missing out on anything. BOY, I was wrong! This 13 pro max is sleek, a little hefty in weight but I love the sturdiness that comes with that. It’s a beautiful phone, rocking iOS 16.4, it becomes crazy customizable. Face ID works like a charm, quicker than any Touch ID I’ve ever used, even previous iPhones.',
      },
      {
        name: 'Saint Anthony Akuta',
        rating: 5.0,
        text: "It's good and worth the price value. Liked the in-built technology. General purpose use at all times.",
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
    shortDesc: 'Apple iPhone 14 Plus, 128GB, ',
    description:
      '6.7-inch Super Retina XDR display and advanced camera system for better photos in any light. Cinematic mode now in 4K Dolby Vision up to 30 fps. Action mode for smooth, steady, handheld videos. All-day battery life and up to 26 hours of video playback. A15 Bionic chip with 5-core GPU for lightning-fast performance. Superfast 5G cellular.',
    reviews: [
      {
        name: 'Lin G.',
        rating: 5.0,
        text: '100% satisfied with this!!',
      },
    ],
    avgRating: 5.0,
  },
  {
    id: '13',
    productName: 'iPhone 14 pro',
    imgUrl: productImg13,
    category: 'mobile',
    price: 1200,
    shortDesc: 'Apple, iPhone 14 Pro, 5G, Capacity	128 GB',
    description:
      '6.1-inch Super Retina XDR display featuring Always-On & ProMotion. Dynamic Island, a magical new way to interact with iPhone. 48MP Main camera for up to 4x greater resolution. Cinematic mode now in 4K Dolby Vision up to 30 fps. Action mode for smooth, steady, handheld videos. A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular. Manufacturer: Apple Computer',
    reviews: [
      {
        name: 'Jay Mahadan',
        rating: 5.0,
        text: 'Just got this phone! And gotta say I am really enjoying the cool features and the new design.',
      },
      {
        name: 'Eddie Castillo',
        rating: 4.0,
        text: 'So far I’m very happy with my purchase.',
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
    shortDesc: 'Apple iPhone 14 Pro Max, 256GB, Gold',
    description:
      '6.7-inch Super Retina XDR display featuring Always-On & ProMotion. Dynamic Island, a magical new way to interact with iPhone.48MP Main camera for up to 4x greater resolution. Cinematic mode now in 4K Dolby Vision up to 30 fps. Action mode for smooth, steady, handheld videos & a vital safety feature - Crash Detection. A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular Manufacturer: Apple Computer',
    reviews: [
      {
        name: 'Carlos Garcia',
        rating: 4.8,
        text: 'I am pleased with the price and delivery.',
      },
      {
        name: 'Kirt J.',
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
      'SAMSUNG Galaxy S23 Ultra Cell Phone, 512GB Storage, 200MP Camera, Night Mode, Long Battery Life, S Pen',
    description:
      "CAPTURE THE NIGHT IN LOW LIGHT: Whether you’re headed to a concert or romantic night out, there’s no such thing as bad lighting with Night Mode; Galaxy S23 Ultra lets you capture epic content in any setting with stunning Nightography; HIGHEST PHONE CAMERA RESOLUTION: Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on a phone; Whether you’re posting or printing, Galaxy S23 Ultra always does the moment justice; STUNNINGLY SMOOTH VIDEO: Capture incredibly smooth video during life’s most exciting moments; With Video Stabilization, this smartphone easily records daytime outdoor adventures or those spur-of-the-moment dance parties at night; WRITE, DRAW, CREATE w/ S PEN: Whether you’re in Samsung Note, Microsoft Office or Google Suite, with the built-in S Pen, you can convert handwriting to text, share your creations live and keep everything on your Galaxy S23 Ultra device; SNAP PICS w/ S PEN: Capture epic selfies and beautiful photos with the click of your S Pen; Simply open up the camera app and click the button on the S Pen instead of the screen; Getting that great shot just got easier; FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever; UNLOCK SMOOTH GAMING: Game at full throttle and smoothly switch between apps; Get more done with our fastest processor ever combined with massive internal storage; And if you’re on the move, keep going with a screen that adapts to your environment; BATTERY THAT POWERS YOUR DAY: Power through a packed day* or long night of gaming without worrying about your phone dying; The robust 5,000mAh battery has been fine-tuned with a smarter processor that helps manage energy usage without slowing you down; MORE STORAGE. MORE MEMORIES: You’re good on storage space; With an impressive amount of storage, starting at 256GB, you can enjoy being behind the camera without the stress that comes with getting close to filling up your phone; ADAPTIVE DISPLAY: Watch your content comfortably as Adaptive Vision Booster helps your screen adapt to your environment; Whether out in direct sunlight or in bed with the lights off, the contrast on Samsung Galaxy S23 Ultra's expansive screen still looks amazing",
    reviews: [
      {
        name: 'Russel Muhlbach',
        rating: 5.0,
        text: 'Yes you can take pictures of the Moon! This is the best phone in the world no joke a sound quality is phenomenal & processing speed exceptional everything I do is extremely fast with no delay. If you own an apple you may think about reconsidering. This phone is very customizable it can do anything you want it to do. This phone blows Apple out of the water. In the stylist is very good does so many different functions it can even take pictures remotely with the button via Bluetooth. This really is the best phone on the market.',
      },
      {
        name: 'CJM',
        rating: 5.0,
        text: "Battery last a long while. Up to 3 days. Has alot of features that I can't wait to try out",
      },
    ],
    avgRating: 5.0,
  },
  {
    id: '16',
    productName: 'Samsung galaxy s22 Ultra',
    imgUrl: productImg16,
    category: 'mobile',
    price: 800,
    shortDesc:
      'SAMSUNG Galaxy S22 Ultra Cell Phone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor',
    description:
      '8K SUPER STEADY VIDEO: Shoot videos that rival how epic your life is with stunning 8K recording, the highest recording resolution available on a smartphone; Video captured is effortlessly smooth, thanks to Auto Focus Video Stabilization on Galaxy S22 Ultra.Form_factor : Smartphone; NIGHTOGRAPHY plus PORTAIT MODE: Capture the night with crystal clear, bright pics and videos, no matter the lighting with Night Mode; Portrait Mode auto-detects and adjusts to what you want front and center, making all your photos worthy of a frame; 108MP PHOTO RESOLUTION plus BRIGHT DISPLAY: Capture premium detail with 108MP resolution— the highest available on a cell phone; Your favorite content will look even more epic on our brightest display ever with Vision Booster; ADAPTIVE COLOR CONTRAST: Streaming on the go, working from your patio or binge-watching late into the night. The Galaxy S22 Ultra adaptive screen automatically optimizes color and brightness, outdoors and indoors; LONG LASTING BATTERY plus FAST CHARGING: Power every scroll, click, tap and stream all day long and then some with an intelligent, long-lasting battery; Dive back into action at a moment’s notice with 45W Super-Fast Charging; EMBEDDED S PEN: New phone, new S Pen; Now you can unleash your creativity on Galaxy S22 Ultra with an embedded S Pen; Edit photos and videos with pinpoint accuracy, and do it all with that pen-to-paper feel; PREMIUM DESIGN & CRAFTMANSHIP: With a classy, eye-catching glass-metal-glass design, we’re setting a standard for smart phones; With our strongest aluminum frame and the latest Gorilla Glass, this phone is lightweight and durable to help endure scratches and dings.',
    reviews: [
      {
        name: 'Angelito Salas',
        rating: 5.0,
        text: 'So far its amazing, Samsung(Android) just wins me for everything-user interface, durability and design.',
      },
      {
        name: 'Esli Rascer Mejia Silfa',
        rating: 5.0,
        text: 'Muy bueno ese celular pero que peña que no tiene doble Sim mañana cumplo un año.',
      },
    ],
    avgRating: 5.0,
  },

  {
    id: '17',
    productName: 'Samsung galaxy s21 ultra',
    imgUrl: productImg17,
    category: 'mobile',
    price: 500,
    shortDesc:
      'Samsung Galaxy S21 Ultra | 5G Smartphone | Pro-Grade Camera, 8K Video, 108MP High Res | 128GB',
    description:
      'Pro Grade Camera: Zoom in close, take photos and videos like a pro, and capture incredible share-ready moments with our easy-to-use, multi lens camera; Sharp 8K Video: Capture your life’s best moments in head-turning, super-smooth 8K video that gives your movies that cinema-style quality Multiple Ways to Record: Create share-ready videos and GIFs on the spot with multi-cam recording and automatic professional-style effects; 100x Zoom: Get amazing clarity with a dual lens combo of 3x and 10x optical zoom, or go even further with our revolutionary 100x Space Zoom Highest Smartphone Resolution: Crystal clear 108MP allows you to pinch, crop and zoom in on your photos to see tiny, unexpected details, while lightning-fast Laser Focus keeps your focal point clear; All Day Intelligent Battery: Intuitively manages your cellphone’s usage to conserve energy, so you can go all day without charging',
    reviews: [
      {
        name: 'Jeanette S.',
        rating: 5.0,
        text: "I was thinking of buying a camera, mostly for taking photographs of art. It is confusing - I've never bought a digital camera, and I'm completely out-of-date with all the numbers which classify the cameras. A friend of a friend recommended getting a new Android instead - the S21 Ultra 5g. I did, and tested it by taking pictures of the same paintings I did last year with my old Android.",
      },
      {
        name: 'Boris Figuera',
        rating: 5.0,
        text: 'The communication was great, the delivery fast. Absolutely recommend',
      },
    ],
    avgRating: 5.0,
  },

  {
    id: '18',
    productName: 'Apple iPad Pro',
    imgUrl: productImg18,
    category: 'mobile',
    price: 1000,
    shortDesc:
      'Apple iPad Pro 12.9-inch (6th Generation): with M2 chip, Liquid Retina XDR Display, 256GB, Wi-Fi 6E, 12MP front/12MP and 10MP Back Cameras, Face ID, All-Day Battery Life',
    description:
      'WHY IPAD PRO — iPad Pro is the ultimate iPad experience, with the astonishing performance of the M2 chip, superfast wireless connectivity, and next-generation Apple Pencil experience. Plus powerful productivity features in iPadOS. IPADOS + APPS — iPadOS makes iPad more productive, intuitive, and versatile. With iPadOS, run multiple apps at once, use Apple Pencil to write in any text field with Scribble, and edit and share photos. Stage Manager makes multitasking easy with resizable, overlapping apps and external display support. iPad Pro comes with essential apps like Safari, Messages, and Keynote, with over a million more apps available on the App Store. FAST WI-FI CONNECTIVITY — Wi-Fi 6E gives you fast wireless connections. Work from almost anywhere with quick transfers of photos, documents, and large video files. PERFORMANCE AND STORAGE — The 8-core CPU in the M2 chip delivers powerful performance, while the 10‑core GPU provides blazing-fast graphics. Add all-day battery life, and you can do everything you can imagine on iPad Pro. Up to 2 terabytes of storage means you can store everything from apps to large files like 4K video. APPLE PENCIL AND MAGIC KEYBOARD — Apple Pencil (2nd generation) transforms iPad Pro into an immersive drawing canvas and the world’s best note‑taking device. Magic Keyboard features a great typing experience and a built‑in trackpad, while doubling as a protective cover for iPad. 12.9-INCH LIQUID RETINA XDR DISPLAY — Get 1000 nits of full‑screen brightness and 1600 nits of peak brightness, a 1,000,000:1 contrast ratio, Reference Mode for a more color-accurate workflow, and advanced display technologies like ProMotion, True Tone, and P3 wide color. The Liquid Retina XDR display is perfect for viewing and editing HDR photos and video, enjoying your favorite shows, or even playing games.',
    reviews: [
      {
        name: 'Cody Scoggins',
        rating: 5.0,
        text: 'Coming from a 2018 iPad Pro 11, I wasn’t sure it would be worth an upgrade, but decided to try it anyways after I started doing more photo editing and other more moderate usage tasks. Overall I’ve been extremely happy with my decision.',
      },
    ],
    avgRating: 5.0,
  },

  {
    id: '19',
    productName: 'Oculus Quest',
    imgUrl: productImg19,
    category: 'wireless',
    price: 400,
    shortDesc: 'Oculus Quest All-in-one VR Gaming Headset – 64GB',
    description:
      'All-in-one VR: Simply set up the device with your Oculus mobile app and Oculus Quest has everything you need to explore VR, right out of the box. Insight tracking: Oculus Insight tracking system instantly reflects your movements in VR without the need for any external accessories. Touch controllers: Oculus Touch controllers precisely recreate your hands, their gestures and interactions, so every game is real enough to reach out and touch. Beyond room-scale: Oculus Quest works with your environment, so you can play standing or sitting, in spaces big or small. Oculus Quest requires your Facebook account to log in, making it easy to meet up with friends in VR and discover communities around the world.',
    reviews: [
      {
        name: 'Hans Luijten',
        rating: 5.0,
        text: 'An amazing experience. Never seen never dreamt experiences. A worthy entertainer. Cost could have been more affordable.',
      },
      {
        name: 'Ananthakrishnan',
        rating: 5.0,
        text: 'This is a great upgrade of Oculus Go. The rendering Quality is pretty good, with almost no Dithering. 360 degree photos look awesome especially since you can move around. The Guardian is a bit of a pain since it keeps getting reset. This is a very good buy and a better value for money compared to Rift, if you compare the ease of use, no wires, but still have the ability to move around',
      },
    ],
    avgRating: 5.0,
  },

  {
    id: '20',
    productName: 'Steam deck',
    imgUrl: productImg20,
    category: 'wireless',
    price: 750,
    shortDesc: 'Steam Deck 512GB Handheld Console',
    description:
      "We partnered with AMD to create Steam Deck's custom APU, optimized for handheld gaming. It is a Zen 2 + RDNA 2 powerhouse, delivering more than enough performance to run the latest AAA games in a very efficient power envelope. 16 GB LPDDR5 on-board RAM (5500 MT/s quad 32-bit channels)",
    reviews: [
      {
        name: 'Damian Mercado',
        rating: 4.8,
        text: 'The steam decks a great product. I was one of the lucky ones and got one early. ',
      },
      {
        name: 'Gabriel Marro',
        rating: 4.9,
        text: 'Awesome product. Love it.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '21',
    productName: 'Apple Watch Ultra',
    imgUrl: productImg21,
    category: 'wireless',
    price: 399,
    shortDesc:
      'Apple Watch Ultra [GPS + Cellular 49mm] Smart watch w/Rugged Titanium Case & Starlight Alpine Loop Small Fitness Tracker, Precision GPS, Action Button, Extra-Long Battery Life, Brighter Retina Display!',
    description:
      'WHY APPLE WATCH ULTRA — Rugged and capable, built to meet the demands of endurance athletes, outdoor adventurers, and water sports enthusiasts — with a specialized band for each. Up to 36 hours of battery life, plus all the Apple Watch features that help you stay healthy, safe, and connected. EXTREMELY RUGGED, INCREDIBLY CAPABLE — 49mm corrosion-resistant titanium case. Larger Digital Crown and more accessible buttons. 100m water resistance. Customizable Action button for instant physical control over a variety of functions. FOR ENDURANCE ATHLETES — Advanced metrics in the Workout app, including Heart Rate Zones and Running Form. Precision dual-frequency GPS for accuracy, distance, route, and pace calculations. Trail Loop band is thin, light, and flexible, designed especially for runners. FOR OUTDOOR ADVENTURERS — Redesigned Compass app delivers all-new views and functionality. Mark your location with Compass Waypoints. Backtrack uses GPS to map where you have been so you can retrace your steps. Alpine Loop band is extremely rugged and secure to meet the needs of hikers and climbers. FOR WATER SPORTS ENTHUSIASTS — Made for high-impact water sports and diving. The Oceanic+ app puts a dive computer on your wrist. Ocean Band is light and flexible, with a titanium buckle and adjustable loop for a secure fit even during high-speed water sports. MOST ADVANCED HEALTH AND SAFETY FEATURES — Advanced health sensors give you deep insights into your health. Fall Detection and Crash Detection can automatically connect you with emergency services in the event of a hard fall or a severe car crash. Hold the Action button to activate a siren that can be heard up to 600 feet away.',
    reviews: [
      {
        name: 'Paul Eardley',
        rating: 4.8,
        text: 'No doubt my best import ever madePassionate my watch is 100% original, packaging and bracelets are not but are of excellent quality! Everything works even until the Apple Pay that was my biggest fear, not to mention that it arrived long before the deadline.',
      },
      {
        name: 'Stefanie',
        rating: 4.9,
        text: 'I bought this for my husband for Christmas and he is absolutely in LOVE with this watch. He has had Apple Watches in the past, but he only wore them for a week and then stopped. This one though…… he only takes it off the charge it and take a shower. He works in a metal scrap yard and this watch is tough tough tough. 10/10 highly recommend!',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '22',
    productName: 'Beats By Dre Studio Buds',
    imgUrl: productImg22,
    category: 'wireless',
    price: 149,
    shortDesc:
      'Beats_by_dre Beats Studio Buds Totally Wireless Active Noise Cancelling (ANC) Earbuds Bundle with Case',
    description:
      'True wireless noise cancelling Beats Studio Bud are made for music. Designed with a custom acoustic platform, Beats Studio Bud are engineered to deliver powerful, balanced sound in a compact, in-ear form factor. The result — immersive sound that pulls the emotion of music from the studio to your ears to keep you inspired. These earphones feature two listening modes, Active Noise Cancelling (ANC) and Transparency mode, to give you total control of your sound. Each earbud has up to 8 hours of listening time⁴ with two additional charges provided by its pocket-sized charging case to give you up to 24 hours of combined playback.',
    reviews: [
      {
        name: 'Morgan Britt',
        rating: 4.8,
        text: 'Beats trendy and cool earphones are still very good. I have bought his earphones several times before, and this earphone is very light and comfortable. It has excellent sound insulation effect and is not easy to fall off.',
      },
      {
        name: 'Keisha Robinson',
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
      'Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Defiant Black-Red (Latest Model)',
    description:
      'Premium sound with fine-tuned acoustics and Pure ANC Beats Studio3 Wireless headphones deliver a premium listening experience with Pure Adaptive Noise Canceling (Pure ANC) to actively block external noise and real-time audio calibration to preserve clarity, range, and emotion. They continuously pinpoint external sounds to block while automatically responding to individual fit in real time, optimizing sound output to preserve a premium listening experience the way artists intended.',
    reviews: [
      {
        name: 'Diana',
        rating: 4.8,
        text: 'I bought these to use for school since I spend a lot of time in the library. They work great and block out a good amount of noise. As someone who gets nauseous easily, I was worried about the noise canceling. It isn’t too strong so thankfully they don’t make me nauseous and you can always turn it off. I like that I don’t have to turn up the volume too loud to block out noise. Now I can have the volume below the half way mark and not damage my hearing. ',
      },
      {
        name: 'Martines',
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
    shortDesc:
      'Xbox Wireless Headset – Xbox Series X|S, Xbox One, and Windows 10 Devices',
    description:
      'Pair directly to your console with Xbox Wireless radio without the need for dongles, cables, or a base station. Surround yourself with spatial sound technologies including Windows Sonic, Dolby Atmos, and DTS Headphone:X. Use auto-mute and voice isolation to reduce noise interruption for crystal-clear chat. Adjust your volume and game/chat levels with the rotating earcup dials. Flexible, lightweight design with an adjustable headband. Enjoy up to 15 hours of battery life with the internal, rechargeable battery. Use Xbox Wireless, Bluetooth, or the included USB C cable to play across Xbox Series X|S, Xbox One, and Windows 10/11 devices. Compatible with Xbox Series X|S, Xbox One, and Windows 10/11 devices..',
    reviews: [
      {
        name: 'Russell B. Stewart',
        rating: 5.0,
        text: 'Has internal mixing options for chat and game audio that can be dialed in on the fly - worked right out of the box by just turning it on - no link issues a room away great sound and clarity. the mic can be muted with the button on the tip. led lets you know staus. Great battery life - 8hr sessions with no charging.',
      },
      {
        name: 'Patrick Lorincz',
        rating: 4.0,
        text: 'Sound decent, but I absolutely love the mixer control via the left ear cup. You can have it paired to both the Xbox and your phone and control the volume of each through that one control.',
      },
    ],
    avgRating: 4.5,
  },
]

export default products

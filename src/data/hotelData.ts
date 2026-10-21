export interface Room {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  subParagraph?: string;
  price: string;
  originalPrice?: string;
  priceNote: string;
  pricingTiers?: { label: string; price: string }[];
  guests: string;
  beds: string;
  baths: string;
  size?: string;
  view: string;
  mainImage: string;
  gallery: string[];
  amenities: string[];
  highlights?: { title: string; desc: string }[];
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const HOTEL_INFO = {
  name: "Anaaya Residency",
  tagline: "Comfortable Stays near Kamakhya Temple, Guwahati",
  description:
    "Well-appointed rooms designed for families, business travelers, and city visitors seeking a comfortable and peaceful stay in Guwahati.",
  subDescription:
    "Anaaya Residency is a comfortable and well-maintained hotel in Guwahati, located just minutes from Kamakhya Temple. Our rooms, service, and location are thoughtfully designed for families, business travelers, and guests seeking a calm and convenient city stay.",
  logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80",
  logoSmall: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=150&q=80",
  heroBg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80",
  videoUrl: "https://videos.pexels.com/video-files/5377684/5377684-hd_1920_1080_25fps.mp4",
  videoPoster: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  phonePrimary: "+91 7099070253",
  phonePrimaryRaw: "7099070253",
  phoneSecondary: "+91 7002160113",
  phoneSecondaryRaw: "7002160113",
  whatsapp: "+917099070253",
  whatsappUrl: "https://wa.me/917099070253?text=Hello%20Anaaya%20Residency,%20I%20would%20like%20to%20inquire%20about%20room%20booking.",
  email: "info@anaayaresidency.com",
  address: {
    line1: "3rd & 4th Floor, HG Tower",
    line2: "Near Kamakhya Temple Main Gate",
    line3: "Assam Trunk Road, Opp. LCB College Bus Stop",
    city: "Maligaon, Guwahati",
    pin: "781011",
    state: "Assam, India",
    full: "3rd & 4th Floor, HG Tower, Near Kamakhya Temple Main Gate, Assam Trunk Road, Opp. LCB College Bus Stop, Maligaon, Guwahati – 781011"
  },
  openingHours: [
    { days: "Fri - Sat", hours: "09:00 AM – 09:00 PM" },
    { days: "Sun - Mon", hours: "09:00 AM – 09:00 PM" },
    { days: "Tue - Wed", hours: "09:00 AM – 09:00 PM" },
    { days: "Thursday", hours: "09:00 AM – 09:00 PM" }
  ],
  checkInOut: {
    checkIn: "2:00 PM",
    checkOut: "12:00 PM"
  },
  highlights: [
    { title: "Inhouse Kitchen", subtitle: "24 x 7" },
    { title: "Parking & Security", subtitle: "Top Rated" },
    { title: "Location Advantage", subtitle: "Maligaon Main Road" },
    { title: "Kamakhya Temple", subtitle: "Minutes Away" },
    { title: "Sanjeevani Hospital", subtitle: "Nearby" },
    { title: "Kamakhya Railway Station", subtitle: "Easy Access" }
  ],
  mission: "To provide clean, comfortable, and affordable accommodation with warm hospitality in a well-connected part of Guwahati.",
  vision: "To become a trusted stay choice in Guwahati for travelers seeking comfort, convenience, and reliability.",
  values: "Cleanliness, professionalism, honesty, guest comfort, and personalized service in a welcoming environment."
};

export const ROOMS: Room[] = [
  {
    id: "super-deluxe",
    slug: "super-delux-room",
    name: "Super Deluxe Room with City View",
    subtitle: "Super Deluxe Room",
    tagline: "A Refined Stay Experience",
    shortDesc:
      "Our Super Deluxe Room offers spacious interiors with a city view, modern comfort, and a relaxing stay experience for families and business travelers.",
    longDesc:
      "Our Super Deluxe Room is designed for guests who prefer extra comfort, space, and elegance. Featuring modern interiors, soft ambient lighting, and carefully selected furnishings, the room offers a calm and luxurious environment for relaxation.",
    subParagraph:
      "The room includes a plush premium bed with high-quality linen, upholstered headboard, and thoughtfully arranged décor that enhances both comfort and style. Clean white walls, marble-finish accents, and warm tones create a soothing atmosphere ideal for a restful stay.",
    price: "₹2999",
    originalPrice: "₹3499",
    priceNote: "/Night",
    pricingTiers: [
      { label: "Super Deluxe Double Bedded Room", price: "INR 2499 (exc GST)" },
      { label: "Super Deluxe Triple Bedded Room", price: "INR 3249 (exc GST)" },
      { label: "Super Deluxe 4 Bedded Room", price: "INR 3999 (exc GST)" }
    ],
    guests: "Up to 4 Guests",
    beds: "Spacious Bed",
    baths: "Modern Bathroom",
    view: "City View",
    mainImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Free Wifi & Internet",
      "Air Conditioning",
      "Flat-Screen Television",
      "Comfortable Double Bed",
      "Tea & Coffee Maker",
      "Bottled Drinking Water",
      "Attached Bathroom with Hot Water",
      "Daily Housekeeping"
    ],
    highlights: [
      {
        title: "Modern Amenities Paired With Timeless Hospitality Experience",
        desc: "Enjoy a seamless stay with a range of modern amenities including air conditioning, a wall-mounted flat-screen TV, a spacious wardrobe for storage, and a dedicated work or dressing area. Complimentary high-speed Wi-Fi ensures you stay connected throughout your visit."
      },
      {
        title: "Premium Ensuite Bathroom",
        desc: "The attached bathroom is designed with premium tiles and fittings, featuring a hot water shower, modern sanitaryware, and essential toiletries for a refreshing experience."
      }
    ]
  },
  {
    id: "suite",
    slug: "suite-room",
    name: "Suite Room with Mountain View",
    subtitle: "Suite Room With Mountain View",
    tagline: "Experience Elevated Luxury",
    shortDesc:
      "Enjoy premium comfort in our Suite Room with beautiful mountain views, designed for guests seeking extra space and a luxurious stay.",
    longDesc:
      "Our Suite Room is designed for guests who seek an upscale, spacious, and private stay. With a refined layout, elegant interiors, and premium finishes, the suite offers a perfect blend of comfort and sophistication.",
    subParagraph:
      "The room features a plush king-size bed with premium linen, an upholstered headboard, and calming décor that ensures deep rest and relaxation. Soft lighting, marble-finish accents, and modern furnishings create a serene and luxurious ambiance.",
    price: "₹5499",
    originalPrice: "₹6875",
    priceNote: "/Night",
    pricingTiers: [
      { label: "Suite Room Standard", price: "INR 5499 (exc GST)" },
      { label: "Suite Room Luxury Mountain View", price: "INR 6875 (exc GST)" }
    ],
    guests: "3 - 4 Guests",
    beds: "1 King-Size Bed",
    baths: "1 Luxury Bathroom",
    view: "Mountain View & Private Balcony",
    mainImage: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Free Wifi & Internet",
      "Air Conditioning",
      "Flat-Screen Television",
      "Comfortable King Bed",
      "Tea & Coffee Maker",
      "Bottled Drinking Water",
      "Attached Bathroom with Hot Water",
      "Daily Housekeeping",
      "Private Balcony"
    ],
    highlights: [
      {
        title: "Spacious Layout with Added Comfort",
        desc: "The Suite Room offers a well-planned layout that provides more space than standard rooms, making it ideal for families, couples, and long-stay guests. A dedicated seating and relaxation area enhances comfort, while thoughtfully placed storage keeps the space clutter-free."
      },
      {
        title: "Private Balcony with Scenic Surroundings",
        desc: "Enjoy your own private balcony, offering fresh air and peaceful outdoor views. Whether it’s a quiet morning or a relaxed evening, the balcony adds a premium touch to your stay."
      }
    ]
  },
  {
    id: "deluxe",
    slug: "double-bed-room-with-hill-view",
    name: "Deluxe Room (Double Bed with Hill View)",
    subtitle: "Deluxe Room",
    tagline: "Designed Spaces for Relaxation Rest and Privacy.",
    shortDesc:
      "A comfortable Deluxe Room featuring modern amenities, spacious design, and a peaceful atmosphere.",
    longDesc:
      "Our Deluxe Room is thoughtfully designed to offer a peaceful and comfortable stay for both leisure and business travelers. With a modern interior, soothing color tones, and premium furnishings, the room creates a calm and welcoming atmosphere.",
    subParagraph:
      "Enjoy a plush double bed with fresh linens, soft pillows, and ample space to relax after a long day. The room is well-lit with natural light and equipped with air conditioning to ensure year-round comfort. A clean and modern attached bathroom with hot water and essential toiletries enhances your stay experience.",
    price: "₹2199",
    originalPrice: "₹2999",
    priceNote: "/Night",
    pricingTiers: [
      { label: "Deluxe Single/Double Occupancy", price: "INR 2199 (exc GST)" },
      { label: "Deluxe Room with Hill View", price: "INR 2999 (exc GST)" }
    ],
    guests: "2 Guests",
    beds: "1 Double Bed / 2 Beds",
    baths: "1 Modern Bath",
    size: "2,560 sq.ft suite area",
    view: "Hill View",
    mainImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Free Wifi & Internet",
      "Air Conditioning",
      "Flat-Screen Television",
      "Comfortable Double Bed",
      "Tea & Coffee Maker",
      "Bottled Drinking Water",
      "Attached Bathroom with Hot Water",
      "Daily Housekeeping"
    ],
    highlights: [
      {
        title: "Modern Amenities with Warm Hospitality",
        desc: "Designed to provide optimal relaxation, our Deluxe room combines serene hill surroundings with top-tier comforts, high-speed Wi-Fi, premium mattress, and quick room assistance."
      }
    ]
  }
];

export const HOTEL_RULES = [
  "Check-in time is from 2:00 PM and check-out time is 12:00 PM.",
  "Valid photo identification is required at check-in.",
  "Early check-in and late check-out are subject to availability.",
  "Guests are requested to keep noise levels low after 10:00 PM.",
  "Outside food and beverages are not permitted in the hotel.",
  "Any damage to hotel property will be charged to the guest.",
  "Visitors are not allowed in guest rooms without prior approval.",
  "The hotel is not responsible for loss of personal belongings.",
  "Management reserves the right to refuse service if rules are violated."
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Comfortable Accommodation",
    description: "Well-maintained rooms designed for relaxation, cleanliness, and a peaceful stay near Kamakhya Temple.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "s2",
    title: "24x7 Inhouse Kitchen",
    description: "Our staff is available to assist guests with fresh delicious meals, room-related needs, and a comfortable experience.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "s3",
    title: "Housekeeping Service",
    description: "Daily housekeeping ensures clean, hygienic, and pleasant rooms for a comfortable and worry-free stay.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "s4",
    title: "24/7 Front Desk",
    description: "Our front desk team is available to assist guests with check-in, inquiries, and local guidance at any time.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "s5",
    title: "Near Kamakhya Temple",
    description: "Conveniently located near Kamakhya Temple with easy access to public transport, railway station, and nearby facilities.",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80"
  }
];

export const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80", title: "Luxury Suite Bedroom" },
  { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80", title: "Modern Bed & Lighting" },
  { src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80", title: "Executive Room Setup" },
  { src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80", title: "Spacious Balcony View" },
  { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80", title: "Cozy Furnishings" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", title: "Room Ambiance" },
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80", title: "TV Unit & Console" },
  { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80", title: "Wardrobe & Storage" },
  { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", title: "Attached Luxury Bathroom" },
  { src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", title: "Premium Double Bed" },
  { src: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef9?auto=format&fit=crop&w=1200&q=80", title: "Luxury Suite Layout" },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80", title: "Marble Accents & Finishes" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", title: "Modern Reception & Lobby" },
  { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80", title: "Inhouse Dining & Kitchen" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80", title: "City View Horizon" },
  { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80", title: "Fresh Linen & Pillows" },
  { src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80", title: "Mountain View Sunrise" },
  { src: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80", title: "Kamakhya Scenic Gateway" },
  { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", title: "Modern Sanitaryware & Shower" },
  { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80", title: "Family Room Comfort" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", title: "Warm Evening Lighting" },
  { src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", title: "Deluxe Twin Beds" },
  { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80", title: "Dressing Area & Mirror" },
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80", title: "Peaceful Maligaon Stay" }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Piyali Dey",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    date: "A month ago",
    comment: "Best Stay at Maligaon & excellent foods. The staff behaviour is very good 👍",
    verified: true
  },
  {
    id: "r2",
    name: "Laxmi Adhikari",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    date: "2 months ago",
    comment: "Very clean and comfortable hotel in Maligaon, Guwahati. Kamakhya temple is easily accessible from here. Highly recommended for families.",
    verified: true
  },
  {
    id: "r3",
    name: "Nipu Das",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    date: "2 months ago",
    comment: "Peaceful environment, very polite staff, clean washrooms and comfortable bedding. Will definitely visit again.",
    verified: true
  },
  {
    id: "r4",
    name: "Bijoy sing millick Sing",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    date: "3 months ago",
    comment: "Spacious rooms with proper ventilation. Prime location on Assam Trunk Road opposite LCB college bus stop. Good parking.",
    verified: true
  },
  {
    id: "r5",
    name: "Biki Medhi",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    date: "4 months ago",
    comment: "Great hospitalities and very peaceful atmosphere. One of the best stay choices near Kamakhya main gate.",
    verified: true
  },
  {
    id: "r6",
    name: "Apurba Das Das",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    date: "5 months ago",
    comment: "Very neat and clean hotel near Kamakhya gate. Staff is very humble and 24/7 service was super helpful.",
    verified: true
  },
  {
    id: "r7",
    name: "Soin Uddin",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    date: "5 months ago",
    comment: "Top notch service, 24x7 kitchen service is a lifesaver. Rooms are large and well maintained.",
    verified: true
  },
  {
    id: "r8",
    name: "Pallabi Das",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    date: "6 months ago",
    comment: "Stayed here with family. Super convenient location, prompt assistance and very clean linen.",
    verified: true
  }
];

export const FAQS: FAQ[] = [
  {
    question: "How can I make a reservation?",
    answer: "You can easily book your stay through our website’s online booking form or call/WhatsApp our reservation team directly at +91 7099070253."
  },
  {
    question: "Do you offer free Wi-Fi at the Hotel?",
    answer: "Yes, complimentary high-speed Wi-Fi is available throughout the hotel, including all guest rooms and public areas."
  },
  {
    question: "Are meals included with the room booking?",
    answer: "Breakfast is available with select room packages. Additionally, our 24x7 in-house kitchen serves fresh, delicious meals on order."
  },
  {
    question: "How far is Anaaya Residency from Kamakhya Temple?",
    answer: "We are located just minutes away on Assam Trunk Road, near the Kamakhya Temple Main Gate and opposite LCB College Bus Stop in Maligaon."
  },
  {
    question: "What are the Check-in and Check-out timings?",
    answer: "Check-in begins at 2:00 PM and check-out is by 12:00 PM. Early check-in and late check-out are subject to availability."
  }
];

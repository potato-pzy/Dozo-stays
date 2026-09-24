import house1 from "../img/Houses/House1.png"
import house2 from "../img/Houses/House 2.png"
import house3 from "../img/Houses/House 3.png"
import house4 from "../img/Houses/House4.png"
import house5 from "../img/Houses/House5.png"
import house6 from "../img/Houses/House6.png"
import bedroomImg from "../img/productive & peace/bedroom.png"
import diningImg from "../img/productive & peace/dining.png"
import coworkingImg from "../img/productive & peace/coworking.png"

export type RoomType = {
  name: string
  sub: string
  features: [string, string]
  price: number
  icon: "single" | "shared" | "double"
}

export type Property = {
  id: number
  name: string
  location: string
  address: string
  price: number
  badge: string
  badgeColor: string
  badgeType: "coliving" | "ladies"
  amenities: string[]
  image: string
  gallery: string[]
  manager: string
  overview: string
  rooms: RoomType[]
}

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`

const roomsFor = (base: number): RoomType[] => [
  {
    name: "Single Bed",
    sub: "Ultimate Privacy",
    features: ["Private Bed", "Attached Bath"],
    price: base,
    icon: "single",
  },
  {
    name: "Shared Bed",
    sub: "Twin Sharing (2-Pax)",
    features: ["Twin Setup", "Fiber Internet"],
    price: Math.round((base * 0.655) / 100) * 100,
    icon: "shared",
  },
  {
    name: "Double Room",
    sub: "Premium Double Bed",
    features: ["King Size", "Private Balcony"],
    price: Math.round((base * 1.24) / 100) * 100,
    icon: "double",
  },
]

export const properties: Property[] = [
  {
    id: 1,
    name: "The Urban Oasis",
    location: "HSR Layout, Sector 2",
    address: "Sector 2, HSR Layout, Bengaluru",
    price: 14500,
    badge: "CO-LIVING",
    badgeColor: "bg-[#434b00]",
    badgeType: "coliving",
    amenities: ["wifi", "food", "power", "screen"],
    image: house1,
    gallery: [house1, diningImg, bedroomImg],
    manager: "Rajesh Kumar",
    overview:
      "Designed for modern professionals and students, this property combines the comfort of home with the sophistication of a premium hotel. Enjoy spacious rooms, high-speed fiber internet, and a community-driven atmosphere in the heart of HSR Layout.",
    rooms: roomsFor(14500),
  },
  {
    id: 2,
    name: "Flora Residences",
    location: "Koramangala 4th Block",
    address: "4th Block, Koramangala, Bengaluru",
    price: 12000,
    badge: "LADIES ONLY",
    badgeColor: "bg-[#bb0018]",
    badgeType: "ladies",
    amenities: ["wifi", "food", "gym", "screen"],
    image: house2,
    gallery: [house2, bedroomImg, coworkingImg],
    manager: "Priya Sharma",
    overview:
      "A safe, thoughtfully managed residence for women in the middle of Koramangala's café-lined streets. Bright private rooms, chef-served meals, biometric access and a warm resident community make settling in effortless.",
    rooms: roomsFor(12000),
  },
  {
    id: 3,
    name: "The Nexus Hub",
    location: "Indiranagar, 100ft Road",
    address: "100ft Road, Indiranagar, Bengaluru",
    price: 18900,
    badge: "CO-LIVING",
    badgeColor: "bg-[#434b00]",
    badgeType: "coliving",
    amenities: ["wifi", "power", "screen", "cctv"],
    image: house3,
    gallery: [house3, coworkingImg, diningImg],
    manager: "Arun Menon",
    overview:
      "Live steps from Indiranagar's food, metro and nightlife. The Nexus Hub pairs design-led rooms with a buzzing co-working lounge, daily housekeeping and round-the-clock security for professionals who want it all.",
    rooms: roomsFor(18900),
  },
  {
    id: 4,
    name: "Evolve Living",
    location: "BTM Layout 2nd Stage",
    address: "2nd Stage, BTM Layout, Bengaluru",
    price: 9500,
    badge: "CO-LIVING",
    badgeColor: "bg-[#434b00]",
    badgeType: "coliving",
    amenities: ["wifi", "food", "screen", "building"],
    image: house4,
    gallery: [house4, bedroomImg, diningImg],
    manager: "Divya Nair",
    overview:
      "Smart, budget-friendly co-living in BTM Layout with everything covered — meals, WiFi, housekeeping and power backup. Ideal for students and first-jobbers who want comfort without the premium price tag.",
    rooms: roomsFor(9500),
  },
  {
    id: 5,
    name: "Serene Heights",
    location: "Whitefield, EPIP Zone",
    address: "EPIP Zone, Whitefield, Bengaluru",
    price: 15000,
    badge: "LADIES ONLY",
    badgeColor: "bg-[#bb0018]",
    badgeType: "ladies",
    amenities: ["wifi", "screen", "laundry", "food"],
    image: house5,
    gallery: [house5, coworkingImg, bedroomImg],
    manager: "Karthik Rao",
    overview:
      "A calm, secure women's residence minutes from Whitefield's IT parks. Skyline-view lounges, quiet study zones, in-house meals and dependable facility staff make it a favourite with working professionals.",
    rooms: roomsFor(15000),
  },
  {
    id: 6,
    name: "Common Ground",
    location: "JP Nagar, 4th Phase",
    address: "4th Phase, JP Nagar, Bengaluru",
    price: 11800,
    badge: "CO-LIVING",
    badgeColor: "bg-[#434b00]",
    badgeType: "coliving",
    amenities: ["wifi", "laundry", "power", "screen"],
    image: house6,
    gallery: [house6, diningImg, coworkingImg],
    manager: "Ananya Iyer",
    overview:
      "Community-first living in green JP Nagar — shared lounges, movie nights, a library corner and home-style food. Walk to parks and the metro while paying one simple monthly bill.",
    rooms: roomsFor(11800),
  },
  {
    id: 7,
    name: "The Willow House",
    location: "HSR Layout, Bangalore",
    address: "27th Main, HSR Layout, Bengaluru",
    price: 18000,
    badge: "CO-LIVING",
    badgeColor: "bg-[#434b00]",
    badgeType: "coliving",
    amenities: ["wifi", "food", "power", "screen"],
    image: house1,
    gallery: [house1, bedroomImg, diningImg],
    manager: "Meera Joshi",
    overview:
      "Our trending address in HSR Layout — a leafy, light-filled house with high-speed WiFi in every corner, chef-served meals and a rooftop sit-out made for slow Sunday mornings.",
    rooms: roomsFor(18000),
  },
  {
    id: 8,
    name: "Skyline Studios",
    location: "Indiranagar, Bangalore",
    address: "100ft Road, Indiranagar, Bengaluru",
    price: 25000,
    badge: "CO-LIVING",
    badgeColor: "bg-[#434b00]",
    badgeType: "coliving",
    amenities: ["wifi", "power", "screen", "gym"],
    image: house2,
    gallery: [house2, coworkingImg, diningImg],
    manager: "Vikram Reddy",
    overview:
      "Premium studio living with floor-to-ceiling city views. In-unit laundry, gym access, fiber internet and daily housekeeping — built for CXOs, founders and anyone who wants the skyline as a roommate.",
    rooms: roomsFor(25000),
  },
  {
    id: 9,
    name: "The Heritage Loft",
    location: "Koramangala, Bangalore",
    address: "80ft Road, Koramangala, Bengaluru",
    price: 15000,
    badge: "CO-LIVING",
    badgeColor: "bg-[#434b00]",
    badgeType: "coliving",
    amenities: ["wifi", "food", "screen", "laundry"],
    image: house3,
    gallery: [house3, bedroomImg, coworkingImg],
    manager: "Sana Sheikh",
    overview:
      "A newly opened creative loft with studio corners, a roof garden and warm brick-and-wood interiors. Home-style food, fast WiFi and a calendar full of resident events in the heart of Koramangala.",
    rooms: roomsFor(15000),
  },
]

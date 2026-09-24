import { useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import {
  MapPin,
  ChevronRight,
  ChevronDown,
  BedSingle,
  BedDouble,
  Users,
  Bath,
  Wifi,
  UtensilsCrossed,
  Zap,
  ShieldCheck,
  WashingMachine,
  Dumbbell,
  Sparkles,
  Calendar,
  MessageCircle,
  Phone,
  X,
  LayoutGrid,
  Check,
  CigaretteOff,
  VolumeX,
  PawPrint,
  Coffee,
} from "lucide-react"
import { properties, formatINR } from "./data/properties"

const tabs = [
  "Overview",
  "Amenities",
  "Food Menu",
  "House Rules",
  "Nearby",
] as const

const amenityMeta: Record<string, {
  icon: React.ReactNode
  label: string
  desc: string
}> = {
  wifi: {
    icon: <Wifi size={20} />,
    label: "High-Speed WiFi",
    desc: "Fiber internet in every room",
  },
  food: {
    icon: <UtensilsCrossed size={20} />,
    label: "Chef-Served Meals",
    desc: "Fresh breakfast & dinner daily",
  },
  power: {
    icon: <Zap size={20} />,
    label: "Power Backup",
    desc: "Uninterrupted supply, always",
  },
  screen: {
    icon: <ShieldCheck size={20} />,
    label: "CCTV Security",
    desc: "Monitored common areas",
  },
  gym: {
    icon: <Dumbbell size={20} />,
    label: "Fitness Center",
    desc: "In-house workout zone",
  },
  cctv: {
    icon: <ShieldCheck size={20} />,
    label: "CCTV Security",
    desc: "Monitored common areas",
  },
  laundry: {
    icon: <WashingMachine size={20} />,
    label: "Laundry Service",
    desc: "Weekly wash & fold",
  },
  building: {
    icon: <Sparkles size={20} />,
    label: "Design-Led Building",
    desc: "Curated modern interiors",
  },
}

const roomIcons: Record<string, React.ReactNode> = {
  single: <BedSingle size={20} className="text-[#434b00]" />,
  shared: <Users size={20} className="text-[#434b00]" />,
  double: <BedDouble size={20} className="text-[#434b00]" />,
}

const foodMenu = [
  {
    meal: "Breakfast",
    time: "7:30 – 9:30 AM",
    items: "Poha, idli-sambar, eggs to order, filter coffee",
    icon: <Coffee size={18} />,
  },
  {
    meal: "Lunch",
    time: "12:30 – 2:30 PM",
    items: "Rice, dal, 2 rotis, seasonal sabzi, salad & papad",
    icon: <UtensilsCrossed size={18} />,
  },
  {
    meal: "Dinner",
    time: "7:30 – 9:30 PM",
    items: "Roti, paneer special, dal tadka, dessert on Sundays",
    icon: <UtensilsCrossed size={18} />,
  },
]

const houseRules = [
  {
    icon: <CigaretteOff size={18} />,
    text: "No smoking inside rooms or common areas",
  },
  {
    icon: <Users size={18} />,
    text: "Guests welcome in lounges until 9:00 PM",
  },
  { icon: <VolumeX size={18} />, text: "Quiet hours from 10:00 PM to 7:00 AM" },
  {
    icon: <PawPrint size={18} />,
    text: "Pets are not allowed on the property",
  },
  {
    icon: <Sparkles size={18} />,
    text: "Keep kitchens, lounges and laundry areas clean",
  },
]

const nearby = [
  { name: "Metro Station", distance: "0.6 km" },
  { name: "Tech Park Gate 2", distance: "1.2 km" },
  { name: "Central Mall", distance: "0.9 km" },
  { name: "City Hospital", distance: "1.5 km" },
  { name: "Café Street", distance: "0.4 km" },
]

export default function PropertyDetails() {
  const { id } = useParams()
  const property = properties.find((p) => String(p.id) === id)

  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Overview")
  const [selectedRoom, setSelectedRoom] = useState(0)
  const [stayType, setStayType] = useState("Long Term")
  const [moveIn, setMoveIn] = useState("")
  const [mainPhoto, setMainPhoto] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  if (!property) return <Navigate to="/stays" replace />

  const bookingPrice = property.rooms[selectedRoom].price
  const advance = Math.round((bookingPrice * 0.35) / 100) * 100
  const initials = property.manager
    .split(" ")
    .map((w) => w[0])
    .join("")
  const thumbs = property.gallery.filter((_, i) => i !== mainPhoto).slice(0, 2)

  return (
    <div className="min-h-screen bg-[#fcfaed] pt-16">
      <main className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-8 pb-8 flex flex-col gap-6">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="flex items-center gap-2">
          <Link
            to="/"
            className="text-[#474839] text-base hover:text-[#1b1c1c] transition-colors"
          >
            Home
          </Link>
          <ChevronRight size={12} className="text-[#474839]" />
          <Link
            to="/stays"
            className="text-[#474839] text-base hover:text-[#1b1c1c] transition-colors"
          >
            Properties
          </Link>
          <ChevronRight size={12} className="text-[#474839]" />
          <span className="font-semibold text-[#1c1c15] text-base">
            {property.name}
          </span>
        </nav>

        {/* Gallery */}
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[420px] lg:h-[480px]">
          <div className="relative rounded-xl overflow-hidden flex-none w-full md:w-[65%] h-[280px] md:h-full shrink-0">
            <img
              src={property.gallery[mainPhoto]}
              alt={`${property.name} exterior`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/[0.05] pointer-events-none" />
          </div>
          <div className="flex-1 flex flex-row md:flex-col gap-4 h-[160px] md:h-full min-w-0">
            {thumbs.map((src, i) => (
              <button
                key={src + i}
                onClick={() => setMainPhoto(property.gallery.indexOf(src))}
                className="relative flex-1 rounded-xl overflow-hidden cursor-pointer group min-w-0"
              >
                <img
                  src={src}
                  alt={`${property.name} interior`}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
                {i === 1 && (
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.stopPropagation()
                      setLightbox(true)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") setLightbox(true)
                    }}
                    className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-2 px-3 py-2 md:px-4 bg-white/90 backdrop-blur rounded-lg text-sm text-[#1c1c15] shadow-md hover:bg-white transition-colors cursor-pointer"
                  >
                    <LayoutGrid size={14} />
                    View All Photos
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content area */}
        <div className="flex flex-col lg:flex-row gap-12 items-start pt-4">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-6 min-w-0">
            <div>
              <div className="flex gap-3 items-center mb-2 flex-wrap">
                <span
                  className={`rounded-full px-3 py-1 text-base ${
                    property.badgeType === "coliving"
                      ? "bg-[rgba(90,100,0,0.1)] text-[#5a6400]"
                      : "bg-[rgba(187,0,24,0.08)] text-[#bb0018]"
                  }`}
                >
                  {property.badgeType === "coliving"
                    ? "Co-Living PG"
                    : "Ladies PG"}
                </span>
                <span className="flex items-center gap-1.5 text-[#bb0018] text-base">
                  <span className="w-2 h-2 bg-[#bb0018] rounded-full shrink-0" />
                  Beds Available
                </span>
              </div>
              <div className="text-base text-[#1c1c15] mb-2">
                {property.name}
              </div>
              <div className="flex items-center gap-1 text-[#474839] text-base">
                <MapPin size={14} className="shrink-0" />
                {property.address}
              </div>
            </div>

            {/* Tabs */}
            <div
              className="flex gap-8 border-b border-[#c8c8b4] overflow-x-auto"
              role="tablist"
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 py-4 text-base transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab
                      ? "font-bold text-[#434b00] border-b-2 border-[#434b00] -mb-px"
                      : "text-[#474839] hover:text-[#1b1c1c]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Overview */}
            {activeTab === "Overview" && (
              <div className="flex flex-col gap-6 pt-2">
                <p className="text-base text-[#474839] leading-[26px]">
                  Experience a new standard of living at{" "}
                  <em className="font-['Playfair_Display:Italic'] italic text-[#434b00]">
                    {property.name}
                  </em>
                  . {property.overview}
                </p>
                <div className="text-base text-[#1c1c15] pt-4">
                  Room Types Available
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  {property.rooms.map((room, i) => (
                    <div
                      key={room.name}
                      className={`flex-1 bg-[#f6f4e8] border rounded-xl p-6 flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(27,28,28,0.05)] min-w-0 transition-colors ${
                        selectedRoom === i
                          ? "border-[#434b00]"
                          : "border-[rgba(200,200,180,0.3)]"
                      }`}
                    >
                      <div>
                        <div className="w-12 h-12 rounded-full bg-[rgba(67,75,0,0.1)] flex items-center justify-center shrink-0">
                          {roomIcons[room.icon]}
                        </div>
                        <div className="text-base text-[#1c1c15] pt-3">
                          {room.name}
                        </div>
                        <div className="text-base text-[#474839]">
                          {room.sub}
                        </div>
                        <div className="flex flex-col gap-2 pt-3">
                          {room.features.map((f) => (
                            <div
                              key={f}
                              className="flex items-center gap-2 text-base text-[#474839]"
                            >
                              <Check
                                size={14}
                                className="text-[#434b00] shrink-0"
                              />
                              {f}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex flex-col gap-1.5">
                          <div className="text-base font-bold text-[#1c1c15]">
                            {formatINR(room.price)}
                          </div>
                          <div className="text-[10px] text-[#474839] tracking-[0.5px] uppercase">
                            PER MONTH
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedRoom(i)}
                          className={`rounded-lg px-4 py-2 text-base cursor-pointer transition-all ${
                            selectedRoom === i
                              ? "bg-[#434b00] text-white border border-[#434b00]"
                              : "bg-transparent text-[#434b00] border border-[#434b00] hover:bg-[rgba(67,75,0,0.08)]"
                          }`}
                        >
                          {selectedRoom === i ? "Selected" : "Select"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Amenities */}
            {activeTab === "Amenities" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {property.amenities.map((a) => {
                  const meta = amenityMeta[a]
                  if (!meta) return null
                  return (
                    <div
                      key={a}
                      className="flex items-center gap-4 bg-[#f6f4e8] border border-[rgba(200,200,180,0.3)] rounded-xl p-5"
                    >
                      <div className="w-12 h-12 rounded-full bg-[rgba(67,75,0,0.1)] flex items-center justify-center text-[#434b00] shrink-0">
                        {meta.icon}
                      </div>
                      <div>
                        <div className="text-base font-semibold text-[#1c1c15]">
                          {meta.label}
                        </div>
                        <div className="text-sm text-[#474839]">
                          {meta.desc}
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div className="flex items-center gap-4 bg-[#f6f4e8] border border-[rgba(200,200,180,0.3)] rounded-xl p-5">
                  <div className="w-12 h-12 rounded-full bg-[rgba(67,75,0,0.1)] flex items-center justify-center text-[#434b00] shrink-0">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-[#1c1c15]">
                      Weekly Housekeeping
                    </div>
                    <div className="text-sm text-[#474839]">
                      Rooms & lounges, every week
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#f6f4e8] border border-[rgba(200,200,180,0.3)] rounded-xl p-5">
                  <div className="w-12 h-12 rounded-full bg-[rgba(67,75,0,0.1)] flex items-center justify-center text-[#434b00] shrink-0">
                    <Bath size={20} />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-[#1c1c15]">
                      Attached Bath Options
                    </div>
                    <div className="text-sm text-[#474839]">
                      Private washrooms on select floors
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Food Menu */}
            {activeTab === "Food Menu" && (
              <div className="flex flex-col gap-4 pt-2">
                {foodMenu.map((m) => (
                  <div
                    key={m.meal}
                    className="flex items-center gap-4 bg-[#f6f4e8] border border-[rgba(200,200,180,0.3)] rounded-xl p-5"
                  >
                    <div className="w-12 h-12 rounded-full bg-[rgba(67,75,0,0.1)] flex items-center justify-center text-[#434b00] shrink-0">
                      {m.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-base font-semibold text-[#1c1c15]">
                        {m.meal}{" "}
                        <span className="font-normal text-sm text-[#474839]">
                          · {m.time}
                        </span>
                      </div>
                      <div className="text-sm text-[#474839]">{m.items}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* House Rules */}
            {activeTab === "House Rules" && (
              <div className="flex flex-col gap-3 pt-2">
                {houseRules.map((r) => (
                  <div
                    key={r.text}
                    className="flex items-center gap-3 bg-[#f6f4e8] border border-[rgba(200,200,180,0.3)] rounded-xl px-5 py-4"
                  >
                    <span className="text-[#434b00] shrink-0">{r.icon}</span>
                    <span className="text-base text-[#474839]">{r.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Nearby */}
            {activeTab === "Nearby" && (
              <div className="flex flex-col gap-3 pt-2">
                {nearby.map((n) => (
                  <div
                    key={n.name}
                    className="flex items-center gap-3 bg-[#f6f4e8] border border-[rgba(200,200,180,0.3)] rounded-xl px-5 py-4"
                  >
                    <MapPin size={16} className="text-[#434b00] shrink-0" />
                    <span className="flex-1 text-base text-[#1c1c15]">
                      {n.name}
                    </span>
                    <span className="text-sm text-[#474839]">{n.distance}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Booking card */}
          <aside className="w-full lg:flex-none lg:w-[403px] bg-white border border-[rgba(200,200,180,0.3)] rounded-xl shadow-[0_4px_20px_-2px_rgba(27,28,28,0.05)] p-8 lg:sticky lg:top-24 flex flex-col gap-4">
            <div className="flex items-end gap-1">
              <span className="text-base font-bold text-[#1c1c15]">
                {formatINR(bookingPrice)}
              </span>
              <span className="text-base text-[#474839] pb-1">/mo</span>
              <span className="ml-auto bg-[#eae8dd] rounded px-2 py-1 text-[10px] font-bold text-[#474839] uppercase">
                {formatINR(advance)} ADVANCE
              </span>
            </div>

            <div className="flex bg-[#f0eee2] rounded-full p-1">
              {["Short Stay", "Long Term"].map((s) => (
                <button
                  key={s}
                  onClick={() => setStayType(s)}
                  className={`flex-1 text-center p-2 rounded-full text-base transition-all cursor-pointer ${
                    stayType === s
                      ? "bg-[#5a6400] text-[#d4e177] shadow"
                      : "text-[#474839]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div>
              <div className="text-[11px] font-bold text-[#474839] uppercase tracking-[0.5px] mb-2">
                MOVE-IN DATE
              </div>
              <div className="relative">
                <input
                  type="date"
                  value={moveIn}
                  onChange={(e) => setMoveIn(e.target.value)}
                  className="w-full bg-[#f6f4e8] border border-[#c8c8b4] rounded-lg pl-10 pr-4 py-3.5 text-base text-[#474839] outline-none focus:border-[#434b00] transition-colors"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#474839] pointer-events-none">
                  <Calendar size={18} />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[rgba(224,41,45,0.1)] border border-[rgba(224,41,45,0.2)] rounded-lg p-3.5">
              <ShieldCheck size={16} className="text-[#bb0018] shrink-0" />
              <span className="text-base text-[#bb0018]">
                Zero brokerage guarantee
              </span>
            </div>

            <button className="flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-[#c7d92c] to-[#ffc29a] text-white text-base font-bold cursor-pointer shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity">
              Book Now
            </button>
            <button className="flex items-center justify-center p-4 rounded-full border-2 border-[#434b00] bg-transparent text-[#434b00] text-base font-bold cursor-pointer hover:bg-[rgba(67,75,0,0.06)] transition-colors">
              Schedule a Visit
            </button>

            <div className="flex items-center gap-4 pt-6 border-t border-[#c8c8b4]">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-[#434b00] text-[#d4e177] flex items-center justify-center font-bold text-base">
                {initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-bold text-[#474839] uppercase tracking-[0.5px]">
                  PROPERTY MANAGER
                </div>
                <div className="text-base font-bold text-[#1c1c15] truncate">
                  {property.manager}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center cursor-pointer hover:bg-[#dcfce7] transition-colors"
                >
                  <MessageCircle size={16} className="text-green-700" />
                </button>
                <button
                  aria-label="Call"
                  className="w-10 h-10 rounded-full bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center cursor-pointer hover:bg-[#dbeafe] transition-colors"
                >
                  <Phone size={15} className="text-blue-700" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1b1c1c] px-10 py-20 mt-20">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="flex flex-col gap-6 lg:col-span-2">
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[#c7d92c] text-2xl leading-8 tracking-[-0.3px]">
                Dozo Stays
              </p>
              <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#9a9b93] text-sm leading-6 max-w-[340px]">
                Bangalore's most trusted long-term PG and co-living network.
                Crafting intentional spaces for the modern urban pioneer.
              </p>
              <div className="flex gap-3 items-center">
                <button
                  aria-label="Facebook"
                  className="bg-[rgba(251,249,248,0.08)] hover:bg-[rgba(251,249,248,0.15)] rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 cursor-pointer"
                >
                  <svg
                    className="w-[15px] h-[15px] text-[#e4e2e1]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </button>
                <button
                  aria-label="Instagram"
                  className="bg-[rgba(251,249,248,0.08)] hover:bg-[rgba(251,249,248,0.15)] rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 cursor-pointer"
                >
                  <svg
                    className="w-[15px] h-[15px] text-[#e4e2e1]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </button>
                <button
                  aria-label="Twitter"
                  className="bg-[rgba(251,249,248,0.08)] hover:bg-[rgba(251,249,248,0.15)] rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 cursor-pointer"
                >
                  <svg
                    className="w-[15px] h-[15px] text-[#e4e2e1]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#c7d92c] text-xs tracking-[1.6px] uppercase leading-4">
                Platform
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-[#9a9b93] hover:text-[#fbf9f8] text-sm leading-5 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-[#9a9b93] hover:text-[#fbf9f8] text-sm leading-5 transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-[#9a9b93] hover:text-[#fbf9f8] text-sm leading-5 transition-colors duration-200"
                >
                  Resident Portal
                </a>
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-[#9a9b93] hover:text-[#fbf9f8] text-sm leading-5 transition-colors duration-200"
                >
                  Contact Support
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#c7d92c] text-xs tracking-[1.6px] uppercase leading-4">
                Stay Connected
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-[#9a9b93] hover:text-[#fbf9f8] text-sm leading-5 transition-colors duration-200"
                >
                  Newsroom
                </a>
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-[#9a9b93] hover:text-[#fbf9f8] text-sm leading-5 transition-colors duration-200"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-[#9a9b93] hover:text-[#fbf9f8] text-sm leading-5 transition-colors duration-200"
                >
                  Partnerships
                </a>
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-[#9a9b93] hover:text-[#fbf9f8] text-sm leading-5 transition-colors duration-200"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[rgba(251,249,248,0.08)] pt-8 flex items-center justify-between gap-4 flex-wrap">
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#6b6d60] text-xs leading-4">
              © 2024 Dozo Stays. All rights reserved.
            </p>
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#6b6d60] text-xs leading-4">
              Made with ♥ for modern residents.
            </p>
          </div>
        </div>
      </footer>

      {/* Photo lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex flex-col p-6 md:p-10"
          onClick={() => setLightbox(false)}
        >
          <div className="flex items-center justify-between max-w-[1200px] w-full mx-auto mb-4">
            <span className="text-white text-base font-semibold">
              {property.name} — all photos
            </span>
            <button
              aria-label="Close"
              onClick={() => setLightbox(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] w-full mx-auto overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {property.gallery.map((src, i) => (
              <img
                key={src + i}
                src={src}
                alt={`${property.name} photo ${i + 1}`}
                className="w-full h-64 object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

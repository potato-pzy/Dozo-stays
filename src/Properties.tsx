import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  MapPin,
  ChevronDown,
  Wifi,
  UtensilsCrossed,
  Zap,
  Shield,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { properties, formatINR } from "./data/properties"

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi size={18} className="text-[#777867]" />,
  food: <UtensilsCrossed size={18} className="text-[#777867]" />,
  power: <Zap size={18} className="text-[#777867]" />,
  screen: <Shield size={18} className="text-[#777867]" />,
  gym: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#777867"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 6.5h11" />
      <path d="M6.5 17.5h11" />
      <path d="M6 12h12" />
      <path d="M3 8v8" />
      <path d="M21 8v8" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
    </svg>
  ),
  cctv: <Shield size={18} className="text-[#777867]" />,
  laundry: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#777867"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="2" width="18" height="20" rx="2" />
      <circle cx="12" cy="14" r="4" />
      <path d="M7 2v4" />
      <path d="M17 2v4" />
    </svg>
  ),
  building: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#777867"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
    </svg>
  ),
}

const amenityLabels: Record<string, string> = {
  wifi: "WiFi",
  food: "Food",
  power: "Power",
  screen: "CCTV",
  gym: "Gym",
  cctv: "CCTV",
  laundry: "Laundry",
  building: "Building",
}

export default function PropertiesPage() {
  const navigate = useNavigate()
  const [availability, setAvailability] = useState("Available Now")
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({
    coliving: false,
    ladies: false,
    wifi: false,
    food: false,
    power: false,
    cctv: false,
  })

  return (
    <div className="min-h-screen bg-[#fcfaed] pt-16">
      {/* Hero */}
      <section className="bg-[#c7d92c] flex items-center justify-center px-6 lg:px-10 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1200px] gap-6">
          <div className="text-center lg:text-left shrink-0">
            <h1 className="text-[28px] font-bold text-[#545d00] leading-tight">
              Find Your Stay
            </h1>
            <p className="text-sm text-[#545d00]/90 mt-1">
              Verified PGs across the city
            </p>
          </div>
          <div className="flex items-center bg-white rounded-full p-1.5 pl-2 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] flex-1 w-full max-w-[630px]">
            <div className="flex items-center flex-1 min-w-0 border-r border-[#c8c8b4] px-3 py-2 gap-2">
              <MapPin size={16} className="text-[#474839] shrink-0" />
              <input
                type="text"
                placeholder="Search city or locality"
                className="flex-1 min-w-0 text-[13px] text-[#474839] bg-transparent border-none outline-none placeholder:text-[#c8c8b4]"
              />
            </div>
            <div className="flex items-center justify-between flex-1 min-w-0 px-3 py-2 gap-2 cursor-pointer">
              <span className="text-[13px] text-[#474839] truncate">
                Co-Living PG
              </span>
              <ChevronDown size={16} className="text-[#6b7280] shrink-0" />
            </div>
            <button className="bg-gradient-to-br from-[#c7d92c] to-[#ffc29a] text-white text-sm font-medium px-7 py-2.5 rounded-full whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1280px] mx-auto px-6 lg:px-10 py-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-[260px] shrink-0">
          <div className="bg-white border border-[rgba(200,200,180,0.4)] rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Filters</h2>
              <button
                onClick={() => {
                  setFilters({
                    coliving: false,
                    ladies: false,
                    wifi: false,
                    food: false,
                    power: false,
                    cctv: false,
                  })
                  setAvailability("Available Now")
                }}
                className="text-base text-[#434b00] cursor-pointer"
              >
                Clear All
              </button>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-3">
              <span className="text-base text-[#1b1c1c]">Location</span>
              <div className="flex items-center gap-2 bg-[#fbf9f8] border border-[#c8c8b4] rounded-lg px-3 py-2.5 cursor-pointer">
                <MapPin size={16} className="text-[#474839] shrink-0" />
                <span className="flex-1 text-sm text-[#1b1c1c]">
                  Select locality
                </span>
                <ChevronDown size={18} className="text-[#6b7280]" />
              </div>
            </div>

            <div className="h-px bg-[rgba(200,200,180,0.3)]" />

            {/* PG Type */}
            <div className="flex flex-col gap-3">
              <span className="text-base text-[#1b1c1c]">PG Type</span>
              {(["coliving", "ladies"] as const).map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters[type]}
                    onChange={(e) =>
                      setFilters({ ...filters, [type]: e.target.checked })
                    }
                    className="w-5 h-5 border border-[#c8c8b4] rounded accent-[#434b00] cursor-pointer shrink-0"
                  />
                  <span className="text-sm text-[#474839]">
                    {type === "coliving" ? "Co-Living PG" : "Ladies PG"}
                  </span>
                </label>
              ))}
            </div>

            <div className="h-px bg-[rgba(200,200,180,0.3)]" />

            {/* Price Range */}
            <div className="flex flex-col gap-3">
              <span className="text-base text-[#1b1c1c]">Price Range</span>
              <div className="flex justify-between">
                <span className="bg-[#eae8dd] text-[#434b00] text-xs font-semibold rounded px-2 py-1">
                  ₹8,500
                </span>
                <span className="bg-[#eae8dd] text-[#434b00] text-xs font-semibold rounded px-2 py-1">
                  ₹25,000
                </span>
              </div>
              <div className="relative h-2 bg-[#eae8dd] rounded-full mt-2">
                <div className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-[#434b00] rounded-full left-1/2 -translate-x-1/2 cursor-pointer" />
              </div>
            </div>

            <div className="h-px bg-[rgba(200,200,180,0.3)]" />

            {/* Amenities */}
            <div className="flex flex-col gap-3">
              <span className="text-base text-[#1b1c1c]">Amenities</span>
              {(["wifi", "food", "power", "cctv"] as const).map((amenity) => (
                <label
                  key={amenity}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters[amenity]}
                    onChange={(e) =>
                      setFilters({ ...filters, [amenity]: e.target.checked })
                    }
                    className="w-5 h-5 border border-[#c8c8b4] rounded accent-[#434b00] cursor-pointer shrink-0"
                  />
                  <div className="flex items-center gap-2">
                    {amenityIcons[amenity]}
                    <span className="text-sm text-[#474839]">
                      {amenityLabels[amenity]}
                    </span>
                  </div>
                </label>
              ))}
            </div>

            <div className="h-px bg-[rgba(200,200,180,0.3)]" />

            {/* Availability */}
            <div className="flex flex-col gap-3">
              <span className="text-base text-[#1b1c1c]">Availability</span>
              <div className="flex flex-col gap-2 items-start">
                {["Available Now", "Short Stay", "Long Term"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setAvailability(option)}
                    className={`text-base px-4 py-2 rounded-full border transition-all cursor-pointer ${
                      availability === option
                        ? "bg-[#c7d92c] border-[#434b00] text-[#434b00]"
                        : "border-[#c8c8b4] text-[#474839] bg-transparent"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-gradient-to-br from-[#c7d92c] to-[#ffc29a] text-white text-base py-4 rounded-full shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity cursor-pointer">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Listings */}
        <main className="flex-1 min-w-0 flex flex-col gap-8">
          {/* Sort Bar */}
          <div className="flex items-center justify-between">
            <p className="text-base text-[#474839]">
              Showing{" "}
              <strong className="font-bold text-[#1b1c1c]">
                12 properties
              </strong>{" "}
              in Bangalore
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#474839]">Sort by:</span>
              <div className="flex items-center gap-1.5 px-3 py-2">
                <strong className="text-sm font-bold text-[#1b1c1c]">
                  Recommended
                </strong>
                <ChevronDown size={18} className="text-[#6b7280]" />
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl overflow-hidden border border-black/[0.04] shadow-[0_4px_20px_-2px_rgba(27,28,28,0.08)] flex flex-col"
              >
                <div className="relative h-[160px] overflow-hidden shrink-0 bg-[#e8e5d4]">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[9px] font-bold tracking-wider uppercase text-white ${property.badgeColor}`}
                  >
                    {property.badge}
                  </div>
                  <button
                    aria-label="Save"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center border-none cursor-pointer hover:bg-white/40 transition-colors"
                  >
                    <Heart size={14} className="text-white" />
                  </button>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h3 className="text-[17px] font-semibold text-[#1b1c1c] leading-snug">
                    {property.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin size={12} className="text-[#474839] shrink-0" />
                    <span className="text-xs text-[#474839]">
                      {property.location}
                    </span>
                  </div>
                  <div className="flex gap-3 items-center pt-2.5">
                    {property.amenities.map((a) => (
                      <span key={a} className="[&>svg]:!w-4 [&>svg]:!h-4">
                        {amenityIcons[a]}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-end justify-between pt-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] font-bold uppercase text-[#474839] tracking-wider">
                        STARTS FROM
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-[19px] font-bold text-[#434b00]">
                          {formatINR(property.price)}
                        </span>
                        <span className="text-xs text-[#474839]">/mo</span>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(`/stays/${property.id}`)}
                      className="border-[1.5px] border-[#434b00] rounded-full px-5 py-1.5 text-[13px] font-medium text-[#434b00] bg-transparent cursor-pointer hover:bg-[#434b00] hover:text-white transition-all whitespace-nowrap leading-snug text-center"
                    >
                      View
                      <br />
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center pt-6">
            <div className="flex items-center gap-2 bg-[#f6f4e8] rounded-full p-2 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border-none cursor-pointer hover:bg-[rgba(67,75,0,0.08)] transition-colors"
              >
                <ChevronLeft size={16} className="text-[#1b1c1c]" />
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-semibold border-none cursor-pointer transition-colors ${
                    currentPage === page
                      ? "bg-[#434b00] text-white font-bold"
                      : "bg-transparent text-[#1b1c1c] hover:bg-[rgba(67,75,0,0.08)]"
                  }`}
                >
                  {page}
                </button>
              ))}
              <span className="text-base text-[#777867] px-2">...</span>
              <button
                onClick={() => setCurrentPage(12)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-semibold border-none cursor-pointer transition-colors ${
                  currentPage === 12
                    ? "bg-[#434b00] text-white font-bold"
                    : "bg-transparent text-[#1b1c1c] hover:bg-[rgba(67,75,0,0.08)]"
                }`}
              >
                12
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(12, currentPage + 1))}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border-none cursor-pointer hover:bg-[rgba(67,75,0,0.08)] transition-colors"
              >
                <ChevronRight size={16} className="text-[#1b1c1c]" />
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#1b1c1c] px-10 py-20">
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
                <button className="bg-[rgba(251,249,248,0.08)] hover:bg-[rgba(251,249,248,0.15)] rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 cursor-pointer">
                  <svg
                    className="w-[15px] h-[15px] text-[#e4e2e1]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </button>
                <button className="bg-[rgba(251,249,248,0.08)] hover:bg-[rgba(251,249,248,0.15)] rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 cursor-pointer">
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
                <button className="bg-[rgba(251,249,248,0.08)] hover:bg-[rgba(251,249,248,0.15)] rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 cursor-pointer">
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
    </div>
  )
}

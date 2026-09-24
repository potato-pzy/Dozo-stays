import { useState, useEffect } from "react"
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom"
import heroImg from "./img/Hero section image .png"
import PropertiesPage from "./Properties"
import PropertyDetails from "./PropertyDetails"
import ChefsTable from "./ChefsTable"
import CoLiving from "./CoLiving"
import About from "./About"
import Login from "./Login"
import house1 from "./img/Houses/House1.png"
import house2 from "./img/Houses/House 2.png"
import house3 from "./img/Houses/House 3.png"
import lifestyle1 from "./img/productive & peace/dining.png"
import lifestyle2 from "./img/productive & peace/bedroom.png"
import lifestyle3 from "./img/productive & peace/lock.png"
import lifestyle4 from "./img/productive & peace/coworking.png"
import chefFood1 from "./img/Chef served/dosa.png"
import chefFood2 from "./img/Chef served/dal.png"
import chefBanner from "./img/Chef served/Background.png"
import {
  MapPin,
  Wifi,
  UtensilsCrossed,
  Dumbbell,
  WashingMachine,
  Palette,
  Trees,
  Sparkles,
  ShieldCheck,
  Users,
  Leaf,
  Coffee,
  FileText,
  BadgeIndianRupee,
  Scale,
  Menu,
  X,
} from "lucide-react"

const assetPathPrefix = "/assets"

// Images
const imgHero = `${assetPathPrefix}/d805a.png`
const imgCard1 = `${assetPathPrefix}/3ae89.png`
const imgCard2 = `${assetPathPrefix}/0e974.png`
const imgCard3 = `${assetPathPrefix}/d2ea0.png`
const imgLifestyle1 = `${assetPathPrefix}/fd5d4.png`
const imgLifestyle2 = `${assetPathPrefix}/f9bf0.png`
const imgLifestyle3 = `${assetPathPrefix}/8a15d.png`
const imgLifestyle4 = `${assetPathPrefix}/eba93.png`
const imgMenuFood1 = `${assetPathPrefix}/821f7.png`
const imgMenuFood2 = `${assetPathPrefix}/570ab.png`
const imgKitchenBanner = `${assetPathPrefix}/63c45.png`
const imgTrustLogo1 = `${assetPathPrefix}/394ad.png`
const imgTrustLogo2 = `${assetPathPrefix}/e1f49.png`

// Icons / SVGs
const imgLeafIcon = `${assetPathPrefix}/ae35f.svg`
const imgArrowIcon = `${assetPathPrefix}/c5dac.svg`
const imgChevronLeft = `${assetPathPrefix}/3445a.svg`
const imgChevronRight = `${assetPathPrefix}/6765a.svg`
const imgLocationPin = `${assetPathPrefix}/b8fb8.svg`
const imgWifi = `${assetPathPrefix}/32ca8.svg`
const imgFork = `${assetPathPrefix}/36992.svg`
const imgGym = `${assetPathPrefix}/cce6a.svg`
const imgWasher = `${assetPathPrefix}/6aba6.svg`
const imgCreative = `${assetPathPrefix}/16e0d.svg`
const imgGarden = `${assetPathPrefix}/3a6b1.svg`
const imgWifiLarge = `${assetPathPrefix}/6d0de.svg`
const imgBroom = `${assetPathPrefix}/42d87.svg`
const imgLock = `${assetPathPrefix}/7c04d.svg`
const imgCommunity = `${assetPathPrefix}/a775e.svg`
const imgZeroWaste = `${assetPathPrefix}/a71f3.svg`
const imgBarista = `${assetPathPrefix}/b44b3.svg`
const imgDocIcon = `${assetPathPrefix}/79c32.svg`
const imgPriceIcon = `${assetPathPrefix}/cc1e0.svg`
const imgPolicyIcon = `${assetPathPrefix}/369b7.svg`
const imgFB = `${assetPathPrefix}/b7295.svg`
const imgIG = `${assetPathPrefix}/eed3b.svg`
const imgTW = `${assetPathPrefix}/b0b5e.svg`
const imgSearchIcon = `${assetPathPrefix}/d33dd.svg`

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppShell() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { label: "Properties", to: "/stays" },
    { label: "Chef's Table", to: "/chefs-table" },
    { label: "Co-Living", to: "/co-living" },
    { label: "About", to: "/about" },
  ]
  const isStays = location.pathname.startsWith("/stays")
  const isChefsTable = location.pathname.startsWith("/chefs-table")
  const isCoLiving = location.pathname.startsWith("/co-living")
  const isAbout = location.pathname.startsWith("/about")
  const isActiveLink = (to: string) =>
    to === "/stays"
      ? isStays
      : to === "/chefs-table"
        ? isChefsTable
        : to === "/co-living"
          ? isCoLiving
          : to === "/about"
            ? isAbout
            : false
  const linkHref = (to: string) => (to === "/" ? "#/" : `#${to}`)

  const handleNavClick = (e: React.MouseEvent, to: string) => {
    e.preventDefault()
    navigate(to)
    setMobileMenuOpen(false)
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate("/")
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-w-full bg-[#fbf9f8]">
      {/* ─── Navbar ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-center transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-white"
        }`}
      >
        <div className="flex flex-1 items-center justify-between max-w-[1280px] px-6 lg:px-10 w-full">
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center gap-2 shrink-0"
          >
            <span className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[#1b1c1c] text-xl leading-7 tracking-[-0.3px]">
              Dozo Stays
            </span>
          </a>

          <nav className="hidden md:flex gap-1 items-center">
            {navLinks.map(({ label, to }) => {
              const active = isActiveLink(to)
              return (
                <a
                  key={label}
                  href={linkHref(to)}
                  onClick={(e) => handleNavClick(e, to)}
                  className={`relative px-3 py-2 rounded-full font-['Plus_Jakarta_Sans:Regular'] text-[14px] leading-5 transition-all duration-200 ${
                    active
                      ? "text-[#3d5a00] bg-[#cdea2e]/20 font-medium"
                      : "text-[#3d3f33] hover:text-[#1b1c1c] hover:bg-black/[0.03]"
                  }`}
                >
                  {label}
                </a>
              )
            })}
          </nav>

          <div className="flex gap-2 items-center">
            <button
              onClick={() => navigate("/login")}
              className="hidden sm:block font-['Plus_Jakarta_Sans:Regular'] text-[#3d3f33] hover:text-[#1b1c1c] text-[14px] leading-5 font-medium px-3 py-2 transition-colors cursor-pointer"
            >
              Login
            </button>
            <button className="hidden sm:flex bg-[#cdea2e] hover:bg-[#d8f545] active:scale-[0.97] font-['Plus_Jakarta_Sans:Regular'] text-[#1b1c1c] text-[14px] leading-5 font-medium px-5 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              Book Now
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#3d3f33] hover:bg-black/[0.04] hover:text-[#1b1c1c] transition-all duration-200 cursor-pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Menu ─── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/[0.06] shadow-lg transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map(({ label, to }) => {
              const active = isActiveLink(to)
              return (
                <a
                  key={label}
                  href={linkHref(to)}
                  onClick={(e) => handleNavClick(e, to)}
                  className={`px-4 py-3 rounded-xl font-['Plus_Jakarta_Sans:Regular'] text-[15px] leading-6 transition-all duration-200 ${
                    active
                      ? "text-[#3d5a00] bg-[#cdea2e]/15 font-medium"
                      : "text-[#3d3f33] hover:bg-black/[0.03] hover:text-[#1b1c1c]"
                  }`}
                >
                  {label}
                </a>
              )
            })}
            <div className="mt-3 pt-3 border-t border-black/[0.06] flex flex-col gap-2">
              <button
                onClick={() => {
                  navigate("/login")
                  setMobileMenuOpen(false)
                }}
                className="w-full font-['Plus_Jakarta_Sans:Regular'] text-[#3d3f33] text-[14px] leading-5 font-medium px-5 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Login
              </button>
              <button className="w-full bg-[#cdea2e] hover:bg-[#d8f545] active:scale-[0.97] font-['Plus_Jakarta_Sans:Regular'] text-[#1b1c1c] text-[14px] leading-5 font-medium px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer">
                Book Now
              </button>
            </div>
          </nav>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* ─── Hero ─── */}
              <section className="flex items-center justify-center pt-16 px-6 lg:px-10 bg-white min-h-[94vh] py-[64px] lg:py-[80px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-[1280px] w-full items-center">
                  {/* Left text */}
                  <div className="flex flex-col gap-0 py-8 lg:py-16">
                    <div>
                      <p className="font-['Playfair_Display:Regular'] font-normal text-[#161616] text-[clamp(52px,6vw,84px)] leading-[1.02] tracking-[-1.5px]">
                        Your premium
                      </p>
                      <p className="font-['Playfair_Display:Italic'] italic text-[#677400] text-[clamp(52px,6vw,84px)] leading-[1.05] tracking-[-0.5px]">
                        PG in
                      </p>
                      <p className="font-['Playfair_Display:Italic'] italic text-[#677400] text-[clamp(52px,6vw,84px)] leading-[1.05] tracking-[-0.5px]">
                        Bangalore.
                      </p>
                    </div>
                    <div className="max-w-[460px] mt-6">
                      <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#55574a] text-[15px] leading-[24px]">
                        Elevated co-living for students and young professionals.
                        Fully furnished, chef-serviced, and strategically
                        located near Bangalore's major tech parks and colleges.
                      </p>
                    </div>
                    <div className="flex gap-3 items-center pt-8">
                      <button className="group flex gap-2 items-center bg-[#cdea2e] hover:bg-[#d8f545] active:scale-[0.97] text-[#1b1c1c] font-medium font-['Plus_Jakarta_Sans:Regular'] text-[15px] leading-5 px-7 py-3.5 rounded-full shadow-[0_6px_20px_-6px_rgba(160,180,0,0.5)] transition-all duration-200 cursor-pointer">
                        Explore Stays
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                          →
                        </span>
                      </button>
                      <button className="border border-[#d4d4cf] hover:border-[#1b1c1c] hover:bg-[#1b1c1c] hover:text-white text-[#1b1c1c] font-['Plus_Jakarta_Sans:Regular'] text-[15px] font-medium leading-5 px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer bg-white">
                        Our Story
                      </button>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="relative h-[540px] sm:h-[620px] lg:h-[680px] rounded-[16px] overflow-hidden bg-[#eee] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.25)]">
                    <img
                      alt="Dozo Stays premium co-living lounge in Bangalore"
                      className="absolute inset-0 h-full w-full object-cover"
                      src={heroImg}
                    />
                    {/* Trust card */}
                    <div className="absolute bottom-5 left-5 right-5 flex gap-3 items-center bg-white rounded-[12px] px-5 py-4 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12)]">
                      <div className="bg-[#cdea2e] rounded-full w-9 h-9 shrink-0 flex items-center justify-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#3d4500"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                      <div className="flex flex-col leading-tight">
                        <p className="font-['Plus_Jakarta_Sans:Regular'] font-semibold text-[#1b1c1c] text-[13px] leading-[18px]">
                          Trusted by 2,000+ residents
                        </p>
                        <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#6b6d60] text-[11px] leading-[15px]">
                          Voted Best Co-living Spaces 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ─── Property Showcase ─── */}
              <section className="bg-[#f6f3f2] px-10 py-24">
                <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-2">
                      <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#5a6400] text-base leading-6 tracking-[1.6px] uppercase">
                        OUR COLLECTION
                      </p>
                      <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[#1b1c1c] text-[32px] leading-10 tracking-[-0.64px]">
                        Curation of Comfort
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="border border-[#c7c8ae] hover:border-[#8a8c72] hover:bg-[#eae8e7] rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 cursor-pointer">
                        <div className="relative w-[7.4px] h-3">
                          <img
                            alt="prev"
                            className="absolute inset-0 w-full h-full"
                            src={imgChevronLeft}
                          />
                        </div>
                      </button>
                      <button className="border border-[#c7c8ae] hover:border-[#8a8c72] hover:bg-[#eae8e7] rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 cursor-pointer">
                        <div className="relative w-[7.4px] h-3">
                          <img
                            alt="next"
                            className="absolute inset-0 w-full h-full"
                            src={imgChevronRight}
                          />
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 – The Willow House */}
                    <div className="group bg-[#fbf9f8] rounded-[12px] overflow-hidden flex flex-col shadow-[0_2px_8px_-2px_rgba(27,28,28,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(27,28,28,0.14)] transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                          <img
                            alt="The Willow House"
                            className="absolute h-full max-w-none top-0 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            src={house1}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,28,28,0.08)] to-transparent pointer-events-none" />
                        <div className="absolute bg-[#1b1c1c] left-4 top-4 px-3 py-1 rounded-full">
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#fbf9f8] text-xs leading-4">
                            Trending
                          </p>
                        </div>
                        <div className="absolute bg-[#c7d92c] right-4 top-4 px-3 py-1 rounded-full shadow-[0_1px_4px_rgba(90,100,0,0.15)]">
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#545d00] text-xs leading-4">
                            From ₹18,000/mo
                          </p>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#1b1c1c] text-base leading-6 mb-1">
                          The Willow House
                        </p>
                        <div className="flex gap-1 items-center mb-6">
                          <MapPin className="w-3.5 h-3.5 text-[#464834] shrink-0" />
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-base leading-6">
                            HSR Layout, Bangalore
                          </p>
                        </div>
                        <div className="flex gap-4 mb-8">
                          <div className="flex gap-1.5 items-center">
                            <Wifi className="w-5 h-5 text-[#464834] shrink-0" />
                            <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-sm leading-5">
                              High-speed
                            </p>
                          </div>
                          <div className="flex gap-1.5 items-center">
                            <UtensilsCrossed className="w-5 h-5 text-[#464834] shrink-0" />
                            <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-sm leading-5">
                              Chef-served
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => navigate("/stays/7")}
                          className="mt-auto border border-[#1b1c1c] hover:bg-[#1b1c1c] hover:text-[#fbf9f8] rounded-[8px] py-[13px] w-full font-['Plus_Jakarta_Sans:Regular'] text-[#1b1c1c] text-base leading-6 text-center transition-all duration-200 cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>
                    </div>

                    {/* Card 2 – Skyline Studios */}
                    <div className="group bg-[#fbf9f8] rounded-[12px] overflow-hidden flex flex-col shadow-[0_2px_8px_-2px_rgba(27,28,28,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(27,28,28,0.14)] transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                          <img
                            alt="Skyline Studios"
                            className="absolute h-full max-w-none top-0 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            src={house2}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,28,28,0.08)] to-transparent pointer-events-none" />
                        <div className="absolute bg-[#c7d92c] right-4 top-4 px-3 py-1 rounded-full shadow-[0_1px_4px_rgba(90,100,0,0.15)]">
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#545d00] text-xs leading-4">
                            From ₹25,000/mo
                          </p>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#1b1c1c] text-base leading-6 mb-1">
                          Skyline Studios
                        </p>
                        <div className="flex gap-1 items-center mb-6">
                          <MapPin className="w-3.5 h-3.5 text-[#464834] shrink-0" />
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-base leading-6">
                            Indiranagar, Bangalore
                          </p>
                        </div>
                        <div className="flex gap-4 mb-8">
                          <div className="flex gap-1.5 items-center">
                            <Dumbbell className="w-5 h-5 text-[#464834] shrink-0" />
                            <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-sm leading-5">
                              Gym Access
                            </p>
                          </div>
                          <div className="flex gap-1.5 items-center">
                            <WashingMachine className="w-5 h-5 text-[#464834] shrink-0" />
                            <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-sm leading-5">
                              In-unit
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => navigate("/stays/8")}
                          className="mt-auto border border-[#1b1c1c] hover:bg-[#1b1c1c] hover:text-[#fbf9f8] rounded-[8px] py-[13px] w-full font-['Plus_Jakarta_Sans:Regular'] text-[#1b1c1c] text-base leading-6 text-center transition-all duration-200 cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>
                    </div>

                    {/* Card 3 – The Heritage Loft */}
                    <div className="group bg-[#fbf9f8] rounded-[12px] overflow-hidden flex flex-col shadow-[0_2px_8px_-2px_rgba(27,28,28,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(27,28,28,0.14)] transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                          <img
                            alt="The Heritage Loft"
                            className="absolute h-full max-w-none top-0 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            src={house3}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,28,28,0.08)] to-transparent pointer-events-none" />
                        <div className="absolute bg-[#1b1c1c] left-4 top-4 px-3 py-1 rounded-full">
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#fbf9f8] text-xs leading-4">
                            New Opening
                          </p>
                        </div>
                        <div className="absolute bg-[#c7d92c] right-4 top-4 px-3 py-1 rounded-full shadow-[0_1px_4px_rgba(90,100,0,0.15)]">
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#545d00] text-xs leading-4">
                            From ₹15,000/mo
                          </p>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#1b1c1c] text-base leading-6 mb-1">
                          The Heritage Loft
                        </p>
                        <div className="flex gap-1 items-center mb-6">
                          <MapPin className="w-3.5 h-3.5 text-[#464834] shrink-0" />
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-base leading-6">
                            Koramangala, Bangalore
                          </p>
                        </div>
                        <div className="flex gap-4 mb-8">
                          <div className="flex gap-1.5 items-center">
                            <Palette className="w-5 h-5 text-[#464834] shrink-0" />
                            <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-sm leading-5">
                              Creative Studio
                            </p>
                          </div>
                          <div className="flex gap-1.5 items-center">
                            <Trees className="w-5 h-5 text-[#464834] shrink-0" />
                            <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-sm leading-5">
                              Roof Garden
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => navigate("/stays/9")}
                          className="mt-auto border border-[#1b1c1c] hover:bg-[#1b1c1c] hover:text-[#fbf9f8] rounded-[8px] py-[13px] w-full font-['Plus_Jakarta_Sans:Regular'] text-[#1b1c1c] text-base leading-6 text-center transition-all duration-200 cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ─── Lifestyle & Amenities ─── */}
              <section className="px-10 py-24 overflow-hidden">
                <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
                  {/* Left */}
                  <div className="flex-1 flex flex-col gap-6">
                    <div>
                      <p className="font-['Playfair_Display:Regular'] font-normal text-[#1b1c1c] text-[48px] leading-[60px] tracking-[-0.5px]">
                        Productivity,
                      </p>
                      <p className="font-['Playfair_Display:Italic'] italic text-[#1b1c1c] text-[48px] leading-[60px] tracking-[-0.5px]">
                        and Peace.
                      </p>
                    </div>
                    <div>
                      <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-base leading-6">
                        Located minutes away from major tech parks and colleges.
                        We handle the
                      </p>
                      <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-base leading-6">
                        chores so you can focus on your career and community
                        networking.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-6">
                      {/* 200Mbps WiFi */}
                      <div className="flex flex-col gap-4">
                        <div className="bg-[#eae8e7] rounded-[16px] w-14 h-14 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                          <Wifi className="w-8 h-8 text-[#464834]" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#1b1c1c] text-base leading-6">
                            200Mbps WiFi
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-sm leading-5">
                            Fiber-optic connectivity throughout all
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-sm leading-5">
                            common and private spaces.
                          </p>
                        </div>
                      </div>
                      {/* Weekly Housekeeping */}
                      <div className="flex flex-col gap-4">
                        <div className="bg-[#eae8e7] rounded-[16px] w-14 h-14 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                          <Sparkles className="w-6 h-7 text-[#464834]" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#1b1c1c] text-base leading-6">
                            Weekly Housekeeping
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-sm leading-5">
                            Deep cleaning of common areas and
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-sm leading-5">
                            optional private room service.
                          </p>
                        </div>
                      </div>
                      {/* 24/7 Security */}
                      <div className="flex flex-col gap-4">
                        <div className="bg-[#eae8e7] rounded-[16px] w-14 h-14 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                          <ShieldCheck className="w-[21px] h-[27px] text-[#464834]" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#1b1c1c] text-base leading-6">
                            24/7 Security
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-sm leading-5">
                            Smart locks, CCTV, and on-site support
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-sm leading-5">
                            for total peace of mind.
                          </p>
                        </div>
                      </div>
                      {/* Resident Community */}
                      <div className="flex flex-col gap-4">
                        <div className="bg-[#eae8e7] rounded-[16px] w-14 h-14 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                          <Users className="w-8 h-4 text-[#464834]" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#1b1c1c] text-base leading-6">
                            Resident Community
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-sm leading-5">
                            Weekly mixers, workshops, and a
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#464834] text-sm leading-5">
                            curated network of professionals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: mosaic */}
                  <div className="flex-1 relative">
                    <div className="absolute bg-[rgba(199,217,44,0.2)] blur-[32px] inset-[-40px] opacity-50 rounded-full pointer-events-none" />
                    <div className="flex gap-4 relative">
                      <div className="flex flex-col gap-4 flex-1 pt-12">
                        <div className="h-72 relative rounded-[16px] overflow-hidden shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                          <div className="absolute inset-0 overflow-hidden">
                            <img
                              alt=""
                              className="absolute h-full max-w-none top-0 w-full object-cover"
                              src={lifestyle1}
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,28,28,0.08)] to-transparent pointer-events-none" />
                        </div>
                        <div className="h-48 relative rounded-[16px] overflow-hidden shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                          <div className="absolute inset-0 overflow-hidden">
                            <img
                              alt=""
                              className="absolute h-full max-w-none top-0 w-full object-cover"
                              src={lifestyle2}
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,28,28,0.08)] to-transparent pointer-events-none" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 flex-1 pb-12">
                        <div className="h-56 relative rounded-[16px] overflow-hidden shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                          <div className="absolute inset-0 overflow-hidden">
                            <img
                              alt=""
                              className="absolute h-full max-w-none top-0 w-full object-cover"
                              src={lifestyle3}
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,28,28,0.08)] to-transparent pointer-events-none" />
                        </div>
                        <div className="h-64 relative rounded-[16px] overflow-hidden shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                          <div className="absolute inset-0 overflow-hidden">
                            <img
                              alt=""
                              className="absolute h-full max-w-none top-0 w-full object-cover"
                              src={lifestyle4}
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,28,28,0.08)] to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ─── Kitchen / Chef ─── */}
              <section className="bg-[#1b1c1c] px-10 py-24 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-[rgba(199,217,44,0.05)] blur-[80px] pointer-events-none" />
                <div className="max-w-[1280px] mx-auto flex flex-col gap-16 relative">
                  {/* Heading */}
                  <div className="flex flex-col gap-4 items-center text-center">
                    <p className="font-['Playfair_Display:Regular'] font-normal text-[#fbf9f8] text-[48px] leading-[72px] tracking-[-0.5px]">
                      <span>Home style, </span>
                      <span className="font-['Playfair_Display:Italic'] italic text-[#dbee41]">
                        chef-served.
                      </span>
                    </p>
                    <div className="max-w-[672px]">
                      <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#e4e2e1] text-base leading-6 text-center">
                        The Kitchen at Dozo isn't just about food; it's the
                        heart of our home. Fresh, nutritious, and
                      </p>
                      <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#e4e2e1] text-base leading-6 text-center">
                        curated daily.
                      </p>
                    </div>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Menu Card */}
                    <div className="lg:col-span-5 backdrop-blur-[4px] bg-[rgba(255,255,255,0.1)] border border-[rgba(251,249,248,0.2)] rounded-[16px] p-[33px] flex flex-col gap-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      {/* Header row */}
                      <div className="flex items-center justify-between w-full">
                        <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#fbf9f8] text-base leading-6">
                          Today's Menu
                        </p>
                        <div className="bg-[#c7d92c] px-3 py-1 rounded-full">
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#545d00] text-xs leading-4">
                            Fresh Daily
                          </p>
                        </div>
                      </div>
                      {/* Meals */}
                      <div className="flex flex-col gap-6 w-full">
                        {/* Meal 1 */}
                        <div className="bg-[rgba(251,249,248,0.05)] flex gap-4 items-start p-4 rounded-[12px] w-full">
                          <div className="relative rounded-[8px] overflow-hidden shrink-0 w-20 h-20">
                            <div className="absolute inset-0 overflow-hidden">
                              <img
                                alt="Ghee Roast Masala Dosa"
                                className="absolute h-full max-w-none top-0 w-full object-cover"
                                src={chefFood1}
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 flex-1 min-w-0">
                            <div className="flex items-start justify-between w-full">
                              <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#fbf9f8] text-base leading-6">
                                Ghee Roast Masala Dosa
                              </p>
                              <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#dbee41] text-xs leading-4 shrink-0 ml-2">
                                Lunch
                              </p>
                            </div>
                            <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#e4e2e1] text-xs leading-4">
                              South Indian Classic • Freshly Ground
                            </p>
                            <div className="flex gap-1 items-center pt-1">
                              <div className="w-2 h-2 rounded-full bg-[#c7d92c]" />
                              <div className="w-2 h-2 rounded-full bg-[#c7d92c]" />
                              <div className="w-2 h-2 rounded-full bg-[rgba(199,217,44,0.3)]" />
                            </div>
                          </div>
                        </div>
                        {/* Meal 2 */}
                        <div className="bg-[rgba(251,249,248,0.05)] flex gap-4 items-start p-4 rounded-[12px] w-full">
                          <div className="relative rounded-[8px] overflow-hidden shrink-0 w-20 h-20">
                            <div className="absolute inset-0 overflow-hidden">
                              <img
                                alt="Homestyle Dal Tadka"
                                className="absolute h-full max-w-none top-0 w-full object-cover"
                                src={chefFood2}
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 flex-1 min-w-0">
                            <div className="flex items-start justify-between w-full">
                              <div>
                                <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#fbf9f8] text-base leading-6">
                                  Homestyle Dal Tadka & Jeera
                                </p>
                                <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#fbf9f8] text-base leading-6">
                                  Rice
                                </p>
                              </div>
                              <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#dbee41] text-xs leading-4 shrink-0 ml-2">
                                Dinner
                              </p>
                            </div>
                            <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#e4e2e1] text-xs leading-4">
                              Comfort Food • Locally Sourced Spices
                            </p>
                            <div className="flex gap-1 items-center pt-1">
                              <div className="w-2 h-2 rounded-full bg-[#c7d92c]" />
                              <div className="w-2 h-2 rounded-full bg-[#c7d92c]" />
                              <div className="w-2 h-2 rounded-full bg-[#c7d92c]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Menu button */}
                      <button
                        onClick={() => navigate("/chefs-table")}
                        className="border border-[rgba(251,249,248,0.3)] hover:border-[rgba(251,249,248,0.5)] hover:bg-[rgba(251,249,248,0.06)] rounded-[12px] py-[13px] w-full font-['Plus_Jakarta_Sans:Regular'] text-[#fbf9f8] text-base leading-6 text-center transition-all duration-200 cursor-pointer"
                      >
                        Explore Full Weekly Menu
                      </button>
                    </div>

                    {/* Right side */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                      {/* Banner with quote */}
                      <div className="relative h-[155px] rounded-[16px] overflow-hidden shadow-[0_8px_24px_-4px_rgba(0,0,0,0.35)]">
                        <div className="absolute inset-0 overflow-hidden">
                          <img
                            alt="Kitchen"
                            className="absolute h-full max-w-none top-0 w-full object-cover"
                            src={chefBanner}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,28,28,0.8)] to-[rgba(27,28,28,0)] flex items-end p-8">
                          <div className="pr-6">
                            <p className="font-['Plus_Jakarta_Sans:Italic'] italic text-[#fbf9f8] text-base leading-6">
                              "We prioritize local sourcing and seasonal
                              ingredients to ensure every meal feels
                            </p>
                            <p className="font-['Plus_Jakarta_Sans:Italic'] italic text-[#fbf9f8] text-base leading-6">
                              like home but tastes like a five-star restaurant."
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Info cards */}
                      <div className="flex gap-6">
                        {/* Zero-Waste */}
                        <div className="flex-1 bg-[rgba(251,249,248,0.05)] border border-[rgba(251,249,248,0.2)] rounded-[16px] px-[25px] py-[82px] flex flex-col justify-center hover:bg-[rgba(251,249,248,0.08)] transition-colors duration-200">
                          <Leaf className="w-7 h-7 text-[#c7d92c] mb-4" />
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#fbf9f8] text-base leading-6 mb-2">
                            Zero-Waste Goal
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#e4e2e1] text-sm leading-5">
                            Composting on-site and smart portioning
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#e4e2e1] text-sm leading-5">
                            to reduce food waste by 80%.
                          </p>
                        </div>
                        {/* Artisan Barista */}
                        <div className="flex-1 bg-[rgba(251,249,248,0.05)] border border-[rgba(251,249,248,0.2)] rounded-[16px] px-[25px] py-[82px] flex flex-col justify-center hover:bg-[rgba(251,249,248,0.08)] transition-colors duration-200">
                          <Coffee className="w-7 h-7 text-[#c7d92c] mb-4" />
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#fbf9f8] text-base leading-6 mb-2">
                            Artisan Barista
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#e4e2e1] text-sm leading-5">
                            Unlimited specialty coffee from local
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#e4e2e1] text-sm leading-5">
                            roasters available in the lounge.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ─── Trust & Transparency ─── */}
              <section className="px-10 pt-24 pb-16">
                <div className="max-w-[1280px] mx-auto border-t border-[#c7c8ae] pt-24">
                  <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left */}
                    <div className="flex flex-col gap-5 lg:w-96 shrink-0">
                      <div>
                        <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[#1b1c1c] text-[36px] leading-[44px] tracking-[-0.72px]">
                          Run Properly,
                        </p>
                        <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[#1b1c1c] text-[36px] leading-[44px] tracking-[-0.72px]">
                          Lived Happily.
                        </p>
                      </div>
                      <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#55574a] text-base leading-6 max-w-[340px]">
                        We've removed the gray areas of renting. No hidden fees,
                        no complex legal jargon, just clear terms.
                      </p>
                    </div>

                    {/* Feature cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
                      {/* Verified Documents */}
                      <div className="group bg-[#f5f5f2] hover:bg-[#ececea] rounded-[20px] p-7 flex flex-col gap-4 transition-all duration-300 cursor-default">
                        <div className="bg-[#e8e8e5] w-12 h-12 rounded-xl flex items-center justify-center">
                          <FileText className="w-5 h-5 text-[#6b7a00]" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[#1b1c1c] text-base leading-6">
                            Verified Documents
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#6b6d60] text-sm leading-[22px]">
                            All digital leases and documentation are legally
                            vetted and stored securely in your portal.
                          </p>
                        </div>
                      </div>

                      {/* Transparent Pricing */}
                      <div className="group bg-[#f5f5f2] hover:bg-[#ececea] rounded-[20px] p-7 flex flex-col gap-4 transition-all duration-300 cursor-default">
                        <div className="bg-[#e8e8e5] w-12 h-12 rounded-xl flex items-center justify-center">
                          <BadgeIndianRupee className="w-5 h-5 text-[#6b7a00]" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[#1b1c1c] text-base leading-6">
                            Transparent Pricing
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#6b6d60] text-sm leading-[22px]">
                            What you see is what you pay. Rent includes all
                            utilities, cleaning, and amenities with zero
                            surprises.
                          </p>
                        </div>
                      </div>

                      {/* Real Policies */}
                      <div className="group bg-[#f5f5f2] hover:bg-[#ececea] rounded-[20px] p-7 flex flex-col gap-4 transition-all duration-300 cursor-default">
                        <div className="bg-[#e8e8e5] w-12 h-12 rounded-xl flex items-center justify-center">
                          <Scale className="w-5 h-5 text-[#6b7a00]" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[#1b1c1c] text-base leading-6">
                            Real Policies
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#6b6d60] text-sm leading-[22px]">
                            Clearly defined house rules and cancellation
                            policies that respect your lifestyle and
                            flexibility.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ─── Final CTA ─── */}
              <section className="px-10 pb-24">
                <div className="max-w-[1280px] mx-auto relative bg-[#1b1c1c] rounded-[24px] overflow-hidden p-24 flex flex-col items-center gap-8 shadow-[0_32px_80px_-16px_rgba(27,28,28,0.3)]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[160px] bg-[rgba(199,217,44,0.06)] blur-[60px] pointer-events-none" />
                  <p className="relative font-['Playfair_Display:Regular'] font-normal text-[#fbf9f8] text-[clamp(36px,5vw,64px)] leading-[1.5] text-center tracking-[-1px] max-w-[700px]">
                    Ready to find your sanctuary?
                  </p>
                  <div className="relative max-w-[576px]">
                    <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#e4e2e1] text-lg leading-7 text-center">
                      Tours are available daily. Experience the vibe, meet the
                      community,
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#e4e2e1] text-lg leading-7 text-center">
                      and see the space for yourself.
                    </p>
                  </div>
                  <div className="relative flex gap-4 items-center pt-4 flex-wrap justify-center">
                    <button className="relative bg-[#c7d92c] hover:bg-[#d4e832] active:scale-[0.97] text-[#545d00] font-['Plus_Jakarta_Sans:Regular'] text-lg leading-7 px-10 py-5 rounded-full shadow-[0_4px_16px_rgba(90,100,0,0.3),0_1px_0_rgba(255,255,255,0.25)_inset] transition-all duration-200 cursor-pointer">
                      Schedule a Tour
                    </button>
                    <button className="bg-[#fbf9f8] hover:bg-white active:scale-[0.97] text-[#1b1c1c] font-['Plus_Jakarta_Sans:Regular'] text-lg leading-7 px-10 py-5 rounded-full transition-all duration-200 cursor-pointer">
                      Call an Agent
                    </button>
                  </div>
                </div>
              </section>

              {/* ─── Footer ─── */}
              <footer className="bg-[#1b1c1c] px-10 py-20">
                <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
                  {/* Top row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="flex flex-col gap-6 lg:col-span-2">
                      <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[#c7d92c] text-2xl leading-8 tracking-[-0.3px]">
                        Dozo Stays
                      </p>
                      <p className="font-['Plus_Jakarta_Sans:Regular'] text-[#9a9b93] text-sm leading-6 max-w-[340px]">
                        Bangalore's most trusted long-term PG and co-living
                        network. Crafting intentional spaces for the modern
                        urban pioneer.
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
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            />
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

                    {/* Platform */}
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

                    {/* Stay Connected */}
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

                  {/* Bottom row */}
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
            </>
          }
        />
        <Route path="/stays" element={<PropertiesPage />} />
        <Route path="/stays/:id" element={<PropertyDetails />} />
        <Route path="/chefs-table" element={<ChefsTable />} />
        <Route path="/co-living" element={<CoLiving />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AppShell />
    </HashRouter>
  )
}

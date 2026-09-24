import { useState, useEffect } from "react"
import {
  Coffee,
  UtensilsCrossed,
  Moon,
  Leaf,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import chefFood1 from "./img/Chef served/dosa.png"
import chefFood2 from "./img/Chef served/dal.png"

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

const heroImg = img("1600565193348-f74bd3c7ccdf", 1400)
const spicesImg = img("1596040033229-a9821ebd058d", 1000)
const kitchenImg = img("1556910103-1c02745aae4d", 1000)
const ctaImg = img("1414235077428-338989a2e8c0", 1600)

type Meal = {
  name: string
  time: string
  desc: string
  tag: string
  image: string
}

type DayMenu = {
  day: string
  full: string
  note: string
  meals: [Meal, Meal, Meal]
}

const weeklyMenu: DayMenu[] = [
  {
    day: "Mon",
    full: "Monday",
    note: "A fresh start to the week",
    meals: [
      {
        name: "Kanda Poha & Masala Chai",
        time: "7:30 – 9:30 AM",
        desc: "Maharashtrian classic • Peanuts & Curry Leaf",
        tag: "Breakfast",
        image: img("1504754524776-8f4f37790ca0", 900),
      },
      {
        name: "Jeera Rice, Dal Tadka & Aloo Gobi",
        time: "12:30 – 2:30 PM",
        desc: "North Indian Comfort • Seasonal Salad",
        tag: "Lunch",
        image: chefFood2,
      },
      {
        name: "Roti, Paneer Butter Masala & Rice",
        time: "7:30 – 9:30 PM",
        desc: "Home Style • Freshly Ground Masalas",
        tag: "Dinner",
        image: img("1585937421612-70a008356fbe", 900),
      },
    ],
  },
  {
    day: "Tue",
    full: "Tuesday",
    note: "South Indian comfort day",
    meals: [
      {
        name: "Idli Sambar & Filter Coffee",
        time: "7:30 – 9:30 AM",
        desc: "Steamed Soft • Coconut Chutney",
        tag: "Breakfast",
        image: img("1567188040759-fb8a883dc6d8", 900),
      },
      {
        name: "Lemon Rice, Rasam & Cucumber Salad",
        time: "12:30 – 2:30 PM",
        desc: "Tangy & Light • Roasted Peanuts",
        tag: "Lunch",
        image: img("1512621776951-a57141f2eefd", 900),
      },
      {
        name: "Veg Pulao, Raita & Dal Fry",
        time: "7:30 – 9:30 PM",
        desc: "One-Pot Wonder • Garden Vegetables",
        tag: "Dinner",
        image: img("1540189549336-e6e99c3679fe", 900),
      },
    ],
  },
  {
    day: "Wed",
    full: "Wednesday",
    note: "Mid-week hearty plates",
    meals: [
      {
        name: "Aloo Paratha, Curd & Pickle",
        time: "7:30 – 9:30 AM",
        desc: "Tawa Fresh • Homemade Achar",
        tag: "Breakfast",
        image: img("1565557623262-b51c2513a641", 900),
      },
      {
        name: "Dal Khichdi, Papad & Boondi Raita",
        time: "12:30 – 2:30 PM",
        desc: "Comfort Bowl • Ghee Tadka",
        tag: "Lunch",
        image: img("1546069901-ba9599a7e63c", 900),
      },
      {
        name: "Roti, Chole Masala & Jeera Rice",
        time: "7:30 – 9:30 PM",
        desc: "Punjabi Style • Slow Cooked",
        tag: "Dinner",
        image: img("1476224203421-9ac39bcb3327", 900),
      },
    ],
  },
  {
    day: "Thu",
    full: "Thursday",
    note: "Wholesome & homely",
    meals: [
      {
        name: "Upma, Coconut Chutney & Coffee",
        time: "7:30 – 9:30 AM",
        desc: "Rava Goodness • Cashew Tempering",
        tag: "Breakfast",
        image: img("1533089860892-a7c6f0a88666", 900),
      },
      {
        name: "Rajma Chawal, Salad & Papad",
        time: "12:30 – 2:30 PM",
        desc: "Punjabi Dhaba Style • Slow Simmered",
        tag: "Lunch",
        image: img("1544025162-d76694265947", 900),
      },
      {
        name: "Paratha, Mix Veg & Dal Tadka",
        time: "7:30 – 9:30 PM",
        desc: "Seasonal Sabzi • Home Style",
        tag: "Dinner",
        image: img("1467003909585-2f8a72700288", 900),
      },
    ],
  },
  {
    day: "Fri",
    full: "Friday",
    note: "Chef's special & street food",
    meals: [
      {
        name: "Bread Omelette & Fresh Juice",
        time: "7:30 – 9:30 AM",
        desc: "Protein Boost • Seasonal Fruits",
        tag: "Breakfast",
        image: img("1482049016688-2d3e1b311543", 900),
      },
      {
        name: "Veg Biryani, Mirchi Ka Salan & Raita",
        time: "12:30 – 2:30 PM",
        desc: "Dum Cooked • Hyderabadi Style",
        tag: "Lunch",
        image: img("1567188040759-fb8a883dc6d8", 900),
      },
      {
        name: "Hakka Noodles, Manchurian & Soup",
        time: "7:30 – 9:30 PM",
        desc: "Friday Street Special • Wok Tossed",
        tag: "Dinner",
        image: img("1473093295043-cdd812d0e601", 900),
      },
    ],
  },
  {
    day: "Sat",
    full: "Saturday",
    note: "The dosa & bhature day",
    meals: [
      {
        name: "Ghee Roast Masala Dosa",
        time: "8:30 – 10:30 AM",
        desc: "South Indian Classic • Freshly Ground",
        tag: "Breakfast",
        image: chefFood1,
      },
      {
        name: "Kadhi Chawal, Steamed Rice & Salad",
        time: "12:30 – 2:30 PM",
        desc: "Besan Kadhi • Light & Tangy",
        tag: "Lunch",
        image: img("1546069901-ba9599a7e63c", 900),
      },
      {
        name: "Chole Bhature & Sweet Lassi",
        time: "7:30 – 9:30 PM",
        desc: "Weekend Indulgence • Punjabi Style",
        tag: "Dinner",
        image: img("1504674900247-0877df9cc836", 900),
      },
    ],
  },
  {
    day: "Sun",
    full: "Sunday",
    note: "Grand thali & dessert day",
    meals: [
      {
        name: "Poori Bhaji & Filter Coffee",
        time: "8:30 – 10:30 AM",
        desc: "Weekend Classic • Hot & Puffy",
        tag: "Breakfast",
        image: img("1525351484163-7529414344d8", 900),
      },
      {
        name: "Sunday Veg Thali Special",
        time: "12:30 – 2:30 PM",
        desc: "Sambar • Rasam • Rice • Sweet of the Day",
        tag: "Lunch",
        image: img("1455619452474-d2be8b1e70cd", 900),
      },
      {
        name: "Roti, Paneer Special & Gulab Jamun",
        time: "7:30 – 9:30 PM",
        desc: "Sunday Dessert • Chef's Choice",
        tag: "Dinner",
        image: img("1496412705862-e0088f16f791", 900),
      },
    ],
  },
]

const mealIcons: Record<string, React.ReactNode> = {
  Breakfast: <Coffee size={16} />,
  Lunch: <UtensilsCrossed size={16} />,
  Dinner: <Moon size={16} />,
}

const values = [
  {
    icon: <Leaf className="w-7 h-7 text-[#6b7a00]" />,
    title: "Zero-Waste Goal",
    desc: "Composting on-site and smart portioning to reduce food waste by 80%.",
  },
  {
    icon: <Sparkles className="w-6 h-7 text-[#6b7a00]" />,
    title: "Daily Fresh Prep",
    desc: "Meals cooked fresh every day — nothing carried over, nothing frozen.",
  },
  {
    icon: <UtensilsCrossed className="w-7 h-7 text-[#6b7a00]" />,
    title: "Chef-Served Meals",
    desc: "In-house chefs rotate the menu weekly so there's always something new.",
  },
]

const AUTOPLAY_MS = 6000

export default function ChefsTable() {
  const todayIdx = (new Date().getDay() + 6) % 7
  const [activeDay, setActiveDay] = useState(todayIdx)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => setActiveDay((d) => (d + 1) % 7), AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [activeDay, paused])

  const goToDay = (i: number) => {
    if (i === activeDay) return
    const jump = Math.abs(i - activeDay) > 1
    if (jump) setAnimate(false)
    setActiveDay(i)
    if (jump) {
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
    }
  }

  const next = () => goToDay((activeDay + 1) % 7)
  const prev = () => goToDay((activeDay + 6) % 7)

  return (
    <div className="min-h-screen bg-[#fbf9f8] pt-16">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-[#1b1c1c] px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[220px] w-[700px] -translate-x-1/2 bg-[rgba(199,217,44,0.07)] blur-[90px]" />
        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex flex-1 flex-col gap-7">
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] text-[#c7d92c] uppercase">
              The Kitchen at Dozo
            </p>
            <div className="flex flex-col">
              <p className="font-['Playfair_Display:Regular'] text-[clamp(44px,5.5vw,68px)] leading-[1.08] tracking-[-1.5px] text-[#fbf9f8]">
                Home style,
              </p>
              <p className="font-['Playfair_Display:Italic'] text-[clamp(44px,5.5vw,68px)] leading-[1.08] tracking-[-0.5px] text-[#dbee41] italic">
                every day.
              </p>
            </div>
            <p className="max-w-[480px] font-['Plus_Jakarta_Sans:Regular'] text-base leading-[26px] text-[#e4e2e1]">
              The Chef's Table is our weekly rotating menu — fresh, nutritious,
              and curated daily by our in-house chefs. Explore what's cooking,
              day by day.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="rounded-full bg-[#c7d92c] px-5 py-2.5 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#545d00]">
                Fresh Daily
              </span>
              <span className="rounded-full border border-[rgba(251,249,248,0.28)] px-5 py-2.5 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#e4e2e1]">
                Zero-Waste Kitchen
              </span>
              <span className="rounded-full border border-[rgba(251,249,248,0.28)] px-5 py-2.5 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#e4e2e1]">
                Locally Sourced
              </span>
            </div>
          </div>

          <div className="relative h-[380px] w-full flex-1 rounded-[24px] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.5)] sm:h-[440px] lg:h-[520px]">
            <img
              alt="Chef plating a fresh meal at Dozo Stays"
              className="absolute inset-0 h-full w-full rounded-[24px] object-cover"
              src={heroImg}
            />
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-t from-[rgba(27,28,28,0.88)] via-[rgba(27,28,28,0.15)] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end gap-5 p-7 lg:p-9">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#c7d92c] shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                <UtensilsCrossed className="h-6 w-6 text-[#3d4500]" />
              </div>
              <p className="font-['Plus_Jakarta_Sans:Italic'] text-[17px] leading-[26px] text-[#fbf9f8] italic">
                “Every meal feels like home but tastes like a five-star
                restaurant.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Day Selector + Daily Menu ─── */}
      <section className="px-6 lg:px-10 py-20 lg:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-2.5">
              <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] text-[#5a6400] uppercase">
                This Week's Menu
              </p>
              <p className="font-['Plus_Jakarta_Sans:Bold'] text-[32px] leading-10 font-bold tracking-[-0.64px] text-[#1b1c1c]">
                What's cooking this week?
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-1 rounded-full border border-[#eae8e7] bg-[#f6f3f2] p-1.5">
                {weeklyMenu.map((d, i) => (
                  <button
                    key={d.day}
                    onClick={() => goToDay(i)}
                    className={`relative rounded-full px-4 py-2 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 transition-all duration-200 cursor-pointer ${
                      activeDay === i
                        ? "bg-[#cdea2e] font-medium text-[#1b1c1c] shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                        : "text-[#3d3f33] hover:bg-black/[0.03] hover:text-[#1b1c1c]"
                    }`}
                  >
                    {d.day}
                    {i === todayIdx && (
                      <span
                        className={`absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full ${
                          activeDay === i ? "bg-[#1b1c1c]" : "bg-[#c7d92c]"
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
              <p className="font-['Plus_Jakarta_Sans:Regular'] text-xs leading-4 text-[#6b6d60]">
                Auto-plays daily — hover the menu to pause
              </p>
            </div>
          </div>

          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative overflow-hidden rounded-[28px] bg-[#1b1c1c] shadow-[0_32px_80px_-24px_rgba(27,28,28,0.35)]"
          >
            <div className="pointer-events-none absolute top-0 left-1/2 z-10 h-[180px] w-[600px] -translate-x-1/2 bg-[rgba(199,217,44,0.08)] blur-[80px]" />

            {/* Fixed header — stays in place; only meal content slides */}
            <div className="relative z-20 flex flex-wrap items-end justify-between gap-4 px-6 pt-10 pb-8 sm:px-10 lg:px-14 lg:pt-14">
              <div className="flex flex-col gap-2">
                <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 tracking-[1.6px] text-[#c7d92c] uppercase">
                  Day {String(activeDay + 1).padStart(2, "0")} / 07 —{" "}
                  {weeklyMenu[activeDay].note}
                </p>
                <p className="font-['Playfair_Display:Regular'] text-[clamp(36px,4vw,52px)] leading-[1.1] tracking-[-1px] text-[#fbf9f8]">
                  {weeklyMenu[activeDay].full}
                  {activeDay === todayIdx && (
                    <span className="ml-4 inline-block -translate-y-2 rounded-full bg-[#c7d92c] px-4 py-1.5 align-middle font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 tracking-normal text-[#545d00]">
                      Today
                    </span>
                  )}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Previous day"
                  onClick={prev}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[rgba(251,249,248,0.25)] text-[#fbf9f8] transition-all duration-200 hover:bg-[rgba(251,249,248,0.1)] active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  aria-label="Next day"
                  onClick={next}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#c7d92c] text-[#3d4500] transition-all duration-200 hover:bg-[#d4e832] active:scale-95"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Sliding meal content only */}
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
              style={{
                transform: `translateX(-${activeDay * 100}%)`,
                transition: animate ? undefined : "none",
              }}
            >
              {weeklyMenu.map((d) => (
                <div
                  key={d.day}
                  className="w-full shrink-0 px-6 pb-12 sm:px-10 lg:px-14 lg:pb-16"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {d.meals.map((meal) => (
                      <div
                        key={meal.name}
                        className="group flex flex-col overflow-hidden rounded-[20px] border border-[rgba(251,249,248,0.12)] bg-[rgba(251,249,248,0.05)] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(251,249,248,0.08)]"
                      >
                        <div className="relative h-60 overflow-hidden">
                          <img
                            alt={meal.name}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                            src={meal.image}
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(27,28,28,0.45)] via-transparent to-transparent" />
                          <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-[#1b1c1c]/90 px-3 py-1.5 backdrop-blur-sm">
                            <span className="text-[#fbf9f8]">
                              {mealIcons[meal.tag]}
                            </span>
                            <p className="font-['Plus_Jakarta_Sans:Regular'] text-xs leading-4 text-[#fbf9f8]">
                              {meal.tag}
                            </p>
                          </div>
                          <div className="absolute top-4 right-4 rounded-full bg-[#c7d92c] px-3 py-1.5 shadow-[0_1px_4px_rgba(90,100,0,0.15)]">
                            <p className="font-['Plus_Jakarta_Sans:Regular'] text-xs leading-4 text-[#545d00]">
                              {meal.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-2 p-7">
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-xl leading-7 text-[#fbf9f8]">
                            {meal.name}
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#b9bab2]">
                            {meal.desc}
                          </p>
                          <div className="mt-auto flex items-center gap-1.5 pt-4">
                            <span className="h-2 w-2 rounded-full bg-[#c7d92c]" />
                            <span className="h-2 w-2 rounded-full bg-[#c7d92c]" />
                            <span className="h-2 w-2 rounded-full bg-[rgba(199,217,44,0.3)]" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-0 h-1 bg-[rgba(251,249,248,0.12)]">
              {!paused && (
                <div
                  key={activeDay}
                  className="menu-day-progress h-full bg-[#c7d92c]"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Kitchen Values ─── */}
      <section className="px-6 lg:px-10 pb-20 lg:pb-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-14 lg:flex-row lg:gap-20">
          <div className="flex flex-1 flex-col gap-7">
            <div className="flex flex-col">
              <p className="font-['Playfair_Display:Regular'] text-[clamp(36px,4vw,48px)] leading-[1.2] tracking-[-0.5px] text-[#1b1c1c]">
                Sourced right,
              </p>
              <p className="font-['Playfair_Display:Italic'] text-[clamp(36px,4vw,48px)] leading-[1.2] tracking-[-0.5px] text-[#1b1c1c] italic">
                cooked with care.
              </p>
            </div>
            <p className="max-w-[480px] font-['Plus_Jakarta_Sans:Regular'] text-base leading-[26px] text-[#464834]">
              From local farms to your plate — our kitchen prioritizes seasonal
              ingredients, smart portioning, and a zero-waste philosophy.
            </p>
            <div className="grid grid-cols-1 gap-7 pt-2 sm:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="flex flex-col gap-3.5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#eae8e7] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                    {v.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c]">
                      {v.title}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#464834]">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full flex-1">
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-[rgba(199,217,44,0.2)] opacity-50 blur-[32px]" />
            <div className="relative flex gap-4">
              <div className="flex flex-1 flex-col gap-4 pt-10">
                <div className="h-56 overflow-hidden rounded-[16px] shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                  <img
                    alt="Fresh spices sourced for the Dozo kitchen"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={spicesImg}
                  />
                </div>
                <div className="h-40 overflow-hidden rounded-[16px] shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                  <img
                    alt="Homestyle dosa served at Dozo Stays"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={chefFood1}
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 pb-10">
                <div className="h-64 overflow-hidden rounded-[16px] shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                  <img
                    alt="Chef cooking fresh meals daily"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={kitchenImg}
                  />
                </div>
                <div className="h-44 overflow-hidden rounded-[16px] shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                  <img
                    alt="Fresh dal served hot"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={chefFood2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="px-6 lg:px-10 pb-20 lg:pb-24">
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[24px] bg-[#1b1c1c] shadow-[0_32px_80px_-16px_rgba(27,28,28,0.3)]">
          <img
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            src={ctaImg}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,28,28,0.95)] via-[rgba(27,28,28,0.75)] to-[rgba(27,28,28,0.55)]" />
          <div className="pointer-events-none absolute top-0 left-1/2 h-[160px] w-[500px] -translate-x-1/2 bg-[rgba(199,217,44,0.08)] blur-[60px]" />
          <div className="relative flex flex-col items-center gap-7 px-6 py-16 sm:px-12 lg:px-24 lg:py-24">
            <p className="max-w-[700px] text-center font-['Playfair_Display:Regular'] text-[clamp(32px,4vw,52px)] leading-[1.3] tracking-[-1px] text-[#fbf9f8]">
              Taste the week with us.
            </p>
            <p className="max-w-[576px] text-center font-['Plus_Jakarta_Sans:Regular'] text-lg leading-7 text-[#e4e2e1]">
              Tours are available daily. Experience the vibe, meet the
              community, and join us at the Chef's Table.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button className="cursor-pointer rounded-full bg-[#c7d92c] px-10 py-5 font-['Plus_Jakarta_Sans:Regular'] text-lg leading-7 text-[#545d00] shadow-[0_4px_16px_rgba(90,100,0,0.3),0_1px_0_rgba(255,255,255,0.25)_inset] transition-all duration-200 hover:bg-[#d4e832] active:scale-[0.97]">
                Schedule a Tour
              </button>
              <button className="cursor-pointer rounded-full bg-[#fbf9f8] px-10 py-5 font-['Plus_Jakarta_Sans:Regular'] text-lg leading-7 text-[#1b1c1c] transition-all duration-200 hover:bg-white active:scale-[0.97]">
                Explore Stays
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-[#1b1c1c] px-6 lg:px-10 py-20">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="flex flex-col gap-6 lg:col-span-2">
              <p className="font-['Plus_Jakarta_Sans:Bold'] text-2xl leading-8 font-bold tracking-[-0.3px] text-[#c7d92c]">
                Dozo Stays
              </p>
              <p className="max-w-[340px] font-['Plus_Jakarta_Sans:Regular'] text-sm leading-6 text-[#9a9b93]">
                Bangalore's most trusted long-term PG and co-living network.
                Crafting intentional spaces for the modern urban pioneer.
              </p>
              <div className="flex items-center gap-3">
                <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[rgba(251,249,248,0.08)] transition-colors duration-200 hover:bg-[rgba(251,249,248,0.15)]">
                  <svg
                    className="h-[15px] w-[15px] text-[#e4e2e1]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </button>
                <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[rgba(251,249,248,0.08)] transition-colors duration-200 hover:bg-[rgba(251,249,248,0.15)]">
                  <svg
                    className="h-[15px] w-[15px] text-[#e4e2e1]"
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
                <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[rgba(251,249,248,0.08)] transition-colors duration-200 hover:bg-[rgba(251,249,248,0.15)]">
                  <svg
                    className="h-[15px] w-[15px] text-[#e4e2e1]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-['Plus_Jakarta_Sans:Regular'] text-xs leading-4 tracking-[1.6px] text-[#c7d92c] uppercase">
                Platform
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#9a9b93] transition-colors duration-200 hover:text-[#fbf9f8]"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#9a9b93] transition-colors duration-200 hover:text-[#fbf9f8]"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#9a9b93] transition-colors duration-200 hover:text-[#fbf9f8]"
                >
                  Resident Portal
                </a>
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#9a9b93] transition-colors duration-200 hover:text-[#fbf9f8]"
                >
                  Contact Support
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-['Plus_Jakarta_Sans:Regular'] text-xs leading-4 tracking-[1.6px] text-[#c7d92c] uppercase">
                Stay Connected
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#9a9b93] transition-colors duration-200 hover:text-[#fbf9f8]"
                >
                  Newsroom
                </a>
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#9a9b93] transition-colors duration-200 hover:text-[#fbf9f8]"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#9a9b93] transition-colors duration-200 hover:text-[#fbf9f8]"
                >
                  Partnerships
                </a>
                <a
                  href="#"
                  className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#9a9b93] transition-colors duration-200 hover:text-[#fbf9f8]"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(251,249,248,0.08)] pt-8">
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-xs leading-4 text-[#6b6d60]">
              © 2024 Dozo Stays. All rights reserved.
            </p>
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-xs leading-4 text-[#6b6d60]">
              Made with ♥ for modern residents.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

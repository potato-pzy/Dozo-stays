import { useNavigate } from "react-router-dom"
import {
  Wifi,
  Users,
  Sparkles,
  ShieldCheck,
  Coffee,
  Dumbbell,
  WashingMachine,
  Palette,
  MapPin,
  Heart,
} from "lucide-react"

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

const heroImg = img("1522708323590-d24dbb6b0267", 1400)
const loungeImg = img("1493809842364-78817add7ffb", 900)
const roomImg = img("1631049307264-da0ec9d70304", 900)
const communityImg = img("1529156069898-49953e39b3ac", 900)
const workspaceImg = img("1497366216548-37526070297c", 900)
const kitchenImg = img("1556910103-1c02745aae4d", 900)
const ctaImg = img("1600585154340-be6161a56a0c", 1600)

const spaces = [
  {
    name: "Private Rooms",
    price: "From ₹15,000/mo",
    desc: "Your own quiet retreat with premium bedding, storage, and natural light.",
    image: roomImg,
    badge: "Most Popular",
  },
  {
    name: "Shared Suites",
    price: "From ₹12,000/mo",
    desc: "Twin-sharing rooms designed for friends, colleagues, or new beginnings.",
    image: img("1522771739844-6a9f6d5f14af", 900),
    badge: "Best Value",
  },
  {
    name: "Studio Lofts",
    price: "From ₹22,000/mo",
    desc: "Compact studios with a private kitchenette — space that feels fully yours.",
    image: img("1502672260266-1c1ef2d93688", 900),
    badge: "New",
  },
]

const amenities = [
  {
    icon: <Wifi className="h-7 w-7 text-[#6b7a00]" />,
    title: "200Mbps WiFi",
    desc: "Fiber-optic connectivity through every common and private space.",
  },
  {
    icon: <Users className="h-7 w-7 text-[#6b7a00]" />,
    title: "Resident Community",
    desc: "Weekly mixers, workshops, and a curated network of professionals.",
  },
  {
    icon: <Sparkles className="h-6 w-7 text-[#6b7a00]" />,
    title: "Weekly Housekeeping",
    desc: "Deep cleaning of common areas and optional private room service.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-[#6b7a00]" />,
    title: "24/7 Security",
    desc: "Smart locks, CCTV, and on-site support for total peace of mind.",
  },
  {
    icon: <Coffee className="h-7 w-7 text-[#6b7a00]" />,
    title: "Lounge & Barista",
    desc: "Unlimited specialty coffee from local roasters in the lounge.",
  },
  {
    icon: <Dumbbell className="h-7 w-7 text-[#6b7a00]" />,
    title: "Fitness Corner",
    desc: "A compact gym zone with free weights, mats, and cardio basics.",
  },
  {
    icon: <WashingMachine className="h-7 w-7 text-[#6b7a00]" />,
    title: "Laundry Room",
    desc: "Washers, dryers, and fold service — no more weekend laundromats.",
  },
  {
    icon: <Palette className="h-7 w-7 text-[#6b7a00]" />,
    title: "Creative Studio",
    desc: "Quiet corners and maker spaces for ideas that need room to breathe.",
  },
]

const rituals = [
  {
    day: "Mon",
    title: "Fresh Start Circles",
    desc: "Monday stand-ups in the lounge to set intentions for the week.",
  },
  {
    day: "Wed",
    title: "Co-Working Wednesdays",
    desc: "Open desks, guest mentors, and coffee-fueled deep work sessions.",
  },
  {
    day: "Fri",
    title: "Community Night",
    desc: "Game nights, open mics, and shared dinners with residents.",
  },
  {
    day: "Sun",
    title: "Slow Sundays",
    desc: "Brunch, board games, and rest — the co-living way to reset.",
  },
]

const testimonials = [
  {
    quote:
      "I moved for a job and found a family. Friday nights at the lounge are something I never want to give up.",
    name: "Ananya R.",
    role: "Product Designer · HSR Layout",
  },
  {
    quote:
      "Everything — WiFi, food, housekeeping — just works. I focus on work and the community handles the rest.",
    name: "Karthik M.",
    role: "Software Engineer · Indiranagar",
  },
  {
    quote:
      "The spaces feel designed, not rented. It's the first place in Bangalore that actually felt like home.",
    name: "Sara D.",
    role: "Content Strategist · Koramangala",
  },
]

const stats = [
  { value: "2,000+", label: "Happy residents" },
  { value: "12", label: "Houses across Bangalore" },
  { value: "4.9", label: "Average resident rating" },
  { value: "48h", label: "Average move-in time" },
]

export default function CoLiving() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#fbf9f8] pt-16">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-[#1b1c1c] px-6 pt-16 pb-20 lg:px-10 lg:pt-24 lg:pb-28">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[220px] w-[700px] -translate-x-1/2 bg-[rgba(199,217,44,0.07)] blur-[90px]" />
        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex flex-1 flex-col gap-7">
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] text-[#c7d92c] uppercase">
              Co-Living at Dozo
            </p>
            <div className="flex flex-col">
              <p className="font-['Playfair_Display:Regular'] text-[clamp(44px,5.5vw,68px)] leading-[1.08] tracking-[-1.5px] text-[#fbf9f8]">
                Live together,
              </p>
              <p className="font-['Playfair_Display:Italic'] text-[clamp(44px,5.5vw,68px)] leading-[1.08] tracking-[-0.5px] text-[#dbee41] italic">
                grow alone.
              </p>
            </div>
            <p className="max-w-[480px] font-['Plus_Jakarta_Sans:Regular'] text-base leading-[26px] text-[#e4e2e1]">
              Elevated co-living for students and young professionals — fully
              furnished homes, a thriving community, and every chore handled so
              you can focus on what matters.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="rounded-full bg-[#c7d92c] px-5 py-2.5 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#545d00]">
                Fully Furnished
              </span>
              <span className="rounded-full border border-[rgba(251,249,248,0.28)] px-5 py-2.5 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#e4e2e1]">
                Flexible Stays
              </span>
              <span className="rounded-full border border-[rgba(251,249,248,0.28)] px-5 py-2.5 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#e4e2e1]">
                All Bills Included
              </span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => navigate("/stays")}
                className="group flex cursor-pointer items-center gap-2 rounded-full bg-[#cdea2e] px-7 py-3.5 font-['Plus_Jakarta_Sans:Regular'] text-[15px] leading-5 font-medium text-[#1b1c1c] shadow-[0_6px_20px_-6px_rgba(160,180,0,0.5)] transition-all duration-200 hover:bg-[#d8f545] active:scale-[0.97]"
              >
                Explore Stays
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
              <button
                onClick={() => navigate("/chefs-table")}
                className="cursor-pointer rounded-full border border-[rgba(251,249,248,0.3)] bg-transparent px-7 py-3.5 font-['Plus_Jakarta_Sans:Regular'] text-[15px] leading-5 font-medium text-[#fbf9f8] transition-all duration-200 hover:border-[rgba(251,249,248,0.5)] hover:bg-[rgba(251,249,248,0.06)]"
              >
                Chef's Table
              </button>
            </div>
          </div>

          <div className="relative h-[380px] w-full flex-1 rounded-[24px] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.5)] sm:h-[440px] lg:h-[520px]">
            <img
              alt="Bright shared co-living lounge at Dozo Stays"
              className="absolute inset-0 h-full w-full rounded-[24px] object-cover"
              src={heroImg}
            />
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-t from-[rgba(27,28,28,0.88)] via-[rgba(27,28,28,0.15)] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end gap-5 p-7 lg:p-9">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#c7d92c] shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                <Heart className="h-6 w-6 text-[#3d4500]" />
              </div>
              <p className="font-['Plus_Jakarta_Sans:Italic'] text-[17px] leading-[26px] text-[#fbf9f8] italic">
                “A home is more than a room — it's the people you share it
                with.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="px-6 lg:px-10 py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-1.5 rounded-[16px] border border-black/[0.04] bg-white px-6 py-7 shadow-[0_2px_8px_-2px_rgba(27,28,28,0.05)]"
            >
              <p className="font-['Playfair_Display:Regular'] text-[36px] leading-none tracking-[-1px] text-[#1b1c1c]">
                {s.value}
              </p>
              <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#6b6d60]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── What is Co-Living ─── */}
      <section className="px-6 lg:px-10 pb-20 lg:pb-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-14 lg:flex-row lg:gap-20">
          <div className="flex flex-1 flex-col gap-7">
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] text-[#5a6400] uppercase">
              What is Co-Living
            </p>
            <div className="flex flex-col">
              <p className="font-['Playfair_Display:Regular'] text-[clamp(36px,4vw,48px)] leading-[1.2] tracking-[-0.5px] text-[#1b1c1c]">
                More than a PG.
              </p>
              <p className="font-['Playfair_Display:Italic'] text-[clamp(36px,4vw,48px)] leading-[1.2] tracking-[-0.5px] text-[#1b1c1c] italic">
                A way of living.
              </p>
            </div>
            <p className="max-w-[480px] font-['Plus_Jakarta_Sans:Regular'] text-base leading-[26px] text-[#464834]">
              Co-living at Dozo means private space when you need it and a
              vibrant community when you want it. Rent includes furniture,
              utilities, WiFi, housekeeping, and a calendar full of resident
              rituals — so moving in feels like coming home.
            </p>
            <div className="grid grid-cols-1 gap-7 pt-2 sm:grid-cols-3">
              <div className="flex flex-col gap-3.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#eae8e7] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <MapPin className="h-6 w-6 text-[#6b7a00]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c]">
                    Prime Locations
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#464834]">
                    Minutes from tech parks, colleges, and cafés across
                    Bangalore.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#eae8e7] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <Sparkles className="h-6 w-7 text-[#6b7a00]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c]">
                    Zero Chores
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#464834]">
                    Cleaning, laundry options, and maintenance handled for you.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#eae8e7] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <Users className="h-6 w-6 text-[#6b7a00]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c]">
                    Real Community
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#464834]">
                    Curated residents and events that turn neighbours into
                    friends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full flex-1">
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-[rgba(199,217,44,0.2)] opacity-50 blur-[32px]" />
            <div className="relative flex gap-4">
              <div className="flex flex-1 flex-col gap-4 pt-10">
                <div className="h-56 overflow-hidden rounded-[16px] shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                  <img
                    alt="Shared co-living lounge"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={loungeImg}
                  />
                </div>
                <div className="h-40 overflow-hidden rounded-[16px] shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                  <img
                    alt="Residents cooking together"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={kitchenImg}
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 pb-10">
                <div className="h-64 overflow-hidden rounded-[16px] shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                  <img
                    alt="Friends laughing together at a community gathering"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={communityImg}
                  />
                </div>
                <div className="h-44 overflow-hidden rounded-[16px] shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                  <img
                    alt="Shared co-working space"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={workspaceImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Spaces ─── */}
      <section className="px-6 lg:px-10 pb-20 lg:pb-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-2.5">
              <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] text-[#5a6400] uppercase">
                Our Spaces
              </p>
              <p className="font-['Plus_Jakarta_Sans:Bold'] text-[32px] leading-10 font-bold tracking-[-0.64px] text-[#1b1c1c]">
                Rooms that feel like yours
              </p>
            </div>
            <button
              onClick={() => navigate("/stays")}
              className="cursor-pointer rounded-full border border-[#1b1c1c] px-6 py-3 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#1b1c1c] transition-all duration-200 hover:bg-[#1b1c1c] hover:text-[#fbf9f8]"
            >
              View all properties →
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {spaces.map((space) => (
              <div
                key={space.name}
                className="group flex flex-col overflow-hidden rounded-[16px] border border-black/[0.04] bg-white shadow-[0_2px_8px_-2px_rgba(27,28,28,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-8px_rgba(27,28,28,0.14)]"
              >
                <div className="relative h-52 overflow-hidden bg-[#eae8e7]">
                  <img
                    alt={space.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    src={space.image}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(27,28,28,0.22)] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-[#1b1c1c]/90 px-3 py-1 backdrop-blur-sm">
                    <p className="font-['Plus_Jakarta_Sans:Regular'] text-xs leading-4 text-[#fbf9f8]">
                      {space.badge}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 rounded-full bg-[#c7d92c] px-3 py-1 shadow-[0_1px_4px_rgba(90,100,0,0.15)]">
                    <p className="font-['Plus_Jakarta_Sans:Regular'] text-xs leading-4 text-[#545d00]">
                      {space.price}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c]">
                    {space.name}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#6b6d60]">
                    {space.desc}
                  </p>
                  <button
                    onClick={() => navigate("/stays")}
                    className="mt-auto w-full cursor-pointer rounded-[8px] border border-[#1b1c1c] py-[13px] font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c] text-center transition-all duration-200 hover:bg-[#1b1c1c] hover:text-[#fbf9f8]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Community Rituals (inset panel) ─── */}
      <section className="px-6 lg:px-10 pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1280px] rounded-[24px] bg-[#f6f3f2] p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2.5">
              <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] text-[#5a6400] uppercase">
                Life at Dozo
              </p>
              <p className="font-['Plus_Jakarta_Sans:Bold'] text-[32px] leading-10 font-bold tracking-[-0.64px] text-[#1b1c1c]">
                Community rituals, every week
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {rituals.map((r) => (
                <div
                  key={r.title}
                  className="flex flex-col gap-3 rounded-[14px] border border-black/[0.04] bg-[#fbf9f8] px-5 py-6 shadow-[0_2px_8px_-2px_rgba(27,28,28,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(27,28,28,0.12)]"
                >
                  <span className="w-fit rounded-full bg-[#cdea2e] px-3 py-1 font-['Plus_Jakarta_Sans:Regular'] text-xs leading-4 text-[#545d00]">
                    {r.day}
                  </span>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c]">
                    {r.title}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#6b6d60]">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Amenities ─── */}
      <section className="px-6 lg:px-10 pb-20 lg:pb-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
          <div className="flex flex-col gap-2.5">
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] text-[#5a6400] uppercase">
              Everything Included
            </p>
            <p className="font-['Plus_Jakarta_Sans:Bold'] text-[32px] leading-10 font-bold tracking-[-0.64px] text-[#1b1c1c]">
              Amenities that make life effortless
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((a) => (
              <div
                key={a.title}
                className="group flex flex-col gap-4 rounded-[20px] bg-[#f5f5f2] p-7 transition-all duration-300 hover:bg-[#ececea]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8e8e5]">
                  {a.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-['Plus_Jakarta_Sans:Bold'] text-base leading-6 font-bold text-[#1b1c1c]">
                    {a.title}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#6b6d60]">
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="bg-[#1b1c1c] px-6 py-20 lg:px-10 lg:py-24">
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12">
          <div className="pointer-events-none absolute top-0 left-1/2 h-[180px] w-[600px] -translate-x-1/2 bg-[rgba(199,217,44,0.06)] blur-[80px]" />
          <div className="relative flex flex-col items-center gap-4 text-center">
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] text-[#c7d92c] uppercase">
              Resident Stories
            </p>
            <p className="font-['Playfair_Display:Regular'] text-[clamp(32px,4vw,48px)] leading-[1.2] tracking-[-0.5px] text-[#fbf9f8]">
              Hear it from the{" "}
              <span className="font-['Playfair_Display:Italic'] text-[#dbee41] italic">
                house.
              </span>
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col gap-5 rounded-[16px] border border-[rgba(251,249,248,0.12)] bg-[rgba(251,249,248,0.05)] p-7 transition-colors duration-200 hover:bg-[rgba(251,249,248,0.08)]"
              >
                <div className="flex gap-1.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className="h-2 w-2 rounded-full bg-[#c7d92c]"
                    />
                  ))}
                </div>
                <blockquote className="font-['Plus_Jakarta_Sans:Regular'] text-[15px] leading-[26px] text-[#e4e2e1]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto flex flex-col gap-0.5 pt-2">
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#fbf9f8]">
                    {t.name}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-xs leading-4 text-[#9a9b93]">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="px-6 pt-20 pb-20 lg:px-10 lg:pt-24 lg:pb-24">
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
              Your room is waiting.
            </p>
            <p className="max-w-[576px] text-center font-['Plus_Jakarta_Sans:Regular'] text-lg leading-7 text-[#e4e2e1]">
              Tours are available daily. Experience the vibe, meet the
              community, and see the space for yourself.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => navigate("/stays")}
                className="cursor-pointer rounded-full bg-[#c7d92c] px-10 py-5 font-['Plus_Jakarta_Sans:Regular'] text-lg leading-7 text-[#545d00] shadow-[0_4px_16px_rgba(90,100,0,0.3),0_1px_0_rgba(255,255,255,0.25)_inset] transition-all duration-200 hover:bg-[#d4e832] active:scale-[0.97]"
              >
                Schedule a Tour
              </button>
              <button
                onClick={() => navigate("/chefs-table")}
                className="cursor-pointer rounded-full bg-[#fbf9f8] px-10 py-5 font-['Plus_Jakarta_Sans:Regular'] text-lg leading-7 text-[#1b1c1c] transition-all duration-200 hover:bg-white active:scale-[0.97]"
              >
                See the Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-[#1b1c1c] px-6 py-20 lg:px-10">
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

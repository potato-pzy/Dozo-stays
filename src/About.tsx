import { useNavigate } from "react-router-dom"
import {
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Users,
  MapPin,
  Quote,
} from "lucide-react"

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

const heroImg = img("1522071820081-009f0129c71c", 1400)
const storyImg1 = img("1497366754035-f200968a6e72", 900)
const storyImg2 = img("1600585154340-be6161a56a0c", 900)
const storyImg3 = img("1514565131-fce0801e5785", 900)
const storyImg4 = img("1559136555-9303baea8ebd", 900)
const ctaImg = img("1486406146926-c627a92ad1ab", 1600)

const stats = [
  { value: "2019", label: "Founded in Bangalore" },
  { value: "12", label: "Houses & counting" },
  { value: "2,000+", label: "Residents served" },
  { value: "96%", label: "Would recommend us" },
]

const values = [
  {
    icon: <Heart className="h-7 w-7 text-[#6b7a00]" />,
    title: "Home First",
    desc: "Every decision starts with one question — would this feel like home?",
  },
  {
    icon: <Sparkles className="h-6 w-7 text-[#6b7a00]" />,
    title: "Designed Intent",
    desc: "Spaces, rituals, and services are curated — never accidental.",
  },
  {
    icon: <Leaf className="h-7 w-7 text-[#6b7a00]" />,
    title: "Live Lighter",
    desc: "Zero-waste kitchens, shared resources, and a smaller footprint.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-[#6b7a00]" />,
    title: "Run Properly",
    desc: "Transparent pricing, real policies, and no gray areas in renting.",
  },
]

const milestones = [
  {
    year: "2019",
    title: "The first house",
    desc: "One home in HSR Layout with six residents and a shared kitchen dream.",
  },
  {
    year: "2021",
    title: "Community takes shape",
    desc: "Weekly mixers, the Chef's Table menu, and our first resident-led clubs.",
  },
  {
    year: "2023",
    title: "Across Bangalore",
    desc: "Twelve design-led houses near tech parks, colleges, and cafés.",
  },
  {
    year: "2024",
    title: "2,000+ residents",
    desc: "A network of modern urban pioneers — and still just getting started.",
  },
]

const team = [
  {
    name: "Meera Krishnan",
    role: "Founder & CEO",
    bio: "Former hospitality lead who believes a good home is the best career boost.",
    image: img("1573496359142-b8d87734a5a2", 700),
  },
  {
    name: "Arjun Nair",
    role: "Head of Design",
    bio: "Shapes every lounge, room, and corner so it feels considered — not generic.",
    image: img("1560250097-0b93528c311a", 700),
  },
  {
    name: "Priya Shah",
    role: "Community Lead",
    bio: "Builds the rituals and events that turn residents into lifelong friends.",
    image: img("1573497019940-1c28c88b4f3e", 700),
  },
  {
    name: "Rohan Das",
    role: "Head Chef, Dozo Kitchen",
    bio: "Rotates the weekly Chef's Table with seasonal, locally sourced menus.",
    image: img("1507003211169-0a1dd7228f2d", 700),
  },
]

const principles = [
  {
    icon: <Users className="h-6 w-6 text-[#6b7a00]" />,
    title: "People over rooms",
    desc: "We measure success in friendships formed, not just beds filled.",
  },
  {
    icon: <MapPin className="h-6 w-6 text-[#6b7a00]" />,
    title: "Location with intent",
    desc: "Every house sits minutes from where you actually need to be.",
  },
  {
    icon: <Quote className="h-6 w-6 text-[#6b7a00]" />,
    title: "No fine print",
    desc: "What you see is what you pay — utilities, cleaning, and amenities included.",
  },
]

export default function About() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#fbf9f8] pt-16">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-[#1b1c1c] px-6 pt-16 pb-20 lg:px-10 lg:pt-24 lg:pb-28">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[220px] w-[700px] -translate-x-1/2 bg-[rgba(199,217,44,0.07)] blur-[90px]" />
        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex flex-1 flex-col gap-7">
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] text-[#c7d92c] uppercase">
              About Dozo Stays
            </p>
            <div className="flex flex-col">
              <p className="font-['Playfair_Display:Regular'] text-[clamp(44px,5.5vw,68px)] leading-[1.08] tracking-[-1.5px] text-[#fbf9f8]">
                Built for how,
              </p>
              <p className="font-['Playfair_Display:Italic'] text-[clamp(44px,5.5vw,68px)] leading-[1.08] tracking-[-0.5px] text-[#dbee41] italic">
                you actually live.
              </p>
            </div>
            <p className="max-w-[480px] font-['Plus_Jakarta_Sans:Regular'] text-base leading-[26px] text-[#e4e2e1]">
              Dozo Stays began with a simple frustration — renting should not
              feel transactional. We design homes, communities, and services so
              the modern urban pioneer can settle in and thrive.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="rounded-full bg-[#c7d92c] px-5 py-2.5 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#545d00]">
                Est. 2019
              </span>
              <span className="rounded-full border border-[rgba(251,249,248,0.28)] px-5 py-2.5 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#e4e2e1]">
                Bangalore Born
              </span>
              <span className="rounded-full border border-[rgba(251,249,248,0.28)] px-5 py-2.5 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#e4e2e1]">
                Resident Loved
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
                onClick={() => navigate("/co-living")}
                className="cursor-pointer rounded-full border border-[rgba(251,249,248,0.3)] bg-transparent px-7 py-3.5 font-['Plus_Jakarta_Sans:Regular'] text-[15px] leading-5 font-medium text-[#fbf9f8] transition-all duration-200 hover:border-[rgba(251,249,248,0.5)] hover:bg-[rgba(251,249,248,0.06)]"
              >
                Co-Living
              </button>
            </div>
          </div>

          <div className="relative h-[380px] w-full flex-1 rounded-[24px] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.5)] sm:h-[440px] lg:h-[520px]">
            <img
              alt="The Dozo Stays team collaborating"
              className="absolute inset-0 h-full w-full rounded-[24px] object-cover"
              src={heroImg}
            />
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-t from-[rgba(27,28,28,0.88)] via-[rgba(27,28,28,0.15)] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end gap-5 p-7 lg:p-9">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#c7d92c] shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                <Heart className="h-6 w-6 text-[#3d4500]" />
              </div>
              <p className="font-['Plus_Jakarta_Sans:Italic'] text-[17px] leading-[26px] text-[#fbf9f8] italic">
                “We don't rent rooms — we craft the places people call home.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="px-6 py-14 lg:px-10 lg:py-16">
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

      {/* ─── Our Story ─── */}
      <section className="px-6 lg:px-10 pb-20 lg:pb-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-14 lg:flex-row lg:gap-20">
          <div className="flex flex-1 flex-col gap-7">
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] text-[#5a6400] uppercase">
              Our Story
            </p>
            <div className="flex flex-col">
              <p className="font-['Playfair_Display:Regular'] text-[clamp(36px,4vw,48px)] leading-[1.2] tracking-[-0.5px] text-[#1b1c1c]">
                From one house
              </p>
              <p className="font-['Playfair_Display:Italic'] text-[clamp(36px,4vw,48px)] leading-[1.2] tracking-[-0.5px] text-[#1b1c1c] italic">
                to a movement.
              </p>
            </div>
            <p className="max-w-[480px] font-['Plus_Jakarta_Sans:Regular'] text-base leading-[26px] text-[#464834]">
              What started as a single home in HSR Layout is now a network of
              design-led co-living spaces across Bangalore. Along the way we
              built the Chef's Table, Sunday rituals, and a community that looks
              after its own — without ever losing the feeling of a real home.
            </p>
            <div className="grid grid-cols-1 gap-7 pt-2 sm:grid-cols-3">
              <div className="flex flex-col gap-3.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#eae8e7] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <Heart className="h-6 w-6 text-[#6b7a00]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c]">
                    Resident Obsessed
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#464834]">
                    Feedback loops with residents shape every new house and
                    policy.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#eae8e7] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <Sparkles className="h-6 w-7 text-[#6b7a00]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c]">
                    Design Led
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#464834]">
                    Interiors, light, and flow are considered — never an
                    afterthought.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#eae8e7] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <Leaf className="h-7 w-7 text-[#6b7a00]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c]">
                    Built to Last
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#464834]">
                    Long-term stays, sustainable kitchens, and honest
                    relationships.
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
                    alt="Dozo community gathering"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={storyImg1}
                  />
                </div>
                <div className="h-40 overflow-hidden rounded-[16px] shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                  <img
                    alt="A Dozo house exterior"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={storyImg2}
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 pb-10">
                <div className="h-64 overflow-hidden rounded-[16px] shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                  <img
                    alt="Bangalore city skyline"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={storyImg3}
                  />
                </div>
                <div className="h-44 overflow-hidden rounded-[16px] shadow-[0_8px_32px_-4px_rgba(27,28,28,0.14)]">
                  <img
                    alt="Team planning session"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={storyImg4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="px-6 lg:px-10 pb-20 lg:pb-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
          <div className="flex flex-col gap-2.5">
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] text-[#5a6400] uppercase">
              What We Believe
            </p>
            <p className="font-['Plus_Jakarta_Sans:Bold'] text-[32px] leading-10 font-bold tracking-[-0.64px] text-[#1b1c1c]">
              The principles behind every house
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="group flex flex-col gap-4 rounded-[20px] bg-[#f5f5f2] p-7 transition-all duration-300 hover:bg-[#ececea]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8e8e5]">
                  {v.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-['Plus_Jakarta_Sans:Bold'] text-base leading-6 font-bold text-[#1b1c1c]">
                    {v.title}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#6b6d60]">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Milestones (inset panel) ─── */}
      <section className="px-6 lg:px-10 pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1280px] rounded-[24px] bg-[#f6f3f2] p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2.5">
              <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] text-[#5a6400] uppercase">
                The Journey
              </p>
              <p className="font-['Plus_Jakarta_Sans:Bold'] text-[32px] leading-10 font-bold tracking-[-0.64px] text-[#1b1c1c]">
                Milestones that shaped us
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {milestones.map((m) => (
                <div
                  key={m.year}
                  className="flex flex-col gap-3 rounded-[14px] border border-black/[0.04] bg-[#fbf9f8] px-5 py-6 shadow-[0_2px_8px_-2px_rgba(27,28,28,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(27,28,28,0.12)]"
                >
                  <span className="w-fit rounded-full bg-[#cdea2e] px-3 py-1 font-['Plus_Jakarta_Sans:Regular'] text-xs leading-4 text-[#545d00]">
                    {m.year}
                  </span>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c]">
                    {m.title}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#6b6d60]">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="px-6 lg:px-10 pb-20 lg:pb-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-2.5">
              <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] text-[#5a6400] uppercase">
                The People
              </p>
              <p className="font-['Plus_Jakarta_Sans:Bold'] text-[32px] leading-10 font-bold tracking-[-0.64px] text-[#1b1c1c]">
                Faces behind the homes
              </p>
            </div>
            <button
              onClick={() => navigate("/co-living")}
              className="cursor-pointer rounded-full border border-[#1b1c1c] px-6 py-3 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#1b1c1c] transition-all duration-200 hover:bg-[#1b1c1c] hover:text-[#fbf9f8]"
            >
              Life at Dozo →
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col overflow-hidden rounded-[16px] border border-black/[0.04] bg-white shadow-[0_2px_8px_-2px_rgba(27,28,28,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-8px_rgba(27,28,28,0.14)]"
              >
                <div className="relative h-64 overflow-hidden bg-[#eae8e7]">
                  <img
                    alt={member.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    src={member.image}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(27,28,28,0.2)] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-[#c7d92c] px-3 py-1 shadow-[0_1px_4px_rgba(90,100,0,0.15)]">
                    <p className="font-['Plus_Jakarta_Sans:Regular'] text-xs leading-4 text-[#545d00]">
                      {member.role}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c]">
                    {member.name}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#6b6d60]">
                    {member.bio}
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
      </section>

      {/* ─── Principles band ─── */}
      <section className="bg-[#1b1c1c] px-6 py-20 lg:px-10 lg:py-24">
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12">
          <div className="pointer-events-none absolute top-0 left-1/2 h-[180px] w-[600px] -translate-x-1/2 bg-[rgba(199,217,44,0.06)] blur-[80px]" />
          <div className="relative flex flex-col items-center gap-4 text-center">
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] text-[#c7d92c] uppercase">
              How We Work
            </p>
            <p className="font-['Playfair_Display:Regular'] text-[clamp(32px,4vw,48px)] leading-[1.2] tracking-[-0.5px] text-[#fbf9f8]">
              Simple rules,{" "}
              <span className="font-['Playfair_Display:Italic'] text-[#dbee41] italic">
                kept honestly.
              </span>
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-4 rounded-[16px] border border-[rgba(251,249,248,0.12)] bg-[rgba(251,249,248,0.05)] p-7 transition-colors duration-200 hover:bg-[rgba(251,249,248,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(199,217,44,0.15)]">
                  {p.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#fbf9f8]">
                    {p.title}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#b9bab2]">
                    {p.desc}
                  </p>
                </div>
              </div>
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
              Come see it for yourself.
            </p>
            <p className="max-w-[576px] text-center font-['Plus_Jakarta_Sans:Regular'] text-lg leading-7 text-[#e4e2e1]">
              Tours are available daily. Meet the community, walk the houses,
              and find your corner of Bangalore.
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

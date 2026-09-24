import { useState } from "react"
import { useNavigate } from "react-router-dom"

const card1Img =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80"
const card2Img =
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
const card3Img =
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&q=80"

type Tab = "signin" | "signup"

export default function Login() {
  const navigate = useNavigate()
  const [tab, setTab] = useState<Tab>("signin")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [googleLoading, setGoogleLoading] = useState(false)

  const isSignup = tab === "signup"

  const switchTab = (t: Tab) => {
    setTab(t)
    setError(null)
    setSuccess(null)
  }

  const shake = (msg: string) => {
    setError(msg)
    setSuccess(null)
    setTimeout(() => setError(null), 2500)
  }

  const handleSubmit = () => {
    if (!mobile || mobile.length < 10) {
      shake("Enter a valid 10-digit mobile number")
      return
    }
    if (isSignup) {
      if (!fullName.trim()) {
        shake("Please enter your full name")
        return
      }
      if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
        shake("Please enter a valid email address")
        return
      }
      setSuccess("Account created ✓")
      setError(null)
    } else {
      setSuccess("OTP sent ✓")
      setError(null)
    }
    setTimeout(() => setSuccess(null), 2500)
  }

  const handleGoogle = () => {
    if (googleLoading) return
    setGoogleLoading(true)
    setTimeout(() => setGoogleLoading(false), 1500)
  }

  const inputClass = `w-full rounded-[12px] border bg-white px-4 py-4 font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c] outline-none transition-colors duration-200 placeholder:text-[#6b7280] focus:border-[#c7d92c] ${
    error ? "border-[#ef4444]" : "border-[#c8c8b4]"
  }`

  return (
    <div className="min-h-screen bg-[#fbf9f8] pt-16">
      <div className="flex min-h-[calc(100vh-4rem)] flex-col lg:flex-row">
        {/* ── Left Panel ── */}
        <section className="relative flex w-full flex-col justify-between overflow-hidden bg-[#c7d92c] px-6 py-10 sm:px-10 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:w-1/2 lg:min-h-[640px] lg:self-start lg:px-16 lg:py-14">
          <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-white/20 blur-[32px]" />

          <p className="relative z-10 font-['Plus_Jakarta_Sans:Bold'] text-lg leading-7 font-bold tracking-[-0.45px] text-[#434b00]">
            Dozo Stays
          </p>

          <div className="relative z-10 mt-10 flex flex-col gap-8">
            <p className="max-w-[480px] font-['Playfair_Display:Italic'] text-[clamp(34px,4vw,64px)] leading-[1.25] text-[#5a6400] italic">
              Your new home is just a step away.
            </p>

            {/* Card stack */}
            <div className="relative h-[260px] max-w-[420px]">
              <div className="absolute top-0 left-0 w-[200px] rotate-[-6deg] rounded-[12px] bg-[#f6f4e8] p-3 shadow-[0_4px_20px_-2px_rgba(27,28,28,0.1)]">
                <img
                  alt="The Urban Oasis"
                  className="h-[130px] w-full rounded-[8px] object-cover"
                  src={card1Img}
                />
                <p className="mt-2.5 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#1b1c1c]">
                  The Urban Oasis
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#434b00]">
                  ₹8,500/mo
                </p>
              </div>
              <div className="absolute top-0 right-0 w-[200px] rotate-[8deg] rounded-[12px] bg-[#f6f4e8] p-3 shadow-[0_4px_20px_-2px_rgba(27,28,28,0.1)]">
                <img
                  alt="Skyline Studio"
                  className="h-[130px] w-full rounded-[8px] object-cover"
                  src={card3Img}
                />
                <p className="mt-2.5 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#1b1c1c]">
                  Skyline Studio
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#434b00]">
                  ₹15,000/mo
                </p>
              </div>
              <div className="absolute top-2.5 left-1/2 z-10 w-[200px] -translate-x-1/2 rotate-[2deg] rounded-[12px] bg-[#f6f4e8] p-3 shadow-[0_4px_20px_-2px_rgba(27,28,28,0.1)]">
                <img
                  alt="Zen Heights"
                  className="h-[130px] w-full rounded-[8px] object-cover"
                  src={card2Img}
                />
                <p className="mt-2.5 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#1b1c1c]">
                  Zen Heights
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-[22px] text-[#434b00]">
                  ₹12,200/mo
                </p>
              </div>
            </div>

            {/* Social proof */}
            <div className="relative z-10 flex items-center gap-3.5">
              <div className="flex items-center">
                {[47, 32, 15, 62].map((n, i) => (
                  <div
                    key={n}
                    className={`h-10 w-10 overflow-hidden rounded-full border-2 border-[#c7d92c] bg-[#e0e0e0] ${
                      i === 0 ? "" : "-ml-3"
                    }`}
                  >
                    <img
                      alt=""
                      className="h-full w-full object-cover"
                      src={`https://i.pravatar.cc/80?img=${n}`}
                    />
                  </div>
                ))}
              </div>
              <span className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 font-semibold text-[#5a6400]">
                2,000+ verified residents
              </span>
            </div>
          </div>
        </section>

        {/* ── Right Panel ── */}
        <section className="flex w-full flex-1 items-center justify-center bg-[#fbf9f8] px-6 py-12 sm:px-8 lg:px-8 lg:py-16">
          <div className="flex w-full max-w-[400px] flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h2 className="font-['Plus_Jakarta_Sans:Regular'] text-[32px] leading-[1.2] font-semibold text-[#1b1c1c]">
                Welcome to Dozo Stays
              </h2>
              <p className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#474839]">
                {isSignup
                  ? "Create your account to get started."
                  : "Sign in to manage your bookings and stay."}
              </p>
            </div>

            {/* Tab switcher */}
            <div className="flex rounded-full bg-[#f6f4e8] p-1" role="tablist">
              <button
                role="tab"
                onClick={() => switchTab("signin")}
                className={`flex-1 cursor-pointer rounded-full px-2.5 py-2.5 font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 transition-all duration-200 ${
                  tab === "signin"
                    ? "bg-[#c7d92c] text-[#434b00] shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
                    : "bg-transparent text-[#474839] hover:text-[#1b1c1c]"
                }`}
              >
                Sign In
              </button>
              <button
                role="tab"
                onClick={() => switchTab("signup")}
                className={`flex-1 cursor-pointer rounded-full px-2.5 py-2.5 font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 transition-all duration-200 ${
                  tab === "signup"
                    ? "bg-[#c7d92c] text-[#434b00] shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
                    : "bg-transparent text-[#474839] hover:text-[#1b1c1c]"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-4.5">
              {isSignup && (
                <>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#474839]"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#474839]"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </>
              )}

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#474839]"
                  htmlFor="mobile"
                >
                  Mobile Number
                </label>
                <div
                  className={`flex items-center overflow-hidden rounded-[12px] border bg-white transition-colors duration-200 focus-within:border-[#c7d92c] ${
                    error ? "border-[#ef4444]" : "border-[#c8c8b4]"
                  }`}
                >
                  <div className="flex shrink-0 items-center gap-2 px-4 py-4">
                    <span className="text-lg">🇮🇳</span>
                    <span className="border-r border-[#c8c8b4] pr-2.5 font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c]">
                      +91
                    </span>
                  </div>
                  <input
                    id="mobile"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Enter mobile number"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                    className="flex-1 border-none bg-transparent px-3 py-4 font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c] outline-none placeholder:text-[#6b7280]"
                  />
                </div>
              </div>

              {error && (
                <p className="font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#ef4444]">
                  {error}
                </p>
              )}

              <button
                onClick={handleSubmit}
                className={`w-full cursor-pointer rounded-full px-4 py-4 font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 font-bold tracking-[0.4px] text-white uppercase transition-opacity duration-200 hover:opacity-90 ${
                  success
                    ? "bg-[linear-gradient(135deg,#8faa00_0%,#e8a070_100%)]"
                    : "bg-[linear-gradient(135deg,#c7d92c_0%,#ffc29a_100%)]"
                }`}
              >
                {success ? success : isSignup ? "Create Account" : "Send OTP"}
              </button>

              {/* OR divider */}
              <div className="flex items-center">
                <div className="h-px flex-1 bg-[#c8c8b4]" />
                <span className="px-4 font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 tracking-[1.6px] whitespace-nowrap text-[#474839] uppercase">
                  Or continue with
                </span>
                <div className="h-px flex-1 bg-[#c8c8b4]" />
              </div>

              {/* Google */}
              <button
                onClick={handleGoogle}
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-full border border-[#c8c8b4] bg-white px-4 py-[15px] font-['Plus_Jakarta_Sans:Regular'] text-base leading-6 text-[#1b1c1c] shadow-[0_4px_20px_-2px_rgba(27,28,28,0.05)] transition-colors duration-200 hover:bg-[#f9f9f9]"
              >
                {googleLoading ? (
                  "Redirecting…"
                ) : (
                  <>
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      />
                      <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      />
                      <path fill="none" d="M0 0h48v48H0z" />
                    </svg>
                    Continue with Google
                  </>
                )}
              </button>
            </div>

            {/* Form footer */}
            <p className="text-center font-['Plus_Jakarta_Sans:Regular'] text-base leading-[26px] text-[#474839]">
              By continuing you agree to our{" "}
              <a href="#" className="font-bold text-[#434b00] hover:underline">
                Terms of Service
              </a>{" "}
              &amp;{" "}
              <a href="#" className="font-bold text-[#434b00] hover:underline">
                Privacy Policy
              </a>
            </p>

            <p className="text-center font-['Plus_Jakarta_Sans:Regular'] text-sm leading-5 text-[#6b6d60]">
              Just browsing?{" "}
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer font-semibold text-[#434b00] hover:underline"
              >
                Back to home
              </button>
            </p>
          </div>
        </section>
      </div>

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

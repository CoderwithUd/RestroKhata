"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const IconQR = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-6 h-6"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <path d="M14 14h1v1h-1zM17 14h1v1h-1zM14 17h1v1h-1zM17 17h3v3h-3z" />
  </svg>
);
const IconStaff = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-6 h-6"
  >
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
    <path d="M19 8v6M16 11h6" />
  </svg>
);
const IconOrder = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-6 h-6"
  >
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M9 12h6M9 16h4" />
  </svg>
);
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
const IconInvoice = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-6 h-6"
  >
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
);
const IconCloud = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-6 h-6"
  >
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
  </svg>
);
const IconChart = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-6 h-6"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);
const IconAI = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-6 h-6"
  >
    <path d="M12 2a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4" />
    <path d="M12 14a8 8 0 018 8H4a8 8 0 018-8" />
    <path d="M16.24 7.76l3.54-3.54M7.76 7.76L4.22 4.22" />
  </svg>
);
const IconTable = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-6 h-6"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
    <line x1="9" y1="3" x2="9" y2="21" />
  </svg>
);
const IconCheck = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="w-4 h-4"
  >
    <polyline points="20,6 9,17 4,12" />
  </svg>
);
const IconArrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const IconPhone = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-5 h-5"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.29 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const IconMail = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-5 h-5"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconStar = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-yellow-400"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const IconKitchen = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-6 h-6"
  >
    <path d="M3 3h18v5H3z" />
    <path d="M3 8v13h18V8" />
    <circle cx="8" cy="13" r="2" />
    <path d="M16 11v5M13 13h6" />
  </svg>
);
const IconShield = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-5 h-5"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────
const features = [
  {
    icon: <IconQR />,
    title: "QR-Based Ordering",
    desc: "Customers scan the table QR, browse your menu, and place orders directly from their phone — faster service, less staff dependency.",
    tag: "QR Menu",
  },
  {
    icon: <IconOrder />,
    title: "One Table, Multiple Orders",
    desc: "Multiple customers on the same table can order separately from their devices — all orders are automatically combined into one final bill.",
    tag: "Smart",
  },
  {
    icon: <IconTable />,
    title: "Smart Table Management",
    desc: "Manage tables with live status — available, occupied, or reserved. Each table comes with its own QR for seamless ordering.",
    tag: "Tables",
  },
  {
    icon: <IconStaff />,
    title: "Staff & Role Management",
    desc: "Assign roles like waiter, kitchen, and manager. Each role gets a dedicated view for smooth operations.",
    tag: "Operations",
  },
  {
    icon: <IconOrder />,
    title: "Live Order Flow",
    desc: "Orders move instantly from customer or waiter to kitchen with real-time updates — no delays, no confusion.",
    tag: "Real-time",
  },
  {
    icon: <IconInvoice />,
    title: "Fast Billing & Invoice",
    desc: "Generate accurate invoices in seconds with automatic totals and taxes — no manual calculations needed.",
    tag: "Billing",
  },
  {
    icon: <IconWhatsApp />,
    title: "WhatsApp Invoice Sharing",
    desc: "Send invoices directly to customers on WhatsApp with one click — quick, professional, and paperless.",
    tag: "WhatsApp",
  },
  {
    icon: <IconChart />,
    title: "Sales & Profit Insights",
    desc: "Track daily sales, profits, and top-selling items. Get clear insights to grow your cafe or restaurant.",
    tag: "Reports",
  },
  {
    icon: <IconCloud />,
    title: "Cloud-Based System",
    desc: "Access your data anytime, anywhere. No installation required — works smoothly on mobile, tablet, or desktop.",
    tag: "Cloud",
  },
  // {
  //   icon: <IconAI />,
  //   title: "Smart Offers (Coming Soon)",
  //   desc: "Automatically suggest personalized offers to repeat customers and increase your sales with smart recommendations.",
  //   tag: "AI",
  // },
];
const howItWorks = [
  {
    step: "01",
    title: "Register Your Restaurant",
    desc: "Sign up free. Add your restaurant name, logo, and basic details in under 2 minutes.",
  },
  {
    step: "02",
    title: "Add Tables & Staff",
    desc: "Create your table layout, add staff members, and assign roles — waiter, kitchen, manager.",
  },
  {
    step: "03",
    title: "Set Up Your Digital Menu",
    desc: "Add your menu items with prices. QR codes auto-generate for each table instantly.",
  },
  {
    step: "04",
    title: "Start Taking Orders",
    desc: "Go live! Customers scan QR, order from their phone. Staff gets notified. Kitchen cooks. You earn.",
  },
];

const plans = [
  {
    name: "Free Trial",
    monthlyPrice: "Free",
    yearlyPrice: "Free",
    duration: "3 Months Trial",
    highlight: false,
    badge: "Full Access Trial",
    color: "orange",
    features: [
      "All premium features unlocked ",
      "Multi-user table ordering ",
      "QR-based ordering system",
      "Live order tracking",
      "Billing & invoice generation",
      "WhatsApp invoice sharing",
      "Basic reports & analytics",
      "Trial valid for 3 months",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: "₹799",
    yearlyPrice: "₹559",
    yearlyTotal: "₹6,708/year",
    duration: "per month",
    highlight: true,
    badge: "Most Popular",
    color: "yellow",
    features: [
      "Up to 15 tables",
      "Up to 10 staff accounts",
      "Multi-user table ordering (one bill)",
      "QR-based ordering system",
      "Live order tracking",
      "Billing & invoice generation",
      "WhatsApp invoice sharing",
      "Basic support",
    ],
  },
  {
    name: "Scale",
    monthlyPrice: "₹999",
    yearlyPrice: "₹699",
    yearlyTotal: "₹8,388/year",
    duration: "per month",
    highlight: false,
    badge: "Best Value",
    color: "orange",
    features: [
      "Everything in Growth",
      "Unlimited tables",
      "Unlimited staff accounts",
      "PDF download (orders & invoices)",
      "Data backup & advanced reports",
      "Advanced analytics",
      "Priority 7×24 support",
      "Early access to new features",
    ],
  },
];
const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Owner, Sharma Dhaba — Raipur",
    text: "Pehle order likhte the paper pe, ab waiter tablet se order deta hai, kitchen ko seedha milta hai. Bahut farak pada!",
    stars: 5,
  },
  {
    name: "Priya Mehta",
    role: "Manager, Cafe Aroma — Bhilai",
    text: "WhatsApp invoice feature sabse best hai. Customer ko seedha phone pe bill bhejte hain. Professional dikhta hai.",
    stars: 5,
  },
  {
    name: "Vikram Patel",
    role: "Owner, The Grill House — Durg",
    text: "QR menu se customers khud order karte hain. Staff ka time bachta hai aur galtiyan kam ho gayi hain.",
    stars: 5,
  },
];

// ─── Components ──────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,107,0,0.10)",
      }}
    >
      <div className="flex items-center justify-between px-5 md:px-10 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/icon-circle-192x192.png"
            alt="RestroKhata Logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span
            className="font-bold text-lg tracking-tight"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              color: "var(--orange)",
            }}
          >
            RestroKhata
          </span>
        </div>
        {/* Desktop nav */}
        <div
          className="hidden md:flex items-center gap-8 text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://restro-khata-com.vercel.app/register/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-5 py-2 rounded-full text-sm font-semibold hidden sm:inline-flex"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Start Free →
          </Link>
          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors"
            style={{
              background: open ? "rgba(255,107,0,0.12)" : "transparent",
            }}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 transition-all duration-300 rounded-full"
              style={{
                background: "var(--orange)",
                transform: open ? "translateY(8px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-5 h-0.5 rounded-full transition-all duration-300"
              style={{ background: "var(--orange)", opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 rounded-full transition-all duration-300"
              style={{
                background: "var(--orange)",
                transform: open ? "translateY(-8px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "320px" : "0",
          borderTop: open ? "1px solid rgba(255,107,0,0.1)" : "none",
        }}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 px-4 rounded-xl text-sm font-medium transition-colors hover:bg-orange-950"
              style={{ color: "var(--text-secondary)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://restro-khata-com.vercel.app/register/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2 py-3 px-4 rounded-xl text-sm font-bold text-center"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Start Free — 3 Months →
          </Link>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden grid-bg">
      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,0,0.13) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Floating 3D cards — desktop only */}
      <div
        className="absolute left-4 top-1/3 hidden lg:block animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <div
          className="rounded-2xl p-4 text-left w-52"
          style={{
            background: "var(--dark-3)",
            border: "1px solid rgba(255,107,0,0.25)",
            boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
          }}
        >
          <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>
            🟢 Live Orders
          </div>
          <div
            className="text-3xl font-bold"
            style={{ color: "var(--orange)", fontFamily: "var(--font-syne)" }}
          >
            24
          </div>
          <div
            className="text-xs mt-1 mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            Active right now
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-1.5 flex-1 rounded-full"
                style={{
                  background: i <= 4 ? "var(--orange)" : "var(--dark-4)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute right-4 top-1/3 hidden lg:block animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <div
          className="rounded-2xl p-4 text-left w-52"
          style={{
            background: "var(--dark-3)",
            border: "1px solid rgba(255,215,0,0.25)",
            boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
          }}
        >
          <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>
            📈 Today&apos;s Revenue
          </div>
          <div
            className="text-3xl font-bold"
            style={{ color: "var(--yellow)", fontFamily: "var(--font-syne)" }}
          >
            ₹18,240
          </div>
          <div className="text-xs mt-1" style={{ color: "#4CAF50" }}>
            ↑ 23% vs yesterday
          </div>
          <div
            className="mt-3 text-xs px-2 py-1 rounded-lg inline-block"
            style={{ background: "rgba(76,175,80,0.12)", color: "#4CAF50" }}
          >
            On track 🎯
          </div>
        </div>
      </div>
      <div
        className="absolute left-6 bottom-1/4 hidden xl:block animate-float"
        style={{ animationDelay: "0.8s" }}
      >
        <div
          className="rounded-2xl p-4 text-left w-48"
          style={{
            background: "var(--dark-3)",
            border: "1px solid rgba(255,107,0,0.15)",
            boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-2 h-2 rounded-full animate-pulse-glow"
              style={{ background: "#4CAF50" }}
            />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              Table 7 — Kitchen
            </span>
          </div>
          <div
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Paneer Tikka ✅
          </div>
          <div className="text-xs mt-1" style={{ color: "#4CAF50" }}>
            Served in 8 min
          </div>
        </div>
      </div>
      <div
        className="absolute right-6 bottom-1/3 hidden xl:block animate-float"
        style={{ animationDelay: "1.8s" }}
      >
        <div
          className="rounded-2xl p-4 text-left w-48"
          style={{
            background: "var(--dark-3)",
            border: "1px solid rgba(255,215,0,0.15)",
            boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
          }}
        >
          <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>
            📲 WhatsApp Bill
          </div>
          <div
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Table 3 — Sent!
          </div>
          <div className="text-xs mt-1" style={{ color: "var(--yellow)" }}>
            ₹640 · 4 items
          </div>
        </div>
      </div>

      {/* Early Bird Alert Badge */}
      <div className="animate-fade-in-up mb-3">
        <a
          href="#early-bird"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105"
          style={{
            background: "rgba(255,50,50,0.15)",
            border: "1px solid rgba(255,80,80,0.4)",
            color: "#FF6B6B",
          }}
        >
          <span className="animate-pulse-glow">🔥</span> Early Bird Offer —
          Limited 20 Spots! <span>→</span>
        </a>
      </div>

      {/* Main Badge */}
      {/* <div className="badge-orange animate-fade-in-up mb-6">
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse-glow"
          style={{ background: "var(--orange)" }}
        />
        India&apos;s #1 Restaurant Management SaaS
      </div> */}

      {/* Headline */}
      {/* <h1
        className="animate-fade-in-up delay-100 max-w-4xl leading-tight"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
          fontWeight: 800,
        }}
      >
        Apne Dhabe ka <span className="shimmer-text">Boss Ban Ja</span>
        <br />
        <span
          style={{
            fontSize: "clamp(1.6rem, 4vw, 3.2rem)",
            color: "var(--orange)",
          }}
        >
          Orders. Kitchen. Profit. Sab Ek Jagah.
        </span>
      </h1> */}
      <h1
        className="animate-fade-in-up delay-100 max-w-4xl leading-tight"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.8rem)",
          fontWeight: 800,
        }}
      >
        Apne Restaurant ko <span className="shimmer-text">Smart Banaao</span>
        <br />
        <span
          style={{
            fontSize: "clamp(1.4rem, 3.5vw, 2.6rem)",
            color: "var(--orange)",
          }}
        >
          Orders. Billing. Kitchen. Sab Ek System Mein.
        </span>
      </h1>
      <p
        className="animate-fade-in-up delay-200 mt-6 max-w-2xl leading-relaxed"
        style={{
          color: "var(--text-secondary)",
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
        }}
      >
        Chahe aapka cafe ho, family restaurant ho ya dhaba — RestroKhata aapke
        daily operations ko simple aur fast bana deta hai. Staff management,
        live order tracking, QR menu, WhatsApp billing aur complete business
        analytics — sab ek hi jagah.
        <br />
        <strong style={{ color: "var(--text-primary)" }}>
          Use karna easy hai, bina kisi technical knowledge ke.
        </strong>
      </p>

      {/* CTA Buttons */}
      <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center mt-10 w-full max-w-md mx-auto sm:max-w-none">
        <Link
          href="https://restro-khata-com.vercel.app/register/"
          className="btn-primary flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}
        >
          Abhi Start Karo — 3 Months Free <IconArrow />
        </Link>
        <a
          href="https://wa.me/919131695767?text=Hi%2C%20I%20want%20to%20know%20more%20about%20RestroKhata"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold"
        >
          <IconWhatsApp /> Chat on WhatsApp
        </a>
      </div>

      {/* Feature pills on mobile */}
      <div className="animate-fade-in-up delay-400 mt-8 flex flex-wrap gap-3 justify-center">
        {[
          { icon: "✅", text: "No card needed" },
          { icon: "⚡", text: "Setup in 5 min" },
          { icon: "☁️", text: "100% Cloud" },
          { icon: "🔒", text: "Data secure" },
          { icon: "🔄", text: "7-day refund" },
        ].map((t) => (
          <span
            key={t.text}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "rgba(255,107,0,0.08)",
              border: "1px solid rgba(255,107,0,0.15)",
              color: "var(--text-secondary)",
            }}
          >
            {t.icon} {t.text}
          </span>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
        style={{ animationDelay: "0s" }}
      >
        <div className="text-xs" style={{ color: "var(--text-muted)" }}>
          Scroll to explore
        </div>
        <div
          className="w-0.5 h-8 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, var(--orange), transparent)",
          }}
        />
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "500+", label: "Restaurants Onboard" },
    { value: "1L+", label: "Orders Processed" },
    { value: "4.9★", label: "Average Rating" },
    { value: "3 Min", label: "Setup Time" },
  ];
  return (
    <section
      className="py-12 px-4"
      style={{
        background: "var(--dark-2)",
        borderTop: "1px solid var(--dark-border)",
        borderBottom: "1px solid var(--dark-border)",
      }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-syne)", color: "var(--orange)" }}
            >
              {s.value}
            </div>
            <div
              className="text-sm mt-1"
              style={{ color: "var(--text-secondary)" }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">
            Built for Growing Cafes & Restaurants
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Everything You Need to{" "}
            <span style={{ color: "var(--orange)" }}>
              Run Your Cafe Smoothly
            </span>
          </h2>

          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Manage orders, tables, and billing effortlessly — whether you run a
            small café or a busy restaurant.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-hover rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "var(--dark-2)",
                border: "1px solid var(--dark-border)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(255,107,0,0.06), transparent)",
                }}
              />
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(255,107,0,0.12)",
                    color: "var(--orange)",
                  }}
                >
                  {f.icon}
                </div>
                <span
                  className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(255,215,0,0.1)",
                    color: "var(--yellow)",
                    border: "1px solid rgba(255,215,0,0.2)",
                  }}
                >
                  {f.tag}
                </span>
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleShowcase() {
  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: "var(--dark-2)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">Role-Based Access</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Right Screen for{" "}
            <span style={{ color: "var(--orange)" }}>Every Person</span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Every staff member sees exactly what they need — nothing more,
            nothing less.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              role: "Waiter",
              icon: <IconOrder />,
              color: "var(--orange)",
              glow: "rgba(255,107,0,0.2)",
              items: [
                "Take orders from tables",
                "Mark items as served",
                "Request bill for table",
                "View table status",
              ],
            },
            {
              role: "Kitchen",
              icon: <IconKitchen />,
              color: "var(--yellow)",
              glow: "rgba(255,215,0,0.2)",
              items: [
                "See incoming orders live",
                "Mark items as prepared",
                "Priority queue view",
                "No billing access",
              ],
            },
            {
              role: "Manager / Owner",
              icon: <IconChart />,
              color: "#4CAF50",
              glow: "rgba(76,175,80,0.2)",
              items: [
                "Full live order dashboard",
                "Revenue & profit tracking",
                "Staff management",
                "Invoice history & exports",
              ],
            },
          ].map((r) => (
            <div
              key={r.role}
              className="rounded-2xl p-6 card-hover"
              style={{
                background: "var(--dark-3)",
                border: `1px solid ${r.glow}`,
                boxShadow: `0 0 40px ${r.glow}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${r.glow}`, color: r.color }}
              >
                {r.icon}
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "var(--font-syne)", color: r.color }}
              >
                {r.role}
              </h3>
              <ul className="space-y-2">
                {r.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span style={{ color: r.color }}>
                      <IconCheck />
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">Simple Setup</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Live in <span style={{ color: "var(--orange)" }}>5 Minutes</span>
          </h2>
        </div>
        <div className="relative">
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, var(--orange), var(--yellow), transparent)",
            }}
          />
          <div className="space-y-12">
            {howItWorks.map((step, i) => (
              <div
                key={step.step}
                className={`relative flex gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm relative z-10"
                  style={{
                    background: "var(--dark)",
                    border: "2px solid var(--orange)",
                    color: "var(--orange)",
                    fontFamily: "var(--font-syne)",
                    boxShadow: "0 0 20px rgba(255,107,0,0.3)",
                  }}
                >
                  {step.step}
                </div>
                <div
                  className="rounded-2xl p-6 flex-1 card-hover"
                  style={{
                    background: "var(--dark-2)",
                    border: "1px solid var(--dark-border)",
                  }}
                >
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [yearly, setYearly] = useState(false);
  return (
    <section
      id="pricing"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: "var(--dark-2)" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--orange), transparent)",
        }}
      />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-tag mb-3">Pricing Plans</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Simple,{" "}
            <span style={{ color: "var(--orange)" }}>Honest Pricing</span>
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>
            Start free for 3 months. No hidden charges. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span
              className="text-sm font-medium"
              style={{
                color: yearly ? "var(--text-muted)" : "var(--text-primary)",
              }}
            >
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative w-14 h-7 rounded-full transition-all duration-300"
              style={{
                background: yearly ? "var(--orange)" : "var(--dark-4)",
                border: "1px solid rgba(255,107,0,0.3)",
              }}
            >
              <span
                className="absolute top-1 w-5 h-5 rounded-full bg-white transition-all duration-300"
                style={{
                  left: yearly ? "calc(100% - 24px)" : "4px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
                }}
              />
            </button>
            <span
              className="text-sm font-medium flex items-center gap-2"
              style={{
                color: yearly ? "var(--text-primary)" : "var(--text-muted)",
              }}
            >
              Yearly
              {yearly && (
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{
                    background: "rgba(76,175,80,0.15)",
                    color: "#4CAF50",
                    border: "1px solid rgba(76,175,80,0.3)",
                  }}
                >
                  30% OFF 🎉
                </span>
              )}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const displayPrice = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            const originalPrice =
              yearly && plan.name !== "Shuruat" ? plan.monthlyPrice : null;
            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 relative overflow-hidden card-hover ${plan.highlight ? "md:-mt-4" : ""}`}
                style={{
                  background: plan.highlight
                    ? "linear-gradient(135deg, var(--dark-3), var(--dark-4))"
                    : "var(--dark-3)",
                  border: plan.highlight
                    ? "1px solid rgba(255,215,0,0.4)"
                    : "1px solid var(--dark-border)",
                  boxShadow: plan.highlight
                    ? "0 0 60px rgba(255,215,0,0.15), 0 20px 60px rgba(0,0,0,0.4)"
                    : "none",
                }}
              >
                {plan.highlight && (
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, var(--yellow), transparent)",
                    }}
                  />
                )}
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                  style={{
                    background: plan.highlight
                      ? "rgba(255,215,0,0.15)"
                      : "rgba(255,107,0,0.1)",
                    color: plan.highlight ? "var(--yellow)" : "var(--orange)",
                    border: `1px solid ${plan.highlight ? "rgba(255,215,0,0.3)" : "rgba(255,107,0,0.2)"}`,
                  }}
                >
                  {plan.badge}
                </div>
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  {originalPrice && (
                    <span
                      className="text-lg line-through"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {originalPrice}
                    </span>
                  )}
                  <span
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "var(--font-syne)",
                      color: plan.highlight ? "var(--yellow)" : "var(--orange)",
                    }}
                  >
                    {displayPrice}
                  </span>
                </div>
                <p
                  className="text-sm mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {plan.name === "Shuruat"
                    ? plan.duration
                    : yearly
                      ? `per month · ${plan.yearlyTotal ?? ""}`
                      : plan.duration}
                </p>
                {yearly && plan.yearlyTotal && (
                  <p
                    className="text-xs mb-4 font-medium"
                    style={{ color: "#4CAF50" }}
                  >
                    Billed yearly · Save 30%
                  </p>
                )}
                <ul className="space-y-3 mb-8 mt-4">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="mt-0.5 flex-shrink-0"
                        style={{
                          color: plan.highlight
                            ? "var(--yellow)"
                            : "var(--orange)",
                        }}
                      >
                        <IconCheck />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://wa.me/919131695767?text=Hi%2C%20I%20want%20to%20register%20for%20RestroKhata"
                  className={`w-full flex justify-center items-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${plan.highlight ? "btn-primary" : "btn-outline"}`}
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Get Started <IconArrow />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Refund policy */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-center"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="flex items-center gap-2">
            <span style={{ color: "var(--orange)" }}>
              <IconShield />
            </span>
            <strong style={{ color: "var(--text-secondary)" }}>
              7-Day Money-Back Guarantee
            </strong>
          </span>
          <span
            className="hidden sm:inline"
            style={{ color: "var(--dark-border)" }}
          >
            ·
          </span>
          <span>
            Not satisfied? Full refund within 7 days of purchase. No questions
            asked.
          </span>
        </div>
      </div>
    </section>
  );
}

function EarlyBirdOffer() {
  return (
    <section id="early-bird" className="py-16 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,50,50,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Banner card */}
        <div
          className="rounded-3xl p-8 md:p-10 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,50,50,0.12), rgba(255,107,0,0.10), rgba(255,215,0,0.06))",
            border: "1px solid rgba(255,80,80,0.35)",
            boxShadow:
              "0 0 60px rgba(255,50,50,0.12), 0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          {/* Animated top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{
              background:
                "linear-gradient(90deg, transparent, #FF4444, var(--orange), var(--yellow), var(--orange), #FF4444, transparent)",
            }}
          />

          {/* Spots remaining pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
            style={{
              background: "rgba(255,50,50,0.2)",
              border: "1px solid rgba(255,80,80,0.4)",
              color: "#FF6B6B",
            }}
          >
            <span className="animate-pulse-glow">🔥</span> Only 20 Early Bird
            Spots Available!
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Rasoi Elite — 3 Saal ke liye sirf{" "}
            <span className="shimmer-text">₹3,000</span>
          </h2>
          <p
            className="text-lg mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Our{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              top-tier Rasoi Elite plan
            </strong>{" "}
            for 3 full years — one-time payment, no renewal charges.
          </p>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            ₹999/month ke jagah sirf ₹3,000 ek baar. That&apos;s like getting 33
            months FREE. 🤯
          </p>

          {/* Value comparison */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div
              className="rounded-2xl px-6 py-4 text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="text-xs mb-1"
                style={{ color: "var(--text-muted)" }}
              >
                Regular Price
              </div>
              <div
                className="text-2xl font-bold line-through"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-syne)",
                }}
              >
                ₹35,964
              </div>
              <div
                className="text-xs mt-1"
                style={{ color: "var(--text-muted)" }}
              >
                ₹999 × 36 months
              </div>
            </div>
            <div
              className="text-2xl font-bold"
              style={{ color: "var(--orange)" }}
            >
              →
            </div>
            <div
              className="rounded-2xl px-6 py-4 text-center"
              style={{
                background: "rgba(255,50,50,0.12)",
                border: "1px solid rgba(255,80,80,0.3)",
              }}
            >
              <div
                className="text-xs mb-1 font-bold"
                style={{ color: "#FF6B6B" }}
              >
                Early Bird Price
              </div>
              <div
                className="text-2xl font-bold"
                style={{
                  color: "var(--yellow)",
                  fontFamily: "var(--font-syne)",
                }}
              >
                ₹3,000
              </div>
              <div
                className="text-xs mt-1 font-bold"
                style={{ color: "#4CAF50" }}
              >
                Save ₹32,964! 🎉
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/919131695767?text=Hi%2C%20I%20want%20to%20claim%20the%20Early%20Bird%20offer%20for%20RestroKhata"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold mb-4"
          >
            <IconWhatsApp /> Claim Early Bird — WhatsApp Karo
          </a>

          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            ✦ Sirf new subscribers ke liye &nbsp;·&nbsp; ✦ One-time payment
            &nbsp;·&nbsp; ✦ 3 saal koi renewal nahi &nbsp;·&nbsp; ✦ 7-day refund
            guarantee
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">Real Restaurants, Real Results</p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Owners{" "}
            <span style={{ color: "var(--orange)" }}>Love RestroKhata</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6 card-hover"
              style={{
                background: "var(--dark-2)",
                border: "1px solid var(--dark-border)",
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array(t.stars)
                  .fill(0)
                  .map((_, i) => (
                    <IconStar key={i} />
                  ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)", fontStyle: "italic" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div
                className="pt-4"
                style={{ borderTop: "1px solid var(--dark-border)" }}
              >
                <div
                  className="font-semibold text-sm"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {t.name}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareersSection() {
  return (
    <section
      id="careers"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: "var(--dark-2)" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="section-tag mb-3">We Are Hiring</p>

        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Join Our{" "}
          <span style={{ color: "var(--orange)" }}>Sales & Marketing Team</span>
        </h2>

        <p
          className="max-w-2xl mx-auto text-lg mb-10"
          style={{ color: "var(--text-secondary)" }}
        >
          We’re looking for energetic people who can connect with café and
          restaurant owners, explain our product, and help grow RestroKhata on
          the ground.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            {
              role: "Field Sales Executive",
              type: "Full-time / Field Work",
              desc: "Visit cafes & restaurants, demo the product, and onboard new customers.",
            },
            {
              role: "Marketing & Sales Associate",
              type: "Full-time / Hybrid",
              desc: "Handle lead generation, client follow-ups, and assist in sales growth.",
            },
          ].map((job) => (
            <div
              key={job.role}
              className="rounded-xl p-5 text-left card-hover"
              style={{
                background: "var(--dark-3)",
                border: "1px solid var(--dark-border)",
              }}
            >
              <div
                className="font-bold mb-1"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {job.role}
              </div>

              <div
                className="text-sm mb-2"
                style={{ color: "var(--text-muted)" }}
              >
                {job.type}
              </div>

              <p
                className="text-sm mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {job.desc}
              </p>

              <a
                href="mailto:udaydeangan17012000@gmail.com?subject=Application for Sales Role - RestroKhata"
                className="btn-primary inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Apply Now <IconArrow />
              </a>
            </div>
          ))}
        </div>

        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Interested in working with us? Send your resume at{" "}
          <a
            href="mailto:udaydeangan17012000@gmail.com"
            className="hover:underline"
            style={{ color: "var(--orange)" }}
          >
            udaydeangan17012000@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">Get In Touch</p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            We&apos;re Here to{" "}
            <span style={{ color: "var(--orange)" }}>Help You</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://wa.me/919131695767"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp rounded-2xl p-8 flex items-center gap-4 card-hover"
            style={{
              background: "rgba(37,211,102,0.08)",
              border: "1px solid rgba(37,211,102,0.2)",
            }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "#25D366", color: "white" }}
            >
              <IconWhatsApp />
            </div>
            <div>
              <div
                className="font-bold text-lg mb-1"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                WhatsApp Support
              </div>
              <div
                style={{
                  color: "#25D366",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                }}
              >
                +91 91316 95767
              </div>
              <div
                className="text-sm mt-1"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Mon–Sat · 9am–7pm
              </div>
            </div>
          </a>
          <a
            href="mailto:udaydeangan17012000@gmail.com"
            className="rounded-2xl p-8 flex items-center gap-4 card-hover"
            style={{
              background: "var(--dark-2)",
              border: "1px solid var(--dark-border)",
            }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(255,107,0,0.12)",
                color: "var(--orange)",
              }}
            >
              <IconMail />
            </div>
            <div>
              <div
                className="font-bold text-lg mb-1"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Email Support
              </div>
              <div
                style={{
                  color: "var(--orange)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  wordBreak: "break-all",
                }}
              >
                udaydeangan17012000@gmail.com
              </div>
              <div
                className="text-sm mt-1"
                style={{ color: "var(--text-muted)" }}
              >
                Reply within 24 hours
              </div>
            </div>
          </a>
        </div>
        {/* Security note */}
        <div
          className="mt-8 flex items-center justify-center gap-2 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          <span style={{ color: "var(--orange)" }}>
            <IconShield />
          </span>
          Your data is encrypted and stored securely. We never share your
          information with third parties.
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,107,0,0.15), rgba(255,215,0,0.08), rgba(255,107,0,0.05))",
        borderTop: "1px solid var(--dark-border)",
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Ready to Digitise Your{" "}
          <span className="shimmer-text">Restaurant?</span>
        </h2>
        <p className="text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
          Join hundreds of restaurants already running smarter with RestroKhata.
          3 months completely free — no card needed.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/919131695767?text=Hi%2C%20I%20want%20to%20register%20my%20restaurant%20on%20RestroKhata"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold"
          >
            <IconWhatsApp /> Register on WhatsApp
          </a>
          <a
            href="mailto:udaydeangan17012000@gmail.com?subject=RestroKhata Registration"
            className="btn-outline flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold"
          >
            <IconMail /> Email to Register
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-12 px-4"
      style={{
        background: "var(--dark)",
        borderTop: "1px solid var(--dark-border)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/icons/icon-circle-192x192.png"
                alt="RestroKhata"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span
                className="text-xl font-bold"
                style={{
                  fontFamily: "var(--font-syne)",
                  color: "var(--orange)",
                }}
              >
                RestroKhata
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              India&apos;s complete restaurant management platform. From orders
              to profits — built for every restaurant, cafe, and dhaba.
            </p>
            <div
              className="mt-4 flex gap-4 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="flex items-center gap-1">
                <IconPhone /> +91 91316 95767
              </span>
            </div>
          </div>
          <div>
            <div
              className="font-semibold mb-4 text-sm"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Product
            </div>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              {["Features", "How It Works", "Pricing", "Careers"].map((l) => (
                <li key={l}>
                  <Link
                    href={`#${l.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-white transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              className="font-semibold mb-4 text-sm"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Contact
            </div>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <li>
                <a
                  href="https://wa.me/919131695767"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:udaydeangan17012000@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  udaydeangan17012000@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{
            color: "var(--text-muted)",
            borderTop: "1px solid var(--dark-border)",
          }}
        >
          <p>© 2024 RestroKhata. All rights reserved. Made with ❤️ in India.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      {/* <StatsBar /> */}
      <FeaturesSection />
      <RoleShowcase />
      <HowItWorks />
      <PricingSection />
      <EarlyBirdOffer />
      {/* <Testimonials /> */}
      <CareersSection />
      <ContactSection />
      <CTABanner />
      <Footer />
    </main>
  );
}

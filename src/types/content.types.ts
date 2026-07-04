export interface HeroContent {
  eyebrow: string
  headline: string
  headlineItalic: string
  subline: string
  ctaPrimary: { label: string; href: string }
  ctaWhatsApp: { label: string; href: string }
  bgImage: string
}

export interface Stat {
  v: string
  l: string
}

export interface Benefit {
  n: string
  ic: string
  t: string
  d: string
}

export interface SimulatorConfig {
  monthlyRate: number
  montoMin: number
  montoMax: number
  montoStep: number
  montoDefault: number
  plazoMin: number
  plazoMax: number
  plazoStep: number
  plazoDefault: number
  quickAmounts: number[]
  waNumber: string
}

export interface Step {
  n: string
  t: string
  d: string
}

export interface Service {
  ic: string
  t: string
  d: string
}

export interface AboutContent {
  eyebrow: string
  headline: string
  body: string
  cta: { label: string; href: string }
  image: string
}

export interface Testimonial {
  i: string
  n: string
  q: string
}

export interface VideoItem {
  t: string
  poster: string
}

export interface ContactContent {
  eyebrow: string
  headline: string
  headlineItalic: string
  subtext: string
  phone: string
  telHref: string
  waNumber: string
  email: string
}

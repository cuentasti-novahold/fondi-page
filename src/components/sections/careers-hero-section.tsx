import { motion } from 'motion/react'
import { Eyebrow } from '@/components/ui'
import { slideInLeft, slideInRight } from '@/components/motion'

const VP = { once: true, amount: 0.2 } as const

export function CareersHeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={VP}>
        <Eyebrow>Únete al equipo Fondi</Eyebrow>
        <h1
          className="font-sans font-semibold mt-[14px] text-brand-900"
          style={{
            fontSize: 'clamp(26px, 6vw, 34px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.12,
            textWrap: 'balance',
            margin: '14px 0 18px',
          }}
        >
          Únete al equipo <span className="font-serif italic font-medium">Fondi</span>.
        </h1>
        <p className="text-base leading-[1.65] text-neutral-600" style={{ maxWidth: '420px' }}>
          Súmate a una empresa que cada día ayuda a más personas a acceder al respaldo financiero
          que necesitan. Buscamos personas comprometidas, con actitud de servicio y ganas de crecer
          junto a nosotros.
        </p>
      </motion.div>

      <motion.div
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={VP}
        className="relative rounded-xl overflow-hidden bg-neutral-200 aspect-[4/3] md:aspect-auto md:min-h-[300px]"
      >
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=70"
          alt="Equipo Fondi trabajando"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.88) contrast(1.02)' }}
          loading="lazy"
        />
      </motion.div>
    </div>
  )
}

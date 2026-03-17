import { motion } from 'framer-motion'
import { Phone, ArrowDown, ShieldCheck, Clock, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section id="anasayfa" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-20 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/10"
          >
            <ShieldCheck size={16} />
            Profesyonel Sağlık Hizmetleri
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Mert Sağlık
            <br />
            <span className="bg-gradient-to-r from-primary-300 to-emerald-300 bg-clip-text text-transparent">
              Kabini
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-100/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Sağlığınıza önem veriyoruz. Deneyimli kadromuz ve hijyenik ortamımızla,
            size en kaliteli sağlık hizmetini sunmak için buradayız.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="tel:+905305649112"
              className="flex items-center gap-2 bg-white text-primary-800 px-8 py-4 rounded-2xl hover:bg-primary-50 transition-all shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 font-semibold text-lg group"
            >
              <Phone size={20} className="group-hover:rotate-12 transition-transform" />
              Randevu Al
            </a>
            <a
              href="#hizmetler"
              className="flex items-center gap-2 text-white border-2 border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all font-semibold text-lg backdrop-blur-sm"
            >
              Hizmetlerimiz
              <ArrowDown size={20} />
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto"
          >
            {[
              { icon: Users, label: 'Mutlu Hasta', value: '5000+' },
              { icon: Clock, label: 'Yıl Deneyim', value: '15+' },
              { icon: ShieldCheck, label: 'Hizmet', value: '12+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon size={24} className="text-primary-300 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-primary-200/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

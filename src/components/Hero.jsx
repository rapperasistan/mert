import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&h=800&fit=crop',
    alt: 'Evde sağlık hizmeti',
  },
  {
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1400&h=800&fit=crop',
    alt: 'Hasta bakımı',
  },
  {
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1400&h=800&fit=crop',
    alt: 'Sağlık personeli',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="anasayfa" className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary-950/60" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-primary-200 text-sm font-medium mb-4 tracking-wider uppercase">
              <span className="w-2 h-2 bg-primary-400 rounded-full" />
              Life Istanbul Evde Sağlık
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
              Life Istanbul Evde Sağlık
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Sağlık Evinizde.
            </p>

            {/* CTA Button */}
            <a
              href="#hizmetler"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-7 py-3.5 rounded-lg transition-all font-medium text-sm group"
            >
              Hizmetlerimizi İnceleyin
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? 'bg-primary-500 w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

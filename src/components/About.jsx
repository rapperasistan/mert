import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Award, Heart, Sparkles } from 'lucide-react'

const highlights = [
  'Steril ve hijyenik ortam',
  'Deneyimli sağlık personeli',
  'Modern tıbbi ekipman',
  'Uygun fiyatlı hizmet',
  'Randevusuz kabul',
  'Hızlı ve güvenilir sonuç',
]

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="hakkimizda" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <AnimatedSection>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl h-48 flex items-center justify-center">
                    <Heart size={64} className="text-primary-600" />
                  </div>
                  <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl h-32 flex items-center justify-center">
                    <Award size={48} className="text-emerald-600" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl h-32 flex items-center justify-center">
                    <Sparkles size={48} className="text-sky-600" />
                  </div>
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl h-48 flex items-center justify-center p-6">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold">15+</div>
                      <div className="text-primary-100 text-sm mt-1">Yıllık Deneyim</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">5000+</div>
                    <div className="text-gray-500 text-xs">Mutlu Hasta</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <AnimatedSection delay={0.2}>
            <div>
              <span className="text-primary-600 font-semibold text-sm tracking-wider uppercase">
                Hakkımızda
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
                Sağlığınız Bizim İçin
                <br />
                <span className="text-primary-600">Önceliğimiz</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Mert Sağlık Kabini olarak, Bahçeşehir bölgesinde yılların deneyimiyle
                hizmet vermekteyiz. Uzman sağlık personelimiz ve modern ekipmanlarımızla,
                hastalarımıza en kaliteli sağlık hizmetini sunmayı hedefliyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Enjeksiyondan pansumana, kan almadan tansiyon ölçümüne kadar geniş bir
                yelpazede hizmet sunuyoruz. Hastalarımızın memnuniyeti ve güvenliği her
                zaman önceliğimizdir.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

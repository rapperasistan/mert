import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye } from 'lucide-react'

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
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <AnimatedSection>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=700&h=900&fit=crop"
                alt="Evde hasta bakımı"
                className="w-full h-[500px] md:h-[600px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <AnimatedSection delay={0.2}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                <span className="text-primary-700 font-semibold text-sm tracking-wider uppercase">
                  Life Istanbul Evde Sağlık
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hakkımızda
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8">
                Life Istanbul Evde Sağlık olarak temel misyonumuz; hastane kalitesindeki
                profesyonel sağlık hizmetleri, sevdiklerimizin huzurlu ev ortamına
                taşımaktır. Alanında uzman, tecrübeli ve empatik sağlık sağlık
                kadromuzla, her hastanın bireysel ihtiyaçlarına özel, sevgi ve
                şefkat odaklı çözümler sunuyoruz. Amacımız, yara bakımından
                kronik hasta takibine kadar geniş bir yelpazede, güvenilir, etik ve
                yüksek standartlı bir bakım sunarak hastalarımızın ve ailelerinin
                yaşam kalitesini artırmak, onlara evde iyileşmenin konforunu ve
                güvenini sağlamaktır.
              </p>

              {/* Misyonumuz */}
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Misyonumuz</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Life Istanbul Evde Sağlık olarak, uzman kadromuzla hastane kalitesinde,
                    etik ve güvenilir sağlık hizmeti ev ortamına taşıyoruz. Her hastanın
                    bireysel ihtiyaçlarına şefkat ve profesyonellikle yaklaşarak, yaşam
                    kalitesini artırmayı ve evde iyileşmenin konforunu sağlamayı
                    amaçlıyoruz.
                  </p>
                </div>
              </div>

              {/* Vizyonumuz */}
              <div className="flex gap-4 mb-8">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Vizyonumuz</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Evde sağlık hizmetlerinde yenilikçi, güvenilir ve lider kuruluş olarak;
                    hasta ve ailesine değer katan, kaliteli bakım standartlarını sürekli
                    geliştiren, sektörünce öncü ve tercih edilen marka olmayı
                    hedefliyoruz.
                  </p>
                </div>
              </div>

              {/* Button */}
              <a
                href="#hizmetler"
                className="inline-block bg-primary-900 hover:bg-primary-800 text-white px-8 py-3 rounded-lg transition-colors font-medium text-sm"
              >
                Daha Fazla
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

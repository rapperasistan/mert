import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Scissors, Cable, HeartPulse, Syringe, Droplets, Bandage, Sparkles, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Evde Dikiş Alma Ve Atma',
    description: 'Evde Dikiş Alma ve atma işlemi profesyonel sağlık personeli tarafından hijyenik koşullarda gerçekleştirilir.',
  },
  {
    icon: Cable,
    title: 'Evde Sonda Değişimi',
    description: 'Evde Sonda Değişimi işlemi hijyenik koşullarda güvenilir şekilde yapılır.',
  },
  {
    icon: HeartPulse,
    title: 'Hasta Bakım Hizmeti',
    description: 'Hasta Bakım Hizmeti ile sevdiklerinizi emin ellerde.',
  },
  {
    icon: Sparkles,
    title: 'Glutatyon Vitamin Tedavisi',
    description: 'Glutatyon Vitamin Tedavisi ile bağışıklığınızı güçlendirin, enerjinize enerji katın.',
  },
  {
    icon: Droplets,
    title: 'Evde Serum Hizmetleri',
    description: 'Evde Serum Hizmetleri ile hastane konforunu evinize getiriyoruz.',
  },
  {
    icon: Bandage,
    title: 'Evde Pansuman',
    description: 'Evde Pansuman hizmetlerimizle yaralarınıza güvenle tedavi edilir.',
  },
  {
    icon: Syringe,
    title: 'Evde Enjeksiyon Hizmeti',
    description: 'Evde Enjeksiyon Hizmeti ile reçeteli iğneleriniz uzman sağlık personelimiz tarafından steril ve güvenli şekilde uygulanır.',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary-100 transition-all duration-300 group"
    >
      <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
        <service.icon size={26} className="text-primary-600" />
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-2">
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
            <span className="text-primary-700 font-semibold text-sm tracking-wider uppercase">
              Life Istanbul Evde Sağlık
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Neler Yapıyoruz?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Life Istanbul Evde Sağlık olarak, hastane kalitesindeki tüm bakım ve tedavi hizmetlerini,
            hastalarımızın kendi evlerinin huzur ve güven ortamına taşıyoruz.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#hizmetler"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-primary-700 font-medium text-sm transition-colors group"
          >
            Tüm Hizmetlerimizi Görüntüle
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

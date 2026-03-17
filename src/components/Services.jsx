import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { services } from '../data/services'
import { ArrowRight } from 'lucide-react'

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 cursor-pointer"
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-5 group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-300">
        <service.icon
          size={26}
          className="text-primary-600 group-hover:text-white transition-colors duration-300"
        />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {service.description}
      </p>

      {/* Link */}
      <div className="flex items-center gap-1 text-primary-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Detaylı Bilgi
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-50 to-transparent rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold text-sm tracking-wider uppercase"
          >
            Hizmetlerimiz
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4"
          >
            Sunduğumuz Sağlık Hizmetleri
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Geniş hizmet yelpazemizle sağlık ihtiyaçlarınıza profesyonel çözümler sunuyoruz.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

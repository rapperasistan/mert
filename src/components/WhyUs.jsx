import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Clock, Users, Banknote } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Hijyenik Ortam',
    description: 'Tüm işlemlerimiz uluslararası standartlarda sterilize edilmiş ortamlarda, tek kullanımlık malzemelerle gerçekleştirilir.',
    color: 'from-teal-500 to-emerald-500',
    bgColor: 'bg-teal-50',
  },
  {
    icon: Clock,
    title: '7/24 Ulaşılabilir',
    description: 'Acil sağlık ihtiyaçlarınız için gece gündüz demeden bize ulaşabilirsiniz. Telefonla randevu imkanı.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Users,
    title: 'Uzman Kadro',
    description: 'Deneyimli hemşire ve sağlık teknisyenlerimiz, alanında sertifikalı profesyonellerden oluşmaktadır.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Banknote,
    title: 'Uygun Fiyat',
    description: 'Kaliteli sağlık hizmetini herkesin erişebileceği uygun fiyatlarla sunuyor, şeffaf fiyatlandırma politikası uyguluyoruz.',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center group"
    >
      <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
          <feature.icon size={24} className="text-white" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-500 leading-relaxed text-sm max-w-xs mx-auto">{feature.description}</p>
    </motion.div>
  )
}

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold text-sm tracking-wider uppercase"
          >
            Neden Biz?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4"
          >
            Neden Bizi Tercih Etmelisiniz?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Sağlık hizmetlerinde güven, kalite ve profesyonelliği bir arada sunuyoruz.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] " />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Sağlığınız İçin Hemen Arayın
            </h3>
            <p className="text-primary-100 mb-8 max-w-lg mx-auto">
              Randevu almak veya bilgi almak için bizi arayabilirsiniz.
              Uzman ekibimiz size yardımcı olmak için hazır.
            </p>
            <a
              href="tel:+905305649112"
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary-50 transition-colors shadow-xl"
            >
              +90 530 564 91 12
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

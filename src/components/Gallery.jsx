import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    alt: 'Sağlık ekipmanları',
  },
  {
    url: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=500&fit=crop',
    alt: 'Modern tıbbi ortam',
  },
  {
    url: 'https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=800&h=500&fit=crop',
    alt: 'Sağlık hizmetleri',
  },
  {
    url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=500&fit=crop',
    alt: 'Doktor muayene',
  },
  {
    url: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=500&fit=crop',
    alt: 'Tıbbi laboratuvar',
  },
  {
    url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=500&fit=crop',
    alt: 'Hastane ortamı',
  },
]

export default function Gallery() {
  return (
    <section id="galeri" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold text-sm tracking-wider uppercase"
          >
            Galeri
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4"
          >
            Mekanımızdan Kareler
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Modern ve hijyenik ortamımızı keşfedin.
          </motion.p>
        </div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-[4/3]">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Alper A.',
    text: '"Annemin düzenli iğne ve serum takılı için Life Istanbul Evde Sağlık ile anlaştık. Gelen hemşire o kadar titiz ve güler yüzlüydü ki, annem hastaneye gitmek zorunda olmadığı için çok rahatladı. Dakiklilikler ve hijyen konusundaki hassasiyetleri için hepsine teşekkür ediyorum."',
    rating: 5,
    avatar: 'A',
  },
  {
    name: 'Cihat G.',
    text: '"Babamın sonda değişimini artık bir çileteyi, Life Istanbul Evde Sağlık\'ı çağırdıktan sonra hem işlem çok daha hızlı ve steril yapıldı, hem de babam evinde olduğu için kendini çok daha rahat hissetti. Güvenle tavsiye ediyorum."',
    rating: 5,
    avatar: 'C',
  },
  {
    name: 'Giman Ö.',
    text: '"Eşimin hastane bakım hemşire hizmeti aldığınız. Gelen personelimiz, emreinin sadece kapsamı değil, kalpleri belirlediği büyük bir şefkatle baktı. Artık hem eşimin bakımı hem de benim huzurum için bu hizmete gönül rahatlığıyla güveniyorum."',
    rating: 5,
    avatar: 'G',
  },
]

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary-700 font-semibold text-sm tracking-wider uppercase">
                #MEDİEVDESAĞLIK
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Müşteri Görüşleri
            </h2>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0 max-w-md text-right">
            Bizi Tercih Eden Bazı Müşterilerimizin Görüşleri
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl p-6 ${
                i === 1
                  ? 'bg-primary-900 text-white shadow-xl scale-105'
                  : 'bg-gray-50'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className={i === 1 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-500 fill-yellow-500'}
                  />
                ))}
              </div>

              {/* Text */}
              <p className={`text-sm leading-relaxed mb-6 ${
                i === 1 ? 'text-gray-200' : 'text-gray-600'
              }`}>
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                  i === 1
                    ? 'bg-primary-700 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {testimonial.avatar}
                </div>
                <span className={`font-medium text-sm ${
                  i === 1 ? 'text-white' : 'text-gray-900'
                }`}>
                  {testimonial.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentPage ? 'bg-primary-600 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

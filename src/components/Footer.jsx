import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer id="iletisim" className="bg-primary-950 text-gray-300">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Life Istanbul Evde Sağlık &copy;
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-white font-bold text-sm uppercase tracking-wide">
                Life Istanbul Evde Sağlık
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Life Istanbul Evde Sağlık: Evde Sağlık Hizmetleri - İstanbul
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Hızlı Erişim</h4>
            <ul className="space-y-3">
              {['Hakkımızda', 'Hizmetler', 'Blog', 'İletişim'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g')}`}
                    className="text-gray-400 hover:text-primary-300 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:lifeistanbulevdesaglikk@gmail.com" className="text-gray-400 hover:text-primary-300 transition-colors text-sm">
                  lifeistanbulevdesaglikk@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+905319296216" className="text-gray-400 hover:text-primary-300 transition-colors text-sm">
                  0531 929 62 16
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">İstanbul / İstanbul</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-2">Kampanya Ve Fırsatlardan Haber Alın.</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setEmail('')
              }}
              className="mt-4"
            >
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-primary-900 border border-gray-700 text-white text-sm px-4 py-2.5 rounded-l-lg focus:outline-none focus:border-primary-500 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="bg-primary-900 border border-l-0 border-gray-700 px-3 rounded-r-lg hover:bg-primary-800 transition-colors"
                >
                  <ArrowRight size={16} className="text-gray-400" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-gray-500 text-sm text-center">
            &copy; 2024 Life Istanbul Evde Sağlık. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

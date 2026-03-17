import { Phone, MapPin, Mail, Instagram, ArrowUp } from 'lucide-react'
import { services } from '../data/services'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">Mert</h3>
                <p className="text-primary-400 text-xs font-medium tracking-wider uppercase">Sağlık Kabini</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Bahçeşehir bölgesinde profesyonel ve güvenilir sağlık hizmetleri sunuyoruz.
              Sağlığınız bizim önceliğimizdir.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {['Anasayfa', 'Hakkımızda', 'Hizmetler', 'Galeri', 'İletişim'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace('ı', 'i').replace('ö', 'o').replace('ü', 'u').replace('ş', 's').replace('ç', 'c').replace('ğ', 'g')}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#hizmetler" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Bahçeşehir 2. Kısım Mahallesi Aldemir Sokak Bahçekent Ticaret Merkezi No:13, Başakşehir/İstanbul
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+905305649112" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  +90 530 564 91 12
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:info@mertsaglikkabini.com" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  info@mertsaglikkabini.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Mert Sağlık Kabini. Tüm hakları saklıdır.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}

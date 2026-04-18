import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Hakkımızda', href: '#hakkimizda' },
  {
    label: 'Hizmetler',
    href: '#hizmetler',
    dropdown: [
      'Evde Dikiş Alma Ve Atma',
      'Evde Sonda Değişimi',
      'Hasta Bakım Hizmeti',
      'Glutatyon Vitamin Tedavisi',
      'Evde Serum Hizmetleri',
      'Evde Pansuman',
      'Evde Enjeksiyon Hizmeti',
    ],
  },
  { label: 'Blog', href: '#blog' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-white text-sm py-2.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <a href="tel:+905319296216" className="hover:text-primary-200 transition-colors">
                0531 929 62 16
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <a href="mailto:lifeistanbulevdesaglikk@gmail.com" className="hover:text-primary-200 transition-colors">
                lifeistanbulevdesaglikk@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>İstanbul</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo */}
            <a href="#anasayfa" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-sm font-bold text-primary-900 tracking-wide uppercase">
                Life Istanbul Evde Sağlık
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                  onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-primary-700 transition-all font-medium text-sm"
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown size={14} />}
                  </a>

                  {/* Dropdown */}
                  {link.dropdown && dropdownOpen && (
                    <div className="absolute top-full left-0 bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[220px] z-50">
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#hizmetler"
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-all font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 space-y-2 border-t border-gray-100 mt-2">
                  <a href="tel:+905319296216" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600">
                    <Phone size={14} /> 0531 929 62 16
                  </a>
                  <a href="mailto:lifeistanbulevdesaglikk@gmail.com" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600">
                    <Mail size={14} /> lifeistanbulevdesaglikk@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

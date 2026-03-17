import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'

// Fix leaflet default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const POSITION = [41.0648, 28.8015] // Bahçeşehir, Başakşehir

const contactInfo = [
  {
    icon: MapPin,
    label: 'Adres',
    value: 'Bahçeşehir 2. Kısım Mahallesi Aldemir Sokak Bahçekent Ticaret Merkezi No:13, Başakşehir/İstanbul',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '+90 530 564 91 12',
    href: 'tel:+905305649112',
  },
  {
    icon: Mail,
    label: 'E-posta',
    value: 'info@mertsaglikkabini.com',
    href: 'mailto:info@mertsaglikkabini.com',
  },
  {
    icon: Clock,
    label: 'Çalışma Saatleri',
    value: 'Pazartesi - Cumartesi: 08:00 - 22:00',
  },
]

export default function MapContact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Merhaba, ben ${formData.name}. ${formData.message} (Tel: ${formData.phone})`
    window.open(`https://wa.me/905305649112?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
    setFormData({ name: '', phone: '', message: '' })
  }

  return (
    <section id="iletisim" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold text-sm tracking-wider uppercase"
          >
            İletişim
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4"
          >
            Bize Ulaşın
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Sorularınız veya randevu talepleriniz için bizimle iletişime geçin.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map + Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <MapContainer
                center={POSITION}
                zoom={15}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={POSITION}>
                  <Popup>
                    <strong>Mert Sağlık Kabini</strong>
                    <br />
                    Bahçeşehir, Başakşehir/İstanbul
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                    <item.icon size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm text-gray-500">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mesaj Gönderin</h3>
              <p className="text-gray-500 text-sm mb-6">
                Formu doldurun, WhatsApp üzerinden size hızlıca dönüş yapalım.
              </p>

              <div className="space-y-4 flex-1">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-white"
                    placeholder="Adınızı girin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-white"
                    placeholder="0530 XXX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mesajınız
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-white resize-none"
                    placeholder="Hangi hizmet hakkında bilgi almak istiyorsunuz?"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 font-semibold text-lg"
              >
                <Send size={18} />
                WhatsApp ile Gönder
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

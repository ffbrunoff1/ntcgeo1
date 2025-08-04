import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Início', id: 'inicio' },
    { name: 'Sobre Nós', id: 'about' },
    { name: 'Produtos', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  const products = [
    'Manta Geotêxtil Padrão',
    'Geotêxtil Técnico',
    'Manta Reforçada',
    'Soluções Personalizadas'
  ]

  const contactInfo = [
    { icon: Phone, text: '(11) 5242-4280', link: 'tel:(11)5242-4280' },
    { icon: Phone, text: '(19) 98361-0020', link: 'https://wa.me/5519983610020' },
    { icon: Mail, text: 'contato@ntcbrasil.com.br', link: 'mailto:contato@ntcbrasil.com.br' },
    { icon: MapPin, text: 'Atendimento em Todo Brasil', link: null }
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-ntc-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754327596662_0.png"
                alt="NTCGeo"
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Especialistas em mantas geotêxteis para drenagem de rodovias. 
              Construindo o caminho para a seca ambiental com soluções 
              inovadoras e sustentáveis.
            </p>

            <div className="space-y-3">
              <p className="font-semibold text-white">
                🏆 Soluções inovadoras para drenagem que duram uma vida.
              </p>
              
              <p className="text-gray-300 text-sm">
                Atendimento especializado em todo território brasileiro 
                com qualidade e pontualidade garantidas.
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white">
              Links Rápidos
            </h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-ntc-red transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span>→</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <motion.a
              href="https://wa.me/5519983610020"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-primary px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Products */}
          <motion.div
            className="space-y-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white">
              Nossos Produtos
            </h3>
            
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-ntc-red transition-colors duration-300 text-left"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>

            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong>💡 Dica:</strong> Precisa de uma solução específica? 
                Entre em contato para consultoria técnica gratuita.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="space-y-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white">
              Contato
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon className="w-5 h-5 text-ntc-red mt-0.5 flex-shrink-0" />
                  <div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-300">{info.text}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-primary p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">
                📞 Atendimento Especializado
              </h4>
              <p className="text-sm text-white opacity-90">
                Segunda à Sexta<br />
                08:00h às 18:00h
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-800 py-6"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} NTCGeo. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Especialistas em mantas geotêxteis para drenagem de rodovias
              </p>
            </div>

            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-gray-400 text-sm">Criado com</span>
              <a
                href="https://papum.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-ntc-red hover:text-white transition-colors duration-300"
              >
                <span className="font-semibold">Papum</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
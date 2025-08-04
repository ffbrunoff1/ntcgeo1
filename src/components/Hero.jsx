import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, CheckCircle } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    { icon: Shield, text: 'Alta Durabilidade' },
    { icon: Zap, text: 'Eficiência Comprovada' },
    { icon: CheckCircle, text: 'Qualidade Garantida' }
  ]

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-ntc-red opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-ntc-red opacity-3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="space-y-6"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-ntc-black leading-tight">
                Construindo o{' '}
                <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">
                  Caminho
                </span>{' '}
                de forma inteligente
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Soluções inovadoras em mantas geotêxteis para drenagem de rodovias que 
                garantem eficiência, durabilidade e sustentabilidade em seus projetos.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              className="flex flex-wrap gap-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md"
                >
                  <feature.icon className="w-5 h-5 text-ntc-red" />
                  <span className="text-ntc-black font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary flex items-center space-x-2 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                onClick={scrollToServices}
                className="btn-secondary flex items-center space-x-2 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Nossos Produtos</span>
              </motion.button>
            </motion.div>


          </motion.div>

          {/* Image Grid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="space-y-4"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754327579358_ur5y26d0ps_manta-geotextil-7-1024x768.jpg"
                  alt="Manta Geotêxtil"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754327580638_hpg4rho3rr_geotextil-1-1024x768.jpg"
                  alt="Geotêxtil"
                  className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </motion.div>
              
              <motion.div
                className="space-y-4 mt-8"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754327584481_pq4r4e1s5ai_manta-geotextil-9-768x1024.jpg"
                  alt="Manta Geotêxtil"
                  className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754327585615_xkom4h0q0dc_manta-geotextil-3-1024x768.jpg"
                  alt="Manta Geotêxtil"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </motion.div>
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-ntc-black">+20 Anos</p>
                  <p className="text-sm text-gray-600">de Experiência</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
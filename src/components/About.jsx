import React from 'react'
import { motion } from 'framer-motion'
import { Target, Award, Users, Truck, CheckCircle, ArrowRight } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Especialização Focada',
      description: 'Dedicados exclusivamente a soluções em mantas geotêxteis para drenagem de rodovias'
    },
    {
      icon: Award,
      title: 'Qualidade Certificada',
      description: 'Produtos com certificação técnica e garantia de qualidade internacional'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados em engenharia civil e soluções geotécnicas'
    },
    {
      icon: Truck,
      title: 'Cobertura Nacional',
      description: 'Atendimento em todo território brasileiro com logística eficiente'
    }
  ]

  const benefits = [
    'Materiais de alta resistência e durabilidade',
    'Soluções customizadas para cada projeto',
    'Suporte técnico especializado',
    'Entrega rápida e pontual',
    'Preços competitivos no mercado',
    'Sustentabilidade e responsabilidade ambiental'
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-ntc-black mb-6">
            Líderes em{' '}
            <span className="text-gradient">Soluções Geotêxteis</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A NTCGeo é uma empresa especializada no desenvolvimento e fornecimento de 
            mantas geotêxteis de alta qualidade, focada em aplicações de drenagem 
            para rodovias e infraestrutura viária.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Content */}
          <motion.div
            className="space-y-8"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-ntc-black">
                Nossa Missão: Construir o Futuro da Infraestrutura
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Desenvolvemos soluções inovadoras em mantas geotêxteis que revolucionam 
                a construção de rodovias, garantindo drenagem eficiente, controle de 
                erosão e estabilização de solos com sustentabilidade e economia.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossos produtos são projetados para oferecer máxima durabilidade e 
                resistência, proporcionando segurança e eficiência em obras de 
                infraestrutura moderna em todo o Brasil.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-ntc-black">
                Por que escolher a NTCGeo:
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-ntc-red mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              className="btn-primary flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Conheça Nossos Produtos</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754327588631_68tmk6utz9r_ntcgeo-nt07-cliente-associacao-pro-construcao-empresarial-omega-sorocaba-2-1024x576.jpeg"
                alt="NTCGEO NT07 Projeto"
                className="w-full h-96 object-cover"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Projeto NTCGEO NT07</h4>
                  <p className="text-sm opacity-90">
                    Aplicação em obra da Associação Pró-Construção Empresarial Omega, Sorocaba
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-ntc-red opacity-10 rounded-full"></div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-secondary p-6 rounded-xl text-center group hover:shadow-xl transition-all duration-300"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="text-xl font-semibold text-ntc-black mb-3">
                {feature.title}
              </h4>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
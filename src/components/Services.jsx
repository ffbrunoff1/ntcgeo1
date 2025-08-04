import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Droplets, Mountain, Zap, ArrowRight, CheckCircle } from 'lucide-react'

export default function Services() {
  const products = [
    {
      id: 1,
      title: 'Manta Geotêxtil Padrão',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754327579358_ur5y26d0ps_manta-geotextil-7-1024x768.jpg',
      features: ['Alta resistência', 'Drenagem eficiente', 'Fácil instalação'],
      applications: ['Rodovias', 'Estradas rurais', 'Pátios industriais']
    },
    {
      id: 2,
      title: 'Geotêxtil Técnico',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754327580638_hpg4rho3rr_geotextil-1-1024x768.jpg',
      features: ['Separação de camadas', 'Filtração superior', 'Proteção contra erosão'],
      applications: ['Aterros', 'Contenções', 'Obras portuárias']
    },
    {
      id: 3,
      title: 'Manta Reforçada',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754327584481_pq4r4e1s5ai_manta-geotextil-9-768x1024.jpg',
      features: ['Máxima durabilidade', 'Resistência extrema', 'Longa vida útil'],
      applications: ['Obras pesadas', 'Mineração', 'Grandes projetos']
    },
    {
      id: 4,
      title: 'Solução Personalizada',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754327585615_xkom4h0q0dc_manta-geotextil-3-1024x768.jpg',
      features: ['Sob medida', 'Especificações técnicas', 'Consultoria inclusa'],
      applications: ['Projetos especiais', 'Obras complexas', 'Soluções únicas']
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Proteção e Separação',
      description: 'Evita a mistura entre diferentes tipos de solo, mantendo a integridade estrutural'
    },
    {
      icon: Droplets,
      title: 'Drenagem Eficiente',
      description: 'Permite a passagem de água enquanto retém partículas sólidas'
    },
    {
      icon: Mountain,
      title: 'Estabilização',
      description: 'Distribui cargas uniformemente, aumentando a capacidade de suporte'
    },
    {
      icon: Zap,
      title: 'Instalação Rápida',
      description: 'Facilidade de manuseio e aplicação reduz tempo de execução da obra'
    }
  ]

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-ntc-black mb-6">
            Nossas{' '}
            <span className="text-gradient">Mantas Geotêxteis</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            As mantas geotêxteis são soluções versáteis e eficientes para diversas aplicações 
            em engenharia civil e ambiental. Utilizadas principalmente para separação, 
            filtração, drenagem e proteção, essas mantas oferecem alta durabilidade e resistência.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 flex flex-col"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-ntc-black mb-4">
                  {product.title}
                </h3>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <h4 className="font-semibold text-ntc-black mb-2">Características:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-ntc-red flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-ntc-black mb-2">Aplicações:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={scrollToContact}
                  className="btn-primary w-full mt-6 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-ntc-black mb-4">
              Benefícios das Nossas Soluções
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ideais para projetos de controle de erosão, estabilização de solos e 
              construções de aterros, garantindo eficiência e segurança nas obras.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-ntc-black mb-3">
                  {benefit.title}
                </h4>
                
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Image Gallery */}
        <motion.div
          className="mt-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-ntc-black mb-4">
              Nossos Produtos em Aplicação
            </h3>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754327587363_s0gd3mh3qlb_manta-geotextil-4-768x1024.jpg"
              alt="Manta Geotêxtil Aplicação"
              className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            />
            <motion.img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754327589843_1n6wh1cvxyn_geotextil-front-506x372.jpg"
              alt="Geotêxtil Frontal"
              className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            />
            <motion.img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754327588631_68tmk6utz9r_ntcgeo-nt07-cliente-associacao-pro-construcao-empresarial-omega-sorocaba-2-1024x576.jpeg"
              alt="Projeto NTCGEO"
              className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-2 lg:col-span-1"
              whileHover={{ scale: 1.02 }}
            />
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-ntc-black mb-4">
            Precisa de uma Solução Personalizada?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas mantas geotêxteis 
            podem revolucionar seu projeto de drenagem!
          </p>
          
          <motion.button
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Falar com Especialista</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
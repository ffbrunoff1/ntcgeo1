import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: 'contato@ntcbrasil.com.br'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 5242-4280',
      link: 'tel:(11)5242-4280'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '(19) 98361-0020',
      link: 'https://wa.me/5519983610020'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@ntcbrasil.com.br',
      link: 'mailto:contato@ntcbrasil.com.br'
    },
    {
      icon: MapPin,
      title: 'Atendimento',
      content: 'Todo Brasil',
      link: null
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg - Sex: 8h às 18h',
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-ntc-black mb-6">
            Entre em{' '}
            <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pronto para revolucionar seu projeto com mantas geotêxteis de qualidade? 
            Nossa equipe especializada está aqui para ajudar você a encontrar a solução perfeita.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-ntc-black">
                Fale Conosco
              </h3>
              <p className="text-lg text-gray-600">
                Entre em contato conosco e descubra como nossas mantas geotêxteis 
                podem revolucionar seu projeto de drenagem! Oferecemos consultoria 
                técnica especializada e soluções sob medida.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gradient-secondary rounded-xl hover:shadow-md transition-all duration-300"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ntc-black">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-600 hover:text-ntc-red transition-colors duration-300"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <span className="text-gray-600">{info.content}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="bg-gradient-primary p-6 rounded-xl text-white"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-xl font-bold mb-2">
                🚀 Precisando de Urgência?
              </h4>
              <p className="mb-4 opacity-90">
                Fale diretamente com nossa equipe pelo WhatsApp para atendimento imediato.
              </p>
              <motion.a
                href="https://wa.me/5519983610020"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-ntc-red px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Chamar no WhatsApp</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gradient-secondary p-8 rounded-2xl"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-ntc-black mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-ntc-red focus:ring-2 focus:ring-ntc-red/20 outline-none transition-all duration-300"
                    placeholder="Digite seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-ntc-black mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-ntc-red focus:ring-2 focus:ring-ntc-red/20 outline-none transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-ntc-black mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-ntc-red focus:ring-2 focus:ring-ntc-red/20 outline-none transition-all duration-300 resize-none"
                    placeholder="Descreva seu projeto ou necessidade..."
                  />
                </div>
              </div>

              {/* Submit Status */}
              {submitStatus && (
                <motion.div
                  className={`flex items-center space-x-2 p-3 rounded-lg ${
                    submitStatus === 'success' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      <span>Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.</span>
                    </>
                  )}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
              </motion.button>

              <p className="text-sm text-gray-600 text-center">
                Ao enviar este formulário, você concorda em ser contatado por nossa equipe 
                para esclarecimentos sobre seu projeto.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Additional CTAs */}
        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl text-center">
            <h4 className="text-2xl font-bold text-ntc-black mb-4">
              📞 Orçamento por Telefone
            </h4>
            <p className="text-gray-600 mb-6">
              Prefere falar diretamente? Ligue agora e receba um atendimento personalizado.
            </p>
            <motion.a
              href="tel:(11)5242-4280"
              className="btn-secondary flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Ligar Agora</span>
            </motion.a>
          </div>

          <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl text-center">
            <h4 className="text-2xl font-bold text-ntc-black mb-4">
              ✉️ E-mail Direto
            </h4>
            <p className="text-gray-600 mb-6">
              Envie um e-mail detalhado sobre seu projeto e receba uma proposta técnica.
            </p>
            <motion.a
              href="mailto:contato@ntcbrasil.com.br"
              className="btn-secondary flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Enviar E-mail</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
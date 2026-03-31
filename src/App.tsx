import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Building2, ShieldCheck, Clock, Users, Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Diferenciais', href: '#diferenciais' },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen font-sans bg-paper text-ink-900 selection:bg-gold-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-end items-center">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold-500 ${isScrolled ? 'text-ink-800' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5511942889969"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all border ${isScrolled ? 'border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white' : 'border-white text-white hover:bg-white hover:text-ink-900'}`}
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-ink-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-ink-900 text-white pt-24 px-6 pb-12 flex flex-col"
          >
            <div className="flex flex-col gap-6 text-2xl font-serif">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-white/10 pb-4 hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5511942889969"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-4 bg-gold-500 text-white text-center text-lg font-sans font-medium uppercase tracking-wide"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/Ngbq0NgC/UNIQUE.png" 
            alt="Construção de Alto Padrão" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-ink-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.div variants={fadeIn} className="flex flex-col items-center w-full max-w-3xl mx-auto mb-12 px-2">
              <div className="w-full max-w-[90%] md:max-w-full border-t border-white mb-6 md:mb-8"></div>
              <h1 className="text-2xl min-[375px]:text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-widest flex items-center justify-center gap-3 md:gap-8 w-full mb-6 md:mb-8 whitespace-nowrap">
                BL <span className="w-[1px] md:w-[2px] h-6 sm:h-10 md:h-16 bg-white"></span> ENGENHARIA
              </h1>
              <p className="text-white tracking-[0.08em] min-[375px]:tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.3em] uppercase text-[0.5rem] min-[375px]:text-[0.55rem] sm:text-xs md:text-sm text-center">
                Projetamos sonhos, construímos histórias
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5511942889969" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-ink-900 font-medium uppercase tracking-wider text-sm hover:bg-gold-400 transition-colors text-center">
                Ver Portfólio
              </a>
              <a href="https://wa.me/5511942889969" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-ink-900 transition-colors backdrop-blur-sm text-center">
                Fale com nosso time
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Explorar</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-1/2 bg-gold-500"
            />
          </div>
        </motion.div>
      </section>

      {/* About / History */}
      <section id="sobre" className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col items-center text-center"
            >
              <motion.span variants={fadeIn} className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-4 block">
                Nossa História
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif text-ink-900 mb-8 leading-tight">
                Tradição e <span className="italic text-gold-600">Excelência</span> desde 1998
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-6 text-ink-700/80 font-light leading-relaxed text-left">
                <p>
                  Fundada em fevereiro de 1998, na cidade de São Paulo, a BL Engenharia iniciou suas atividades com a execução, administração e gerenciamento de prédios comerciais e residenciais de alto padrão.
                </p>
                <p>
                  Somos uma empresa familiar, formada por dois engenheiros com excelente qualificação no setor, buscando inovações e atualizações constantes para sua obra. Contamos com a experiência de mais de 50 anos dos nossos sócios e inúmeros empreendimentos entregues na cidade de São Paulo.
                </p>
                <p className="font-medium text-ink-900 border-l-2 border-gold-500 pl-6 py-2 my-8">
                  "Entre os nossos projetos de destaque estão a execução de obras nos renomados hotéis Renaissance e Unique."
                </p>
                <p>
                  Fazemos o acompanhamento de perto para tirar as dúvidas quanto à execução, prazo e custo da sua obra. Com isso, o cliente sempre estará tranquilo e atualizado com os próximos passos até o tão esperado dia da entrega das chaves.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="mt-10">
                <a href="https://wa.me/5511942889969" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-ink-900 font-medium uppercase tracking-wider text-sm hover:bg-gold-400 transition-colors text-center">
                  Fale com nosso time
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-16 md:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.span variants={fadeIn} className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-4 block">
              Nossos Serviços
            </motion.span>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif text-ink-900 mb-6 leading-tight">
              Entregamos tudo que você precisa
            </motion.h2>
            <motion.p variants={fadeIn} className="text-ink-700/70 font-light text-lg">
              Da concepção até a finalização da obra, cuidamos de cada detalhe para que você possa entrar no seu novo espaço sem preocupações.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 size={32} strokeWidth={1.5} />,
                title: "Projeto do Início ao Fim",
                desc: "Nosso time contrata todos os prestadores de serviços e compra os materiais necessários, então você não precisa se preocupar com nada."
              },
              {
                icon: <ShieldCheck size={32} strokeWidth={1.5} />,
                title: "Custo Benefício e Qualidade",
                desc: "Garantimos o melhor custo-benefício sem comprometer a qualidade. Na BL, você obtém resultados excepcionais com orçamentos ajustados ao seu budget."
              },
              {
                icon: <Users size={32} strokeWidth={1.5} />,
                title: "Atendimento Exclusivo",
                desc: "Nossos clientes são nossa prioridade. Atendemos você com eficiência, ética e transparência. Fazemos o acompanhamento de perto."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white p-8 md:p-10 border border-ink-900/5 hover:border-gold-500/30 transition-colors group"
              >
                <div className="w-16 h-16 bg-paper flex items-center justify-center text-gold-600 mb-8 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif text-ink-900 mb-4">{service.title}</h3>
                <p className="text-ink-700/70 font-light leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section id="diferenciais" className="py-16 md:py-32 bg-ink-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://i.ibb.co/r2z2y9fX/RENAISSANCE.png" 
                alt="Detalhes arquitetônicos" 
                className="w-full h-[350px] md:h-[700px] object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeIn} className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-4 block">
                Por que nos escolher
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
                Os Diferenciais da <span className="italic text-gold-400">BL Engenharia</span>
              </motion.h2>
              
              <div className="space-y-6">
                {[
                  "Cuidamos da sua obra do início ao fim, desde o esboço do projeto até a entrega da sua chave.",
                  "Rápida e eficaz solução para qualquer adversidade que possa surgir durante a execução do seu projeto.",
                  "Prioridade no atendimento ao cliente, sempre com ética e transparência. Estamos prontos para te atender.",
                  "O custo-benefício é um dos nossos pilares. Oferecemos qualidade impecável e orçamentos que se ajustam ao seu budget.",
                  "Equipe tecnicamente qualificada para cuidar de cada etapa do seu projeto com competência."
                ].map((item, i) => (
                  <motion.div variants={fadeIn} key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-gold-500 shrink-0 mt-1" size={20} />
                    <p className="text-white/80 font-light leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeIn} className="mt-12">
                <p className="text-xl font-serif italic text-white mb-6">
                  "Sabe aquele probleminha que rola durante a obra? E aquela surpresa inesperada no meio do caminho? Temos experiência e conhecimento para resolvê-las de forma rápida e eficaz."
                </p>
                <a href="https://wa.me/5511942889969" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-ink-900 font-medium uppercase tracking-wider text-sm hover:bg-gold-400 transition-colors text-center">
                  Solicite um contato do nosso time
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Placeholder */}
      <section id="portfolio" className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
          >
            <div className="max-w-2xl">
              <motion.span variants={fadeIn} className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-4 block">
                Portfólio
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif text-ink-900 leading-tight">
                Sonhos transformados em <span className="italic text-gold-600">realidade</span>
              </motion.h2>
            </div>
            <motion.div variants={fadeIn}>
              <p className="text-ink-700/70 font-light max-w-md">
                Confira alguns dos nossos empreendimentos entregues na cidade de São Paulo. Obras de alto padrão executadas com perfeição.
              </p>
            </motion.div>
          </motion.div>

          {/* Grid de Imagens (Projetos Entregues) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { src: "https://i.ibb.co/5DFcRFC/CAP-FERRAT.png", name: "Cap Ferrat" },
              { src: "https://i.ibb.co/MkqSdKgt/ILHA-DA-BALEIA.png", name: "Ilha da Baleia" },
              { src: "https://i.ibb.co/7N8Wb0nY/ONDAS-DE-CAMBURI.png", name: "Ondas de Camburi" },
              { src: "https://i.ibb.co/CsSx7Gbw/RENAISSANCE-2.png", name: "Renaissance" },
              { src: "https://i.ibb.co/r2z2y9fX/RENAISSANCE.png", name: "Renaissance" },
              { src: "https://i.ibb.co/7J17CF3f/RESEDA-OFFICE.png", name: "Reseda Office" },
              { src: "https://i.ibb.co/MyPzqmbs/SOL-DO-SAHY.png", name: "Sol do Sahy" },
              { src: "https://i.ibb.co/p6LZWTDz/TRE-SOR-MOEMA.png", name: "Trésor Moema" },
              { src: "https://i.ibb.co/hx78xj0Q/UNIQUE-2.png", name: "Unique" },
              { src: "https://i.ibb.co/Ngbq0NgC/UNIQUE.png", name: "Unique" }
            ].map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden aspect-[4/5] bg-paper"
              >
                <img 
                  src={project.src} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/60 transition-colors duration-500 flex flex-col items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-serif text-2xl mb-2 translate-y-4 group-hover:translate-y-0 text-center px-4">
                    {project.name}
                  </span>
                  <span className="text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-medium tracking-widest uppercase text-xs translate-y-4 group-hover:translate-y-0 delay-75">
                    Ver Projeto
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contato" className="py-16 md:py-24 bg-paper relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold-500"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-white p-6 sm:p-10 md:p-20 shadow-2xl shadow-ink-900/5 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <span className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-4 block">
                  Contato
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-ink-900 mb-6 leading-tight">
                  Nós somos a solução dos seus problemas!
                </h2>
                <p className="text-ink-700/80 font-light mb-10 leading-relaxed">
                  Não importa o tipo de obra, nós executamos mantendo nossa política de entrega com qualidade e dentro de prazo e custos estabelecidos. Queremos soluções rápidas e eficazes para você!
                </p>
                
                <div className="space-y-6">
                  <a href="https://wa.me/5511942889969" target="_blank" rel="noopener noreferrer" className="flex items-start sm:items-center gap-4 group">
                    <div className="w-12 h-12 bg-paper flex items-center justify-center text-gold-600 shrink-0 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-ink-700/60 uppercase tracking-wider mb-1">Telefone / WhatsApp</p>
                      <p className="text-sm sm:text-base font-medium text-ink-900 group-hover:text-gold-600 transition-colors">+55 (11) 94288-9969</p>
                    </div>
                  </a>
                  <a href="mailto:andre@blarquiteturaeengenharia.com" className="flex items-start sm:items-center gap-4 group">
                    <div className="w-12 h-12 bg-paper flex items-center justify-center text-gold-600 shrink-0 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                      <Mail size={20} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm text-ink-700/60 uppercase tracking-wider mb-1">E-mail</p>
                      <p className="text-sm sm:text-base font-medium text-ink-900 group-hover:text-gold-600 transition-colors break-all sm:break-normal">andre@blarquiteturaeengenharia.com</p>
                    </div>
                  </a>
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 bg-paper flex items-center justify-center text-gold-600 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-ink-700/60 uppercase tracking-wider mb-1">Localização</p>
                      <p className="text-sm sm:text-base font-medium text-ink-900">São Paulo, SP</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-paper p-6 md:p-8">
                <h3 className="text-xl font-serif text-ink-900 mb-6">Envie uma mensagem</h3>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  const text = `Olá, meu nome é ${formData.name}. Gostaria de falar sobre: ${formData.message}`;
                  window.open(`https://wa.me/5511942889969?text=${encodeURIComponent(text)}`, '_blank');
                }}>
                  <div>
                    <input type="text" placeholder="Seu Nome" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white border border-ink-900/10 px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div>
                    <input type="email" placeholder="Seu E-mail" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white border border-ink-900/10 px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Seu Telefone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-white border border-ink-900/10 px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div>
                    <textarea placeholder="Como podemos ajudar?" required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-white border border-ink-900/10 px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-ink-900 font-medium uppercase tracking-wider text-sm hover:bg-gold-400 transition-colors text-center">
                    Enviar Mensagem via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink-900 text-white/60 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col justify-center">
            <div className="w-full border-t border-white/30 mb-1.5"></div>
            <div className="flex items-center gap-3 text-white/60">
              <span className="font-serif text-lg tracking-widest">BL</span>
              <span className="w-[1px] h-4 bg-current"></span>
              <span className="font-serif text-lg tracking-widest">ENGENHARIA</span>
            </div>
          </div>
          
          <div className="text-sm font-light text-center md:text-left">
            Todos os direitos reservados a BL Engenharia © {new Date().getFullYear()}
          </div>
          
          <div className="flex gap-6 text-sm font-light">
            <a href="#" className="hover:text-gold-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold-500 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

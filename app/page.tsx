'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag, Utensils, Wrench, Play, Heart, TrendingUp, Star, Users, Check, Rocket, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const navLinks = [
    { href: '#features', label: 'Vantagens' },
    { href: '#planos', label: 'Planos' },
    { href: '#apoie', label: 'Apoie' },
  ];

  return (
    <div className="min-h-screen bg-white text-text-main flex flex-col font-sans">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-heading font-black text-primary tracking-tighter">
            SMART STOCK
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-text-muted uppercase tracking-wider">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="hover:text-primary transition-colors">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex gap-4">
              <button className="text-text-main font-bold px-4 py-2 hover:text-primary transition-colors">Entrar</button>
              <button className="bg-primary text-white font-bold px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95">Começar agora</button>
            </div>
            <button
              onClick={() => setDrawerOpen(true)}
              className="md:hidden p-2 -mr-2 text-text-main hover:text-primary transition-colors"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              key="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
              className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 right-0 z-[70] w-full max-w-sm h-full bg-white shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full pt-16 pb-8 px-6">
                <button onClick={closeDrawer} className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-main" aria-label="Fechar menu">
                  <X className="w-6 h-6" />
                </button>
                <nav className="flex flex-col gap-6 text-lg font-semibold">
                  {navLinks.map(({ href, label }) => (
                    <a key={href} href={href} onClick={closeDrawer} className="text-text-main hover:text-primary transition-colors py-2 border-b border-gray-100">
                      {label}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 flex flex-col gap-3">
                  <button className="text-text-main font-bold py-3 hover:text-primary transition-colors text-left">Entrar</button>
                  <button className="bg-primary text-white font-bold py-4 rounded-2xl hover:bg-primary/90 transition-all">Começar agora</button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-0 md:min-h-[calc(100vh-5rem)] flex items-center bg-bg-light px-4 sm:px-6 lg:px-8 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(11,96,176,0.05)_0%,transparent_70%)] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 py-2 px-3 sm:px-4 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold mb-4 md:mb-6 tracking-wide uppercase">
                <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                O Comércio de Aquiraz em um só lugar
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black tracking-tighter text-text-main mb-8 leading-[1.1]">
                Tudo do nosso bairro, <br />
                <span className="text-primary italic">direto para você.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-text-muted mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                A plataforma que conecta moradores e comerciantes do Smart City Aquiraz. Compre local, fortaleça nossa economia e economize tempo.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-12 justify-center lg:justify-start">
                <a 
                  href="https://wa.me/5585991105577" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl font-black text-base sm:text-lg hover:bg-[#20bd5a] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
                >
                  Fale no WhatsApp
                </a>
                <a 
                  href="#planos"
                  className="inline-flex items-center justify-center gap-2 bg-white text-text-main border-2 border-gray-100 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl font-black text-base sm:text-lg hover:bg-gray-50 transition-all hover:border-primary/20 shadow-sm"
                >
                  Ver Planos
                </a>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 py-2 px-3 sm:px-4 bg-white rounded-full shadow-sm border border-gray-100">
                  <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cat-mercado" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-text-muted">Mercados</span>
                </div>
                <div className="flex items-center gap-2 py-2 px-3 sm:px-4 bg-white rounded-full shadow-sm border border-gray-100">
                  <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cat-comida" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-text-muted">Restaurantes</span>
                </div>
                <div className="flex items-center gap-2 py-2 px-3 sm:px-4 bg-white rounded-full shadow-sm border border-gray-100">
                  <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cat-servicos" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-text-muted">Serviços</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative aspect-square w-full max-w-[220px] sm:max-w-[280px] md:max-w-[380px] lg:max-w-[500px] mx-auto lg:ml-auto order-1 lg:order-2"
            >
              <Image 
                src="/hero-smartstock-landing.svg" 
                alt="Smart Stock Illustration" 
                fill
                priority
                sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 380px, 500px"
                className="object-contain"
              />
              <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
              <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-24 h-24 sm:w-40 sm:h-40 bg-cat-mercado/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          className="flex items-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20" 
          id="features"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-12 md:mb-20">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 inline-block">Vantagens</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-text-main tracking-tighter">
                Por que usar a Smart Stock?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <FeatureCard 
                icon={<Users className="w-10 h-10 text-primary" />}
                title="Para Você"
                description="Tenha o estoque de todos os lojistas do Smart City Aquiraz centralizado. Diga adeus aos pedidos perdidos no WhatsApp e à falta de confirmação."
                color="bg-primary/5"
              />
              <FeatureCard 
                icon={<TrendingUp className="w-10 h-10 text-cat-mercado" />}
                title="Para sua Loja"
                description="0% de taxa por pedido. Seu lucro é 100% seu. Cadastre produtos, crie cupons e acompanhe seu painel de vendas em tempo real."
                color="bg-cat-mercado/5"
              />
              <FeatureCard 
                icon={<Star className="w-10 h-10 text-cat-servicos" />}
                title="Para seu Serviço"
                description="Crie sua vitrine digital. Adicione fotos do seu trabalho, descrição detalhada e receba contatos diretos no seu WhatsApp."
                color="bg-cat-servicos/5"
              />
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section 
          className="flex items-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bg-light scroll-mt-20" 
          id="planos"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-10 md:mb-16">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 inline-block">Investimento</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-text-main tracking-tighter mb-4 md:mb-6">
                Planos de Assinatura
              </h2>
              <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto font-medium">
                Temos a solução ideal para você, desde o prestador de serviço autônomo até o restaurante mais bombado da cidade.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {/* Plano Vitrine */}
              <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-heading font-black text-text-main mb-2 md:mb-3">Plano Vitrine</h3>
                  <p className="text-sm text-text-muted font-bold h-10">Para prestadores de serviço e MEI (Diaristas, eletricistas, etc.)</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-black text-text-muted uppercase tracking-wider">R$</span>
                    <span className="text-4xl md:text-5xl font-black text-text-main tracking-tighter">19,90</span>
                    <span className="text-lg font-bold text-text-muted">/mês</span>
                  </div>
                </div>
                <ul className="space-y-5 mb-10 flex-grow">
                  <PlanFeature text="Perfil no aplicativo com foto/logo" />
                  <PlanFeature text="Descrição detalhada dos serviços" />
                  <PlanFeature text="Botão direto para o seu WhatsApp" />
                </ul>
                <div className="bg-blue-50/50 p-5 rounded-2xl mb-8 border border-blue-100">
                  <p className="text-xs text-blue-800 font-bold leading-relaxed">
                    &quot;Mais barato que rodar panfleto na rua. Custa um lanche por mês pra estar no celular da cidade inteira.&quot;
                  </p>
                </div>
                <a href="https://wa.me/5585991105577" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-text-main text-white font-black py-4 rounded-2xl hover:bg-black transition-all shadow-lg active:scale-95">
                  Assinar Vitrine
                </a>
              </div>

              {/* Plano Empreendedor */}
              <div className="bg-primary rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-primary/30 text-white flex flex-col transform md:-translate-y-6 relative border-4 border-white overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute top-6 right-6 bg-white text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  Popular
                </div>
                <div className="mb-6 md:mb-8 relative z-10">
                  <h3 className="text-xl md:text-2xl font-heading font-black mb-2 md:mb-3">Empreendedor</h3>
                  <p className="text-white/80 text-sm font-bold h-10">Para pequenos comércios e docerias caseiras</p>
                </div>
                <div className="mb-8 relative z-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-black text-white/70 uppercase tracking-wider">R$</span>
                    <span className="text-5xl md:text-6xl font-black tracking-tighter">49,90</span>
                    <span className="text-lg font-bold text-white/70">/mês</span>
                  </div>
                </div>
                <ul className="space-y-5 mb-10 flex-grow relative z-10">
                  <PlanFeature text="Perfil da Loja no App" inverted />
                  <PlanFeature text="Cadastro de até 50 produtos simples" inverted />
                  <PlanFeature text="Pedidos no WhatsApp + notificação" inverted />
                  <PlanFeature text="Chave Pix visível para o cliente" inverted />
                </ul>
                <div className="bg-white/10 p-5 rounded-2xl mb-8 border border-white/20 relative z-10">
                  <p className="text-xs text-white font-bold leading-relaxed">
                    &quot;R$ 1,60 por dia para você ter seu catálogo profissional e parar de mandar foto desfocada no zap.&quot;
                  </p>
                </div>
                <a href="https://wa.me/5585991105577" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-white text-primary font-black py-4 rounded-2xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 relative z-10">
                  Assinar Agora
                </a>
              </div>

              {/* Plano Delivery PRO */}
              <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-heading font-black text-text-main mb-2 md:mb-3">Delivery PRO</h3>
                  <p className="text-sm text-text-muted font-bold h-10">Para Restaurantes e Comércios Estabelecidos</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-black text-text-muted uppercase tracking-wider">R$</span>
                    <span className="text-4xl md:text-5xl font-black text-text-main tracking-tighter">129,90</span>
                    <span className="text-lg font-bold text-text-muted">/mês</span>
                  </div>
                </div>
                <ul className="space-y-5 mb-10 flex-grow">
                  <PlanFeature text="Produtos ILIMITADOS" />
                  <PlanFeature text="Personalização de Categorias" />
                  <PlanFeature text="Cupons de Desconto para fidelizar" />
                  <PlanFeature text="Gestão completa no App/Painel" />
                  <PlanFeature text="Controle de taxa de entrega" />
                </ul>
                <div className="bg-red-50/50 p-5 rounded-2xl mb-8 border border-red-100">
                  <p className="text-xs text-red-800 font-bold leading-relaxed">
                    &quot;No iFood você paga 15%. Aqui você paga SÓ R$ 129,90 PARA SEMPRE. Todo o lucro é seu!&quot;
                  </p>
                </div>
                <a href="https://wa.me/5585991105577" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-text-main text-white font-black py-4 rounded-2xl hover:bg-black transition-all shadow-lg active:scale-95">
                  Assinar PRO
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* App Banner Section */}
        <section className="flex items-center py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto w-full bg-text-main rounded-2xl md:rounded-[3rem] p-6 sm:p-8 md:p-20 flex flex-col md:flex-row items-center justify-between text-white shadow-[0_40px_100px_-20px_rgba(24,23,37,0.4)] relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>
            
            <div className="md:w-1/2 mb-8 md:mb-0 relative z-10 text-center md:text-left">
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white text-sm font-black mb-6 tracking-widest uppercase backdrop-blur-sm border border-white/10">
                Versão Beta 1.0
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black mb-6 md:mb-8 leading-tight tracking-tighter">
                Estamos crescendo <br className="hidden lg:block" />
                <span className="text-primary italic">com você.</span>
              </h2>
              <p className="text-white/60 text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-lg leading-relaxed font-medium">
                Nossa primeira versão já está disponível. Baixe agora e faça parte da revolução do comércio local em Aquiraz.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
                <button className="flex items-center justify-center gap-3 bg-white text-text-main px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all shadow-xl active:scale-95 group">
                  <Play className="w-8 h-8 fill-current text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest leading-none opacity-60">Disponível no</div>
                    <div className="text-xl font-black leading-tight">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="md:w-5/12 relative z-10 flex justify-center">
              <div className="relative">
                <div className="w-48 h-[400px] sm:w-56 sm:h-[460px] md:w-64 md:h-[520px] bg-gray-800 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-2 sm:p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[6px] sm:border-[8px] border-gray-900 relative z-20 overflow-hidden transform hover:scale-105 transition-transform duration-700">
                  <div className="w-full h-full bg-white rounded-[1.6rem] sm:rounded-[2rem] md:rounded-[2.2rem] overflow-hidden relative">
                    <div className="bg-primary h-32 w-full flex items-center justify-center">
                      <div className="text-white font-heading font-black text-xl tracking-tighter">SMART STOCK</div>
                    </div>
                    <div className="p-4">
                      <div className="h-6 w-1/2 bg-gray-100 rounded-lg mb-6"></div>
                      <div className="space-y-3">
                        <div className="h-20 bg-cat-mercado/10 rounded-2xl border border-cat-mercado/10"></div>
                        <div className="h-20 bg-cat-comida/10 rounded-2xl border border-cat-comida/10"></div>
                        <div className="h-20 bg-cat-servicos/10 rounded-2xl border border-cat-servicos/10"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 sm:-right-8 md:-right-12 top-1/4 w-24 h-14 sm:w-32 sm:h-16 bg-white rounded-xl sm:rounded-2xl shadow-2xl z-30 p-2 sm:p-3 animate-bounce hidden sm:block" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <div className="flex-grow">
                      <div className="h-2 w-full bg-gray-100 rounded-full mb-1"></div>
                      <div className="h-2 w-1/2 bg-gray-50 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section 
          className="flex items-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bg-light scroll-mt-20" 
          id="apoie"
        >
          <div className="max-w-4xl mx-auto w-full text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl md:rounded-[3rem] p-6 md:p-12 lg:p-20 shadow-2xl shadow-gray-200 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-50 text-primary mb-8 md:mb-10 shadow-inner">
                <Heart className="w-10 h-10 md:w-12 md:h-12 fill-current" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 md:mb-8 text-text-main tracking-tighter">Apoie o Projeto</h2>
              <p className="text-xl text-text-muted mb-12 leading-relaxed font-medium">
                O Smart Stock é uma iniciativa feita <span className="text-text-main font-bold">de morador para morador</span>. 
                Para mantermos a plataforma com 0% de taxa e continuarmos evoluindo, aceitamos doações voluntárias.
              </p>
              
              <div className="bg-bg-light p-6 md:p-10 rounded-xl md:rounded-[2rem] border-2 border-dashed border-gray-200 inline-block w-full max-w-xl mb-8 md:mb-12 group hover:border-primary/30 transition-colors">
                <p className="text-xs font-black text-text-muted mb-4 uppercase tracking-[0.2em]">Chave PIX (E-mail)</p>
                <div className="flex flex-col items-center gap-4">
                  <code className="text-lg sm:text-2xl md:text-3xl font-black text-primary select-all break-all tracking-tighter">
                    main.smartstock@gmail.com
                  </code>
                </div>
                <p className="text-sm text-text-muted mt-6 font-bold uppercase tracking-widest opacity-60">Qualquer valor fortalece a nossa comunidade.</p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="https://wa.me/5585991105577" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#20bd5a] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
                >
                  Fale com a gente
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
            <div className="text-2xl md:text-3xl font-heading font-black text-primary tracking-tighter">
              SMART STOCK
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-sm font-black text-text-muted uppercase tracking-widest">
              <Link href="#" className="hover:text-primary transition-colors">Termos</Link>
              <Link href="#" className="hover:text-primary transition-colors">Privacidade</Link>
              <Link href="#" className="hover:text-primary transition-colors">Contato</Link>
            </div>
            <div className="text-sm font-bold text-text-muted flex items-center gap-2">
              Feito com <Heart className="w-5 h-5 text-primary fill-current mx-1" /> para a Smart City Aquiraz.
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-50 text-center text-[10px] font-black text-text-muted/30 uppercase tracking-[0.3em]">
            © 2026 Smart Stock - Todos os direitos reservados
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
  return (
    <div className={`p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] ${color} transition-all duration-500 hover:shadow-2xl hover:shadow-gray-100 hover:-translate-y-2 group border border-transparent hover:border-white`}>
      <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-heading font-black mb-3 md:mb-4 text-text-main tracking-tight">{title}</h3>
      <p className="text-text-muted font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function PlanFeature({ text, inverted = false }: { text: string, inverted?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${inverted ? 'bg-white/20' : 'bg-green-100'}`}>
        <Check className={`w-3 h-3 ${inverted ? 'text-white' : 'text-green-600'}`} />
      </div>
      <span className={`text-sm font-bold ${inverted ? 'text-white/90' : 'text-text-muted'}`}>{text}</span>
    </li>
  );
}

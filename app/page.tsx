'use client';

import { MapPin, ShoppingBag, Utensils, Wrench, Pill, Apple, Play, Heart, TrendingUp, Star, Users, Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-text-main flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
              Smart Stock
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-muted">
              <Link href="#planos" className="hover:text-primary transition-colors">Planos</Link>
              <Link href="#apoie" className="hover:text-primary transition-colors">Apoie o Projeto</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-white font-semibold px-6 py-2 rounded-xl hover:bg-primary/90 transition-colors shadow-sm">
              Entrar
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-bg-light pt-16 pb-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-main mb-6">
              Tudo do nosso bairro, <br className="hidden sm:block" />
              <span className="text-primary">direto para você.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto">
              Compre de quem tá perto, apoie Aquiraz e economize. Sem taxas escondidas.
            </p>

            {/* Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              <CategoryCard 
                title="Mercado" 
                color="bg-cat-mercado" 
                icon={<ShoppingBag className="w-8 h-8 text-white" />} 
              />
              <CategoryCard 
                title="Comida" 
                color="bg-cat-comida" 
                icon={<Utensils className="w-8 h-8 text-white" />} 
              />
              <CategoryCard 
                title="Serviços" 
                color="bg-cat-servicos" 
                icon={<Wrench className="w-8 h-8 text-white" />} 
              />
            </div>

            {/* WhatsApp CTA */}
            <div>
              <a 
                href="https://wa.me/5585991105577" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Fale com a gente no WhatsApp
              </a>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white" 
          id="features"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-text-main">
              Por que usar a Smart Stock?
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {/* Para Você (Usuários) */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-main">Para Você</h3>
                <p className="text-text-muted leading-relaxed">
                  Tenha o estoque de todos os lojistas do Smart City Aquiraz centralizado em um só lugar. Diga adeus aos pedidos perdidos no WhatsApp, à falta de confirmação e ao incômodo de ter que perguntar o preço de tudo.
                </p>
              </div>

              {/* Para sua Loja (Lojistas) */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-cat-mercado/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-cat-mercado" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-main">Para sua Loja</h3>
                <p className="text-text-muted leading-relaxed">
                  <span className="font-bold text-cat-mercado">0% de taxa por pedido.</span> Seu lucro é 100% seu, sem guias de pagamento intermediários. Cadastre produtos, crie cupons de desconto, receba notificações e acompanhe seu painel com lista de pedidos e lucros do período.
                </p>
              </div>

              {/* Para seu Serviço (Prestadores) */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-cat-servicos/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 text-cat-servicos" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-main">Para seu Serviço</h3>
                <p className="text-text-muted leading-relaxed">
                  Crie sua vitrine digital. Adicione seu contato, uma descrição detalhada dos seus serviços e um portfólio de imagens para atrair mais clientes na região.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Plans Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white" 
          id="planos"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-text-main">
              Planos de Assinatura
            </h2>
            <p className="text-lg text-text-muted text-center mb-16 max-w-2xl mx-auto">
              Temos a solução ideal para você, desde o prestador de serviço autônomo até o restaurante mais bombado da cidade.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Plano Vitrine */}
              <div className="bg-bg-light rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-text-main mb-2">Plano Vitrine</h3>
                  <p className="text-sm text-text-muted h-10">Para prestadores de serviço e MEI (Diaristas, eletricistas, etc.)</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-text-main">R$ 19,90</span>
                  <span className="text-text-muted">/mês</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow text-sm text-text-muted">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Perfil no aplicativo com foto/logo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Descrição detalhada dos serviços</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Botão direto para o seu WhatsApp</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-xl mb-6 text-sm text-blue-800 italic">
                  &quot;Mais barato que rodar panfleto na rua. Custa um lanche por mês pra estar no celular da cidade inteira.&quot;
                </div>
                <a href="https://wa.me/5585991105577" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-gray-800 transition-colors">
                  Assinar Vitrine
                </a>
              </div>

              {/* Plano Empreendedor */}
              <div className="bg-primary rounded-3xl p-8 shadow-lg text-white flex flex-col transform md:-translate-y-4 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Mais Popular
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Empreendedor</h3>
                  <p className="text-white/80 text-sm h-10">Para pequenos comércios e docerias caseiras</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">R$ 49,90</span>
                  <span className="text-white/80">/mês</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white shrink-0" />
                    <span>Perfil da Loja no App</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white shrink-0" />
                    <span>Cadastro de até 50 produtos simples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white shrink-0" />
                    <span>Pedidos no WhatsApp + notificação no app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white shrink-0" />
                    <span>Chave Pix visível para o cliente depositar direto</span>
                  </li>
                </ul>
                <div className="bg-white/10 p-4 rounded-xl mb-6 text-sm text-white italic">
                  &quot;R$ 1,60 por dia para você ter seu catálogo profissional e parar de mandar foto desfocada no zap dos clientes.&quot;
                </div>
                <a href="https://wa.me/5585991105577" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-white text-primary font-bold py-3 rounded-xl hover:bg-gray-50 transition-colors">
                  Assinar Empreendedor
                </a>
              </div>

              {/* Plano Delivery PRO */}
              <div className="bg-bg-light rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-text-main mb-2">Delivery PRO</h3>
                  <p className="text-sm text-text-muted h-10">Para Restaurantes, Lanchonetes e Comércios Estabelecidos</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-text-main">R$ 129,90</span>
                  <span className="text-text-muted">/mês</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow text-sm text-text-muted">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Produtos ILIMITADOS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Personalização de Categorias (adicionais, tamanhos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Cupons de Desconto para fidelizar clientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Gestão completa de pedidos no App/Painel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Controle de taxa de entrega</span>
                  </li>
                </ul>
                <div className="bg-red-50 p-4 rounded-xl mb-6 text-sm text-red-800 italic">
                  &quot;No iFood você paga 15%. Aqui você vende os mesmos R$ 2.000 e paga SÓ R$ 129,90 PARA SEMPRE. Todo o lucro é seu!&quot;
                </div>
                <a href="https://wa.me/5585991105577" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-gray-800 transition-colors">
                  Assinar PRO
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* App Banner */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-light"
        >
          <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-xl relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-black opacity-10 rounded-full blur-2xl"></div>
            
            <div className="md:w-1/2 mb-8 md:mb-0 relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-sm font-semibold mb-4 backdrop-blur-sm">
                Versão Beta
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Estamos crescendo com você
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Nossa primeira versão já está disponível. Baixe agora e faça parte da revolução do comércio local em Aquiraz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* 
                <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-[10px] leading-none">Baixar na</div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
                  </div>
                </button>
                */}
                <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors">
                  <Play className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-[10px] leading-none">Disponível no</div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="md:w-5/12 relative z-10 flex justify-center">
              {/* Simple phone mockup representation */}
              <div className="w-64 h-[450px] bg-white rounded-[3rem] p-2 shadow-2xl border-4 border-gray-100 rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-bg-light rounded-[2.5rem] overflow-hidden relative border border-gray-100">
                  {/* Mockup content */}
                  <div className="bg-primary h-32 w-full absolute top-0 left-0"></div>
                  <div className="absolute top-20 left-4 right-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className="w-1/2 h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
                  </div>
                  <div className="absolute top-40 left-4 right-4 grid grid-cols-1 gap-2">
                    <div className="h-20 bg-cat-mercado/20 rounded-xl"></div>
                    <div className="h-20 bg-cat-comida/20 rounded-xl"></div>
                    <div className="h-20 bg-cat-servicos/20 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Support Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white" 
          id="apoie"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-primary mb-6">
              <Heart className="w-8 h-8 fill-current" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-text-main">Apoie o Projeto</h2>
            <p className="text-lg text-text-muted mb-8">
              O Smart Stock é uma iniciativa feita <span className="font-semibold text-text-main">de morador para morador</span>. 
              Para mantermos a plataforma com 0% de taxa e continuarmos evoluindo, aceitamos doações voluntárias.
            </p>
            <div className="bg-bg-light p-8 rounded-2xl border border-gray-100 inline-block w-full sm:w-auto mb-10">
              <p className="text-sm text-text-muted mb-2 uppercase tracking-wider font-semibold">Chave PIX (E-mail)</p>
              <div className="flex items-center justify-center gap-4">
                <code className="text-xl md:text-2xl font-mono font-bold text-primary select-all">
                  main.smartstock@gmail.com
                </code>
              </div>
              <p className="text-sm text-text-muted mt-4">Qualquer valor ajuda a manter nossa comunidade forte.</p>
            </div>

            <div>
              <a 
                href="https://wa.me/5585991105577" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Fale com a gente no WhatsApp
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-primary tracking-tight">
            Smart Stock
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
            <Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacidade</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contato</Link>
          </div>
          <div className="text-sm text-text-muted flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-blue-500 fill-current mx-1" /> para a Smart City Aquiraz.
          </div>
        </div>
      </footer>
    </div>
  );
}

function CategoryCard({ title, color, icon }: { title: string, color: string, icon: React.ReactNode }) {
  return (
    <div className={`${color} rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}>
      <div className="transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className="text-white font-semibold text-base sm:text-lg tracking-wide">{title}</span>
    </div>
  );
}

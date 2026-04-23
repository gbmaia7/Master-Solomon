import React, { useEffect, useState } from 'react';
import { Lock, Star, ShieldCheck, Clock, Download, ChevronRight, Eye, Play, FileLock2, KeyRound } from 'lucide-react';
import { motion } from 'motion/react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Stars = () => (
  <div className="flex gap-1 mb-2 text-accent-gold">
    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
  </div>
);

const Testimonial = ({ text, author }: { text: string, author: string }) => (
  <div className="bg-transparent border border-border-subtle p-8 rounded-sm flex flex-col hover:bg-white/5 transition-all duration-300">
    <Stars />
    <p className="font-serif italic text-text-main mb-6 leading-relaxed tracking-wide opacity-90 mt-2">"{text}"</p>
    <span className="text-text-muted tracking-widest text-xs uppercase font-semibold mt-auto">— {author}</span>
  </div>
);

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState('segundo');

  const scrollToPricing = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const planos = [
    {
      id: 'primeiro',
      title: 'Primeiro Grau',
      subtitle: 'Como Fazer e Investir Dinheiro Como os Maçons',
      description: 'O primeiro volume da Ordem. Como construir, preservar e multiplicar patrimônio do zero.',
      tag: null,
      saveTag: null,
      originalPrice: 'R$47',
      price: 'R$27',
      checkoutLink: 'https://pay.kirvano.com/82be7508-1b0f-481a-8714-ec04b1b8643e',
      bullets: [
        <React.Fragment key="0"><strong className="text-text-main font-medium">1 volume — 21 capítulos</strong></React.Fragment>,
        <React.Fragment key="1">Como <strong className="text-text-main font-medium">construir, preservar, multiplicar e perpetuar</strong> patrimônio</React.Fragment>,
        <React.Fragment key="2">Os <strong className="text-text-main font-medium">4 pilares maçônicos</strong> de construção de riqueza</React.Fragment>
      ]
    },
    {
      id: 'segundo',
      title: 'Segundo Grau',
      subtitle: 'O Sistema que Une Riqueza e Mentalismo',
      description: 'A Maçonaria sabia que a mente precede o patrimônio. O 2° Grau ensina o que vem antes do dinheiro — como negociar, influenciar e dominar sua mentalidade com vantagem.',
      tag: 'MAIS ESCOLHIDO',
      tagColor: 'bg-accent-gold text-primary',
      saveTag: 'ECONOMIZE 46%',
      originalPrice: 'R$87',
      price: 'R$47',
      checkoutLink: 'https://pay.kirvano.com/9850ac5e-a138-4925-8679-ed2d5d09f776',
      bullets: [
        <React.Fragment key="0"><strong className="text-text-main font-medium">2 volumes</strong> — Como Fazer e Investir Dinheiro Como os Maçons + O Código do Poder Maçônico</React.Fragment>,
        <React.Fragment key="1"><strong className="text-text-main font-medium">Tudo do Primeiro Grau</strong></React.Fragment>,
        <React.Fragment key="2">Como <strong className="text-text-main font-medium">comprar imóveis com pouco capital de entrada</strong> — passo a passo, como a Maçonaria transmite</React.Fragment>,
        <React.Fragment key="3">O sistema de <strong className="text-text-main font-medium">poder e influência</strong> que a Maçonaria ensina antes do dinheiro</React.Fragment>,
        <React.Fragment key="5">Como <strong className="text-text-main font-medium">negociar, influenciar e se posicionar com vantagem</strong>, sem que a outra parte perceba</React.Fragment>,
        <React.Fragment key="4"><strong className="text-text-main font-medium">Lei da Atração e Mentalismo aplicados</strong> — como a Maçonaria treina a mente antes de treinar o patrimônio</React.Fragment>
      ]
    },
    {
      id: 'mestre',
      title: 'Grau do Mestre',
      subtitle: 'Como a Ordem Estrutura, Protege e Prospera nas Crises',
      description: 'O sistema completo da Ordem. Imóveis, blindagem tributária e o Manual da Crise — como as famílias certas ficam mais ricas exatamente quando todos os outros perdem.',
      tag: 'MELHOR VALOR',
      tagColor: 'bg-[#ff5500] text-white',
      saveTag: 'ECONOMIZE 67%',
      originalPrice: 'R$297',
      price: 'R$97',
      checkoutLink: 'https://pay.kirvano.com/0ece004c-bc95-4379-bb9c-fe08de4def4e',
      bullets: [
        <React.Fragment key="0"><strong className="text-text-main font-medium">3 volumes</strong> — Como Fazer e Investir Dinheiro Como os Maçons + O Código do Poder + O Código Imobiliário dos Maçons</React.Fragment>,
        <React.Fragment key="1"><strong className="text-text-main font-medium">Tudo do Segundo Grau</strong></React.Fragment>,
        <React.Fragment key="2"><strong className="text-text-main font-medium">Código Imobiliário do Solomon</strong> — como a Maçonaria estrutura patrimônio em imóveis com pouco capital, FII exclusivo e blindagem com Holding</React.Fragment>,
        <React.Fragment key="3"><strong className="text-text-main font-medium">Manual da Crise:</strong> como as famílias maçônicas ficam mais ricas nas quedas que destroem todos os outros</React.Fragment>,
        <React.Fragment key="4"><strong className="text-text-main font-medium">Proteção geracional:</strong> como a Maçonaria ensina a blindar patrimônio para que sobreviva às próximas gerações</React.Fragment>,
        <React.Fragment key="5">Como <strong className="text-text-main font-medium">reduzir sua carga tributária legalmente</strong> — o governo publicou as regras, a Maçonaria sempre soube disso</React.Fragment>
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-primary selection:bg-accent-gold/30">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent absolute top-0" />

      {/* HERO SECTION */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] mb-8 text-text-main tracking-tight">
              As Famílias que Sobreviveram ao Collor, à Hiperinflação, à Recessão de 2015 e à Pandemia — e <span className="text-gradient-gold italic font-bold">Estão Blindadas Contra o Aumento de Impostos</span>
            </h1>
          </FadeIn>

          {/* Subheadline updated */}
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-2xl text-text-muted mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Seguiam um Sistema que Nunca Te Ensinaram. <br className="hidden md:block"/> Diante do que está vindo, decidi que parte disso não pode mais ficar oculto.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-serif italic text-text-faint text-lg mb-10 tracking-widest uppercase text-sm">
              Séculos de sabedoria financeira. Uma tarde de leitura.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <button 
              onClick={scrollToPricing}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-sm md:text-md text-primary bg-accent-gold hover:bg-accent-gold-hover transition-all duration-300 rounded-sm overflow-hidden shadow-[0_0_40px_rgba(201,168,76,0.15)]"
            >
              <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="tracking-[0.1em] uppercase font-bold text-center">Quero Acessar o Sistema Agora</span>
            </button>
            <p className="mt-6 text-sm text-text-faint flex items-center justify-center gap-4">
              <span className="flex items-center gap-1"><Download size={14} /> Download imediato</span>
              <span className="flex items-center gap-1"><Clock size={14} /> Acesso vitalício</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TASTER TESTIMONIALS */}
      <section className="bg-[#050505] border-y border-border-subtle/50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
          <FadeIn>
            <Testimonial 
              text="O capítulo sobre riqueza geracional sozinho valeu 100 vezes o preço. Meu pai nunca me ensinou nada disso."
              author="Ricardo M., engenheiro, São Paulo"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <Testimonial 
              text="A parte do imposto me fez perceber que estava perdendo R$800 por mês. Já corrigi isso com meu contador."
              author="Fernanda L., médica, Belo Horizonte"
            />
          </FadeIn>
        </div>
      </section>

      {/* CREDIBILIDADE DO PERSONAGEM */}
      <section className="py-24 px-6 relative bg-primary">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <FadeIn className="w-full md:w-1/3 flex justify-center">
              <div className="w-64 h-64 md:w-full md:h-96 rounded-full md:rounded-t-full md:rounded-b-md overflow-hidden border border-border-subtle relative shadow-[0_0_50px_rgba(201,168,76,0.05)] group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src="https://i.imgur.com/e8q0btI.jpeg" 
                  alt="Mestre Solomon" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter md:saturate-50 md:group-hover:saturate-100 transition-all duration-700"
                />
              </div>
            </FadeIn>
            
            <div className="w-full md:w-2/3 space-y-6 text-lg text-text-muted leading-relaxed font-light">
              <FadeIn delay={0.1}>
                <p>Me iniciei na Maçonaria no Rio de Janeiro aos 30 anos.</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p>Passei décadas dentro de uma Ordem que existe no Brasil desde 1822, o mesmo ano em que este país foi fundado.</p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>O <strong className="text-text-main font-medium">Barão de Mauá</strong>, o primeiro grande bilionário brasileiro, era maçom.<br/>
                   <strong className="text-text-main font-medium">Getúlio Vargas</strong> era maçom.<br/>
                   <strong className="text-text-main font-medium">Juscelino Kubitschek</strong> era maçom.<br/>
                   Os homens que controlaram o dinheiro e moldaram a economia deste país eram guiados pelos mesmos princípios.</p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p>Dentro das reuniões que não aparecem em nenhum registro público, vi como as famílias que atravessaram gerações realmente pensam sobre dinheiro.</p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p>Não é o que ensinam nas faculdades.<br/>Não é o que aparece nos livros de finanças pessoais.</p>
              </FadeIn>
              <FadeIn delay={0.6}>
                <p className="text-text-main font-medium italic border-l-2 border-accent-gold pl-6 py-2 mt-8">
                  Decidi documentar isso.<br/>Esses três documentos são o que vi, em linguagem que qualquer pessoa pode começar a aplicar a partir de amanhã.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* O PROBLEMA (TIMELINE) */}
      <section className="bg-[#050505] py-24 px-6 border-y border-border-subtle/30">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-center font-serif text-3xl md:text-5xl mb-6 text-text-main">
              O Sistema foi Feito para <span className="italic text-accent-gold text-gradient-gold">Te Sabotar</span>
            </h2>
            <p className="text-center text-text-muted mb-16 tracking-widest uppercase text-xs">Até agora.</p>
          </FadeIn>

          <div className="relative border-l border-border-subtle/50 ml-4 md:ml-0 md:pl-0">
            
            {[
              { year: "1990", event: "Governo Collor", text: "Da noite para o dia, as poupanças de milhões de brasileiros foram bloqueadas. Famílias inteiras perderam décadas de trabalho em uma canetada. Dentro dos círculos fechados, ninguém acordou com o saldo zerado. O dinheiro não estava onde o governo podia alcançar. Nunca esteve." },
              { year: "1993", event: "Inflação de 2.477%", text: "Quem guardava dinheiro em conta corrente acordava mais pobre todo dia. Quem tinha ativos reais — terra, imóvel, ouro — acordava com o patrimônio intacto. Corrigido. Às vezes maior." },
              { year: "2002", event: "Dólar a R$4. Pânico", text: "Enquanto a maioria vendia com medo, um grupo específico estava comprando. Ativos de qualidade por preço de desespero. Transferência de riqueza silenciosa." },
              { year: "2008", event: "Crise Global", text: "Lehman Brothers quebra numa sexta-feira. Na segunda, os fundos de ações brasileiros abriram 15% abaixo. Quem não sabia o que fazer — vendeu. Quem sabia — comprou o que os outros vendiam." },
              { year: "2015", event: "Recessão Forte", text: "O PIB encolheu. O desemprego dobrou. Imóveis em São Paulo caíram 20% em reais. Para quem tinha o sistema, foi a maior liquidação em 20 anos." },
              { year: "2020", event: "Pandemia", text: "Ibovespa caiu 45% em 5 semanas. Enquanto o país paralisava, uma transferência silenciosa acontecia. Como sempre." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={0.1 * idx} className="mb-8 relative pl-8 md:pl-16 p-6 hover:bg-white/5 border border-transparent hover:border-border-subtle transition-all duration-300 rounded-sm">
                <div className="absolute left-[-5px] top-10 w-2.5 h-2.5 rounded-full bg-accent-gold shadow-[0_0_10px_rgba(201,168,76,0.6)]" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                  <span className="font-serif text-2xl md:text-3xl text-gradient-gold font-bold">{item.year}</span>
                  <span className="text-text-main font-medium uppercase tracking-widest text-sm opacity-80">{item.event}</span>
                </div>
                <p className="text-text-muted leading-relaxed font-light">{item.text}</p>
              </FadeIn>
            ))}

          </div>

          <FadeIn delay={0.4} className="mt-20 text-center max-w-2xl mx-auto space-y-6">
            <p className="text-xl text-text-main font-serif italic">O padrão nunca muda.</p>
            <p className="text-text-muted font-light leading-relaxed">
              A crise chega. A maioria reage com medo. Vende o que tem. Paralisa. Espera.
            </p>
            <p className="text-text-muted font-light leading-relaxed">
              Nós, da Maçonaria, agimos na direção oposta. Compramos o que os outros vendem. Protegemos o que os outros expõem. Estruturamos o que os outros ignoram.
            </p>
            <div className="pt-8 mb-4 flex justify-center">
                <div className="w-16 h-px bg-accent-gold/30"></div>
            </div>

            <div className="relative mb-12 p-6 md:p-8 border border-accent-gold/30 bg-[#080808]/80 backdrop-blur-sm shadow-[0_0_30px_rgba(201,168,76,0.05)] rounded-sm text-left md:text-center mt-10">
               <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent"></div>
               <p className="text-text-main/90 font-medium text-lg md:text-xl leading-relaxed italic">
                 "Décadas dentro da Ordem. Mas quando o governo aumenta impostos, o real perde valor todo ano e a inflação devora o que você guarda, <strong className="text-accent-gold font-bold">manter isso fechado deixou de fazer sentido.</strong>"
               </p>
            </div>

            <button 
              onClick={scrollToPricing}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-sm md:text-md text-primary bg-accent-gold hover:bg-accent-gold-hover transition-all duration-300 rounded-sm overflow-hidden shadow-[0_0_40px_rgba(201,168,76,0.15)]"
            >
              <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="tracking-[0.1em] uppercase font-bold text-center">Quero Acessar o Sistema Agora</span>
            </button>
          </FadeIn>
        </div>
      </section>

      {/* ESTE SISTEMA É PARA VOCÊ SE */}
      <section className="py-24 px-6 relative overflow-hidden bg-primary">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl mb-6 text-text-main">
              Este Sistema É para Você Se...
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto font-light leading-relaxed text-lg">
              A Ordem não transmitia esse conhecimento para qualquer pessoa. Este documento também não é para todos.
            </p>
          </FadeIn>

          <div className="flex flex-col space-y-4">
            {[
              "Você trabalha, poupa o que pode — e ainda sente que a distância entre você e o patrimônio real só aumenta",
              "Você já leu sobre finanças e sentiu que faltava algo que os livros não dizem",
              "Você quer que seus filhos herdem patrimônio — não só hábitos",
              "Você sente que o sistema tributário foi feito para te prejudicar — e quer saber como os círculos fechados navegam por ele",
              "Você acredita que a próxima crise está vindo — e quer estar do lado certo quando ela chegar",
              "Você já perdeu uma negociação importante e só percebeu depois que a outra parte estava no controle desde o início",
              "Você quer entender como os maçons fecham negócios dentro dos círculos fechados — e como aplicar isso fora deles",
              "Você quer influenciar decisões e pessoas sem nunca mostrar que está fazendo isso",
              "Você sente que falta uma rede — pessoas certas, nos lugares certos — e não sabe como entrar nela",
              "Você quer saber como se posicionar socialmente para que as oportunidades venham até você — não o contrário",
              "Você acredita que mentalidade e espiritualidade têm papel no que você atrai — e quer entender como a Ordem trabalha isso antes do dinheiro"
            ].map((text, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} className="w-full">
                <div className="flex gap-4 md:gap-6 p-5 md:p-6 bg-secondary/20 border border-border-subtle/50 rounded-sm hover:border-accent-gold/40 hover:bg-white/[0.02] transition-colors">
                  <div className="text-accent-gold flex-shrink-0 mt-0.5 md:mt-1 text-lg">✦</div>
                  <p className="text-text-main text-base md:text-lg font-light leading-relaxed">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-16 text-center">
            <p className="text-text-muted italic mb-8 max-w-2xl mx-auto">
              Este sistema é para quem está disposto a pensar diferente sobre dinheiro, poder, espiritualidade e legado.
            </p>
            <button 
              onClick={scrollToPricing}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-sm md:text-md text-primary bg-accent-gold hover:bg-accent-gold-hover transition-all duration-300 rounded-sm overflow-hidden shadow-[0_0_40px_rgba(201,168,76,0.15)]"
            >
              <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="tracking-[0.1em] uppercase font-bold text-center">Quero Acessar o Sistema Agora</span>
            </button>
          </FadeIn>
        </div>
      </section>

      {/* DEPOIMENTOS ADICIONAIS */}
      <section className="bg-[#050505] py-24 px-6 border-y border-border-subtle/30">
         <div className="max-w-4xl mx-auto space-y-6">
            <FadeIn>
              <h3 className="font-serif text-2xl text-center mb-12 text-gradient-gold">O que os Iniciados estão Falando</h3>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
               <FadeIn delay={0.1}>
                 <Testimonial 
                   text="Li o Pai Rico Pai Pobre, Psicologia Financeira... Este foi o primeiro que me deu um plano pro dia seguinte." 
                   author="Marcos T., empresário, Curitiba" 
                 />
               </FadeIn>
               <FadeIn delay={0.2}>
                 <Testimonial 
                   text="Comprei os três documentos. O de imóveis mudou como vejo cada real que poupo." 
                   author="Roberto S., servidor público, Brasília" 
                 />
               </FadeIn>
               <FadeIn delay={0.3}>
                 <Testimonial 
                   text="Comprei à meia-noite. Li antes do trabalho. Já mudou cada decisão financeira que tomo." 
                   author="Ana P., professora universitária, Recife" 
                 />
               </FadeIn>
            </div>
         </div>
      </section>

      {/* CITAÇÃO FINAL & PLACEHOLDER 16:9 */}
      <section className="py-24 px-6 relative bg-[#050505] border-y border-border-subtle/30">
         <div className="max-w-5xl mx-auto">
            <FadeIn>
               {/* 16:9 Image */}
               <div className="w-full aspect-video border border-border-subtle relative rounded-sm overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent z-10 pointer-events-none"></div>
                  <img 
                    src="https://i.imgur.com/fsB7xGh.jpeg" 
                    alt="Crises Históricas" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover absolute inset-0 z-0 transition-transform duration-1000 md:group-hover:scale-105" 
                  />
               </div>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-16 px-4 md:px-8">
              <div className="text-center max-w-4xl mx-auto relative">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 text-accent-gold/10 flex items-center justify-center pointer-events-none">
                   <span className="text-8xl font-serif">"</span>
                 </div>
                <blockquote className="relative z-10 font-serif text-lg md:text-xl text-text-main leading-relaxed pt-8 mb-8 font-light max-w-2xl mx-auto">
                  Todo império caiu. Toda moeda colapsou. Todo mercado despencou.<br/><br/>
                  Dentro da Ordem, existe um registro de quem sobreviveu a cada uma dessas crises. E o que eles tinham em comum.<br/><br/>
                  Não era sorte. Era o <span className="text-gradient-gold font-medium italic">sistema</span>.
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-px bg-accent-gold/30"></div>
                  <footer className="text-accent-gold font-semibold tracking-widest uppercase text-xs md:text-sm">
                    Mestre Solomon
                  </footer>
                  <div className="w-12 h-px bg-accent-gold/30"></div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} className="text-center mt-16 max-w-2xl mx-auto">
               <p className="text-text-muted italic text-lg leading-relaxed">
                 As famílias que constroem riqueza em silêncio não são mais inteligentes. Elas simplesmente conhecem regras que nunca te ensinaram. Estes documentos mudam isso.
               </p>
            </FadeIn>
         </div>
      </section>

      {/* FINAL CTA (Mover before pricing) */}
      <section className="py-24 px-6 bg-primary">
          <div className="max-w-3xl mx-auto text-center">
             <FadeIn>
               <h2 className="font-serif text-3xl md:text-5xl mb-6 text-text-main leading-[1.2]">
                 Guerras. Inflação.<br className="md:hidden" /> Colapso de moedas. <span className="text-gradient-gold italic md:block mt-2">Confisco.</span>
               </h2>
               <p className="text-text-muted text-lg mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                 A história é um arquivo de como governos e crises transferem riqueza de quem não sabe para quem sabe. Esse sistema é o que garante que sua família não acorda com o saldo zerado.
               </p>
             </FadeIn>
             
             <FadeIn delay={0.2} className="p-8 border border-accent-gold/20 bg-accent-gold/5 rounded-sm inline-block w-full max-w-xl mb-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-gold"></div>
                <p className="text-xl md:text-2xl text-text-main font-serif mb-0">A pergunta é simples: quando a próxima canetada vier, você vai estar pronto para defender seu legado?</p>
             </FadeIn>

             <FadeIn delay={0.3}>
                <button 
                  onClick={scrollToPricing}
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-sm md:text-md font-bold text-primary bg-accent-gold hover:bg-accent-gold-hover transition-all duration-300 rounded-sm overflow-hidden shadow-[0_0_40px_rgba(201,168,76,0.15)]"
                >
                  <span className="tracking-[0.1em] uppercase">Escolher Meu Grau de Acesso</span>
                </button>
             </FadeIn>
          </div>
      </section>

      {/* PRICING */}
      <section id="planos" className="bg-[#050505] py-24 px-6 border-t border-border-subtle/30 scroll-mt-10 relative">
        <div className="max-w-4xl mx-auto relative z-10 pl-2">
          
          <div className="space-y-0">
            {planos.map((plan, i) => {
              const isSelected = selectedPlan === plan.id;
              return (
                <FadeIn key={plan.id} delay={0.1 * i} className="w-full">
                  <div 
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`p-6 md:p-8 cursor-pointer flex gap-4 md:gap-6 relative transition-all duration-300 ${isSelected ? 'border-2 border-accent-gold bg-accent-gold/5 z-10' : 'border-t border-border-subtle hover:bg-white/5'} ${i === 0 && !isSelected ? 'border-t border-border-subtle' : ''} ${i === planos.length - 1 && !isSelected ? 'border-b border-border-subtle' : ''}`}
                    style={{ margin: isSelected ? '-1px' : '0' }}
                  >
                    {plan.tag && (
                      <div className={`absolute top-0 right-0 ${plan.tagColor} text-[10px] uppercase font-bold tracking-widest px-3 py-1`}>
                        {plan.tag}
                      </div>
                    )}
                    
                    <div className="flex-shrink-0 mt-2">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-accent-gold' : 'border-text-faint/50'}`}>
                        {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-accent-gold" />}
                      </div>
                    </div>

                    <div className="w-full">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold font-sans text-white">{plan.title}</h3>
                          {plan.saveTag && (
                            <span className="inline-block mt-2 bg-red-900/30 text-[#ff4444] text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm">
                              {plan.saveTag}
                            </span>
                          )}
                          <p className="text-text-main text-base md:text-[17px] font-medium mt-2">{plan.subtitle}</p>
                          <p className="text-text-muted text-sm mt-1.5 leading-relaxed font-light">{plan.description}</p>
                        </div>
                        <div className="flex items-baseline gap-2 md:text-right">
                          <span className="text-text-faint line-through text-md font-sans">{plan.originalPrice}</span>
                          <span className="text-3xl md:text-4xl font-bold text-white font-sans">{plan.price}</span>
                        </div>
                      </div>

                      <ul className="space-y-4">
                        {plan.bullets.map((b, idx) => (
                          <li key={idx} className="flex gap-3 text-sm text-text-muted items-start">
                            <div className="w-1.5 h-1.5 bg-accent-gold rounded-full mt-[5px] flex-shrink-0 opacity-80" />
                            <div className="flex-1 leading-relaxed">{b}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.4} className="mt-12 text-center">
            <a 
              href={planos.find(p => p.id === selectedPlan)?.checkoutLink}
              target="_blank" rel="noopener noreferrer"
              className="w-full inline-block shadow-[0_0_40px_rgba(201,168,76,0.15)] md:w-auto px-12 py-5 bg-accent-gold hover:bg-accent-gold-hover text-primary transition-all tracking-[0.1em] uppercase text-sm font-bold rounded-sm"
            >
              Quero Este Grau ({planos.find(p => p.id === selectedPlan)?.price})
            </a>
            <div className="flex justify-center mt-6">
               <div className="flex items-center gap-6 text-text-faint text-xs tracking-widest uppercase">
                  <span className="flex items-center gap-2"><Download size={14}/> Entrega Imediata</span>
                  <span className="flex items-center gap-2"><Clock size={14}/> Acesso Vitalício</span>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 bg-[#050505] text-center border-t border-border-subtle pb-32">
         <p className="text-text-faint text-xs tracking-widest uppercase">&copy; 2026 Coleção Mestre Solomon. Todos os direitos reservados.</p>
      </footer>

      {/* STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-[#050505] border-t border-accent-gold/40 z-50 px-4 py-4 md:py-3 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-text-main font-serif text-sm md:text-base text-center md:text-left flex items-center gap-2">
            <span>🔒</span> Quando a próxima canetada vier, você vai estar pronto?
          </p>
          <button 
            onClick={scrollToPricing}
            className="w-full md:w-auto px-6 py-3.5 md:py-2.5 bg-accent-gold hover:bg-accent-gold-hover text-primary font-bold text-xs md:text-sm tracking-[0.05em] uppercase transition-all duration-300 rounded-sm whitespace-nowrap"
          >
            Quero Acessar o Sistema — A partir de R$27
          </button>
        </div>
      </div>

    </div>
  );
}


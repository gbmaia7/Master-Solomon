import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, Lock } from 'lucide-react';
import { motion } from 'motion/react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function PrimeiroGrau() {
  return (
    <div className="min-h-screen bg-primary selection:bg-accent-gold/30 flex flex-col">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent absolute top-0" />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative">
        {/* Subtle background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-gold opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl w-full mx-auto relative z-10 space-y-12">
          
          <FadeIn className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-border-subtle px-4 py-2 rounded-sm mt-8">
              <Lock size={14} className="text-accent-gold" />
              <span className="text-xs tracking-widest uppercase font-bold text-accent-gold">INICIADO — 1° GRAU</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-medium leading-[1.1] text-text-main tracking-tight">
              Seu acesso foi liberado.
            </h1>
            
            <p className="text-lg text-text-muted max-w-xl mx-auto font-light leading-relaxed">
              O conhecimento que você recebeu hoje foi guardado por gerações. Use com sabedoria.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="space-y-6">
            {/* Card 1 */}
            <div className="bg-[#050505] border border-border-subtle p-6 md:p-8 rounded-sm hover:border-accent-gold/30 transition-all group flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <div className="space-y-3 flex-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent-gold">Grau I</span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-text-main group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-gold group-hover:to-yellow-400 transition-all duration-300">
                  Como Fazer e Investir Dinheiro Como os Maçons
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-light">
                  O primeiro volume da Ordem. Como construir, preservar e multiplicar patrimônio do zero.
                </p>
              </div>
              <a
                href="/arquivos/como-fazer.pdf"
                download="Como Fazer e Investir Dinheiro Como os Maçons.pdf"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold text-primary bg-accent-gold hover:bg-accent-gold-hover transition-all duration-300 rounded-sm tracking-widest uppercase flex-shrink-0"
              >
                <Download size={16} />
                BAIXAR MEU DOCUMENTO
              </a>
            </div>
          </FadeIn>
        </div>
      </main>

      {/* OFERTAS EXCLUSIVAS */}
      <section className="px-6 pb-24 relative z-10 w-full">
        <div className="max-w-4xl mx-auto space-y-12">
          <FadeIn>
            <div className="flex justify-center mb-6">
               <div className="w-16 h-px bg-accent-gold/30"></div>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-gradient-gold text-center leading-relaxed italic px-4">
              Iniciado, antes de partir: uma oportunidade reservada a quem já deu o primeiro passo.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <FadeIn delay={0.1}>
              <div className="h-full bg-[#0a0a0a] border border-accent-gold/40 hover:border-accent-gold transition-colors p-6 md:p-8 rounded-sm flex flex-col relative w-full">
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent-gold mb-3">PRÓXIMO GRAU</span>
                <h3 className="font-serif text-xl md:text-2xl text-text-main font-bold mb-3">O Sistema que Une Riqueza e Mentalismo</h3>
                <p className="text-sm md:text-base text-text-muted leading-relaxed font-light mb-4 flex-1">
                  O Primeiro Grau te ensinou a construir. O Segundo te ensina a controlar — negociações, pessoas e sua própria mentalidade. A Maçonaria sempre soube que quem domina a mente domina o resultado.
                </p>
                <p className="text-xs text-text-faint italic mb-8">
                  Disponível por este preço apenas nesta página.
                </p>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-text-faint line-through text-base font-sans">R$47</span>
                  <span className="text-accent-gold text-3xl font-bold font-sans">R$17</span>
                </div>
                <a 
                  href="https://pay.kirvano.com/d72c1b7e-bb64-464d-8a60-e62a247f017d" 
                  target="_blank" rel="noopener noreferrer"
                  className="w-full text-center px-6 py-4 text-xs font-bold text-primary bg-accent-gold hover:bg-accent-gold-hover transition-all duration-300 rounded-sm tracking-widest uppercase flex-shrink-0"
                >
                  Quero O 2° Grau
                </a>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2}>
              <div className="h-full bg-[#0d0d0d] border-2 border-accent-gold shadow-[0_0_30px_rgba(201,168,76,0.15)] p-6 md:p-8 rounded-sm flex flex-col relative overflow-hidden w-full">
                <div className="absolute top-0 right-0 bg-accent-gold text-primary text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                  MELHOR VALOR
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent-gold mb-3 mt-1 md:mt-0">GRAU DO MESTRE</span>
                <h3 className="font-serif text-xl md:text-2xl text-text-main font-bold mb-3">Como a Ordem Estrutura, Protege e Prospera nas Crises</h3>
                <p className="text-sm md:text-base text-text-muted leading-relaxed font-light mb-4 flex-1">
                  Você já abriu o sistema. O Grau do Mestre é onde ele fica completo — os 3 volumes juntos: Renda, Poder e Imóveis. Blindagem tributária e o Manual da Crise. O mesmo sistema que manteve patrimônio intacto no Collor, na hiperinflação e em cada colapso do século XX e XXI.
                </p>
                <p className="text-xs text-text-faint italic mb-8">
                  Disponível por este preço apenas nesta página.
                </p>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-text-faint line-through text-base font-sans">R$97</span>
                  <span className="text-accent-gold text-3xl md:text-4xl font-bold font-sans">R$57</span>
                </div>
                <a 
                  href="https://pay.kirvano.com/39e8d7ad-ab05-43b9-abf0-5aad2af8d0e3" 
                  target="_blank" rel="noopener noreferrer"
                  className="w-full text-center px-6 py-4 text-xs font-bold text-primary bg-accent-gold hover:bg-accent-gold-hover transition-all duration-300 rounded-sm tracking-widest uppercase flex-shrink-0 shadow-[0_0_20px_rgba(201,168,76,0.2)]"
                >
                  Quero A Coleção Completa
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 bg-[#050505] text-center border-t border-border-subtle">
         <p className="text-text-faint text-xs tracking-widest uppercase">&copy; 2026 Mestre Solomon — Guarda do Conhecimento</p>
      </footer>
    </div>
  );
}

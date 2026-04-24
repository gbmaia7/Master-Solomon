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

export default function Mestre() {
  return (
    <div className="min-h-screen bg-primary selection:bg-accent-gold/30 flex flex-col">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent absolute top-0" />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-gold opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl w-full mx-auto relative z-10 space-y-12">
          
          <FadeIn className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-border-subtle px-4 py-2 rounded-sm mt-8">
              <Lock size={14} className="text-accent-gold" />
              <span className="text-xs tracking-widest uppercase font-bold text-accent-gold">MESTRE — GRAU DO MESTRE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-medium leading-[1.1] text-text-main tracking-tight">
              A Coleção Completa está em suas mãos.
            </h1>
            
            <p className="text-lg text-text-muted max-w-xl mx-auto font-light leading-relaxed">
              Três volumes. O sistema completo que a Ordem transmite apenas aos que chegam ao mais alto grau.
            </p>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn delay={0.2}>
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
                  BAIXAR VOLUME I
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              {/* Card 2 */}
              <div className="bg-[#050505] border border-border-subtle p-6 md:p-8 rounded-sm hover:border-accent-gold/30 transition-all group flex flex-col md:flex-row gap-6 md:items-center justify-between">
                <div className="space-y-3 flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent-gold">Grau II</span>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-text-main group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-gold group-hover:to-yellow-400 transition-all duration-300">
                    O Sistema que Une Riqueza e Mentalismo
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed font-light">
                    A Maçonaria sabia que a mente precede o patrimônio. O 2° Grau ensina o que vem antes do dinheiro — como negociar, influenciar e dominar sua mentalidade com vantagem
                  </p>
                </div>
                <a 
                  href="/arquivos/codigo-poder.pdf"
                  download="Codigo do Poder.pdf"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold text-primary bg-accent-gold hover:bg-accent-gold-hover transition-all duration-300 rounded-sm tracking-widest uppercase flex-shrink-0"
                >
                  <Download size={16} />
                  BAIXAR VOLUME II
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              {/* Card 3 */}
              <div className="bg-[#050505] border border-border-subtle p-6 md:p-8 rounded-sm hover:border-accent-gold/30 transition-all group flex flex-col md:flex-row gap-6 md:items-center justify-between">
                <div className="space-y-3 flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent-gold">Grau Mestre</span>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-text-main group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-gold group-hover:to-yellow-400 transition-all duration-300">
                    Como a Ordem Estrutura, Protege e Prospera nas Crises
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed font-light">
                    O sistema completo da Ordem. Imóveis, blindagem tributária e o Manual da Crise — como as famílias certas ficam mais ricas exatamente quando todos os outros perdem.
                  </p>
                </div>
                <a 
                  href="/arquivos/codigo-imobiliario.pdf"
                  download="Codigo Imobiliario.pdf"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold text-primary bg-accent-gold hover:bg-accent-gold-hover transition-all duration-300 rounded-sm tracking-widest uppercase flex-shrink-0"
                >
                  <Download size={16} />
                  BAIXAR VOLUME III
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-8 px-6 bg-[#050505] text-center border-t border-border-subtle mt-10">
         <p className="text-text-faint text-xs tracking-widest uppercase">&copy; 2026 Mestre Solomon — Guarda do Conhecimento</p>
      </footer>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from '../lib/i18n';
export function Features() {
  const t = useTranslations('Features');
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-square lg:aspect-[4/3] shadow-lg">
            
            <img
              src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800"
              alt={t('card1Title')}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/90"></div>
            <div className="absolute bottom-0 start-0 end-0 p-8 md:p-10">
              <h3 className="font-serif text-3xl font-bold text-white mb-4">
                {t('card1Title')}
              </h3>
              <p className="text-white/90 text-lg">{t('card1Desc')}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-square lg:aspect-[4/3] shadow-lg md:mt-24">
            
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
              alt={t('card2Title')}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/90"></div>
            <div className="absolute bottom-0 start-0 end-0 p-8 md:p-10">
              <h3 className="font-serif text-3xl font-bold text-white mb-4">
                {t('card2Title')}
              </h3>
              <p className="text-white/90 text-lg">{t('card2Desc')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
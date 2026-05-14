import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Beaker, Package, BookOpen } from 'lucide-react';
import type { Product } from '../data/products';
import { useLocale, useTranslations } from '../lib/i18n';
interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}
export function ProductModal({ product, onClose }: ProductModalProps) {
  const t = useTranslations('ProductModal');
  const locale = useLocale();
  useEffect(() => {
    if (!product) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', onKey);
    };
  }, [product, onClose]);
  return (
    <AnimatePresence>
      {product &&
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        aria-modal="true"
        role="dialog"
        aria-labelledby="product-modal-title">
        
          <div
          className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
          onClick={onClose} />
        

          <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.96
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.96
          }}
          transition={{
            type: 'spring',
            damping: 24,
            stiffness: 220
          }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden grid md:grid-cols-2">
          
            <button
            onClick={onClose}
            aria-label={t('close')}
            className="absolute top-4 end-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-colors">
            
              <X className="w-5 h-5" />
            </button>

            <div
            className={`relative ${product.bg} flex items-center justify-center p-8 md:p-12 min-h-[280px] md:min-h-full`}>
            
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
              <img
              src={product.image}
              alt={product.name[locale]}
              className="relative max-h-[280px] md:max-h-[440px] w-auto object-contain rounded-2xl shadow-xl" />
            
            </div>

            <div className="p-6 md:p-10 overflow-y-auto max-h-[90vh] md:max-h-none">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-cream text-brand-gold text-xs font-semibold uppercase tracking-wider mb-4">
                {product.category}
              </span>
              <h2
              id="product-modal-title"
              className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              
                {product.name[locale]}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.fullDescription[locale]}
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold tracking-wider text-brand-dark uppercase mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-gold" /> {t('benefits')}
                </h3>
                <ul className="space-y-2">
                  {product.benefits.map((b) =>
                <li
                  key={b.en}
                  className="flex items-start gap-2 text-sm text-gray-700">
                  
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                      {b[locale]}
                    </li>
                )}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold tracking-wider text-brand-dark uppercase mb-3 flex items-center gap-2">
                  <Beaker className="w-4 h-4 text-brand-gold" />{' '}
                  {t('ingredients')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((i) =>
                <span
                  key={i.en}
                  className="px-3 py-1 rounded-full bg-brand-cream border border-brand-pinkDark/40 text-xs text-brand-dark font-medium">
                  
                      {i[locale]}
                    </span>
                )}
                </div>
              </div>

              {product.directions &&
            <div className="mb-6">
                  <h3 className="text-sm font-semibold tracking-wider text-brand-dark uppercase mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-brand-gold" />{' '}
                    {t('directions')}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed bg-brand-cream/60 border border-brand-pinkDark/40 rounded-xl p-4">
                    {product.directions[locale]}
                  </p>
                </div>
            }

              <div className="mb-8">
                <h3 className="text-sm font-semibold tracking-wider text-brand-dark uppercase mb-3 flex items-center gap-2">
                  <Package className="w-4 h-4 text-brand-gold" /> {t('sizes')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) =>
                <span
                  key={s.en}
                  className="px-3 py-1.5 rounded-lg border border-brand-dark/10 text-sm text-brand-dark font-medium">
                  
                      {s[locale]}
                    </span>
                )}
                </div>
              </div>

              <a
              href="/#contact"
              onClick={onClose}
              className="block w-full text-center px-6 py-3.5 rounded-full bg-gradient-to-r from-brand-gold to-brand-goldLight text-white font-semibold shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/40 transition-all hover:-translate-y-0.5">
              
                {t('cta')}
              </a>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}
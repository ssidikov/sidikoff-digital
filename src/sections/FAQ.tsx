import common from '@/locales/fr/common.json'
import CTAButton from '@/components/ui/CTAButton'
import Section, { SectionHeader } from '@/components/ui/Section'
import { FAQAccordion, type FAQItem } from '@/components/FAQAccordion'

interface FAQProps {
  className?: string
  isHomePage?: boolean // Add prop to determine if on homepage
}

// Default FAQ data for fallback
const DEFAULT_FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    question: 'Combien de temps faut-il pour développer un site web ?',
    answer:
      "Le délai de développement varie selon la complexité du projet. Un site vitrine simple peut être réalisé en 2-3 semaines, tandis qu'un site e-commerce complexe peut nécessiter 6-8 semaines.",
    category: 'développement',
  },
  {
    id: '2',
    question: 'Proposez-vous la maintenance après livraison ?',
    answer:
      'Oui, nous proposons différents plans de maintenance incluant les mises à jour de sécurité, les sauvegardes, et le support technique. Nous restons disponibles pour faire évoluer votre site selon vos besoins.',
    category: 'maintenance',
  },
  {
    id: '3',
    question: 'Quelles technologies utilisez-vous ?',
    answer:
      'Nous utilisons des technologies modernes et éprouvées : React, Next.js, TypeScript pour le frontend, et diverses solutions backend selon les besoins du projet (Node.js, Python, etc.).',
    category: 'technique',
  },
  {
    id: '4',
    question: 'Le site sera-t-il optimisé pour mobile ?',
    answer:
      'Absolument ! Tous nos sites sont développés avec une approche "mobile-first" et sont entièrement responsives. Nous testons sur tous les types d\'appareils pour garantir une expérience optimale.',
    category: 'design',
  },
  {
    id: '5',
    question: 'Puis-je modifier le contenu de mon site moi-même ?',
    answer:
      'Oui, nous mettons en place des systèmes de gestion de contenu (CMS) intuitifs qui vous permettent de modifier facilement textes, images et pages sans connaissances techniques.',
    category: 'gestion',
  },
] as const



/**
 * FAQ section component with expandable items and responsive layout
 * Features smooth animations, accessibility, and analytics tracking
 */
export const FAQ = ({ className, isHomePage = false }: FAQProps) => {
  const dictionary = common.faq
  
  let faqItems: FAQItem[] = [...DEFAULT_FAQ_DATA]
  
  if (dictionary?.questions) {
    faqItems = Object.entries(dictionary.questions).map(([, item], index) => ({
      id: (index + 1).toString(),
      question: item.question || '',
      answer: item.answer || '',
      category: item.category || 'general',
    }))
  }

  return (
    <Section
      id='faq'
      variant='faq'
      background='transparent'
      padding='lg'
      contentWidth='wide'
      {...(className && { className })}>
      <div className='relative z-10'>
        <SectionHeader
          title={dictionary?.title || 'Questions Fréquentes'}
          subtitle={
            dictionary?.subtitle ||
            'Retrouvez les réponses aux questions les plus courantes sur nos services'
          }
          titleId='faq-title'
          as={isHomePage ? 'h2' : 'h1'}
          className='mb-10 text-left md:mb-16'
        />

        <FAQAccordion items={faqItems} />

        {/* Contact CTA */}
        <div className='mt-16 text-center'>
          <p className='mb-6 text-gray-600'>
            {dictionary?.cta?.description || 'Vous ne trouvez pas la réponse à votre question ?'}
          </p>
          <CTAButton
            href='/contact'
            variant='primary'
            trackingAction='faq_contact'
            trackingCategory='faq'
            ariaLabel={dictionary?.cta?.button || 'Contactez-nous'}>
            {dictionary?.cta?.button || 'Contactez-nous'}
            <svg className='ml-2 h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </CTAButton>
        </div>
      </div>
    </Section>
  )
}

export default FAQ

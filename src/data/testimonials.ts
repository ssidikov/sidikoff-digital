export interface Testimonial {
  id: string
  text: string
  author: string
  project: string
  rating: number
  date: string
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'new-2',
    text: "Excellent travail de la part de Sardorbek pour la création de notre landing page. Le résultat est impeccable et livré très rapidement. J'ai particulièrement apprécié sa réactivité et sa disponibilité. Je recommande vivement ses services.",
    author: 'Mathieu',
    project: 'Degaus',
    rating: 5,
    date: '2025-11-24',
  },
  {
    id: 'new-1',
    text: "Sardorbek a été hyper réactif, il a su répondre efficacement à mes demandes, une excellente communication et le résultat final est précisément ce que j'attendais, je ne peux que le recommander.",
    author: 'Laurent Carre',
    project: 'Websavoie - Gérant',
    rating: 5,
    date: '2025-11-12',
  },
  {
    id: '1',
    text: 'Sardor nous a aidés à corriger des erreurs sur notre site e-commerce qui causaient des problèmes sur la version mobile. Tout a été fait rapidement et avec professionnalisme, et le site fonctionne parfaitement maintenant.',
    author: 'Daniyar Rakhmetov',
    project: 'Site e-commerce',
    rating: 5,
    date: '2025-07-01',
  },
  {
    id: '2',
    text: "Sardor a réalisé le site de notre restaurant chinois Chez Liqi de manière professionnelle. Il a conçu un design moderne, une navigation intuitive et a soigné chaque détail pour refléter l'atmosphère de notre établissement. Nous sommes très satisfaits du résultat.",
    author: 'Équipe du restaurant Chez Liqi',
    project: 'Restaurant Chez Liqi',
    rating: 5,
    date: '2025-08-01',
  },
]
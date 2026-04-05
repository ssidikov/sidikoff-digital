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
    id: 'new-4',
    text: "Je recommande vivement Sardor pour la création de sites internet. C'est une personne extrêmement professionnelle, sérieuse et surtout digne de confiance. Dès le premier échange, on se sent tout de suite à l'aise, il est à l'écoute et très réactif. Il a réalisé le site de mon salon L'Instant Barbier, et le résultat est tout simplement excellent. Tous les retours que je reçois sont très positifs, le site est moderne, fluide et très professionnel. En plus de ses compétences techniques, Sardor est quelqu'un de très poli, respectueux et humain, ce qui rend la collaboration encore plus agréable. C'est un vrai plaisir de travailler avec lui. Je recommande les yeux fermés 💯",
    author: "L'Instant Barbier Paris",
    project: "Salon L'Instant Barbier",
    rating: 5,
    date: '2026-04-05',
  },
  {
    id: 'new-3',
    text: "Je tiens à laisser un avis très positif pour cette entreprise de développement web. Un ami m'a recommandé ce développeur et, dès le premier appel, j'ai immédiatement ressenti un vrai climat de confiance. Nous nous sommes rencontrés le jour même, preuve de son sérieux et de sa motivation. C'est une personne très professionnelle, à l'écoute, et surtout passionnée par son travail. Il prend vraiment le temps d'expliquer chaque étape, de A à Z, avec beaucoup de clarté, même sur les petits détails. On se sent tout de suite à l'aise avec lui, ce qui est très important lorsqu'on lance un projet. Le travail fourni est de grande qualité, soigné et créatif, avec un vrai sens du détail. Je recommande les yeux fermés, c'est un véritable professionnel en qui vous pouvez avoir totalement confiance.",
    author: 'Rayssen 4R',
    project: 'Projet de développement web',
    rating: 5,
    date: '2026-04-05',
  },
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

# 📋 CAHIER DES CHARGES COMPLET — Répar'Action Volets

**Dernière mise à jour** : 4 mars 2026  
**Version** : 3.0  
**Statut** : ✅ Production

---

## 1. IDENTITÉ & INFORMATIONS ENTREPRISE

| Champ | Valeur |
|-------|--------|
| **Nom** | Répar'Action Volets |
| **Adresse** | 62 Rue Emile Zola, 77610 Fontenay-Trésigny, FRANCE |
| **Téléphone** | 06 03 20 59 67 |
| **Email** | contact@reparaction-volets.fr |
| **Site** | https://reparaction-volets.fr |
| **Fondation** | 2014 |
| **Certifications** | RGE, Qualibat |

---

## 2. OBJECTIF STRATÉGIQUE

Créer un site web ultra-professionnel optimisé **SEO**, **GEO** (Generative Engine Optimization), **IA (SGE)** pour atteindre le **Top 3** sur toutes les recherches liées à la réparation de volets roulants et vitrerie en France.

### Règles impératives
- ❌ **Pas de mention "local"** : couverture nationale, Paris en priorité
- ❌ **Pas de chatbot** : formulaire de devis intelligent multi-étapes uniquement
- ✅ **Couverture nationale** affichée, Paris/IDF prioritaire pour les redirections actives

---

## 3. TECHNOLOGIES

| Composant | Technologie |
|-----------|-------------|
| Frontend | React 18, TypeScript, Tailwind CSS |
| Animations | Framer Motion |
| Routing | React Router DOM v6 |
| Build | Vite |
| UI Components | shadcn/ui |
| Backend (prévu) | Supabase (formulaires, auth) |

---

## 4. ARCHITECTURE DU SITE

### 4.1 Pages principales
| Route | Page | Statut |
|-------|------|--------|
| `/` | Page d'accueil | ✅ |
| `/a-propos` | Qui sommes-nous | ✅ |
| `/blog` | Blog SEO (18 articles) | ✅ |
| `/blog/:slug` | Article de blog | ✅ |
| `/zones-intervention` | Zones d'intervention | ✅ |
| `/zones-intervention/paris` | Page région Paris | ✅ |
| `/zones-intervention/ile-de-france` | Page région IDF | ✅ |
| `/mentions-legales` | Mentions légales | ✅ |
| `/politique-confidentialite` | Politique de confidentialité | ✅ |
| `/cgv` | CGV | ✅ |

### 4.2 Pages services (5 pages, 1500+ mots)
| Route | Service |
|-------|---------|
| `/services/reparation-volets-roulants` | Réparation Volets Roulants |
| `/services/installation-remplacement-volets` | Installation & Remplacement |
| `/services/vitrerie-remplacement-vitrage` | Vitrerie & Remplacement Vitrage |
| `/services/motorisation-domotique` | Motorisation & Domotique |
| `/services/depannage-express` | Dépannage Express |

### 4.3 Pages zones localisées (53 pages SEO)

**Paris — 20 arrondissements** : `/zones-intervention/reparation-volet-paris-[1-20]`

**Île-de-France — 33 villes** :
- **Hauts-de-Seine (92)** : Boulogne-Billancourt, Neuilly, Levallois-Perret, Courbevoie, Puteaux, La Défense, Sèvres, Saint-Cloud, Rueil-Malmaison
- **Seine-Saint-Denis (93)** : Saint-Denis, Montreuil, Bobigny, Pantin, Bagnolet, Noisy-le-Sec, Aubervilliers, Saint-Ouen
- **Val-de-Marne (94)** : Créteil, Vitry-sur-Seine, Ivry-sur-Seine, Villejuif, Fontenay-sous-Bois, Vincennes, Saint-Mandé
- **Yvelines (78)** : Versailles, Saint-Germain-en-Laye, Rambouillet, Mantes-la-Jolie
- **Essonne (91)** : Évry-Courcouronnes, Corbeil-Essonnes
- **Seine-et-Marne (77)** : Melun
- **Val-d'Oise (95)** : Cergy, Pontoise

Chaque page contient :
- H1 et métadonnées uniques
- Infos locales (population, repères, caractère)
- 6 services spécialisés
- 3 témoignages clients
- 8 questions fréquentes
- Maillage vers villes limitrophes
- Image locale unique
- Schema.org LocalBusiness + FAQPage

---

## 5. SECTIONS PAGE D'ACCUEIL (ordre)

1. **Navbar** — Navigation sticky avec liens + CTA
2. **HeroSection** — Parallaxe, CTA principal, badges confiance
3. **ServicesSection** — 5 cartes services avec images et badges colorés
4. **QuoteFormSection** — Formulaire de devis multi-étapes
5. **AboutSection** — Présentation entreprise, chiffres clés
6. **ProcessSection** — 4 étapes (timeline visuelle)
7. **ImageTextSection** — Section image + texte expertise
8. **TestimonialsSection** — Avis clients
9. **ServiceRegionsSection** — Toutes les régions de France (dépliable, redirections actives uniquement pour Paris/IDF)
10. **FAQSection** — FAQ avec Schema.org
11. **ContactSection** — Coordonnées + map
12. **Footer** — Liens, légal, réseaux

### 5.1 Sections pages internes (services, à propos, etc.)
Chaque page interne affiche une section **LocalZonesGrid** en bas de page, montrant 12 zones Paris/IDF dans un **ordre différent** (shuffle déterministe basé sur l'identifiant de la page). Ceci assure un maillage interne varié et un contenu unique par page pour le SEO.

---

## 6. DESIGN SYSTEM

### Palette de couleurs (tokens sémantiques)
- `--primary` : Bleu principal
- `--accent` : Orange CTA
- `--service-blue`, `--service-orange`, `--service-emerald`, `--service-violet`, `--service-rose`, `--service-cyan` : Badges par service
- `--background`, `--foreground`, `--muted`, `--muted-foreground` : Textes et fonds

### Typography
- **Display** : Font-display (titres)
- **Body** : Font sans-serif (texte)

### Composants réutilisables
- Badges colorés par service
- Cartes avec `card-shadow` / `card-shadow-hover`
- Boutons : `variant="accent"`, `variant="accent-outline"`
- Sections avec `bg-section-gradient`

---

## 7. SEO & GEO

### On-Page SEO
- ✅ H1 unique par page avec mots-clés
- ✅ Meta description unique < 160 chars
- ✅ URLs SEO-friendly
- ✅ Balises ALT sur images
- ✅ Maillage interne contextuel
- ✅ Sitemap XML
- ✅ Robots.txt

### Schema.org
- ✅ LocalBusiness (enrichi : @id, foundingDate, hasCredential RGE/Qualibat)
- ✅ Service (pages services)
- ✅ FAQPage (accueil + pages zones)
- ✅ BreadcrumbList (sous-pages)
- ✅ HowTo ("Comment faire réparer un volet roulant ?")
- ✅ AggregateRating
- ✅ Organization (contactPoint)

### Mots-clés principaux
- Réparation volet roulant Paris
- Installation volet roulant
- Motorisation volet
- Dépannage volet urgence
- Vitrerie Paris
- Volet bloqué
- Artisan RGE volets

### Blog SEO (18 articles)
Sujets : entretien volets, comparatifs marques (Somfy vs Bubendorff), guides motorisation, économies d'énergie, aides financières, volets solaires, articles hyper-locaux (Marais, Montmartre, Haussmann, Grands Boulevards, Neuilly)

---

## 8. PERFORMANCE & ACCESSIBILITÉ

### Core Web Vitals cibles
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

### Optimisations
- ✅ Lazy loading images
- ✅ Preconnect fonts / DNS-prefetch
- ✅ Code splitting
- ✅ Images WebP optimisées
- ✅ Responsive mobile-first

### Breakpoints
- Mobile : < 640px (1 colonne)
- Tablet : 640-1024px (2 colonnes)
- Desktop : > 1024px (3+ colonnes)

---

## 9. CE QUI RESTE À FAIRE

### 🔴 Priorité haute
- [ ] **Connexion Supabase** : formulaire de devis fonctionnel (envoi emails, stockage données)
- [ ] **Harmonisation visuelle complète** : vérifier que TOUTES les pages (services, blog, zones, légales) utilisent les mêmes tokens de design, couleurs, espacements et styles de cartes que la page d'accueil

### 🟡 Priorité moyenne
- [ ] **Google Business Profile** : configuration et optimisation
- [ ] **Pages régions hors IDF** : activer les redirections vers des pages dédiées quand le contenu sera prêt (actuellement les cartes régions redirigent vers /zones-intervention)
- [ ] **Optimisation images existantes** : vérifier poids, dimensions, alt-text de toutes les images
- [ ] **Tests E2E** : vérifier tous les liens, redirections et le rendu mobile sur chaque page

### 🟢 Priorité basse
- [ ] **Analytics** : Google Analytics / Tag Manager
- [ ] **Avis Google** : intégration widget avis réels
- [ ] **Newsletter** : capture email pour fidélisation
- [ ] **Chat en direct** : WhatsApp Business API (optionnel)

### ✅ Terminé récemment
- [x] Images uniques pour les 53 pages de zone (Vincennes & Vitry-sur-Seine inclus)
- [x] Suppression de la section RegionsSection (arrondissements/banlieue) de la page d'accueil
- [x] Section LocalZonesGrid avec ordre aléatoire différent par page sur toutes les pages internes
- [x] Consolidation documentation en fichier unique CAHIER_DES_CHARGES.md
- [x] Section ServiceRegionsSection (régions de France) visible et dépliable sur la page d'accueil

---

## 10. HISTORIQUE DES VERSIONS

| Version | Date | Changements |
|---------|------|-------------|
| 3.0 | 04/03/2026 | Consolidation documentation, 18 articles blog, harmonisation design, section régions France complète |
| 2.0 | 23/02/2026 | 53 pages localisées, animations avancées, mobile-first |
| 1.5 | 22/02/2026 | Animations et effets visuels |
| 1.0 | 22/02/2026 | Création initiale, SEO/GEO |

---

## 11. DÉPLOIEMENT

```bash
# Installation
pnpm install

# Développement
pnpm run dev

# Build production
pnpm run build

# Vérification TypeScript
pnpm run check
```

### Checklist pré-déploiement
- [ ] Vérifier types TypeScript
- [ ] Tester toutes les pages
- [ ] Vérifier responsivité mobile
- [ ] Tester animations
- [ ] Vérifier liens internes
- [ ] Vérifier métadonnées SEO
- [ ] Tester formulaires
- [ ] Vérifier images
- [ ] Tester multi-navigateurs
- [ ] Vérifier Core Web Vitals

---

**Répar'Action Volets — Cahier des charges v3.0**

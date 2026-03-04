import { useMemo } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

// Toutes les zones Paris & IDF avec liens actifs
const allLocalZones = [
  { name: "Paris 1er — Louvre", slug: "reparation-volet-paris-1" },
  { name: "Paris 2ème — Sentier", slug: "reparation-volet-paris-2" },
  { name: "Paris 3ème — Marais", slug: "reparation-volet-paris-3" },
  { name: "Paris 4ème — Notre-Dame", slug: "reparation-volet-paris-4" },
  { name: "Paris 5ème — Quartier Latin", slug: "reparation-volet-paris-5" },
  { name: "Paris 6ème — Saint-Germain", slug: "reparation-volet-paris-6" },
  { name: "Paris 7ème — Tour Eiffel", slug: "reparation-volet-paris-7" },
  { name: "Paris 8ème — Champs-Élysées", slug: "reparation-volet-paris-8" },
  { name: "Paris 9ème — Opéra", slug: "reparation-volet-paris-9" },
  { name: "Paris 10ème — Gare du Nord", slug: "reparation-volet-paris-10" },
  { name: "Paris 11ème — Bastille", slug: "reparation-volet-paris-11" },
  { name: "Paris 12ème — Bercy", slug: "reparation-volet-paris-12" },
  { name: "Paris 13ème — Bibliothèque", slug: "reparation-volet-paris-13" },
  { name: "Paris 14ème — Montparnasse", slug: "reparation-volet-paris-14" },
  { name: "Paris 15ème — Convention", slug: "reparation-volet-paris-15" },
  { name: "Paris 16ème — Trocadéro", slug: "reparation-volet-paris-16" },
  { name: "Paris 17ème — Batignolles", slug: "reparation-volet-paris-17" },
  { name: "Paris 18ème — Montmartre", slug: "reparation-volet-paris-18" },
  { name: "Paris 19ème — Buttes-Chaumont", slug: "reparation-volet-paris-19" },
  { name: "Paris 20ème — Belleville", slug: "reparation-volet-paris-20" },
  { name: "Boulogne-Billancourt (92)", slug: "reparation-volet-boulogne-billancourt" },
  { name: "Neuilly-sur-Seine (92)", slug: "reparation-volet-neuillysur-seine" },
  { name: "Levallois-Perret (92)", slug: "reparation-volet-levallois-perret" },
  { name: "Courbevoie (92)", slug: "reparation-volet-courbevoie" },
  { name: "La Défense (92)", slug: "reparation-volet-la-defense" },
  { name: "Saint-Denis (93)", slug: "reparation-volet-saint-denis" },
  { name: "Montreuil (93)", slug: "reparation-volet-montreuil" },
  { name: "Pantin (93)", slug: "reparation-volet-pantin" },
  { name: "Créteil (94)", slug: "reparation-volet-creteil" },
  { name: "Vincennes (94)", slug: "reparation-volet-vincennes" },
  { name: "Versailles (78)", slug: "reparation-volet-versailles" },
  { name: "Saint-Germain-en-Laye (78)", slug: "reparation-volet-saint-germainen-laye" },
];

// Shuffle déterministe basé sur un seed (string → nombre)
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const shuffled = [...arr];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 16807 + 12345) % 2147483647;
    const j = s % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

interface LocalZonesGridProps {
  /** Identifiant unique de la page pour varier l'ordre (ex: nom de la page) */
  pageId: string;
  /** Nombre de zones à afficher (default 12) */
  count?: number;
}

const LocalZonesGrid = ({ pageId, count = 12 }: LocalZonesGridProps) => {
  const zones = useMemo(() => {
    const seed = hashString(pageId);
    return seededShuffle(allLocalZones, seed).slice(0, count);
  }, [pageId, count]);

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge variant="serviceOrange" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-3">
            <MapPin className="h-3.5 w-3.5" /> Nos Zones d'Intervention
          </Badge>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Intervention rapide à Paris & en Île-de-France
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {zones.map((zone, i) => (
            <motion.div
              key={zone.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <Link
                to={`/zones-intervention/${zone.slug}`}
                className="group flex items-center gap-2 rounded-xl p-3 border border-border bg-card hover:border-accent/30 hover:shadow-md transition-all"
              >
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors truncate">
                  {zone.name}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/zones-intervention"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all text-sm"
          >
            Voir toutes nos zones d'intervention <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocalZonesGrid;

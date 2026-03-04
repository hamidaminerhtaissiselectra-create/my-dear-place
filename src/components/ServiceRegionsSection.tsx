import { motion } from "framer-motion";
import { MapPin, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Region {
  name: string;
  depts: string;
  color: string;
  image: string;
  link?: string; // undefined = inactive
}

const activeRegions: Region[] = [
  { 
    name: "Paris (75)", 
    depts: "75001 à 75020", 
    color: "bg-service-blue/5 border-service-blue/20",
    image: "/images/zones/paris.webp",
    link: "/zones-intervention/paris",
  },
  { 
    name: "Île-de-France", 
    depts: "77, 78, 91, 92, 93, 94, 95", 
    color: "bg-service-emerald/5 border-service-emerald/20",
    image: "/images/zones/ile-de-france.webp",
    link: "/zones-intervention/ile-de-france",
  },
  { 
    name: "Rive Gauche & Ouest", 
    depts: "75005-07, 75014-15, 92", 
    color: "bg-service-violet/5 border-service-violet/20",
    image: "/images/zones/rive-gauche.webp",
    link: "/zones-intervention/paris",
  },
  { 
    name: "Rive Droite — Centre & Nord", 
    depts: "75001-04, 75008-11, 75016-20", 
    color: "bg-service-orange/5 border-service-orange/20",
    image: "/images/zones/rive-droite.webp",
    link: "/zones-intervention/paris",
  },
  { 
    name: "Petite Couronne", 
    depts: "92, 93, 94", 
    color: "bg-service-rose/5 border-service-rose/20",
    image: "/images/zones/petite-couronne.webp",
    link: "/zones-intervention/ile-de-france",
  },
];

const otherRegions: Region[] = [
  { name: "Hauts-de-France", depts: "02, 59, 60, 62, 80", color: "bg-service-cyan/5 border-service-cyan/20", image: "/images/zones/hauts-de-france.webp" },
  { name: "Grand Est", depts: "08, 10, 51, 52, 54, 55, 57, 67, 68, 88", color: "bg-service-blue/5 border-service-blue/20", image: "/images/zones/grand-est.webp" },
  { name: "Normandie", depts: "14, 27, 50, 61, 76", color: "bg-service-emerald/5 border-service-emerald/20", image: "/images/zones/normandie.webp" },
  { name: "Bretagne", depts: "22, 29, 35, 56", color: "bg-service-violet/5 border-service-violet/20", image: "/images/zones/bretagne.webp" },
  { name: "Pays de la Loire", depts: "44, 49, 53, 72, 85", color: "bg-service-orange/5 border-service-orange/20", image: "/images/zones/pays-de-la-loire.webp" },
  { name: "Centre-Val de Loire", depts: "18, 28, 36, 37, 41, 45", color: "bg-service-rose/5 border-service-rose/20", image: "/images/zones/centre-val-de-loire.webp" },
  { name: "Bourgogne-Franche-Comté", depts: "21, 25, 39, 58, 70, 71, 89, 90", color: "bg-service-cyan/5 border-service-cyan/20", image: "/images/zones/bourgogne-franche-comte.webp" },
  { name: "Nouvelle-Aquitaine", depts: "16, 17, 19, 23, 24, 33, 40, 47, 64, 79, 86, 87", color: "bg-service-blue/5 border-service-blue/20", image: "/images/zones/nouvelle-aquitaine.webp" },
  { name: "Occitanie", depts: "09, 11, 12, 30, 31, 32, 34, 46, 48, 65, 66, 81, 82", color: "bg-service-orange/5 border-service-orange/20", image: "/images/zones/occitanie.webp" },
  { name: "Auvergne-Rhône-Alpes", depts: "01, 03, 07, 15, 26, 38, 42, 43, 63, 69, 73, 74", color: "bg-service-emerald/5 border-service-emerald/20", image: "/images/zones/auvergne-rhone-alpes.webp" },
  { name: "Provence-Alpes-Côte d'Azur", depts: "04, 05, 06, 13, 83, 84", color: "bg-service-violet/5 border-service-violet/20", image: "/images/zones/paca.webp" },
];

const RegionCard = ({ r, i }: { r: Region; i: number }) => {
  const isActive = !!r.link;

  const content = (
    <>
      <div className="relative h-40 w-full overflow-hidden rounded-t-2xl shadow-md">
        <img 
          src={r.image} 
          alt={`Réparation volets roulants ${r.name}`} 
          className={`h-full w-full object-cover transition-transform duration-1000 ${isActive ? "group-hover:scale-105" : "grayscale-[30%]"}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5" />
        {!isActive && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="text-[10px] bg-white/80 text-muted-foreground">
              Bientôt disponible
            </Badge>
          </div>
        )}
      </div>
      <div className={`flex-1 p-5 rounded-b-2xl border border-t-0 transition-all duration-500 ${isActive ? "card-shadow group-hover:card-shadow-hover" : "opacity-80"} ${r.color}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm border border-white/20 bg-white/80 text-muted-foreground">
            <MapPin className="h-4 w-4" />
          </div>
          <h3 className="text-base font-bold text-foreground">{r.name}</h3>
        </div>
        <div className="text-[10px] text-muted-foreground font-medium mb-4">
          <span className="px-2 py-1 rounded-md bg-black/5">Dépts : {r.depts}</span>
        </div>
        <div className={`mt-auto flex items-center gap-2 text-xs font-semibold transition-all duration-300 ${isActive ? "text-accent group-hover:gap-3" : "text-muted-foreground/50"}`}>
          {isActive ? "Voir les détails" : "Prochainement"} <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      key={r.name}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="group flex flex-col"
    >
      {isActive ? (
        <Link to={r.link!} className="flex flex-col h-full">{content}</Link>
      ) : (
        <div className="flex flex-col h-full cursor-default">{content}</div>
      )}
    </motion.div>
  );
};

const ServiceRegionsSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-16 bg-section-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <Badge variant="serviceBlue" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            <MapPin className="h-3.5 w-3.5" /> Nos Régions d'Intervention
          </Badge>
          <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-4">
            Nos Régions d'Intervention en France
          </h2>
          <p className="text-muted-foreground">
            Nous couvrons prioritairement Paris et toute l'Île-de-France. D'autres régions seront bientôt disponibles.
          </p>
        </motion.div>

        {/* Active: Paris & IDF */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {activeRegions.map((r, i) => (
            <RegionCard key={r.name} r={r} i={i} />
          ))}
        </div>

        {/* Other regions - expandable */}
        {!showAll ? (
          <div className="text-center">
            <Button onClick={() => setShowAll(true)} variant="outline" className="rounded-full border-accent/30 text-accent hover:bg-accent/10">
              Voir toutes les régions de France <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherRegions.map((r, i) => (
                <RegionCard key={r.name} r={r} i={i} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button onClick={() => setShowAll(false)} variant="outline" size="sm" className="rounded-full border-accent/30 text-accent hover:bg-accent/10">
                Masquer <ChevronUp className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </>
        )}

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          className="mt-10 text-center"
        >
          <Link 
            to="/zones-intervention"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            Voir toutes nos zones d'intervention <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceRegionsSection;

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const regions = [
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

const ServiceRegionsSection = () => (
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
          <MapPin className="h-3.5 w-3.5" /> Zones d'intervention
        </Badge>
        <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-4">
          Où Intervenons-Nous ?
        </h2>
        <p className="text-muted-foreground">
          Nous couvrons prioritairement Paris et toute l'Île-de-France pour des interventions rapides sous 24h-48h.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {regions.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group flex flex-col"
          >
            <Link to={r.link} className="flex flex-col h-full">
              <div className="relative h-40 w-full overflow-hidden rounded-t-2xl shadow-md">
                <img 
                  src={r.image} 
                  alt={`Réparation volets roulants ${r.name}`} 
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>
              <div className={`flex-1 p-5 rounded-b-2xl border border-t-0 transition-all duration-500 card-shadow group-hover:card-shadow-hover ${r.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm border border-white/20 bg-white/80 text-muted-foreground">
                     <MapPin className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {r.name}
                  </h3>
                </div>
                <div className="text-[10px] text-muted-foreground font-medium mb-4">
                  <span className="px-2 py-1 rounded-md bg-black/5">Dépts : {r.depts}</span>
                </div>
                <div className="mt-auto flex items-center gap-2 text-xs font-semibold text-accent transition-all duration-300 group-hover:gap-3">
                  Voir les détails <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

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

export default ServiceRegionsSection;

import { motion } from "framer-motion";
import { TreePine, Droplets, Users, MapPin } from "lucide-react";

const stats = [
  { icon: TreePine, value: "3,50,000+", label: "Trees Planted", color: "text-primary" },
  { icon: Droplets, value: "45+", label: "Rivers Restored", color: "text-sky" },
  { icon: Users, value: "15,000+", label: "Farmers Supported", color: "text-earth" },
  { icon: MapPin, value: "50,000+", label: "Volunteers Engaged", color: "text-leaf" },
];

const ImpactStats = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">Our Impact</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Over a decade of dedicated environmental action, creating lasting change.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
            <s.icon className={`w-10 h-10 mx-auto mb-3 ${s.color}`} />
            <p className="font-serif text-3xl md:text-4xl text-foreground">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactStats;

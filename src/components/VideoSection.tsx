import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const videos = [
  { id: "dQw4w9WgXcQ", title: "BaelTrees – Our Journey So Far", description: "Watch how BaelTrees has been transforming landscapes and empowering communities across India." },
  { id: "ScMzIvxBSi4", title: "Mega Plantation Drive 2025", description: "Highlights from our annual mega plantation event that brought 5,000 volunteers together." },
  { id: "LXb3EKWsInQ", title: "Lake Restoration Success Story", description: "See how we revived a dying urban lake back to its full ecological glory." },
];

const VideoSection = () => {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">Watch & Learn</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Videos & Documentaries</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">See our impact in action through stories from the field.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg overflow-hidden border border-border bg-background"
            >
              <div className="relative aspect-video bg-muted cursor-pointer group" onClick={() => setPlaying(playing === i ? null : i)}>
                {playing === i ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={v.title}
                  />
                ) : (
                  <>
                    <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/30 group-hover:bg-foreground/40 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-serif text-base text-foreground mb-1">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

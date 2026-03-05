import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pastDriveEvents = [
  { date: "Jan 26, 2019", title: "Republic Day Plantation", location: "Bengaluru", attendees: "800", trees: "3,000", img: "/paper_cutting_img/500091900205_287517_result.webp" },
  { date: "Nov 1, 2019", title: "Green Diwali Drive", location: "Delhi", attendees: "1,200", trees: "5,000", img: "/paper_cutting_img/500142000796_70865_result.webp" },
  { date: "Aug 15, 2019", title: "Independence Day Forest Walk", location: "Mysuru", attendees: "2,000", trees: "8,000", img: "/paper_cutting_img/500153400920_207043_result.webp" },
  { date: "Jun 5, 2019", title: "World Environment Day 2019", location: "Mumbai", attendees: "3,500", trees: "12,000", img: "/paper_cutting_img/IMG_20190712_124233_result.webp" },
];

const EventsSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
        <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">Our Events</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">Past Drives</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Join us on the ground and be part of our mission.</p>
      </motion.div>

      {/* Past Drives with Images */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pastDriveEvents.map((e, i) => (
          <motion.div key={e.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-secondary/50 rounded-lg border border-border overflow-hidden flex flex-col">
            <div className="h-40 overflow-hidden group relative">
              <a href={e.img} target="_blank" rel="noopener noreferrer">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" loading="lazy" />
              </a>
              <a 
                href={e.img} 
                download={e.title + ".webp"}
                className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                title="Download"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </a>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium mb-2">
                <CheckCircle className="w-4 h-4 text-primary" />{e.date}
              </div>
              <h4 className="font-serif text-lg text-foreground mb-2">{e.title}</h4>
              <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                <MapPin className="w-3.5 h-3.5" />{e.location}
              </div>
              <div className="flex gap-3 text-xs mt-auto">
                <span className="text-primary font-medium">{e.attendees} volunteers</span>
                <span className="text-accent font-medium">{e.trees} trees</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button asChild>
          <Link to="/events">View All Events</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default EventsSection;

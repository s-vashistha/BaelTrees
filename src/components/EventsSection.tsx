import { motion } from "framer-motion";
import { CalendarDays, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const upcomingEvents = [
  { date: "Mar 15, 2026", title: "World Forest Day Mega Plantation", location: "Bengaluru", spots: 250 },
  { date: "Apr 5, 2026", title: "Lake Cleanup & Bird Walk", location: "Hyderabad", spots: 80 },
  { date: "Apr 22, 2026", title: "Earth Day Workshop", location: "Mumbai", spots: 150 },
  { date: "May 10, 2026", title: "Corporate Greening Drive", location: "Pune", spots: 200 },
];

const pastEvents = [
  { date: "Jan 26, 2026", title: "Republic Day Plantation", location: "Bengaluru", attendees: "800", trees: "3,000" },
  { date: "Nov 1, 2025", title: "Green Diwali Drive", location: "Delhi", attendees: "1,200", trees: "5,000" },
  { date: "Aug 15, 2025", title: "Independence Day Forest Walk", location: "Mysuru", attendees: "2,000", trees: "8,000" },
  { date: "Jun 5, 2025", title: "World Environment Day 2025", location: "Mumbai", attendees: "3,500", trees: "12,000" },
];

const EventsSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
        <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">Our Events</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">Upcoming & Past Drives</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Roll up your sleeves and join us on the ground.</p>
      </motion.div>

      {/* Upcoming */}
      <h3 className="font-serif text-xl text-foreground mb-4">🗓️ Upcoming Events</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {upcomingEvents.map((e, i) => (
          <motion.div key={e.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-background rounded-lg border border-border p-5 flex flex-col">
            <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
              <CalendarDays className="w-4 h-4" />{e.date}
            </div>
            <h4 className="font-serif text-lg text-foreground mb-2">{e.title}</h4>
            <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
              <MapPin className="w-3.5 h-3.5" />{e.location}
            </div>
            <p className="text-xs text-muted-foreground mb-4">{e.spots} spots available</p>
            <Button variant="outline" size="sm" className="mt-auto w-fit" asChild>
              <Link to="/events">Register</Link>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Past */}
      <h3 className="font-serif text-xl text-foreground mb-4">✅ Past Events</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pastEvents.map((e, i) => (
          <motion.div key={e.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-secondary/50 rounded-lg border border-border p-5 flex flex-col">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium mb-3">
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
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsSection;

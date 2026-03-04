import { TreePine, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-foreground text-primary-foreground/80 py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-primary-foreground font-serif text-xl mb-3">
              <TreePine className="w-6 h-6" />
              BaelTrees
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/60 mb-5 max-w-sm">
              BaelTrees Environmental Trust works towards building a greener, sustainable future through community-driven action across India.
            </p>
            <div className="mb-4">
              <p className="text-xs uppercase tracking-wider text-primary-foreground/40 mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="bg-primary-foreground/10 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm rounded-md px-3 py-2 flex-1 focus:outline-none focus:ring-1 focus:ring-primary" />
                <Button size="sm" className="shrink-0"><Send className="w-4 h-4" /></Button>
              </div>
            </div>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Work", path: "/our-work" },
                { label: "Our Team", path: "/team" },
                { label: "Get Involved", path: "/get-involved" },
                { label: "Donate", path: "/donate" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="hover:text-primary-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-3 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Events", path: "/events" },
                { label: "Gallery", path: "/gallery" },
                { label: "Resources", path: "/resources" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="hover:text-primary-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-3 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />Bengaluru, Karnataka, India</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" />info@BaelTrees.org</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" />+91 80 1234 5678</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} BaelTrees Environmental Trust. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

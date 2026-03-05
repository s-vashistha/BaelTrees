import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import founderImg from "@/assets/founder.jpg";
import missionImage from "@/assets/mission-image.jpg";
import projectUrban from "@/assets/project-urban.jpg";
import projectLake from "@/assets/project-lake.jpg";
import projectAgroforestry from "@/assets/project-agroforestry.jpg";
import projectWater from "@/assets/project-water.jpg";
import projectEnergy from "@/assets/project-energy.jpg";
import donateHero from "@/assets/donate-hero.jpg";

const teamMembers = [
  { name: "Rajendra Hegde", role: "Founder & Chairman", image: founderImg, instagram: "#", facebook: "#", twitter: "#" },
  { name: "Arjun Menon", role: "Executive Director", image: missionImage, instagram: "#", facebook: "#", twitter: "#" },
  { name: "Lakshmi Prasad", role: "Head of Programs", image: projectUrban, instagram: "#", facebook: "#", twitter: "#" },
  { name: "Vikram Rao", role: "Director of Partnerships", image: projectLake, instagram: "#", facebook: "#", twitter: "#" },
  { name: "Meera Deshpande", role: "Head of Communications", image: projectAgroforestry, instagram: "#", facebook: "#", twitter: "#" },
  { name: "Suresh Kumar", role: "Field Operations Lead", image: projectWater, instagram: "#", facebook: "#", twitter: "#" },
  { name: "Anita Sharma", role: "Finance & Compliance", image: projectEnergy, instagram: "#", facebook: "#", twitter: "#" },
  { name: "Kavitha Nair", role: "Volunteer Coordinator", image: donateHero, instagram: "#", facebook: "#", twitter: "#" },
];

const TeamPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-16 md:pt-20">
      <PageHero title="Meet Our Team" subtitle="The passionate people behind BaelTrees who dedicate their lives to a greener planet." image={aboutHero} />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">Our People</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Leadership & Team</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Hover overlay with left-aligned social icons and centered name/role */}
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex">
                    {/* Left side - Social media icons vertically aligned */}
                    <div className="flex flex-col justify-center gap-3 pl-4">
                      <a href={member.instagram} className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors" aria-label="Instagram">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href={member.facebook} className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors" aria-label="Facebook">
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a href={member.twitter} className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors" aria-label="Twitter">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                    
                    {/* Center - Name and role */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="font-serif text-lg text-white font-semibold mb-1">{member.name}</h3>
                        <p className="text-white/90 text-sm">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Remove the name and role from here since they're now in the overlay */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default TeamPage;
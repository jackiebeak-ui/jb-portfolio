/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Mail, 
  Share2, 
  Phone, 
  Download, 
  Hospital, 
  Activity, 
  Stethoscope, 
  Wind, 
  ShieldCheck,
  Users,
  Award,
  Heart,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-outline-variant">
        <div className="flex justify-between items-center px-6 h-16 max-w-7xl mx-auto">
          <div className="text-lg font-bold text-on-surface tracking-tighter">Jackie Beak.</div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#experience">Experience</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#expertise">Expertise</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#credentials">Credentials</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a className="hidden sm:block text-on-surface-variant hover:text-primary transition-all text-sm font-medium" href="mailto:gb2367@nyu.edu">Email Me</a>
            <button className="bg-primary text-on-primary px-5 py-2 rounded-lg text-sm font-bold active:scale-95 transition-transform flex items-center gap-2">
              <Download size={16} />
              Download CV
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-outline-variant bg-surface-container-low text-primary text-xs font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Clinical Professional
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-on-surface leading-[1.1]">
              Certified Clinical <br/>
              <span className="text-primary">Transplant Nurse</span> &amp; <br/>
              Adult-Gerontology NP Student
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl">
              Jackie Beak, BSN, RN, CCTN. Over 4 years of clinical experience in high-acuity surgical care, currently pursuing M.S. in Adult-Gerontology Primary Care at Hunter College.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all">View Expertise</button>
              <button className="border border-outline-variant text-on-surface px-8 py-3 rounded-lg font-bold hover:bg-surface-container transition-all active:scale-95">Read Resume</button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-outline-variant shadow-2xl bg-surface-container">
              <img 
                alt="Jackie Beak" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/ADBb0ujUDir1FpI9TNrRZsTATFWb5-XDe4bHiLkAJF3GUR4kzXfM7-7UZC1-5c_1y5f-Cr04OxlCDTci49U4w0xY09zd2dkUsVrhRjpegiSuOoj4O1lTs1OyTd4pwHA29zOnJuynsheQPEfwEJUsn10I7dpAch9TTDMz0GGP5Au8JWfTJUH7OmJpFSYJV8sNG0yTeNCWHZgcZgfZw4W-uJG3TwfYkBktBkyHu-lzkjjPhzLCoZoWXSi88ME6ZMhoHCAkO50uBdk4pnxcyg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-8 -left-8 bg-surface-container border border-outline-variant p-4 rounded-xl shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Stethoscope size={20} />
                </div>
                <div>
                  <div className="text-xs text-on-surface-variant">Current Focus</div>
                  <div className="text-sm font-bold text-on-surface">Adult-Gerontology NP Student</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="max-w-7xl mx-auto px-6 py-20" id="experience">
          <motion.div 
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-on-surface">Clinical Experience</h2>
              <p className="text-on-surface-variant max-w-md">Career progression across premier medical institutions in New York City.</p>
            </div>
            <div className="h-px flex-1 bg-outline-variant mx-8 hidden md:block"></div>
            <span className="text-primary font-mono text-sm tracking-widest">2021 — PRESENT</span>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Card 1 */}
            <motion.div 
              className="bg-surface-container border border-outline-variant rounded-xl p-8 hover:border-primary/50 transition-colors group"
              variants={fadeIn}
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                  <Hospital size={24} />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">02/2022 - Present</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-2">Staff RN, Solid Organ Transplant Unit</h3>
              <p className="text-on-surface-variant text-sm mb-6 font-medium">NYP Columbia University Irving Medical Center</p>
              <ul className="space-y-3 text-sm text-on-surface-variant mb-6">
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-primary mt-1 shrink-0" />
                  <span><b>Unit Practice Council (UPC):</b> Represent nursing staff within the Unit Practice Council, driving shared governance initiatives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-primary mt-1 shrink-0" />
                  <span><b>Patient Advocacy &amp; Safety:</b> Oversee recovery of kidney, liver, heart, and lung transplant recipients.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-primary mt-1 shrink-0" />
                  <span><b>Advanced Infusion:</b> Expertly administer high-risk transplant therapies and titrate high-alert drips.</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-low border border-outline-variant text-[11px] font-medium rounded-full text-on-surface-variant">Step-Down Unit</span>
                <span className="px-3 py-1 bg-surface-container-low border border-outline-variant text-[11px] font-medium rounded-full text-on-surface-variant">Multi-Organ Recovery</span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-surface-container border border-outline-variant rounded-xl p-8 hover:border-primary/50 transition-colors group"
              variants={fadeIn}
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                  <Activity size={24} />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">04/2021 - 01/2022</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-2">Staff RN, PACU</h3>
              <p className="text-on-surface-variant text-sm mb-6 font-medium">NYU Langone Orthopedic Hospital</p>
              <ul className="space-y-3 text-sm text-on-surface-variant mb-6">
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-primary mt-1 shrink-0" />
                  <span><b>Vigilant Monitoring:</b> Conducted systematic physical assessments for post-surgical patients.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-primary mt-1 shrink-0" />
                  <span><b>Rapid Intervention:</b> Swiftly managed acute post-operative complications and coordinated with anesthesiologists.</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-low border border-outline-variant text-[11px] font-medium rounded-full text-on-surface-variant">Post-Anesthesia Care</span>
                <span className="px-3 py-1 bg-surface-container-low border border-outline-variant text-[11px] font-medium rounded-full text-on-surface-variant">Acute Assessment</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Expertise Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 bg-surface-container-low rounded-3xl my-20 border border-outline-variant" id="expertise">
          <motion.div 
            className="mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-4">Core Clinical Expertise</h2>
            <p className="text-on-surface-variant">Detailed technical proficiency and specialized acute care management.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: <Activity size={20} />, title: "Organ-Specific Care", desc: "Comprehensive post-operative management for Kidney, Liver, Heart, and Lung transplants." },
              { icon: <Stethoscope size={20} />, title: "Acute Recovery", desc: "Expert in Post-Anesthesia Care (PACU), Step-Down monitoring, and rejection symptom identification." },
              { icon: <Activity size={20} />, title: "Advanced Diagnostics", desc: "Proficient in transplant-specific labs, biopsies, and hemodynamic monitoring." },
              { icon: <Wind size={20} />, title: "Respiratory Support", desc: "Master-level proficiency in Critical Care Ventilators and tracheotomy management." },
              { icon: <Activity size={20} />, title: "Advanced Procedures", desc: "Expert in Wound Vac application, Central Line management, chest tubes, and ileostomy care." },
              { icon: <Activity size={20} />, title: "Infusion & Titration", desc: "Administration of induction therapies (Thymoglobulin, IVIG) and titration of high-alert drips." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="bg-surface-container border border-outline-variant p-6 rounded-2xl hover:border-primary/30 transition-colors"
                variants={fadeIn}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-on-surface mb-3">{item.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Credentials Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12" id="credentials">
          {/* Organizations */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-bold text-on-surface">Committees &amp; Organizations</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-surface-container border border-outline-variant p-6 rounded-xl flex items-center gap-4">
                <div className="text-primary"><Users size={24} /></div>
                <div className="text-on-surface font-medium">International Transplant Nurses Society</div>
              </div>
              <div className="bg-surface-container border border-outline-variant p-6 rounded-xl flex items-center gap-4">
                <div className="text-primary"><Users size={24} /></div>
                <div className="text-on-surface font-medium">9 Hudson Patient Experience Committee</div>
              </div>
              <div className="bg-surface-container border border-outline-variant p-6 rounded-xl flex justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-primary"><ShieldCheck size={24} /></div>
                  <div className="text-on-surface font-medium">9 Hudson Unit Practice Council</div>
                </div>
                <span className="text-xs text-on-surface-variant font-mono">01/2025 - PRESENT</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-tertiary rounded-full"></div>
              <h2 className="text-2xl font-bold text-on-surface">Certifications</h2>
            </div>
            <div className="space-y-4">
              {[
                { title: "Certified Clinical Transplant Nurse", subtitle: "CCTN Board Certification", date: "04/2024 - PRESENT", icon: <Award size={20} /> },
                { title: "Advanced Cardiovascular Life Support", subtitle: "ACLS Certification", date: "06/2021 - PRESENT", icon: <Heart size={20} /> },
                { title: "Basic Life Support", subtitle: "BLS Certification", date: "09/2019 - PRESENT", icon: <Activity size={20} /> },
                { title: "Overdose Prevention Narcan Training", subtitle: "Specialized Certification", date: null, icon: <ShieldCheck size={20} /> }
              ].map((cert, i) => (
                <div key={i} className="bg-surface-container border border-outline-variant p-5 rounded-xl flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="text-tertiary">{cert.icon}</div>
                    <div>
                      <div className="text-on-surface font-bold text-sm">{cert.title}</div>
                      <div className="text-[11px] text-on-surface-variant">{cert.subtitle}</div>
                    </div>
                  </div>
                  {cert.date && <span className="text-[10px] text-on-surface-variant font-mono bg-surface-container-high px-2 py-1 rounded">{cert.date}</span>}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="max-w-5xl mx-auto px-6 py-24 mb-20 text-center relative overflow-hidden bg-surface-container-high rounded-3xl border border-outline-variant" id="contact">
          <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <motion.div 
            className="relative z-10 space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-on-surface tracking-tight">Let's Connect</h2>
            <p className="text-on-surface-variant text-lg max-w-xl mx-auto">Open to professional discussions, clinical research collaborations, and opportunities within the Adult-Gerontology NP scope.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-4">
              <a className="flex flex-col items-center gap-2 group" href="mailto:gb2367@nyu.edu">
                <div className="w-14 h-14 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <span className="text-sm font-medium text-on-surface">gb2367@nyu.edu</span>
              </a>
              <a className="flex flex-col items-center gap-2 group" href="https://linkedin.com/in/jackie-beak-0325b2bb" target="_blank" rel="noopener noreferrer">
                <div className="w-14 h-14 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Share2 size={24} />
                </div>
                <span className="text-sm font-medium text-on-surface">LinkedIn Profile</span>
              </a>
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <span className="text-sm font-medium text-on-surface">(646) 491-1291</span>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-outline-variant py-12">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6 text-sm text-on-surface-variant">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-base font-semibold text-on-surface">Jackie Beak.</div>
            <p>© 2025 Jackie Beak. Clinical Transplant Nurse &amp; Adult-Gerontology NP Student. Precision in Care.</p>
          </div>
          <div className="flex gap-8">
            <a className="hover:text-tertiary transition-all" href="https://linkedin.com/in/jackie-beak-0325b2bb" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="hover:text-tertiary transition-all" href="#">Nurse Registry</a>
            <a className="hover:text-tertiary transition-all" href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

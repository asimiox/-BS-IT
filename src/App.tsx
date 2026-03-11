import { motion } from "motion/react";
import { ExternalLink, BookOpen, GraduationCap, ArrowRight, Heart } from "lucide-react";

interface ResourceLink {
  label: string;
  url: string;
}

interface Subject {
  id: string;
  code: string;
  title: string;
  description: string;
  links: ResourceLink[];
}

const subjects: Subject[] = [
  {
    id: "hq-002",
    code: "HQ-002",
    title: "Holy Quran - II",
    description: "Continuation of the study of the Holy Quran, focusing on translation and interpretation of selected surahs.",
    links: [
      { label: "Main Drive Folder", url: "https://drive.google.com/drive/folders/1W43QF0XwNez1XMYYF-j0rBJyZjxoB9v1" }
    ]
  },
  {
    id: "pf",
    code: "IT-102",
    title: "Programming Fundamentals",
    description: "Core concepts of programming including logic, syntax, and problem-solving techniques using high-level languages.",
    links: [
      { label: "Resource Folder 1", url: "https://drive.google.com/drive/folders/1qr9N8lXWjs9L4w08N3gy2nvwtMRC2UVI?usp=drive_link" },
      { label: "Resource Folder 2", url: "https://drive.google.com/drive/folders/1b0_bSh1TVK1s87TeFs8SdMEXObC-Csc0" }
    ]
  },
  {
    id: "ew",
    code: "ENG-102",
    title: "Expository Writing",
    description: "Developing skills in clear, concise, and effective academic writing and critical analysis.",
    links: [
      { label: "Resource Folder 1", url: "https://drive.google.com/drive/folders/1qzIYUhWVXfhAlRovJ14kDP_qgQdtiogM?usp=drive_link" },
      { label: "Resource Folder 2", url: "https://drive.google.com/drive/folders/1xpuVvSKMO-KiHHqMVZZ3rO_DvGtgjHmk" }
    ]
  },
  {
    id: "cn",
    code: "IT-201",
    title: "Computer Networks",
    description: "Fundamentals of networking, protocols, architecture, and data communication systems.",
    links: [
      { label: "Resource Folder 1", url: "https://drive.google.com/drive/folders/16LWHBNMO_Ok9oXX16iErzQ2aUeHyiBA7" },
      { label: "Resource Folder 2", url: "https://drive.google.com/drive/folders/19qJWxRBHy7-Y7XCqnQYRkWQmwQjl_5uA?usp=drive_link" },
      { label: "Resource Folder 3", url: "https://drive.google.com/drive/folders/1a2hxAUWYJBZymHqIrMnlfGLMtcbeHAyh" }
    ]
  },
  {
    id: "ds",
    code: "MATH-201",
    title: "Discrete Structure",
    description: "Mathematical structures that are fundamentally discrete rather than continuous, essential for computer science.",
    links: [
      { label: "Resource Folder 1", url: "https://drive.google.com/drive/folders/1LDwVZWRbOkc9VeziLfnJI4a8Yeg8POMT" },
      { label: "Resource Folder 2", url: "https://drive.google.com/drive/folders/1Of55wSBKmJAb-qnlq-_iPHAocWIq0wgQ?usp=drive_link" }
    ]
  },
  {
    id: "im",
    code: "MKT-101",
    title: "Introduction to Marketing",
    description: "Basic principles of marketing, consumer behavior, and strategic market planning.",
    links: [
      { label: "Resource Folder 1", url: "https://drive.google.com/drive/folders/10Q6dJBuSKOQy-ORvz-mNkmtlGF0dnzbN" },
      { label: "Resource Folder 2", url: "https://drive.google.com/drive/folders/1dMpq1-lEy3a8E1eP4lwc7FG20B9NjjB-" }
    ]
  },
  {
    id: "md",
    code: "MATH-002",
    title: "Math Deficiency-002",
    description: "Supplementary mathematics course covering essential algebraic and trigonometric concepts.",
    links: [
      { label: "Resource Folder 1", url: "https://drive.google.com/drive/folders/1Y8Sv8RI1EdSIOsEEz_HbxH9_WU5Kj8jz" },
      { label: "Resource Folder 2", url: "https://drive.google.com/drive/folders/1wIVbgojq5Vjg6yypfpnTASmYgU6ldIV0" },
      { label: "Resource Folder 3", url: "https://drive.google.com/drive/folders/1hrDoWXOI1OVRXy5PtYEEu4ThTKNhALiW?usp=drive_link" }
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] selection:bg-black selection:text-lime-accent font-sans text-black overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-lime-accent border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black flex items-center justify-center brutalist-shadow">
              <GraduationCap className="text-lime-accent w-8 h-8" />
            </div>
            <span className="font-display text-3xl tracking-tighter uppercase leading-none">BSIT HUB</span>
          </div>
          <div className="font-mono text-sm font-black uppercase hidden sm:block bg-black text-lime-accent px-4 py-1 brutalist-shadow">
            Batch 2025 — 2029
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 border-b-4 border-black bg-white overflow-hidden">
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#BFFF00_2px,transparent_2px),linear-gradient(to_bottom,#BFFF00_2px,transparent_2px)] bg-[size:60px_60px] opacity-[0.15]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="max-w-5xl"
            >
              <div className="inline-flex items-center gap-2 bg-black text-lime-accent px-4 py-2 font-mono text-sm font-black uppercase mb-8 brutalist-shadow">
                <span className="animate-pulse">●</span> Academic Year 2025-2029
              </div>
              
              <h1 className="font-display text-[clamp(4rem,12vw,9.5rem)] leading-[0.8] uppercase mb-12 tracking-tighter">
                <span className="relative inline-block mb-6">
                  <span className="relative z-10 bg-black text-white px-6 py-2 brutalist-border">BSIT</span>
                  <span className="absolute -inset-2 bg-lime-accent -z-10 translate-x-3 translate-y-3" />
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-lime-accent px-6 py-2 brutalist-border text-black">RESOURCES</span>
                  <span className="absolute -inset-2 bg-black -z-10 translate-x-3 translate-y-3" />
                </span>
              </h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="bg-white brutalist-card rotate-1">
                  <p className="text-2xl md:text-3xl font-black leading-tight">
                    The ultimate vault for BSIT 2nd Semester. 
                    Zero fluff. Just pure academic power.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <a 
                    href="#resources"
                    className="brutalist-button bg-lime-accent text-black px-10 py-6 font-display text-2xl uppercase flex items-center justify-center gap-4 hover:bg-black hover:text-lime-accent transition-all group"
                  >
                    Enter The Vault <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                  </a>
                  <div className="bg-black text-lime-accent p-4 font-mono text-sm font-bold uppercase brutalist-shadow text-center">
                    Scroll down to explore course modules.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section id="resources" className="py-32 bg-[#fdfdfd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
            >
              <div className="relative">
                <h2 className="font-display text-7xl md:text-9xl uppercase tracking-tighter relative z-10 bg-black text-lime-accent px-8 py-4 inline-block brutalist-shadow -rotate-2">
                  Modules
                </h2>
              </div>
              <div className="max-w-sm bg-lime-accent p-6 brutalist-border rotate-1">
                <p className="font-mono text-sm font-black uppercase leading-relaxed">
                  Click on the resource links to access the official Google Drive folders for each subject.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {subjects.map((subject, index) => (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  className="brutalist-card brutalist-shadow-hover flex flex-col group bg-white"
                >
                  <div className="flex justify-between items-center mb-8">
                    <div className="font-mono text-sm font-black bg-black text-lime-accent px-3 py-1 brutalist-shadow">
                      {subject.code}
                    </div>
                    <BookOpen className="w-6 h-6 text-black group-hover:scale-125 transition-transform" />
                  </div>
                  
                  <h3 className="font-display text-4xl uppercase mb-6 leading-[0.9] tracking-tight">
                    {subject.title}
                  </h3>
                  
                  <p className="text-black font-bold mb-10 flex-grow leading-tight">
                    {subject.description}
                  </p>
                  
                  <div className="space-y-4">
                    {subject.links.map((link, lIndex) => (
                      <a
                        key={lIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full brutalist-button bg-lime-accent hover:bg-black hover:text-lime-accent p-4 flex items-center justify-between group/link transition-all"
                      >
                        <span className="font-mono text-sm font-black uppercase">{link.label}</span>
                        <ExternalLink className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Big CTA / Marquee */}
        <section className="bg-lime-accent py-12 border-y-4 border-black overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="font-display text-7xl text-black uppercase mx-12 flex items-center gap-6">
                <span className="text-white">★</span> BSIT SECOND SEMESTER <span className="text-white">★</span> HUB
              </span>
            ))}
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="bg-white py-32 border-t-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
            <div className="mb-20">
              <div className="w-24 h-24 bg-black mx-auto flex items-center justify-center mb-10 brutalist-shadow rotate-12">
                <GraduationCap className="text-lime-accent w-14 h-14" />
              </div>
              <h2 className="font-display text-7xl md:text-9xl uppercase tracking-tighter mb-6">
                BSIT HUB
              </h2>
              <p className="font-mono text-2xl font-black uppercase bg-lime-accent inline-block px-6 py-2 brutalist-border">
                Batch 2025 — 2029
              </p>
            </div>

            <div className="inline-block brutalist-card bg-lime-accent py-12 px-20 relative -rotate-1">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-black flex items-center justify-center brutalist-shadow rotate-12">
                <Heart className="fill-lime-accent text-lime-accent w-12 h-12 animate-pulse" />
              </div>
              <p className="font-display text-5xl md:text-8xl uppercase tracking-tighter leading-none">
                Crafted by <br />
                <span className="underline decoration-[12px] underline-offset-[16px] bg-black text-lime-accent px-4">Asim Nawaz</span>
              </p>
            </div>
            
            <div className="mt-32 pt-12 border-t-4 border-black flex flex-col md:flex-row justify-center items-center gap-12">
              <p className="font-mono text-sm font-black uppercase bg-lime-accent px-4 py-2 brutalist-border">
                © 2026 BSIT Resource Hub. All academic materials belong to their respective owners.
              </p>
            </div>
          </div>
        </footer>
      </main>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </div>
  );
}

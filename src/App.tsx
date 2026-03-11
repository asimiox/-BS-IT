import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { ExternalLink, BookOpen, GraduationCap, ArrowRight, Heart, Search, Sparkles, Zap, Moon, Sun } from "lucide-react";

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

const CustomCursor = ({ isHovering }: { isHovering: boolean }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 500 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 border-2 border-tangerine rounded-full z-[10000] pointer-events-none"
        animate={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          backgroundColor: isHovering ? "rgba(236, 150, 45, 0.1)" : "rgba(236, 150, 45, 0)",
        }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-tangerine rounded-full z-[10000] pointer-events-none"
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-[9998] brutalist-button bg-dark-alloy text-tangerine p-4 hover:bg-tangerine hover:text-dark-alloy transition-colors group"
        >
          <ArrowRight className="w-8 h-8 -rotate-90 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredSubject, setHoveredSubject] = useState<string | null>(null);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    }
    return false; // Default to light mode
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const filteredSubjects = useMemo(() => {
    return subjects.filter(s => 
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div 
      className="min-h-screen bg-cloud selection:bg-dark-alloy selection:text-tangerine font-sans text-dark-alloy overflow-x-hidden"
      onMouseEnter={() => setIsHoveringInteractive(false)}
    >
      <CustomCursor isHovering={isHoveringInteractive} />
      <BackToTop />
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-tangerine border-b-4 border-dark-alloy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3"
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
          >
            <div className="w-12 h-12 bg-dark-alloy flex items-center justify-center brutalist-shadow">
              <GraduationCap className="text-tangerine w-8 h-8" />
            </div>
            <span className="font-display text-3xl tracking-tighter uppercase leading-none">BSIT HUB</span>
          </div>
          <div className="font-mono text-sm font-black uppercase hidden sm:block bg-dark-alloy text-tangerine px-4 py-1 brutalist-shadow">
            Batch 2025 — 2029
          </div>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
            className="w-12 h-12 bg-dark-alloy flex items-center justify-center brutalist-shadow hover:bg-cloud hover:text-dark-alloy transition-colors group"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <Sun className="text-tangerine w-6 h-6 group-hover:rotate-90 transition-transform" />
            ) : (
              <Moon className="text-tangerine w-6 h-6 group-hover:-rotate-12 transition-transform" />
            )}
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 border-b-4 border-dark-alloy bg-cloud overflow-hidden">
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#EC962D_2px,transparent_2px),linear-gradient(to_bottom,#EC962D_2px,transparent_2px)] bg-[size:60px_60px] opacity-[0.15]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="max-w-5xl"
            >
              <div className="inline-flex items-center gap-2 bg-dark-alloy text-tangerine px-4 py-2 font-mono text-sm font-black uppercase mb-8 brutalist-shadow">
                <span className="animate-pulse">●</span> Academic Year 2025-2029
              </div>
              
              <h1 className="font-display text-[clamp(4rem,12vw,9.5rem)] leading-[0.8] uppercase mb-12 tracking-tighter">
                <motion.span 
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
                  className="relative inline-block mb-6"
                >
                  <span className="relative z-10 bg-dark-alloy text-cloud px-6 py-2 brutalist-border">BSIT</span>
                  <span className="absolute -inset-2 bg-tangerine -z-10 translate-x-3 translate-y-3" />
                </motion.span>
                <br />
                <motion.span 
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "circOut" }}
                  className="relative inline-block"
                >
                  <span className="relative z-10 bg-tangerine px-6 py-2 brutalist-border text-dark-alloy">RESOURCES</span>
                  <span className="absolute -inset-2 bg-dark-alloy -z-10 translate-x-3 translate-y-3" />
                </motion.span>
              </h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="bg-cloud brutalist-card rotate-1"
                >
                  <p className="text-2xl md:text-3xl font-black leading-tight">
                    The ultimate vault for BSIT 2nd Semester. 
                    Zero fluff. Just pure academic power.
                  </p>
                </motion.div>
                <div className="flex flex-col gap-6">
                  <a 
                    href="#resources"
                    onMouseEnter={() => setIsHoveringInteractive(true)}
                    onMouseLeave={() => setIsHoveringInteractive(false)}
                    className="brutalist-button bg-tangerine text-dark-alloy px-10 py-6 font-display text-2xl uppercase flex items-center justify-center gap-4 hover:bg-dark-alloy hover:text-tangerine transition-all group"
                  >
                    Enter The Vault <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                  </a>
                  <div className="bg-dark-alloy text-tangerine p-4 font-mono text-sm font-bold uppercase brutalist-shadow text-center">
                    Scroll down to explore course modules.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section id="resources" className="py-32 bg-cloud relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
            >
              <div className="relative">
                <h2 className="font-display text-7xl md:text-9xl uppercase tracking-tighter relative z-10 bg-dark-alloy text-tangerine px-8 py-4 inline-block brutalist-shadow -rotate-2">
                  Modules
                </h2>
                <div className="absolute -top-6 -right-6 bg-tangerine text-dark-alloy font-mono font-black px-4 py-2 brutalist-border rotate-12 animate-bounce">
                  {subjects.length} TOTAL
                </div>
              </div>
              
              <div className="flex flex-col gap-4 w-full md:w-auto">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-dark-alloy z-10" />
                  <input 
                    type="text"
                    placeholder="SEARCH MODULES..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onMouseEnter={() => setIsHoveringInteractive(true)}
                    onMouseLeave={() => setIsHoveringInteractive(false)}
                    className="w-full md:w-80 brutalist-button bg-cloud pl-14 pr-4 py-4 font-mono font-black uppercase focus:outline-none focus:bg-tangerine transition-colors placeholder:text-dark-alloy/50"
                  />
                </div>
                <div className="max-w-sm bg-tangerine p-4 brutalist-border rotate-1 text-dark-alloy">
                  <p className="font-mono text-xs font-black uppercase leading-relaxed flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Filter by code or title
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <AnimatePresence mode="popLayout">
                {filteredSubjects.map((subject, index) => (
                  <motion.div
                    key={subject.id}
                    layout
                    initial={{ opacity: 0, y: 50, rotate: -2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    transition={{ 
                      delay: (index % 3) * 0.1, 
                      type: "spring", 
                      stiffness: 100,
                      damping: 15
                    }}
                    onMouseEnter={() => setHoveredSubject(subject.id)}
                    onMouseLeave={() => setHoveredSubject(null)}
                    className={`brutalist-card brutalist-shadow-hover flex flex-col group transition-colors duration-300 ${
                      hoveredSubject === subject.id ? 'bg-tangerine' : 'bg-cloud'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-8">
                      <div className="font-mono text-sm font-black bg-dark-alloy text-tangerine px-3 py-1 brutalist-shadow">
                        {subject.code}
                      </div>
                      <div className="relative">
                        <BookOpen className={`w-6 h-6 transition-all duration-300 ${
                          hoveredSubject === subject.id ? 'text-cloud scale-125 rotate-12' : 'text-dark-alloy'
                        }`} />
                        {hoveredSubject === subject.id && (
                          <motion.div 
                            layoutId="sparkle"
                            className="absolute -top-2 -right-2"
                          >
                            <Zap className="w-4 h-4 text-dark-alloy fill-dark-alloy" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                    
                    <h3 className={`font-display text-4xl uppercase mb-6 leading-[0.9] tracking-tight transition-colors ${
                      hoveredSubject === subject.id ? 'text-dark-alloy' : 'text-dark-alloy'
                    }`}>
                      {subject.title}
                    </h3>
                    
                    <p className="text-dark-alloy font-bold mb-10 flex-grow leading-tight opacity-80">
                      {subject.description}
                    </p>
                    
                    <div className="space-y-4">
                      {subject.links.map((link, lIndex) => (
                        <a
                          key={lIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => setIsHoveringInteractive(true)}
                          onMouseLeave={() => setIsHoveringInteractive(false)}
                          className={`w-full brutalist-button p-4 flex items-center justify-between group/link transition-all ${
                            hoveredSubject === subject.id 
                              ? 'bg-dark-alloy text-tangerine hover:bg-cloud hover:text-dark-alloy' 
                              : 'bg-tangerine text-dark-alloy hover:bg-dark-alloy hover:text-tangerine'
                          }`}
                        >
                          <span className="font-mono text-sm font-black uppercase">{link.label}</span>
                          <ExternalLink className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {filteredSubjects.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-20 text-center"
                >
                  <div className="inline-block brutalist-card bg-tangerine rotate-2">
                    <h3 className="font-display text-5xl uppercase mb-4">No Modules Found</h3>
                    <p className="font-mono font-black uppercase">Try searching for something else</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Big CTA / Marquee */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-tangerine py-12 border-y-4 border-dark-alloy overflow-hidden"
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="font-display text-7xl text-dark-alloy uppercase mx-12 flex items-center gap-6">
                <span className="text-cloud">★</span> BSIT SECOND SEMESTER <span className="text-cloud">★</span> HUB
              </span>
            ))}
          </div>
        </motion.section>

        {/* Simple Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-cloud py-32 border-t-4 border-dark-alloy"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
            <div className="mb-20">
              <div className="w-24 h-24 bg-dark-alloy mx-auto flex items-center justify-center mb-10 brutalist-shadow rotate-12">
                <GraduationCap className="text-tangerine w-14 h-14" />
              </div>
              <h2 className="font-display text-7xl md:text-9xl uppercase tracking-tighter mb-6 text-dark-alloy">
                BSIT HUB
              </h2>
              <p className="font-mono text-2xl font-black uppercase bg-tangerine inline-block px-6 py-2 brutalist-border text-dark-alloy">
                Batch 2025 — 2029
              </p>
            </div>

            <div className="inline-block brutalist-card bg-tangerine py-12 px-20 relative -rotate-1">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-dark-alloy flex items-center justify-center brutalist-shadow rotate-12">
                <Heart className="fill-tangerine text-tangerine w-12 h-12 animate-pulse" />
              </div>
              <p className="font-display text-5xl md:text-8xl uppercase tracking-tighter leading-none text-dark-alloy">
                Crafted by <br />
                <span className="underline decoration-[12px] underline-offset-[16px] bg-dark-alloy text-tangerine px-4">Asim Nawaz</span>
              </p>
            </div>
            
            <div className="mt-32 pt-12 border-t-4 border-dark-alloy flex flex-col md:flex-row justify-center items-center gap-12">
              <p className="font-mono text-sm font-black uppercase bg-tangerine px-4 py-2 brutalist-border text-dark-alloy">
                © 2026 BSIT Resource Hub. All academic materials belong to their respective owners.
              </p>
            </div>
          </div>
        </motion.footer>
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

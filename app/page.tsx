"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { 
  AiFillHtml5 } from "react-icons/ai";
import { 
  BiLogoCss3, 
  BiLogoJavascript, 
  BiLogoTypescript, 
  BiLogoReact, 
  BiLogoNodejs, 
  BiLogoMongodb, 
  BiLogoPostgresql, 
  BiLogoGit, 
  BiLogoDocker 
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import Typewriter from 'typewriter-effect';
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col bg-[#0B0B0F] text-[#E2E2E2]">
      <header className="sticky top-0 z-40 w-full border-b border-[#1E1E1E] bg-[#0B0B0F]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0B0B0F]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-[#00FF94]" />
            <span className="text-lg font-bold">JoBuilds</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-[#00FF94] transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-[#00FF94] transition-colors">
              {t("nav.skills")}
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-[#00FF94] transition-colors">
              {t("nav.services")}
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-[#00FF94] transition-colors">
              {t("nav.portfolio")}
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#00FF94] transition-colors">
              {t("nav.contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

 {/* Menú móvil */}
 {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-[#0B0B0F] border-b border-[#1E1E1E]"
          >
            <nav className="container py-4 flex flex-col gap-4">
              <Link 
                href="#about" 
                className="text-sm font-medium hover:text-[#00FF94] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link 
                href="#skills" 
                className="text-sm font-medium hover:text-[#00FF94] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.skills")}
              </Link>
              <Link 
                href="#services" 
                className="text-sm font-medium hover:text-[#00FF94] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.services")}
              </Link>
              <Link 
                href="#portfolio" 
                className="text-sm font-medium hover:text-[#00FF94] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.portfolio")}
              </Link>
              <Link 
                href="#contact" 
                className="text-sm font-medium hover:text-[#00FF94] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
            </nav>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
{/* Hero Section */}
<section className="container py-12 md:py-24 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Badge className="px-3 py-1 text-sm bg-[#00FF94] text-[#0B0B0F]" variant="secondary">
        {t("hero.badge")}
      </Badge>
    </motion.div>
    <motion.h1
      className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mr-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
   {t("hero.title").split(t("hero.code.word"))[0]}
   <span className="text-[#00FF94]">{t("hero.code.word")}</span>
    </motion.h1>
    <motion.p
      className="text-xl text-[#9CA3AF]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {t("hero.subtitle")}
    </motion.p>
    <motion.div
      className="flex flex-col sm:flex-row gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Button asChild size="lg" className="bg-[#00FF94] text-[#0B0B0F] hover:bg-[#00FF94]/90">
        <Link href="#contact">
          {t("hero.cta.hire")} <ExternalLink className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      <Button
        variant="outline"
        size="lg"
        asChild
        className="border-[#00FF94] text-[#00FF94] hover:bg-[#00FF94] hover:text-[#0B0B0F]"
      >
        <Link href="#portfolio">{t("hero.cta.work")}</Link>
      </Button>
    </motion.div>
  </div>

{/* Code Animation replacing the image */}
<motion.div
  className="relative w-full rounded-lg overflow-hidden bg-[#1E1E1E] shadow-xl"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.8 }}
>
  {/* Mac window header */}
  <div className="h-7 bg-[#2D2D2D] flex items-center px-4">
    <div className="flex gap-2">
      <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
      <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
    </div>
  </div>
  
  <div className="py-12 px-4">
    <Typewriter
      options={{
        delay: 50,
        cursor: '▋',
        wrapperClassName: 'typewriter-wrapper',
        cursorClassName: 'typewriter-cursor'
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(`function Developer(name, skills) {`)
          .pauseFor(500)
          .typeString(`\n  this.name = name;`)
          .pauseFor(300)
          .typeString(`\n  this.skills = skills;`)
          .pauseFor(300)
          .typeString(`\n  this.code = () => console.log("Building amazing things!");`)
          .pauseFor(300)
          .typeString(`\n}`)
          .pauseFor(700)
          .typeString(`\n\nconst javier = new Developer("Javier Oviedo", ["JavaScript", "React", "Node.js"]);`)
          .pauseFor(500)
          .typeString(`\njavier.code();`)
          .pauseFor(300)
          .typeString(` // Output: Building amazing things!`)
          .start();
      }}
    />
  </div>
</motion.div>
</section>
        {/* About Section */}
        <section id="about" className="container py-12 md:py-24 border-t border-[#1E1E1E]">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_350px]">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("about.title")}</h2>
              <p className="text-[#9CA3AF]">{t("about.p1")}</p>
              <p className="text-[#9CA3AF]">{t("about.p2")}</p>
              <p className="text-[#9CA3AF]">{t("about.p3")}</p>
              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-[#00FF94] text-[#00FF94] hover:bg-[#00FF94] hover:text-[#0B0B0F]"
                >
                  <Link href="https://github.com/javiovi" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-[#00FF94] text-[#00FF94] hover:bg-[#00FF94] hover:text-[#0B0B0F]"
                >
                  <Link
                    href="https://www.linkedin.com/in/javier-oviedo-3b536222a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-80 rounded-lg  overflow-hidden border border-[#00FF94]">
            <Image
  src="/dragon.png"
  alt="Developer working"
  fill
  className="object-cover"
/>
            </div>
          </div>
        </section>

        {/* Skills Section */}
   
        <section id="skills" className="bg-[#0F0F13] py-12 md:py-24">
  <div className="container space-y-6 md:space-y-12">
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("skills.title")}</h2>
      <p className="text-[#9CA3AF] max-w-[700px] mx-auto">{t("skills.subtitle")}</p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
      {[
        { name: "HTML5", icon: AiFillHtml5 },
        { name: "CSS3", icon: BiLogoCss3 },
        { name: "JavaScript", icon: BiLogoJavascript },
        { name: "TypeScript", icon: BiLogoTypescript },
        { name: "React", icon: BiLogoReact },
        { name: "Next.js", icon: TbBrandNextjs },
        { name: "Node.js", icon: BiLogoNodejs },
        { name: "Express", icon: SiExpress },
        { name: "MongoDB", icon: BiLogoMongodb },
        { name: "PostgreSQL", icon: BiLogoPostgresql },
        { name: "Git", icon: BiLogoGit },
        { name: "Docker", icon: BiLogoDocker },
      ].map((skill, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center justify-center p-4 group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <skill.icon className="w-20 h-20 mb-3 text-[#E2E2E2] group-hover:text-[#00FF94] group-hover:scale-110 transition-all duration-300" />
          <span className="text-sm font-medium text-center text-[#E2E2E2] group-hover:text-[#00FF94] group-hover:translate-y-[-2px] group-hover:drop-shadow-[0_0_8px_#00FF94] transition-all duration-300">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* Services Section */}
        <section id="services" className="container py-12 md:py-24">
          <div className="space-y-6 md:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("services.title")}</h2>
              <p className="text-[#9CA3AF] max-w-[700px] mx-auto">{t("services.subtitle")}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: t("services.fullstack"),
                  description: t("services.fullstack.desc"),
                },
                {
                  title: t("services.api"),
                  description: t("services.api.desc"),
                },
                {
                  title: t("services.database"),
                  description: t("services.database.desc"),
                },
                {
                  title: t("services.frontend"),
                  description: t("services.frontend.desc"),
                },
                {
                  title: t("services.devops"),
                  description: t("services.devops.desc"),
                },
                {
                  title: t("services.code"),
                  description: t("services.code.desc"),
                },
              ].map((service, index) => (
                <Card key={index} className="bg-[#1E1E1E] border-[#2D2D2D]">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-[#00FF94]">{service.title}</h3>
                    <p className="text-[#9CA3AF]">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="bg-[#0F0F13] py-12 md:py-24">
          <div className="container space-y-6 md:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("portfolio.title")}</h2>
              <p className="text-[#9CA3AF] max-w-[700px] mx-auto">{t("portfolio.subtitle")}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: t("portfolio.ecommerce"),
                  description: t("portfolio.ecommerce.desc"),
                  tags: ["Next.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
                  image: "restaurant-icon.png",
                  githubUrl: "https://github.com/javiovi/restaurant-app"
                 
                },
                {
                  title: t("portfolio.web3citizen"),
                  description: t("portfolio.web3citizen.desc"),
                  tags: ["Next.js", "React", "TypeScript", "Node.js"],
                  image: "iso-welcome.svg",
                    githubUrl: "https://github.com/javiovi/web3citizen"
                },
                {
                  title: t("portfolio.blog"),
                  description: t("portfolio.blog.desc"),
                  tags: ["Next.js", "GraphQL", "PostgreSQL"],
                  image: "image-white.png",
                    githubUrl: "https://github.com/javiovi/writeitnow"
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden bg-[#1E1E1E] border-[#2D2D2D] hover:scale-105 transition-transform duration-300">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain bg-[#1E1E1E] p-2 rounded-lg transition-transform "
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-[#00FF94]">{project.title}</h3>
                    <p className="text-[#9CA3AF]">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-[#2D2D2D] text-[#00FF94]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-[#00FF94] text-[#00FF94] hover:bg-[#00FF94] hover:text-[#0B0B0F]"
                      asChild
                    >
                          <Link 
        href={project.githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
      >
                        {t("portfolio.viewProject")} <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center pt-6">
              <Button asChild className="bg-[#00FF94] text-[#0B0B0F] hover:bg-[#00FF94]/90">
                <Link href="https://github.com/javiovi?tab=repositories">{t("portfolio.viewAll")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-12 md:py-24">
          <div className="max-w-[800px] mx-auto space-y-6 md:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("contact.title")}</h2>
              <p className="text-[#9CA3AF] max-w-[700px] mx-auto">{t("contact.subtitle")}</p>
            </div>
            <ContactForm />
          
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 pt-6">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#00FF94]" />
                <a href="mailto: javio.dev@gmail.com" className="text-sm hover:text-[#00FF94]">
                  javio.dev@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-[#00FF94]" />
                <a
                  href="https://www.linkedin.com/in/javier-oviedo-3b536222a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#00FF94]"
                >
                  linkedin.com/in/javier-oviedo-3b536222a
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5 text-[#00FF94]" />
                <a
                  href="https://github.com/javiovi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#00FF94]"
                >
                  github.com/javiovi
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#1E1E1E] py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-[#00FF94]" />
            <span className="text-sm font-medium">JoBuilds</span>
          </div>
          <p className="text-sm text-[#9CA3AF]">
            © {new Date().getFullYear()} JoBuilds. {t("footer.rights")}
          </p>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-[#00FF94] hover:text-[#00FF94]/90 hover:bg-[#1E1E1E]"
            >
              <Link href="https://github.com/javiovi" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-[#00FF94] hover:text-[#00FF94]/90 hover:bg-[#1E1E1E]"
            >
              <Link
                href="https://www.linkedin.com/in/javier-oviedo-3b536222a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}


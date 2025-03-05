"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    // Hero Section
    "hero.badge": "Full Stack Developer",
    "hero.title": "Creating digital solutions with more than just ",
    "hero.subtitle": "I build scalable, user-centric web applications that solve real-world problems.",
    "hero.cta.hire": "Contact Me",
    "hero.cta.work": "View My Work",
    "hero.code.word": "Code", 

    // About Section
    "about.title": "About Me",
    "about.p1":
    "I’m a passionate developer with a proven ability to transform complex challenges into elegant, efficient solutions.",
    "about.p2":
    "With deep expertise in both front-end and back-end technologies, I specialize in creating seamless, user-centered digital experiences. I combine technical acumen with a creative approach to problem-solving, consistently writing clean and maintainable code that not only works flawlessly but also fosters collaboration.",
    "about.p3":
    "When I’m not coding, you’ll find me exploring emerging technologies, contributing to open-source projects, and sharing insights through technical articles and community engagement.",
    // Skills Section
    "skills.title": "Technical Arsenal",
    "skills.subtitle": "Here's the tech stack I wield to build powerful, scalable applications.",

    // Services Section
    "services.title": "Turning Ideas into Reality",
    "services.subtitle":
      "From ideation to deployment, I craft comprehensive digital solutions that transform your concepts into fully functional applications. Explore my core areas of expertise below.",
    "services.fullstack": "Full Stack Web Development",
    "services.fullstack.desc":
      "End-to-end web applications built with modern JavaScript frameworks and robust backend systems.",
    "services.api": "API Development & Integration",
    "services.api.desc":
      "RESTful and GraphQL APIs designed for scalability, security, and seamless third-party integrations.",
    "services.database": "Database Design & Optimization",
    "services.database.desc": "Efficient database schemas and queries optimized for performance and scalability.",
    "services.frontend": "Frontend Architecture",
    "services.frontend.desc":
      "Scalable frontend architectures with a focus on performance, maintainability, and developer experience.",
    "services.devops": "DevOps & Deployment",
    "services.devops.desc":
      "Streamlined CI/CD pipelines and containerized applications for smooth, automated deployments.",
    "services.code": "Code Review & Refactoring",
    "services.code.desc": "Comprehensive code audits and refactoring to improve quality, security, and performance.",

    // Portfolio Section
    "portfolio.title": "Featured Projects",
    "portfolio.subtitle": "A showcase of my recent work, demonstrating my skills in action.",
    "portfolio.viewAll": "View All Projects",
    "portfolio.viewProject": "View Project",
    "portfolio.ecommerce": "Restaurant App",
    "portfolio.ecommerce.desc":
    "Restaurant App is an application designed to efficiently manage restaurant orders. It includes features such as login, menu management, order creation and secure payment, all from an easy-to-use, modern interface.",
    "portfolio.web3citizen": "Web3 Citizen",
    "portfolio.web3citizen.desc": "A collaborative space where enthusiasts, professionals, and contributors can share their knowledge and insights about the Ethereum ecosystem and the broader world of Web3.The aim is to build a comprehensive resource to help others navigate decentralised projects and opportunities.",
    "portfolio.blog": "Write It Now!",
    "portfolio.blog.desc":  "Write It Now! is more than just a blogging platform; it's a comprehensive tool that encourages creativity, facilitates content creation, and fosters community engagement. It's designed for writers who want to focus on their content while enjoying a powerful, user-friendly platform that takes care of the technical details.",

    // Contact Section
    "contact.title": "Let's Build Something Amazing",
    "contact.subtitle": "Have a project in mind? Let's collaborate and turn your vision into reality.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.placeholder.name": "Your name",
    "contact.placeholder.email": "Your email",
    "contact.placeholder.message": "Tell me about your project...",
    "contact.send": "Send Message",

    // Footer
    "footer.rights": "All rights reserved.",

    // Language Switcher
    language: "Language",
    "language.en": "English",
    "language.es": "Spanish",
 

  },



  
  es: {
    // Navigation
    "nav.about": "Sobre Mí",
    "nav.skills": "Habilidades",
    "nav.services": "Servicios",
    "nav.portfolio": "Portafolio",
    "nav.contact": "Contacto",

    // Hero Section

    "hero.badge": "Desarrollador Full Stack",
    "hero.title": "Creando Soluciones Digitales con algo mas que ",
    "hero.subtitle":
      "Construyo aplicaciones web escalables y centradas en el usuario, que resuelven problemas del mundo real.",
    "hero.cta.hire": "Contáctame",
    "hero.cta.work": "Ver Mi Trabajo",
    "hero.code.word": "Código",

    // About Section
    "about.title": "Sobre Mí",
    "about.p1":
    "Soy un desarrollador full-stack apasionado, capaz de transformar desafíos complejos en soluciones elegantes y eficientes. ",
    "about.p2":
    "Con una sólida experiencia en tecnologías de front-end y back-end, me especializo en crear experiencias digitales integrales y centradas en el usuario. Combino mi conocimiento técnico con un enfoque creativo para resolver problemas, escribiendo código limpio y mantenible que funciona a la perfección y promueve la colaboración.",
    "about.p3":
    "Fuera del desarrollo, me dedico a explorar nuevas tecnologías, contribuir a proyectos de código abierto y compartir conocimientos a través de artículos técnicos y la participación activa en la comunidad.",
    // Skills Section
    "skills.title": "Arsenal Técnico",
    "skills.subtitle": "Aquí está el stack tecnológico que manejo para construir aplicaciones potentes y escalables.",

    // Services Section
    "services.title": "Transformando ideas en realidad",
    "services.subtitle":
      "Desde la concepción hasta el despliegue, desarrollo soluciones digitales integrales que convierten tus conceptos en aplicaciones completamente funcionales. Explorá a continuación mis principales áreas de especialización.",
    "services.fullstack": "Desarrollo Web Full Stack",
    "services.fullstack.desc":
      "Aplicaciones web completas construidas con frameworks modernos de JavaScript y sistemas backend robustos.",
    "services.api": "Desarrollo e Integración de APIs",
    "services.api.desc":
      "APIs RESTful y GraphQL diseñadas para escalabilidad, seguridad e integraciones fluidas con terceros.",
    "services.database": "Diseño y Optimización de Bases de Datos",
    "services.database.desc":
      "Esquemas de bases de datos y consultas eficientes optimizadas para rendimiento y escalabilidad.",
    "services.frontend": "Arquitectura Frontend",
    "services.frontend.desc":
      "Arquitecturas frontend escalables con enfoque en rendimiento, mantenibilidad y experiencia del desarrollador.",
    "services.devops": "DevOps y Despliegue",
    "services.devops.desc":
      "Pipelines CI/CD optimizados y aplicaciones en contenedores para despliegues automatizados y fluidos.",
    "services.code": "Revisión y Refactorización de Código",
    "services.code.desc":
      "Auditorías de código completas y refactorización para mejorar la calidad, seguridad y rendimiento.",

    // Portfolio Section
    "portfolio.title": "Proyectos Destacados",
    "portfolio.subtitle": "Una muestra de mi trabajo reciente, demostrando mis habilidades en acción.",
    "portfolio.viewAll": "Ver Todos los Proyectos",
    "portfolio.viewProject": "Ver Proyecto",
    "portfolio.ecommerce": "Restaurant App",
    "portfolio.ecommerce.desc":
      "Restaurant App es una aplicación diseñada para gestionar eficazmente los pedidos de los restaurantes. Incluye funciones como inicio de sesión, gestión de menús, creación de pedidos y pago seguro, todo ello desde una interfaz fácil de usar y moderna.",
    "portfolio.web3citizen": "Web3 Citizen",
    "portfolio.web3citizen.desc": "Un espacio de colaboración donde entusiastas, profesionales y colaboradores pueden compartir sus conocimientos y puntos de vista sobre el ecosistema Ethereum y el mundo más amplio de Web3. El objetivo es construir un recurso completo que ayude a otros a navegar por los proyectos descentralizados y las oportunidades.",
 
    "portfolio.blog": "Write It Now",
    "portfolio.blog.desc":
    "Write It Now! es algo más que una plataforma de blogs; es una herramienta integral que fomenta la creatividad, facilita la creación de contenidos y favorece la participación de la comunidad. Está diseñada para escritores que quieren centrarse en sus contenidos mientras disfrutan de una plataforma potente y fácil de usar que se ocupa de los detalles técnicos.",
    // Contact Section
    "contact.title": "Construyamos Algo Increíble",
    "contact.subtitle": "¿Tienes un proyecto en mente? Colaboremos y convirtamos tu visión en realidad.",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.message": "Mensaje",
    "contact.placeholder.name": "Tu nombre",
    "contact.placeholder.email": "Tu correo",
    "contact.placeholder.message": "Cuéntame sobre tu proyecto...",
    "contact.send": "Enviar Mensaje",

    // Footer
    "footer.rights": "Todos los derechos reservados.",

    // Language Switcher
    language: "Idioma",
    "language.en": "Inglés",
    "language.es": "Español",
  },

}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}


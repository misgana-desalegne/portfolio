export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      projects: "Projects",
      services: "Services",
      about: "About",
      contact: "Contact"
    },
    // Home Page
    home: {
      title: "Kiros",
      subtitle: "Misgana Desalegne: Full-Stack Developer",
      description: "Crafting innovative digital experiences with modern technologies. Passionate about development, IoT, and pushing boundaries.",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
      scrollToExplore: "Scroll to explore",
      featuredProjects: "Featured Projects",
      featuredSubtitle: "Explore some of my recent work and innovations",
      viewAllProjects: "View All Projects",
      // Highlights
      highlights: {
        development: "Development",
        developmentDesc: "Full-stack web and mobile applications with React, Django, and modern frameworks",
        dataAnalysis: "Data Analysis Projects",
        dataAnalysisDesc: "Advanced Data analysis projects to increase customer satisfaction and sustainability",
        innovation: "Innovation",
        innovationDesc: "Technology research and innovative solutions for complex problems"
      },
      // Projects
      projects: {
        paris: {
          title: "Paris Cycle Data Analysis",
          category: "Data Analysis & ML",
          description: "Real-time data analysis and ML-driven optimization for bike-station availability and anomaly detection."
        },
        iot: {
          title: "IOT Home Integration",
          category: "IoT & Automation",
          description: "Smart home automation, security and sustainability integration using Home Assistant and Python."
        },
        vr: {
          title: "Virtual Reality on Psychology(2023)",
          category: "VR & Research",
          description: "Immersive VR experiences designed for psychological interventions and therapy built with Unity."
        }
      }
    },
    // Projects Page
    projects: {
      title: "My Projects",
      subtitle: "A collection of my latest work and research projects",
      viewProject: "View Project",
      // Filters
      filters: {
        all: "All Projects",
        development: "Development",
        iot: "IoT / Home",
        data: "Data / ML",
        vr: "Virtual Reality",
        research: "Research"
      },
      noProjects: "No projects found in this category."
    },
    // Services Page
    services: {
      title: "Services",
      subtitle: "What I Can Do For You"
    },
    // About Page
    about: {
      title: "About Me",
      subtitle: "Get to know me better"
    },
    // Contact Page
    contact: {
      title: "Get In Touch",
      subtitle: "Let's work together"
    }
  },
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      projects: "Projets",
      services: "Services",
      about: "À Propos",
      contact: "Contact"
    },
    // Home Page
    home: {
      title: "Kiros",
      subtitle: "Misgana Desalegne : Développeur Full-Stack",
      description: "Création d'expériences numériques innovantes avec des technologies modernes. Passionné par le développement, l'IoT et le dépassement des limites.",
      viewWork: "Voir Mes Projets",
      getInTouch: "Me Contacter",
      scrollToExplore: "Défiler pour explorer",
      featuredProjects: "Projets en Vedette",
      featuredSubtitle: "Découvrez quelques-uns de mes travaux et innovations récents",
      viewAllProjects: "Voir Tous les Projets",
      // Highlights
      highlights: {
        development: "Développement",
        developmentDesc: "Applications Web et mobiles full-stack avec React, Django et frameworks modernes",
        dataAnalysis: "Projets d'Analyse de Données",
        dataAnalysisDesc: "Projets avancés d'analyse de données pour améliorer la satisfaction client et la durabilité",
        innovation: "Innovation",
        innovationDesc: "Recherche technologique et solutions innovantes pour des problèmes complexes"
      },
      // Projects
      projects: {
        paris: {
          title: "Analyse de Données Vélib Paris",
          category: "Analyse de Données & ML",
          description: "Analyse de données en temps réel et optimisation basée sur le ML pour la disponibilité des stations et la détection d'anomalies."
        },
        iot: {
          title: "Intégration Domotique IoT",
          category: "IoT & Automatisation",
          description: "Automatisation, sécurité et intégration durable de la maison intelligente avec Home Assistant et Python."
        },
        vr: {
          title: "Réalité Virtuelle en Psychologie(2023)",
          category: "RV & Recherche",
          description: "Expériences VR immersives conçues pour les interventions psychologiques et la thérapie avec Unity."
        }
      }
    },
    // Projects Page
    projects: {
      title: "Mes Projets",
      subtitle: "Une collection de mes derniers travaux et projets de recherche",
      viewProject: "Voir le Projet",
      // Filters
      filters: {
        all: "Tous les Projets",
        development: "Développement",
        iot: "IoT / Maison",
        data: "Données / ML",
        vr: "Réalité Virtuelle(2023)",
        research: "Recherche"
      },
      noProjects: "Aucun projet trouvé dans cette catégorie."
    },
    // Services Page
    services: {
      title: "Services",
      subtitle: "Ce Que Je Peux Faire Pour Vous"
    },
    // About Page
    about: {
      title: "À Propos de Moi",
      subtitle: "Mieux me connaître"
    },
    // Contact Page
    contact: {
      title: "Contactez-Moi",
      subtitle: "Travaillons ensemble"
    }
  }
};

export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};

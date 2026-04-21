export type ServicePageData = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  cardDescription: string;
  image: string;
  intro: string;
  idealFor: string[];
  includes: string[];
  process: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export const servicePages: ServicePageData[] = [
  {
    slug: "office-cleaning",
    name: "Office Cleaning Services",
    shortName: "Office Cleaning",
    metaTitle:
      "Office Cleaning Services in Delaware County & Chester, PA | Artillery Cleaning Services",
    metaDescription:
      "Professional office cleaning for suites, shared offices, lobbies, restrooms, break rooms, and common areas across Delaware County & Chester, PA.",
    heroTitle: "Office Cleaning Services for Professional Workspaces",
    heroDescription:
      "Reliable office cleaning for companies that need clean restrooms, polished floors, tidy common areas, and a professional environment for staff and visitors.",
    cardDescription:
      "Recurring office cleaning for lobbies, restrooms, break rooms, shared spaces, and high-traffic work areas.",
    image: "/office-cleaning-services.jpg",
    intro:
      "Our office cleaning service is designed for managers who need steady, low-drama support. We work around business hours, protect high-traffic spaces, and keep the visible areas of your building presentation-ready.",
    idealFor: [
      "Office suites and shared office space",
      "Professional buildings and admin offices",
      "Lobbies, hallways, and restroom-heavy facilities",
      "Facilities that need after-hours or recurring service",
    ],
    includes: [
      "Restroom cleaning and replenishment",
      "Lobby, hallway, and entry cleaning",
      "Break room and common area cleaning",
      "Trash removal and touchpoint wiping",
      "Floor care for carpet, tile, and hard surfaces",
      "Custom schedules for daily, weekly, or overflow needs",
    ],
    process: [
      "Review the building layout, operating hours, and service scope",
      "Set a cleaning plan built around your staff and traffic flow",
      "Start recurring or short-term service with clear communication",
    ],
    faqs: [
      {
        question: "Do you clean during business hours or after hours?",
        answer:
          "We can support either schedule, but many office clients prefer after-hours cleaning to reduce disruption.",
      },
      {
        question: "Can you handle recurring office contracts?",
        answer:
          "Yes. We support recurring office cleaning as well as temporary coverage during staffing or vendor transitions.",
      },
      {
        question: "What parts of the office do you focus on most?",
        answer:
          "Most office scopes center on restrooms, break rooms, touchpoints, floors, entrances, and shared work areas.",
      },
    ],
  },
  {
    slug: "school-cleaning",
    name: "School Cleaning Services",
    shortName: "School Cleaning",
    metaTitle:
      "School Cleaning Services in Delaware County & Chester, PA | Artillery Cleaning Services",
    metaDescription:
      "Commercial school cleaning for classrooms, hallways, restrooms, cafeterias, and common areas across Delaware County & Chester, PA.",
    heroTitle: "School Cleaning Services Built for Daily Facility Demands",
    heroDescription:
      "Structured school cleaning support for campuses, classrooms, restrooms, hallways, cafeterias, and shared student spaces.",
    cardDescription:
      "Cleaning support for classrooms, cafeterias, hallways, restrooms, common areas, and high-touch school spaces.",
    image: "/school-cleaning-services.jpg",
    intro:
      "School facilities need dependable routines, clear communication, and attention to the spaces that get used hardest every day. We structure school cleaning around traffic patterns, busy schedules, and the need for consistency.",
    idealFor: [
      "Private schools and local educational facilities",
      "Classrooms, hallways, and administrative areas",
      "Restrooms, cafeterias, and multi-use common spaces",
      "Facilities that need recurring or overflow support",
    ],
    includes: [
      "Classroom and hallway cleaning",
      "Restroom sanitization and restocking support",
      "Cafeteria and common area cleaning",
      "Floor care for high-traffic school surfaces",
      "High-touch surface cleaning",
      "Flexible routines built around school schedules",
    ],
    process: [
      "Review the campus layout and highest-priority spaces",
      "Build a schedule around daily use, cleaning windows, and access",
      "Maintain consistent service with clear facility communication",
    ],
    faqs: [
      {
        question: "Do you clean both classrooms and common areas?",
        answer:
          "Yes. School scopes usually include classrooms, hallways, restrooms, cafeterias, and other shared spaces.",
      },
      {
        question: "Can service be scheduled outside active school hours?",
        answer:
          "Yes. We plan around facility schedules so cleaning can happen with minimal disruption.",
      },
      {
        question: "Do you support one-time school cleaning needs too?",
        answer:
          "Yes. In addition to recurring work, we can support one-time deep cleaning or temporary coverage when needed.",
      },
    ],
  },
  {
    slug: "post-construction-cleaning",
    name: "Post-Construction Cleaning Services",
    shortName: "Post-Construction",
    metaTitle:
      "Post-Construction Cleaning in Delaware County & Chester, PA | Artillery Cleaning Services",
    metaDescription:
      "Post-construction cleanup for commercial sites, contractor turnovers, rough cleanup, and final detail cleaning in Delaware County & Chester, PA.",
    heroTitle: "Post-Construction Cleaning for Turnover and Final Detail Work",
    heroDescription:
      "Cleanup support for contractors and project teams who need rough cleanup, dust control, final detail work, and handoff-ready spaces.",
    cardDescription:
      "Turnover cleaning for commercial construction, rough cleanup, dust removal, and final detail work before handoff.",
    image: "/post-construction-cleaning-services.jpg",
    intro:
      "Post-construction work needs timing, coordination, and cleanup that matches the stage of the project. We help contractors clear debris, control dust, and finish visible spaces so buildings are ready for inspection, occupancy, or owner handoff.",
    idealFor: [
      "Commercial buildouts and renovations",
      "General contractors and site teams",
      "Turnover phases that need fast cleanup support",
      "Projects that need rough cleanup and final detail cleaning",
    ],
    includes: [
      "Rough cleanup and debris removal support",
      "Dust control and high-surface wipe-downs",
      "Final detail cleaning for handoff",
      "Glass, fixtures, floors, and visible finish areas",
      "Common area and restroom preparation",
      "Flexible scheduling around project deadlines",
    ],
    process: [
      "Review the project stage, access requirements, and turnover deadlines",
      "Match the cleanup scope to rough cleanup, final detail, or both",
      "Support the handoff window with focused, deadline-driven service",
    ],
    faqs: [
      {
        question: "Do you handle both rough cleanup and final cleaning?",
        answer:
          "Yes. We can support earlier cleanup phases, final detail work, or a combination based on the project stage.",
      },
      {
        question: "Can you work around contractor schedules and deadlines?",
        answer:
          "Yes. Post-construction cleaning often depends on tight deadlines, so scheduling flexibility is built into the process.",
      },
      {
        question: "What parts of the site do you focus on before handoff?",
        answer:
          "Common priorities include floors, glass, fixtures, restrooms, touchpoints, and other visible finish areas.",
      },
    ],
  },
  {
    slug: "industrial-cleaning",
    name: "Industrial Cleaning Services",
    shortName: "Industrial Cleaning",
    metaTitle:
      "Industrial Cleaning Services in Delaware County & Chester, PA | Artillery Cleaning Services",
    metaDescription:
      "Industrial and facility cleaning for warehouses, production spaces, shared work areas, and commercial properties in Delaware County & Chester, PA.",
    heroTitle: "Industrial Cleaning Services for Working Facilities",
    heroDescription:
      "Cleaning support for industrial buildings, warehouses, production spaces, and high-use commercial facilities that need dependable floor and common-area care.",
    cardDescription:
      "Cleaning support for warehouses, industrial spaces, common areas, break rooms, restrooms, and high-use floors.",
    image: "/industrial-cleaning-services.jpg",
    intro:
      "Industrial and warehouse environments need practical service that respects workflow, safety, and heavy-use conditions. We focus on keeping shared spaces, floors, restrooms, and traffic areas cleaner and easier to manage.",
    idealFor: [
      "Industrial buildings and warehouse properties",
      "Production support spaces and break rooms",
      "Restrooms, shared corridors, and entry zones",
      "Facilities that need repeatable cleaning support",
    ],
    includes: [
      "Warehouse and common-area floor care",
      "Restroom and break room cleaning",
      "Shared traffic area cleaning",
      "Trash and debris management support",
      "High-use surface cleaning",
      "Schedules built around facility operations",
    ],
    process: [
      "Review the building layout, traffic, and operational windows",
      "Set a scope that focuses on the highest-use areas first",
      "Run scheduled service around facility access and workflow",
    ],
    faqs: [
      {
        question: "Do you clean warehouse and industrial common areas?",
        answer:
          "Yes. We support shared spaces, floors, restrooms, break rooms, and other high-use facility areas.",
      },
      {
        question: "Can service be scheduled around production or shift timing?",
        answer:
          "Yes. Industrial cleaning plans work best when they are scheduled around active operations and access windows.",
      },
      {
        question: "Is this only for large industrial sites?",
        answer:
          "No. We can support a range of industrial and commercial facility sizes depending on the scope and schedule.",
      },
    ],
  },
];

export const servicePageMap = Object.fromEntries(
  servicePages.map((page) => [page.slug, page])
) as Record<string, ServicePageData>;

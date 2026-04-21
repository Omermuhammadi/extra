import { areaPageMap } from "@/lib/area-pages";
import { servicePageMap } from "@/lib/service-pages";

type RawServiceAreaPage = {
  serviceSlug: keyof typeof servicePageMap;
  areaSlug: keyof typeof areaPageMap;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  answerCards: Array<{ title: string; text: string }>;
  facilityTypes: string[];
  scopeIncludes: string[];
  localPoints: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const rawServiceAreaPages: RawServiceAreaPage[] = [
  {
    serviceSlug: "office-cleaning",
    areaSlug: "delaware-county-pa",
    metaTitle:
      "Office Cleaning Services in Delaware County, PA | Artillery Cleaning Services",
    metaDescription:
      "Office cleaning in Delaware County, PA for suites, restrooms, break rooms, lobbies, and shared work areas.",
    heroTitle: "Office Cleaning Services in Delaware County, PA",
    heroDescription:
      "Recurring and overflow office cleaning for Delaware County businesses that need restrooms, entries, break rooms, and shared spaces kept clean on a dependable schedule.",
    intro:
      "Office managers in Delaware County usually need a cleaning partner who can handle visible daily-use spaces without creating extra follow-up. This page focuses on office environments where presentation, consistency, and after-hours scheduling matter.",
    answerCards: [
      {
        title: "What this covers",
        text: "Office cleaning for lobbies, restrooms, break rooms, shared spaces, touchpoints, and high-traffic floors.",
      },
      {
        title: "Who this fits",
        text: "Office managers, property teams, admin leads, and commercial tenants responsible for day-to-day building appearance.",
      },
      {
        title: "Where we work",
        text: "Business suites, office buildings, and shared workspaces throughout Delaware County, PA.",
      },
      {
        title: "How to start",
        text: "Send the building type, service frequency, and preferred timing to request a walkthrough or site quote.",
      },
    ],
    facilityTypes: [
      "Business suites and professional offices",
      "Shared office environments and admin spaces",
      "Entrances, lobbies, and restroom-heavy layouts",
      "Facilities that need after-hours recurring service",
    ],
    scopeIncludes: [
      "Restroom cleaning and supply checks",
      "Lobby, hallway, and entry presentation cleaning",
      "Break room and shared-space upkeep",
      "Touchpoint wiping and trash removal",
      "Floor care for carpet, tile, and hard surfaces",
    ],
    localPoints: [
      "Delaware County office buyers often need reliable after-hours support that does not interrupt staff traffic.",
      "The service plan can be structured around recurring schedules or short-term overflow coverage.",
      "The focus stays on visible spaces that shape first impressions for staff, visitors, and tenants.",
    ],
    faqs: [
      {
        question: "Do you provide recurring office cleaning in Delaware County?",
        answer:
          "Yes. Office cleaning can be set up on a recurring schedule or as temporary support when a building needs short-term coverage.",
      },
      {
        question: "Can office service be scheduled after business hours?",
        answer:
          "Yes. Many office clients prefer after-hours service so staff and visitors are not disrupted during the workday.",
      },
      {
        question: "What parts of the office are usually included?",
        answer:
          "Most office scopes center on restrooms, break rooms, touchpoints, shared spaces, entries, and floor care.",
      },
    ],
  },
  {
    serviceSlug: "office-cleaning",
    areaSlug: "chester-pa",
    metaTitle: "Office Cleaning Services in Chester, PA | Artillery Cleaning Services",
    metaDescription:
      "Office cleaning in Chester, PA for business suites, common areas, restrooms, and professional workspaces.",
    heroTitle: "Office Cleaning Services in Chester, PA",
    heroDescription:
      "Local office cleaning support in Chester, PA for business suites, professional buildings, shared offices, and daily-use common areas.",
    intro:
      "Chester office spaces often need straightforward cleaning support that keeps visible areas professional without adding management friction. This page is built for local buyers looking for office cleaning near Chester, PA.",
    answerCards: [
      {
        title: "What this covers",
        text: "Office cleaning for restrooms, break rooms, entries, common areas, touchpoints, and daily-use floors.",
      },
      {
        title: "Who this fits",
        text: "Small and mid-size businesses, office admins, property contacts, and managers of local professional workspaces.",
      },
      {
        title: "Where we work",
        text: "Office suites and commercial spaces in Chester, PA and nearby practical coverage zones.",
      },
      {
        title: "How to start",
        text: "Share your building use, schedule, and cleaning priorities to request a quote or walkthrough.",
      },
    ],
    facilityTypes: [
      "Local business offices and suites",
      "Professional buildings and reception areas",
      "Shared common areas and break rooms",
      "Facilities needing dependable weekly support",
    ],
    scopeIncludes: [
      "Restroom and common-area cleaning",
      "Touchpoint wiping and trash removal",
      "Break room and lobby cleaning",
      "Entry and hallway presentation cleaning",
      "Hard-floor and carpet care support",
    ],
    localPoints: [
      "Local response matters when managers need a nearby commercial cleaning contact instead of a broad regional vendor.",
      "Chester buyers often need service that can fit around normal office traffic and access windows.",
      "The cleaning scope can stay focused on the spaces that matter most to staff and visitors.",
    ],
    faqs: [
      {
        question: "Do you clean offices only in Chester, PA?",
        answer:
          "Chester is a core local service area, and office cleaning requests can also be reviewed for nearby coverage within the stated service area.",
      },
      {
        question: "Can you clean a smaller office suite or shared workspace?",
        answer:
          "Yes. The service can fit a range of office sizes as long as the scope, schedule, and access needs are clear.",
      },
      {
        question: "What is the first step for a Chester office quote?",
        answer:
          "The first step is sending the building type, cleaning frequency, and key areas that need attention so the scope can be reviewed.",
      },
    ],
  },
  {
    serviceSlug: "school-cleaning",
    areaSlug: "delaware-county-pa",
    metaTitle:
      "School Cleaning Services in Delaware County, PA | Artillery Cleaning Services",
    metaDescription:
      "School cleaning in Delaware County, PA for classrooms, hallways, restrooms, cafeterias, and common areas.",
    heroTitle: "School Cleaning Services in Delaware County, PA",
    heroDescription:
      "Structured school and facility cleaning support across Delaware County for classrooms, restrooms, hallways, cafeterias, and shared student spaces.",
    intro:
      "Educational facilities in Delaware County need routines that match traffic flow, building access, and the spaces that are used hardest every day. This page is for buyers who need school cleaning support framed around that reality.",
    answerCards: [
      {
        title: "What this covers",
        text: "Cleaning support for classrooms, hallways, restrooms, cafeterias, common areas, and high-touch school spaces.",
      },
      {
        title: "Who this fits",
        text: "Private schools, local educational facilities, administrators, and operations contacts managing recurring cleaning needs.",
      },
      {
        title: "Where we work",
        text: "School and facility environments across Delaware County, PA within the stated service area.",
      },
      {
        title: "How to start",
        text: "Share the campus layout, high-priority spaces, access timing, and service frequency to request a quote.",
      },
    ],
    facilityTypes: [
      "Private school campuses and educational facilities",
      "Classrooms, hallways, and front offices",
      "Restrooms, cafeterias, and common spaces",
      "Facilities needing recurring or overflow support",
    ],
    scopeIncludes: [
      "Classroom and hallway cleaning support",
      "Restroom sanitization and restocking checks",
      "Cafeteria and shared-space cleaning",
      "High-touch surface cleaning",
      "Floor care for high-traffic school surfaces",
    ],
    localPoints: [
      "School cleaning works best when the routine matches the way students, staff, and visitors actually move through the building.",
      "Delaware County educational facilities often need predictable service windows and clear communication around access.",
      "The scope can stay focused on the most heavily used spaces first and expand as needed.",
    ],
    faqs: [
      {
        question: "Do you clean both classrooms and common areas in Delaware County schools?",
        answer:
          "Yes. School cleaning usually covers classrooms, hallways, restrooms, cafeterias, and other shared spaces based on the agreed scope.",
      },
      {
        question: "Can school cleaning be scheduled outside active hours?",
        answer:
          "Yes. Service can be planned around the facility schedule so work happens during approved access windows.",
      },
      {
        question: "Do you handle one-time school cleaning needs too?",
        answer:
          "Yes. In addition to recurring support, one-time and overflow school cleaning needs can also be reviewed.",
      },
    ],
  },
  {
    serviceSlug: "school-cleaning",
    areaSlug: "chester-pa",
    metaTitle: "School Cleaning Services in Chester, PA | Artillery Cleaning Services",
    metaDescription:
      "School cleaning in Chester, PA for classrooms, cafeterias, restrooms, hallways, and common facility areas.",
    heroTitle: "School Cleaning Services in Chester, PA",
    heroDescription:
      "Local school and facility cleaning support in Chester, PA for classrooms, hallways, cafeterias, restrooms, and shared campus spaces.",
    intro:
      "School cleaning in Chester, PA requires clear routines, dependable follow-through, and attention to the areas students and staff use most. This page is structured for local educational facilities that need a practical cleaning plan.",
    answerCards: [
      {
        title: "What this covers",
        text: "Classrooms, hallways, restrooms, cafeterias, common areas, and recurring high-touch cleaning support.",
      },
      {
        title: "Who this fits",
        text: "Private schools, educational facilities, and local administrators responsible for daily building presentation and cleanliness.",
      },
      {
        title: "Where we work",
        text: "School and facility environments in Chester, PA and the immediate local coverage area.",
      },
      {
        title: "How to start",
        text: "Send the building type, service frequency, and high-priority spaces to request a site quote.",
      },
    ],
    facilityTypes: [
      "Private schools and local educational buildings",
      "Classrooms, front offices, and shared corridors",
      "Restrooms, cafeterias, and common-use areas",
      "Facilities needing overflow or recurring support",
    ],
    scopeIncludes: [
      "Classroom and hallway cleaning",
      "Restroom cleaning and replenishment checks",
      "Cafeteria and shared-space cleaning",
      "High-touch area cleaning",
      "Routine floor-care support",
    ],
    localPoints: [
      "Local school buyers usually need a vendor who understands building access windows and recurring schedules.",
      "Chester facilities often benefit from a cleaning scope that starts with the most used spaces and builds from there.",
      "The priority is consistent, visible follow-through instead of a vague generic checklist.",
    ],
    faqs: [
      {
        question: "Can you support recurring school cleaning in Chester, PA?",
        answer:
          "Yes. Recurring school cleaning can be reviewed around the building schedule and access requirements.",
      },
      {
        question: "Do you clean cafeterias and restrooms too?",
        answer:
          "Yes. These are commonly included in school cleaning scopes along with classrooms, hallways, and common areas.",
      },
      {
        question: "Is this only for large campuses?",
        answer:
          "No. Local school cleaning requests can fit a range of facility sizes depending on the scope and schedule.",
      },
    ],
  },
  {
    serviceSlug: "industrial-cleaning",
    areaSlug: "delaware-county-pa",
    metaTitle:
      "Industrial Cleaning Services in Delaware County, PA | Artillery Cleaning Services",
    metaDescription:
      "Industrial cleaning in Delaware County, PA for warehouses, shared work areas, restrooms, break rooms, and facility floors.",
    heroTitle: "Industrial Cleaning Services in Delaware County, PA",
    heroDescription:
      "Industrial cleaning support across Delaware County for warehouses, shared work areas, restrooms, break rooms, and high-use facility floors.",
    intro:
      "Industrial facilities in Delaware County need cleaning support that respects workflow, shift timing, and heavy-use conditions. This page focuses on the shared spaces and floor areas that usually need repeatable cleaning attention first.",
    answerCards: [
      {
        title: "What this covers",
        text: "Cleaning support for warehouses, restrooms, break rooms, shared corridors, and high-use industrial floors.",
      },
      {
        title: "Who this fits",
        text: "Warehouse operators, industrial facility managers, property contacts, and teams responsible for shared-use areas.",
      },
      {
        title: "Where we work",
        text: "Industrial and warehouse environments across Delaware County, PA within the service area.",
      },
      {
        title: "How to start",
        text: "Send the building type, traffic pattern, and preferred service window to request a quote.",
      },
    ],
    facilityTypes: [
      "Warehouses and industrial buildings",
      "Break rooms, restrooms, and shared corridors",
      "Shipping, receiving, and high-traffic support areas",
      "Facilities that need recurring common-area care",
    ],
    scopeIncludes: [
      "Shared floor and traffic-area cleaning",
      "Restroom and break room cleaning",
      "Trash and debris management support",
      "High-use surface cleaning",
      "Scheduling around active operations",
    ],
    localPoints: [
      "Industrial buyers usually need practical service that fits the way the facility actually runs, not a generic office-style checklist.",
      "Delaware County industrial spaces often need recurring attention on floors, shared spaces, and restrooms first.",
      "The scope can be built around access windows, production timing, and traffic-heavy zones.",
    ],
    faqs: [
      {
        question: "Do you clean industrial common areas in Delaware County?",
        answer:
          "Yes. Industrial cleaning can cover shared-use floors, corridors, restrooms, break rooms, and other high-traffic spaces.",
      },
      {
        question: "Can industrial service be scheduled around shifts?",
        answer:
          "Yes. The cleaning plan can be built around operating hours and approved access windows.",
      },
      {
        question: "Is this only for very large warehouses?",
        answer:
          "No. Industrial cleaning can fit a range of facility sizes as long as the scope and timing are clear.",
      },
    ],
  },
  {
    serviceSlug: "industrial-cleaning",
    areaSlug: "chester-pa",
    metaTitle:
      "Industrial Cleaning Services in Chester, PA | Artillery Cleaning Services",
    metaDescription:
      "Industrial cleaning in Chester, PA for warehouses, shared work areas, restrooms, break rooms, and floor care support.",
    heroTitle: "Industrial Cleaning Services in Chester, PA",
    heroDescription:
      "Local industrial cleaning support in Chester, PA for warehouses, production support spaces, shared corridors, restrooms, and facility floors.",
    intro:
      "Industrial cleaning in Chester, PA is usually about keeping shared spaces cleaner, safer, and easier to manage without interfering with the workday. This page is built for that type of practical facility need.",
    answerCards: [
      {
        title: "What this covers",
        text: "Warehouse and industrial cleaning support for shared-use spaces, restrooms, break rooms, and heavy-use floors.",
      },
      {
        title: "Who this fits",
        text: "Local warehouse managers, industrial operators, facility contacts, and teams responsible for common-area upkeep.",
      },
      {
        title: "Where we work",
        text: "Industrial buildings and warehouse environments in Chester, PA and nearby practical coverage areas.",
      },
      {
        title: "How to start",
        text: "Share the site type, key problem areas, and preferred service timing to request a quote.",
      },
    ],
    facilityTypes: [
      "Industrial and warehouse properties",
      "Break rooms and shared staff spaces",
      "Restrooms, corridors, and entrances",
      "High-use floors and operational support areas",
    ],
    scopeIncludes: [
      "Shared-area floor care support",
      "Restroom and break room cleaning",
      "Trash and debris management",
      "High-use surface cleaning",
      "Scheduling around site operations",
    ],
    localPoints: [
      "Local industrial buyers usually need a nearby contact who can review the site quickly and work around operations.",
      "Chester industrial spaces often need practical attention on floors, restrooms, and high-use shared areas before anything else.",
      "The goal is dependable upkeep that fits the site instead of forcing a generic janitorial template.",
    ],
    faqs: [
      {
        question: "Do you clean warehouse support spaces in Chester, PA?",
        answer:
          "Yes. Shared warehouse spaces, restrooms, break rooms, and high-use floors are common parts of industrial cleaning scopes.",
      },
      {
        question: "Can service be scheduled around operations?",
        answer:
          "Yes. Industrial cleaning plans work best when they match the site schedule and approved access windows.",
      },
      {
        question: "What should I send for an industrial quote?",
        answer:
          "Send the building type, key areas that need attention, service timing, and any access limitations so the scope can be reviewed.",
      },
    ],
  },
  {
    serviceSlug: "post-construction-cleaning",
    areaSlug: "delaware-county-pa",
    metaTitle:
      "Post-Construction Cleaning in Delaware County, PA | Artillery Cleaning Services",
    metaDescription:
      "Post-construction cleaning in Delaware County, PA for rough cleanup, dust removal, final detail work, and turnover support.",
    heroTitle: "Post-Construction Cleaning in Delaware County, PA",
    heroDescription:
      "Post-construction cleanup across Delaware County for rough cleanup, dust control, final detail cleaning, and turnover support before handoff.",
    intro:
      "Contractors in Delaware County often need post-construction cleaning that can match the stage of the project instead of forcing one generic cleanup scope. This page is built for rough cleanup, final detail work, and turnover-ready support.",
    answerCards: [
      {
        title: "What this covers",
        text: "Rough cleanup, dust removal, final detail cleaning, and handoff preparation for commercial construction projects.",
      },
      {
        title: "Who this fits",
        text: "General contractors, site supervisors, project teams, and renovation crews preparing a building for inspection or occupancy.",
      },
      {
        title: "Where we work",
        text: "Commercial buildouts, renovations, and turnover projects throughout Delaware County, PA.",
      },
      {
        title: "How to start",
        text: "Send the project stage, turnover deadline, and cleanup priorities to request a site review or quote.",
      },
    ],
    facilityTypes: [
      "Commercial buildouts and renovations",
      "Turnover and final handoff phases",
      "Projects needing rough cleanup support",
      "Sites requiring final detail cleaning before occupancy",
    ],
    scopeIncludes: [
      "Debris and rough cleanup support",
      "Dust control and wipe-downs",
      "Final detail cleaning before handoff",
      "Glass, fixtures, floors, and finish-area cleaning",
      "Scheduling around turnover deadlines",
    ],
    localPoints: [
      "Post-construction cleanup works best when the cleaning scope matches the current job stage.",
      "Delaware County project teams often need flexibility around inspection dates, owner walk-throughs, and turnover timing.",
      "The priority is getting visible finish areas ready without slowing down the handoff window.",
    ],
    faqs: [
      {
        question: "Do you handle both rough cleanup and final detail work in Delaware County?",
        answer:
          "Yes. Post-construction cleaning can be scoped around rough cleanup, final detail work, or both depending on the project stage.",
      },
      {
        question: "Can you work around project deadlines?",
        answer:
          "Yes. Post-construction cleaning often needs scheduling flexibility around turnover windows and final site access.",
      },
      {
        question: "What areas are usually cleaned before handoff?",
        answer:
          "Common priorities include floors, glass, fixtures, restrooms, common areas, and other visible finish spaces.",
      },
    ],
  },
  {
    serviceSlug: "post-construction-cleaning",
    areaSlug: "chester-pa",
    metaTitle:
      "Post-Construction Cleaning in Chester, PA | Artillery Cleaning Services",
    metaDescription:
      "Post-construction cleaning in Chester, PA for dust removal, rough cleanup, final detail work, and turnover support.",
    heroTitle: "Post-Construction Cleaning in Chester, PA",
    heroDescription:
      "Local post-construction cleanup in Chester, PA for commercial buildouts, renovation projects, dust control, final detail cleaning, and turnover support.",
    intro:
      "Post-construction cleanup in Chester, PA usually comes down to timing, dust control, and making visible areas ready for the next project step. This page is for contractors and project teams looking for practical local turnover support.",
    answerCards: [
      {
        title: "What this covers",
        text: "Rough cleanup, dust control, detail cleaning, and final turnover support for commercial projects.",
      },
      {
        title: "Who this fits",
        text: "Contractors, site leads, and renovation teams working toward final handoff or occupancy.",
      },
      {
        title: "Where we work",
        text: "Commercial project sites in Chester, PA and nearby practical local coverage zones.",
      },
      {
        title: "How to start",
        text: "Send the project stage, handoff date, and top cleanup priorities to request a quote.",
      },
    ],
    facilityTypes: [
      "Commercial renovation and buildout sites",
      "Projects nearing final turnover",
      "Sites needing rough cleanup or final detail work",
      "Restrooms, common areas, glass, and finish surfaces",
    ],
    scopeIncludes: [
      "Rough cleanup and dust control",
      "Final detail cleaning for visible finish areas",
      "Glass, fixtures, floors, and restroom cleaning",
      "Common-area handoff preparation",
      "Flexible timing around project deadlines",
    ],
    localPoints: [
      "Local contractors usually need quick alignment on the project stage and the exact handoff standard they are aiming for.",
      "Chester projects often need focused cleanup on the most visible areas first so ownership walk-throughs go more smoothly.",
      "The cleaning scope can be adjusted between rough cleanup and final detail work depending on timing.",
    ],
    faqs: [
      {
        question: "Can you support commercial turnover cleaning in Chester, PA?",
        answer:
          "Yes. Post-construction cleaning can be structured around local turnover and final detail needs in Chester, PA.",
      },
      {
        question: "Do you only clean finished spaces?",
        answer:
          "No. The scope can include rough cleanup, dust removal, final detail work, or a combination based on the project stage.",
      },
      {
        question: "What information helps most with a post-construction quote?",
        answer:
          "The most helpful details are the project stage, turnover target date, building type, and the areas that need final cleaning attention.",
      },
    ],
  },
];

export const serviceAreaPages = rawServiceAreaPages.map((page) => {
  const service = servicePageMap[page.serviceSlug];
  const area = areaPageMap[page.areaSlug];

  return {
    ...page,
    key: `${page.serviceSlug}::${page.areaSlug}`,
    service,
    area,
    image: service.image,
    path: `/services/${page.serviceSlug}/${page.areaSlug}`,
  };
});

export type ServiceAreaPageData = (typeof serviceAreaPages)[number];

export const serviceAreaPageMap = Object.fromEntries(
  serviceAreaPages.map((page) => [page.key, page])
) as Record<string, ServiceAreaPageData>;

export function getServiceAreaPage(serviceSlug: string, areaSlug: string) {
  return serviceAreaPageMap[`${serviceSlug}::${areaSlug}`];
}


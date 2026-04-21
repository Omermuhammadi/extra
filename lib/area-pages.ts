export type AreaPageData = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  cardDescription: string;
  image: string;
  intro: string;
  focusPoints: string[];
  facilityTypes: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export const areaPages: AreaPageData[] = [
  {
    slug: "delaware-county-pa",
    name: "Delaware County, PA",
    metaTitle:
      "Commercial Cleaning Services in Delaware County, PA | Artillery Cleaning Services",
    metaDescription:
      "Commercial cleaning services in Delaware County, PA for offices, schools, industrial properties, and post-construction sites.",
    heroTitle: "Commercial Cleaning Services in Delaware County, PA",
    heroDescription:
      "Local commercial cleaning support for offices, schools, industrial facilities, and contractor turnover work across Delaware County, PA.",
    cardDescription:
      "Local commercial cleaning support across Delaware County for offices, schools, industrial properties, and contractors.",
    image: "/office-cleaning-services.jpg",
    intro:
      "We support Delaware County facilities that need practical, local commercial cleaning support. Whether the need is recurring janitorial work, school cleaning, industrial/common-area cleaning, or post-construction cleanup, the focus stays on reliability and clear follow-through.",
    focusPoints: [
      "Commercial office cleaning and recurring service",
      "School and educational facility support",
      "Industrial and shared-space cleaning",
      "Post-construction and turnover cleanup",
    ],
    facilityTypes: [
      "Office buildings and business suites",
      "Schools and educational facilities",
      "Industrial and warehouse properties",
      "Renovation and contractor job sites",
    ],
    faqs: [
      {
        question: "Do you provide recurring cleaning in Delaware County?",
        answer:
          "Yes. We support recurring commercial cleaning as well as one-time and turnover projects throughout Delaware County.",
      },
      {
        question: "What types of buildings do you usually service in Delaware County?",
        answer:
          "Most work fits offices, schools, industrial properties, and contractor-related cleanup needs.",
      },
      {
        question: "Can I request both recurring and one-time service?",
        answer:
          "Yes. We can review the scope and recommend the best fit based on the building and schedule.",
      },
    ],
  },
  {
    slug: "chester-pa",
    name: "Chester, PA",
    metaTitle: "Commercial Cleaning Services in Chester, PA | Artillery Cleaning Services",
    metaDescription:
      "Commercial cleaning services in Chester, PA for offices, schools, industrial facilities, and post-construction cleanup.",
    heroTitle: "Commercial Cleaning Services in Chester, PA",
    heroDescription:
      "Commercial cleaning support based in Chester, PA for local offices, facilities, industrial properties, and contractor cleanup needs.",
    cardDescription:
      "Commercial cleaning support in Chester, PA for offices, facilities, industrial properties, and job-site cleanup.",
    image: "/industrial-cleaning-services.jpg",
    intro:
      "Chester, PA is a core local service area for Artillery Cleaning Services. We focus on helping nearby facilities stay clean, presentable, and operational with support that fits real schedules and local job demands.",
    focusPoints: [
      "Office and facility cleaning in Chester",
      "School and common-area cleaning support",
      "Industrial and warehouse cleaning needs",
      "Post-construction and turnover cleanup",
    ],
    facilityTypes: [
      "Local offices and commercial buildings",
      "Schools and multi-use facilities",
      "Industrial and warehouse sites",
      "Construction and renovation projects",
    ],
    faqs: [
      {
        question: "Are you based in Chester, PA?",
        answer:
          "Yes. Chester is part of the company's public business footprint and a core local service area.",
      },
      {
        question: "Do you handle commercial cleaning only in Chester?",
        answer:
          "No. Chester is a core service area, and we also support work across Delaware County and Chester, PA.",
      },
      {
        question: "What types of jobs do you support in Chester?",
        answer:
          "Most jobs fall into office cleaning, school/facility cleaning, industrial/common-area cleaning, and post-construction cleanup.",
      },
    ],
  },
];

export const areaPageMap = Object.fromEntries(
  areaPages.map((page) => [page.slug, page])
) as Record<string, AreaPageData>;

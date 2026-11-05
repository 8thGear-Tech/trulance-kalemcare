/**
 * All website copy and contact details live here.
 * Edit this file to change text on the site; the components only handle layout.
 */

export const contact = {
  phoneDisplay: "(437) 460-8142",
  phoneHref: "tel:+14374608142",
  email: "hello@kalemcare.com",
  careersEmail: "careers@kalemcare.com",
  website: "kalemcare.com",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how" },
  { label: "Families", href: "#families" },
  { label: "Organizations", href: "#organizations" },
];

export const headline = "Care You Can Count On. Dignity You Can Feel.";
export const strapline = "Excellence in Care | Compassionate Care | Reliable Support";

export const hero = {
  eyebrow: "Non-medical home care · Serving Families",
  title: "More than care.",
  titleAccent: "A partner you can trust.",
  intro:
    "When someone you love needs support, you are not simply looking for someone to help with daily tasks. You are looking for someone you can",
  introEmphasis: "trust",
  photo: {
    src: "/photos/kalem-companionship-tea.jpg",
    alt: "A KALEM caregiver holding hands with an older woman over a cup of tea in her living room",
  },
};

/** Photos used across the site. Put new photos in public/photos/ and list them here. */
export const photos = {
  servicesRow: [
    {
      src: "/photos/kalem-dressing-support.jpg",
      alt: "A KALEM caregiver helping an older woman put on her cardigan",
      caption: "Personal support",
    },
    {
      src: "/photos/kalem-meal-preparation.jpg",
      alt: "A KALEM caregiver and an older woman preparing a fresh salad together",
      caption: "Meal & home support",
    },
    {
      src: "/photos/kalem-activity-exercise.jpg",
      alt: "Two KALEM caregivers leading an older couple through gentle stretching exercises",
      caption: "Companionship & Socialization",
    },
  ],
  families: {
    src: "/photos/kalem-personal-care.jpg",
    alt: "A KALEM caregiver gently helping an older woman with her morning routine",
  },
};

export const intro = {
  lines: [
    "Someone who will show up.",
    "Someone who will listen.",
    "Someone who will treat your loved one with respect.",
    "Someone who understands that every person has a story, a routine, preferences, fears, strengths and a life that deserves to be honoured.",
  ],
  title: "That is KALEM.",
  body: [
    "KALEM Home Care Services provides compassionate, dependable non-medical home care and support designed around the individual—not simply around a list of tasks.",
  ],
  homeLine: "We help individuals maintain comfort, independence and dignity in the place they know best:",
  peace: {
    lead: "And we give families something equally important:",
    title: "Peace of mind.",
    body: "When the right support is in place, families can spend less time worrying whether care is being provided—and more time being family.",
  },
};

export const qualities = {
  eyebrow: "Why KALEM?",
  title: "Great care has three essential qualities",
  items: [
    {
      title: "Excellence in Care",
      body: [
        "We believe care should be intentional, professional and consistent.",
        "We don't simply send someone into a home and hope everything works out.",
        "We assess needs, understand routines, establish expectations and create systems that support quality.",
      ],
    },
    {
      title: "Compassion",
      body: [
        "People are not tasks.",
        "The person receiving care deserves to feel heard, respected and valued.",
        "Our caregivers bring patience, kindness and genuine human connection to every interaction.",
      ],
    },
    {
      title: "Reliability",
      body: [
        "Care is valuable when people can depend on it.",
        "KALEM is built around communication, scheduling, documentation, follow-up and accountability so that our clients and families know there is a professional team behind the care.",
      ],
    },
  ],
};

export const promise = {
  eyebrow: "Our promise",
  title: "We care for the person—not simply the task.",
  body: "Home care should help a person continue living life with as much independence, choice and dignity as possible.",
};

export type Service = { title: string; intro: string[]; items: string[]; note?: string; close: string };

export const services = {
  eyebrow: "Our services",
  title: "Care that fits real life",
  lead: "Every person is different. Every family is different. Every home is different.",
  body: "That is why KALEM does not believe in a one-size-fits-all approach. We begin by understanding the person, the family, the routine, the environment and the kind of support that is actually needed. Then we build care around that understanding.",
  items: [
    {
      title: "Personal Support",
      intro: [
        "Within our permitted non-medical scope, KALEM will provide assistance with appropriate activities of daily living, including:",
      ],
      items: [
        "Dressing",
        "Grooming",
        "Bathing support",
        "Toileting assistance",
        "Eating assistance",
        "Mobility support",
        "Routine personal-care assistance",
      ],
      note: "Our approach is to encourage independence rather than unnecessarily taking over.",
      close: "Help where help is needed. Independence wherever possible.",
    },
    {
      title: "Meal & Home Support",
      intro: ["A well-supported home can make everyday life easier. Our home-support services may include:"],
      items: [
        "Meal preparation",
        "Meal support",
        "Light housekeeping",
        "Laundry",
        "Linen changes",
        "Tidying and organization",
        "Routine household support",
      ],
      note: "The goal is not perfection.",
      close: "The goal is a safe, comfortable and manageable home environment.",
    },
    {
      title: "Companionship & Socialization",
      intro: ["Sometimes the greatest need is simply not being alone. Our companionship services include:"],
      items: [
        "Conversation and social interaction",
        "Reading and recreational activities",
        "Games and hobbies",
        "Walks and appropriate activities",
        "Social engagement",
        "Emotional companionship",
        "Encouragement with meaningful routines",
      ],
      close: "Because companionship is not a luxury. Connection is part of wellbeing.",
    },
    {
      title: "Respite Care",
      intro: [
        "Family caregivers give enormously. But even the strongest caregiver needs support.",
        "At KALEM, we provide respite support designed to give family caregivers time to:",
      ],
      items: [
        "Rest",
        "Work",
        "Attend appointments",
        "Manage personal responsibilities",
        "Reconnect with family",
        "Simply breathe",
      ],
      close: "Caring for the caregiver is part of caring for the family.",
    },
    {
      title: "Community & Daily-Living Support",
      intro: ["Where appropriate and within our service scope, KALEM support clients with:"],
      items: [
        "Errands",
        "Shopping assistance",
        "Community activities",
        "Walks",
        "Appointment accompaniment",
        "Social outings",
        "Maintaining meaningful routines",
      ],
      close: "We want the right support to help life remain meaningful.",
    },
    {
      title: "Short-Term & Flexible Support",
      intro: [
        "Life doesn't always follow a schedule. KALEM provide flexible support for appropriate short-term needs, including:",
      ],
      items: [
        "Temporary family-caregiver relief",
        "Increased support needs",
        "Short-term home assistance",
        "Transition periods",
        "Temporary caregiver absence",
      ],
      close: "When life changes, support should be able to change with it.",
    },
  ] satisfies Service[],
};

export const difference = {
  eyebrow: "The KALEM difference",
  title: "KALEM is building a different kind of care experience.",
  body: "There are many organizations that provide care. Our goal is not simply to be another one.",
  lines: [
    "One where compassion is supported by systems.",
    "Where caregivers are supported by management.",
    "Where families know who to call.",
    "Where concerns are addressed.",
    "Where quality is measured.",
  ],
  lastLine: "Where dignity is never treated as optional.",
};

export const steps = {
  eyebrow: "How KALEM works",
  title: "Five steps to the right care",
  items: [
    {
      title: "We listen",
      intro: "Before we recommend care, we want to understand the person.",
      items: [
        "What matters to them?",
        "What does a normal day look like?",
        "What do they enjoy?",
        "What support do they need?",
        "What does the family need?",
      ],
      style: "questions" as const,
    },
    {
      title: "We assess",
      intro: "Our assessment process looks beyond the immediate task. We consider:",
      items: [
        "Daily routines",
        "Functional support needs",
        "Personal-care requirements",
        "Mobility",
        "Communication",
        "Social needs",
        "Household support",
        "Family involvement",
        "Home environment",
        "Safety considerations",
        "Client preferences",
      ],
      style: "columns" as const,
      close: 'We don\'t begin with "What can we sell?" We begin with: "What support is appropriate?"',
    },
    {
      title: "We build the plan",
      intro: "Based on the assessment, KALEM develops a clear service plan outlining:",
      items: [
        "What support is required",
        "When it is required",
        "How it should be delivered",
        "Client preferences",
        "Caregiver expectations",
        "Communication requirements",
      ],
      style: "list" as const,
      close: "Everyone should understand the plan.",
    },
    {
      title: "We match the right caregiver",
      intro: "The right caregiver can change the entire care experience. We consider appropriate factors such as:",
      items: [
        "Skills",
        "Experience",
        "Availability",
        "Personality",
        "Communication",
        "Client preferences",
        "Assignment requirements",
      ],
      style: "columns" as const,
      close: "The goal is not simply to fill a shift. The goal is to create a good care relationship.",
    },
  ],
  final: {
    title: "We stay connected",
    intro: "KALEM does not disappear once service begins. We maintain communication and follow-up. We monitor:",
    items: [
      "Client experience",
      "Caregiver performance",
      "Attendance",
      "Documentation",
      "Changes in needs",
      "Concerns and complaints",
      "Service quality",
    ],
    close: "Because good care is not a one-time event.",
    accent: "It is an ongoing relationship.",
  },
};

export const quality = {
  standard: {
    eyebrow: "Our quality standard",
    lead: "KALEM operates on this framework:",
    cycle: ["Measure", "Review", "Identify", "Correct", "Train", "Measure again"],
    close: "We continuously look for ways to improve the experience for clients, families and caregivers.",
  },
  safety: {
    eyebrow: "Safety first",
    body: "KALEM maintains clear boundaries around non-medical care. Our caregivers work within their qualifications, training, assigned responsibilities and the company's defined service scope.",
    lead: "When a situation falls outside our scope:",
    steps: ["Stop", "Ask", "Escalate"],
    close: "We would rather pause and seek the appropriate direction than take an unsafe shortcut.",
  },
};

export const families = {
  eyebrow: "For families",
  title: "You should never have to wonder",
  questions: [
    '"Who is looking after Mom?"',
    '"Will someone actually show up?"',
    '"What happens if something changes?"',
    '"Who do I call?"',
  ],
  answer: "KALEM is designed to give families answers.",
  pillars: ["One care team.", "Clear communication.", "Professional oversight.", "Greater peace of mind."],
  card: {
    body: "Whether you need a few hours of weekly support or a more structured care arrangement, KALEM can help you explore an appropriate solution.",
    lead: "You may be looking for:",
    items: [
      "A companion for an aging parent",
      "Help with daily routines",
      "Personal support",
      "Respite for a family caregiver",
      "Help around the home",
      "Short-term support",
      "Regular recurring care",
    ],
    cta: "Start with a conversation.",
    close: "You don't have to figure everything out alone.",
  },
};

export const organizations = {
  eyebrow: "For communities & care organizations",
  title: "A dependable care-support partner",
  body: "KALEM is designed to serve individuals and families directly while also partnering with organizations that need dependable care-support resources.",
  retirement: {
    title: "Retirement & assisted-living communities",
    intro:
      "KALEM can provide qualified support personnel according to agreed service requirements. Potential staffing arrangements include:",
    items: [
      "Vacation coverage",
      "Sick-call coverage",
      "Backup PSWs and caregivers",
      "Temporary assignments",
      "Short-notice coverage where available",
    ],
    close: "When in need of a caregiver, KALEM can be part of your response plan.",
  },
  whyTitle: "Why partner with KALEM?",
  why: [
    {
      title: "A professional approach",
      body: "KALEM is building systems for intake, assessment, scheduling, documentation, incident management and quality assurance.",
    },
    {
      title: "A human approach",
      body: "We never want systems to replace humanity. Our systems exist to make compassionate care more consistent.",
    },
    {
      title: "A responsive approach",
      body: "Communication matters. When something changes, our partners should know who to contact and what happens next.",
    },
    {
      title: "A quality-driven approach",
      body: "We don't define quality by good intentions alone. We have high standards, monitor performance and act on feedback.",
    },
  ],
};

export const values = {
  eyebrow: "Our core values",
  items: [
    { title: "Excellence in Care", body: "We have high standards." },
    { title: "Compassion", body: "We treat our clients with patience, kindness and understanding." },
    { title: "Reliability", body: "We do what we say we will do." },
  ],
  experienceEyebrow: "The KALEM experience",
  experience: [
    { title: "Listen.", body: "We understand before we act." },
    { title: "Assess.", body: "We identify the real support needs." },
    { title: "Plan.", body: "We create clear expectations." },
    { title: "Match.", body: "We connect the right caregiver to the assignment." },
    { title: "Support.", body: "We stay connected throughout service." },
    { title: "Improve.", body: "We listen, measure and continuously strengthen our care." },
  ],
};

export const contactSection = {
  eyebrow: "Contact",
  title: "Let's talk about the care you need.",
  body: "Whether you are a family looking for support for someone you love or an organization looking for a dependable care-support partner, KALEM is ready to have the conversation.",
  enquiryTypes: [
    "A family member or individual",
    "A retirement or assisted-living community",
    "A long-term care or healthcare organization",
    "A caregiver looking to join KALEM",
  ],
};

export const commitment = {
  eyebrow: "Our commitment",
  lines: [
    "At KALEM, we believe we believe care should be timed, patient and intentional.",
    "We are here to provide the support—and the peace of mind—that makes home feel like home.",
  ],
};

export const footer = {
  legal:
    "© 2026 KALEM Home Care Services · Serving Families. KALEM provides non-medical home care and support services.",
};

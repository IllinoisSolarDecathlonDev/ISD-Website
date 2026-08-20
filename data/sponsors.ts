export type SponsorTier = "diamond" | "gold" | "silver" | "orangeBlue" | "productSponsors";

export type Sponsor = {
  name: string;
  logoSrc?: string;
  website?: string;
  tier: SponsorTier;
  description?: string;
};

// Example structure — add your real sponsors here.
// You can duplicate entries and adjust tiers, names, logos, and URLs.
export const sponsors: Sponsor[] = [
  // Top tiers (fewer sponsors, larger logos)
  {
    name: "Illinois Green Fund (IGF) / Student Sustainability Committee",
    logoSrc: "/images/sponsors/igf.png",
    website: "https://studentengagement.illinois.edu/studentsustainability/ssc",
    tier: "diamond",
    description: "ISD is partnering with Habitat for Humanity for the second consecutive Build Challenge. With our missions aligning to provide affordable housing, Habitat for Humanity finds a family to call our built houses a home. "
  },
  {
    name: "Habitat for Humanity",
    logoSrc: "/images/sponsors/habitatcu.png",
    website: "https://cuhabitat.org/",
    tier: "diamond",
    description: "ISD is partnering with Habitat for Humanity for the second consecutive Build Challenge. With our missions aligning to provide affordable housing, Habitat for Humanity finds a family to call our built houses a home. "
  },
  {
    name: "Constellation E2 Energy to Educate",
    logoSrc: "/images/sponsors/conste2.png",
    website: "https://www.constellationenergy.com/impact/powering-communities/energy-to-educate.html",
    tier: "diamond",
    description: "Constellation Energy’s E2 Energy to Educate grant program gives students (from sixth grade through college) the opportunity to explore energy- and STEM-related challenges via hands-on projects — with nearly $7 million awarded since 2010 and more than 330,000 students reached nationwide."
  },
  {
    name: "Office of Provost, University of Illinois Urbana-Champaign",
    logoSrc: "/images/sponsors/illinoisprovost.png",
    website: "https://provost.illinois.edu/",
    tier: "diamond",
    description: "The Office of the Provost at the University of Illinois Urbana-Champaign serves as the campus’s chief academic authority, overseeing the quality and direction of all academic programs."
  },


  // gold
  {
    name: "ILLINOIS ECE, Center for Electric Machinery and Electromechanics",
    logoSrc: "/images/sponsors/uiucece.png",
    website: "https://ceme.ece.illinois.edu/",
    tier: "gold",
    description: "The Electrical and Computer Engineering (ECE) Department at Illinois — part of the Grainger College of Engineering — is a nationally top-ranked program recognized for excellence in research, innovation, and education. Illinois ECE prepares students to lead in areas such as computing systems, artificial intelligence, microelectronics, communications, robotics, power and energy systems, and bioengineering. Through hands-on learning and groundbreaking research, the department equips engineers to solve complex technological challenges and drive advancements that shape the future."
  },

  // Silver tier
  {
    name: "Illinois Civil & Environmental Engineering",
    logoSrc: "/images/sponsors/illinoiscee.png",
    website: "https://example.com",
    tier: "silver",
    description: "The CEE Department at Illinois — part of the Grainger College of Engineering — is a storied and top-ranked program (undergrad civil #4, environmental #3; graduate civil #1, environmental #3 in national rankings) that educates and trains engineers to address society’s most pressing infrastructure, environmental, and sustainability challenges."
  },
  {
    name: "Illinois Agricultural and Biological Engineering",
    logoSrc: "/images/sponsors/illinoisabe.png",
    website: "https://example.com",
    tier: "silver",
    description: "The ABE Department at Illinois merges engineering and life sciences to design sustainable solutions for food production, energy, water, and environmental systems — tackling real-world challenges in agriculture, biotechnology, bio-processing, water/soil conservation, and environmental protection."
  },
  {
    name: "Illinois Electrical and Computer Engineering",
    logoSrc: "/images/sponsors/uiucece.png",
    website: "https://ece.illinois.edu",
    tier: "silver",
    description: "The Electrical and Computer Engineering (ECE) Department at Illinois — part of the Grainger College of Engineering — is a nationally top-ranked program recognized for excellence in research, innovation, and education. Illinois ECE prepares students to lead in areas such as computing systems, artificial intelligence, microelectronics, communications, robotics, power and energy systems, and bioengineering. Through hands-on learning and groundbreaking research, the department equips engineers to solve complex technological challenges and drive advancements that shape the future."
  },

  // Orange & Blue tiers (most sponsors live here)
  {
    name: "Tesla Transformers India Limited",
    logoSrc: "/images/sponsors/teslatransform.png",
    website: "https://example.com",
    tier: "orangeBlue",
    description: "Tesla Transformers (India) Ltd (TTIL) is a transformer-manufacturing and electrical-power equipment company headquartered in Bhopal, Madhya Pradesh, India."
  },
  {
    name: "Broeren Russo",
    logoSrc: "/images/sponsors/broernrusso.png",
    website: "https://example.com",
    tier: "orangeBlue",
    description: "Broeren Russo provides a full range of construction services including general contracting, construction management, and project management for commercial, institutional, healthcare, student-housing, retail, and mixed-use developments."
  },
  {
    name: "Illini Dads Association",
    logoSrc: "/images/sponsors/illinidads.png",
    website: "https://example.com",
    tier: "orangeBlue",
    description: "The Illini Dads Association is a nonprofit parent-organization made up of fathers (and father figures) of UIUC students. Membership is automatic when you have a student at UIUC."
  },
  {
    name: "Mead & Hunt",
    logoSrc: "/images/sponsors/meadhunt.png",
    website: "https://example.com",
    tier: "orangeBlue",
    description: "Mead & Hunt, Inc. is a U.S.-based, employee-owned architectural, engineering, planning, and environmental consulting firm, founded in 1900."
  },
  {
    name: "Trotter and Associates, Inc",
    logoSrc: "/images/sponsors/trotterassociates.png",
    website: "https://example.com",
    tier: "orangeBlue",
    description: "Trotter & Associates, Inc. is a civil and environmental engineering firm based in St. Charles, Illinois, providing planning, design, and construction services for municipal infrastructure. They specialize in water/wastewater treatment, stormwater management, transportation engineering, and public-sector engineering solutions."
  },
  {
    name: "Granite",
    logoSrc: "/images/sponsors/granite.png",
    website: "https://example.com",
    tier: "orangeBlue",
    description: "Granite Construction is a major U.S. civil-infrastructure firm (founded in 1922), delivering heavy-civil projects like highways, bridges, water-infrastructure, and aggregate production.  Their services span construction, materials supply (sand, gravel, asphalt), construction-management, and design-build — making them one of America’s largest diversified contractors."
  },


  //product
  {
    name: "GE Kitchen & Laundry Appliances",
    logoSrc: "/images/sponsors/gebob.png",
    website: "https://example.com",
    tier: "productSponsors",
    description: "GE provides reliable, energy-efficient kitchen and laundry appliances ideal for modern living. Their sleek, functional designs support BEACON’s commitment to convenience and smart resource use. These appliances elevate daily living while reducing energy consumption.",
  }
];


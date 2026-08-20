export type PressProject = "beacon" | "renu-house" | "adapthaus" | "forbes";
export type PressType = "Newsletter" | "Article" | "TV" | "Editorial";

export interface PressItem {
  id: string;
  title: string;
  url: string;
  project: PressProject;
  type: PressType;
  source?: string;
  date?: string;
  featured?: boolean;
  thumbnail?: string;
}

export const pressItems: PressItem[] = [
  // BEACON News
  {
    id: "beacon-fox",
    title: "Students Design Net Zero Home in Rantoul",
    url: "https://www.foxillinois.com/news/local/students-design-net-zero-home-in-rantoul/article_e7541297-d505-5b77-b06c-9439d0a2dd73.html",
    project: "beacon",
    type: "Article",
    source: "Fox Illinois",
    date: "Feb 2026",
    featured: true,
    thumbnail: "https://img.youtube.com/vi/KowSq5quvXA/maxresdefault.jpg",
  },
  {
    id: "beacon-fox-video",
    title: "Students Design Net Zero Home in Rantoul - Video Feature",
    url: "https://www.youtube.com/watch?v=KowSq5quvXA",
    project: "beacon",
    type: "TV",
    source: "Fox Illinois",
    date: "Feb 2026",
    featured: true,
    thumbnail: "https://img.youtube.com/vi/KowSq5quvXA/maxresdefault.jpg",
  },
  // RENU House News
  {
    id: "renu-nl-1",
    title: "RENU House Newsletter Vol 1",
    url: "https://www.canva.com/design/DAFXJTAMMfI/wG0Jf_6W25oKcsvhNbM0qA/view",
    project: "renu-house",
    type: "Newsletter",
    date: "2023",
  },
  {
    id: "renu-nl-2",
    title: "RENU House Newsletter Vol 2",
    url: "https://www.google.com/url?q=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAFa3xpjdlo%2FHPbOL7wCCrf8iIO5_ZYVgA%2Fview%3Futm_content%3DDAFa3xpjdlo%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink%26utm_source%3Dpublishsharelink&sa=D&sntz=1&usg=AOvVaw2QyKi7ifkl-4vuxk07Bd1O",
    project: "renu-house",
    type: "Newsletter",
    date: "2023",
  },
  {
    id: "renu-nl-3",
    title: "RENU House Newsletter Vol 3",
    url: "https://www.google.com/url?q=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAFb_ye9VKw%2F19ZtMoqFYhjSegoAQ7ZjZA%2Fview%3Futm_content%3DDAFb_ye9VKw%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink%26utm_source%3Dhomepage_design_menu&sa=D&sntz=1&usg=AOvVaw22a4qhB8c9aTYNvxVt1x85",
    project: "renu-house",
    type: "Newsletter",
    date: "2023",
  },
  {
    id: "renu-nl-4",
    title: "RENU House Newsletter Vol 4",
    url: "https://www.google.com/url?q=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAFd6TpsL2U%2FwkdvXhwZIVQZEhDuuEojIg%2Fview%3Futm_content%3DDAFd6TpsL2U%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink%26utm_source%3Dhomepage_design_menu&sa=D&sntz=1&usg=AOvVaw2NBiRRWfofuOLaLg-s6EHM",
    project: "renu-house",
    type: "Newsletter",
    date: "2023",
  },
  {
    id: "renu-daily-illini",
    title: "ISD Donates Sustainable House to Habitat for Humanity",
    url: "https://dailyillini.com/news-stories/around-campus/2023/12/05/illinois-solar-decathlon-donates-net-zero-sustainable-house-single-mother-family-three/",
    project: "renu-house",
    type: "Article",
    source: "Daily Illini",
    date: "2024",
  },
  // ADAPTHAUS (inauguration block is separate; these are additional coverage)
  {
    id: "adapthaus-wcia",
    title: "WCIA Coverage of the Event",
    url: "https://www.wcia.com/news/uiuc-team-competes-in-solar-decathlon-finals/?fbclid=IwAR3CRexW5iv8yJTid2XY2q7o3QxuqbjoH4lT3F8ZNOVhLbjDVUntTN_mSdA",
    project: "adapthaus",
    type: "TV",
    source: "WCIA",
  },
  // Forbes Feature
  {
    id: "forbes-adapthaus",
    title: "ADAPTHAUS",
    url: "https://www.forbes.com/sites/sherikoones/2021/04/21/affordable-and-adaptable-houses-for-first-time-homeowners/",
    project: "forbes",
    type: "Article",
    source: "Forbes",
    featured: true,
  },
  {
    id: "forbes-decathlon",
    title: "Solar Decathlon Competition",
    url: "https://www.forbes.com/sites/sherikoones/2021/04/08/the-solar-decathlon-going-virtual-this-year/?sh=f04c31f1acce",
    project: "forbes",
    type: "Article",
    source: "Forbes",
    featured: true,
  },
  {
    id: "daily-illini-letter",
    title: "Letter to the Editor",
    url: "https://dailyillini.com/opinions-stories/2021/01/19/letter-to-the-editor-illinois-solar-decathlon-showcases-university-engineering/",
    project: "forbes",
    type: "Editorial",
    source: "Daily Illini",
  },
  {
    id: "resource-furniture",
    title: "Resource Furniture Article",
    url: "https://resourcefurniture.com/blogs/blog/adapthaus-net-zero-for-the-win-1",
    project: "forbes",
    type: "Article",
    source: "Resource Furniture",
  },
  {
    id: "daily-illini-unveil",
    title: "Students Unveil Sustainable Home",
    url: "https://dailyillini.com/showcase/2021/04/13/students-unveil-sustainable-modular-home/",
    project: "forbes",
    type: "Article",
    source: "Daily Illini",
  },
  {
    id: "pvc-fittings",
    title: "PVC Fittings Article",
    url: "https://www.pvcfittingsonline.com/blogs/resource-center/supporting-university-of-illinois-students-in-the-illinois-solar-decathlon",
    project: "forbes",
    type: "Article",
    source: "PVC Fittings",
  },
];

export const pressSectionConfig = {
  beacon: {
    id: "beacon",
    title: "BEACON Home News",
    subtitle: "Latest coverage and updates for the BEACON project.",
  },
  "renu-house": {
    id: "renu-house",
    title: "RENU House News",
    subtitle: "Newsletters and coverage for the RENU House project.",
  },
  adapthaus: {
    id: "adapthaus",
    title: "ADAPTHAUS in the News",
    subtitle: "Articles and event coverage for ADAPTHAUS.",
  },
  forbes: {
    id: "forbes",
    title: "Forbes Feature",
    subtitle: "Featured stories and related press.",
  },
} as const;

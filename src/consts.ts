import type { Metadata, Site } from "@types";

export const SITE: Site = {
  TITLE: "Karindra Linux",
  DESCRIPTION: "Engineer, writer, and thinker.",
  EMAIL: "namakulinux@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Engineer, writer, and thinker.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/linxhirarki",
    ICON: "twitter",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/karindralinux",
    ICON: "github",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://linkedin.com/in/linuxhirarki",
    ICON: "linkedin",
  },
];

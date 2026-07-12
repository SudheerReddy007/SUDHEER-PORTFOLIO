export interface NavLink {
  name: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  client: string;
  slug: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

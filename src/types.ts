export type Maintainers = Record<number, Maintainer[]>;

export type Maintainer = {
  text: string;
  href?: string;
};

export type Databases = Record<number, Database>;

export type Database = {
  text: string;
  href: string;
};

export type ContactDetails = {
  text: string;
  href: string;
};

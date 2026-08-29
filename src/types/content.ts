export type VerificationStatus =
  | "verified"
  | "client-verification-required"
  | "verification-required"
  | "draft";

export type PublicationStatus = 
  | "published" 
  | "draft" 
  | "verification-required";

export type MediaStatus = 
  | "available" 
  | "placeholder" 
  | "client-verification-required";

export interface ContentSource {
  label: string;
  url?: string;
  type?: "official" | "news" | "client";
}

export interface ImageAsset {
  src: string;
  alt: string;
  status: MediaStatus;
  caption?: string;
  credit?: string;
  width?: number;
  height?: number;
}

export interface VideoAsset {
  src: string;
  status: MediaStatus;
  poster?: string;
  title?: string;
  caption?: string;
  duration?: string;
  category?: string;
  verification?: VerificationStatus;
}

export interface Initiative {
  slug: string;
  title: string;
  titleMr?: string;
  shortDescription: string;
  category: string;
  location?: string;
  date?: string;
  status?: string;
  heroImage?: ImageAsset;
  gallery?: ImageAsset[];
  videos?: VideoAsset[];
  problem?: string;
  action?: string;
  result?: string;
  stats?: { value: string; label: string }[];
  sources?: ContentSource[];
  verification: VerificationStatus;
}

export interface Person {
  name: string;
  nameMr: string;
  designation: string;
  shortBio: string;
  longBio: string[];
  location: string;
  roles: string[];
  education: string[];
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface ImpactMetric {
  value: string;
  label: string;
  description?: string;
  verification: VerificationStatus;
}

export interface JourneyEvent {
  year: string;
  title: string;
  description: string;
  location?: string;
  image?: ImageAsset;
  sources?: ContentSource[];
  verification: VerificationStatus;
}

export interface Achievement {
  title: string;
  description: string;
  date?: string;
  image?: ImageAsset;
  sources?: ContentSource[];
  verification: VerificationStatus;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description?: string;
  certificate?: ImageAsset;
  source?: ContentSource[];
  verification: VerificationStatus;
}

export interface GalleryItem {
  id: string;
  image: ImageAsset;
  category: string;
  caption?: string;
  date?: string;
  location?: string;
  credit?: string;
  verification: VerificationStatus;
}

// Categories for UI consistency
export const CATEGORIES = [
  "farmers",
  "water",
  "education",
  "healthcare",
  "infrastructure",
  "youth",
  "women",
  "employment",
  "social-welfare",
  "environment",
  "public-grievances",
  "other"
] as const;

export type Category = typeof CATEGORIES[number];

export interface NewsArticle {
  id: string;
  publisher: string;
  date: string;
  title: string;
  originalUrl?: string;
  image?: ImageAsset;
  verification: VerificationStatus;
}

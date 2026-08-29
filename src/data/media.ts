import { ImageAsset, VideoAsset } from "@/types/content";

export const mediaRegistry: {
  hero: Record<string, ImageAsset>;
  profile: Record<string, ImageAsset>;
  initiatives: Record<string, ImageAsset>;
  journey: Record<string, ImageAsset>;
  people: Record<string, ImageAsset>;
  constituency: Record<string, ImageAsset>;
  achievements: Record<string, ImageAsset>;
  awards: Record<string, ImageAsset>;
  media: Record<string, ImageAsset>;
  gallery: Record<string, ImageAsset>;
  videos: Record<string, VideoAsset>;
} = {
  hero: {
    main: {
      src: "/images/hero/hero-main.jpg",
      alt: "Kailas Dada Patil",
      status: "placeholder",
    }
  },
  profile: {
    primary: {
      src: "/images/profile/profile-01.jpg",
      alt: "Kailas Dada Patil Portrait",
      status: "placeholder",
    }
  },
  initiatives: {
    farmerInsurance: {
      src: "/images/initiatives/farmer-insurance-01.jpg",
      alt: "Farmer Insurance Initiative",
      status: "placeholder",
    },
    waterSupply: {
      src: "/images/initiatives/water-supply-01.jpg",
      alt: "Water Supply Project",
      status: "placeholder",
    },
    medicalCamps: {
      src: "/images/initiatives/medical-camps-01.jpg",
      alt: "Medical Camp",
      status: "placeholder",
    }
  },
  journey: {
    election2024: {
      src: "/images/journey/election-2024.jpg",
      alt: "Assembly Election Victory 2024",
      status: "placeholder",
    },
    election2019: {
      src: "/images/journey/election-2019.jpg",
      alt: "First Assembly Election 2019",
      status: "placeholder",
    },
    zpPresident2017: {
      src: "/images/journey/zp-president-2017.jpg",
      alt: "Zilla Parishad President 2017",
      status: "placeholder",
    },
    zpMember2012: {
      src: "/images/journey/zp-member-2012.jpg",
      alt: "Zilla Parishad Member 2012",
      status: "placeholder",
    },
    sarpanch2007: {
      src: "/images/journey/sarpanch-2007.jpg",
      alt: "Sarpanch Yedshi 2007",
      status: "placeholder",
    },
  },
  people: {
    interaction1: {
      src: "/images/people/interaction-01.jpg",
      alt: "Public Interaction",
      status: "placeholder",
      caption: "शेतकऱ्यांशी संवाद"
    },
    interaction2: {
      src: "/images/people/interaction-02.jpg",
      alt: "Women Empowerment",
      status: "placeholder",
      caption: "महिला सक्षमीकरण"
    },
  },
  constituency: {},
  achievements: {},
  awards: {},
  media: {
    news1: {
      src: "/images/placeholders/news-1.jpg",
      alt: "News Coverage 1",
      status: "placeholder",
    },
    news2: {
      src: "/images/placeholders/news-2.jpg",
      alt: "News Coverage 2",
      status: "placeholder",
    },
    news3: {
      src: "/images/placeholders/news-3.jpg",
      alt: "News Coverage 3",
      status: "placeholder",
    }
  },
  gallery: {
    placeholder1: {
      src: "/images/gallery/gallery-01.jpg",
      alt: "Gallery Image 1",
      status: "placeholder"
    },
    placeholder2: {
      src: "/images/gallery/gallery-02.jpg",
      alt: "Gallery Image 2",
      status: "placeholder"
    },
    placeholder3: {
      src: "/images/gallery/gallery-03.jpg",
      alt: "Gallery Image 3",
      status: "placeholder"
    }
  },
  videos: {
    heroBackground: {
      src: "/videos/hero/hero-bg.mp4",
      status: "placeholder",
      title: "Hero Background"
    }
  }
};

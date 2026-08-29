import { ImageAsset, VideoAsset } from "@/types/content";

export const mediaRegistry: {
  hero: Record<string, ImageAsset>;
  profile: Record<string, ImageAsset>;
  initiatives: Record<string, ImageAsset>;
  journey: Record<string, ImageAsset>;
  people: Record<string, ImageAsset>;
  assembly: Record<string, ImageAsset>;
  constituency: Record<string, ImageAsset>;
  achievements: Record<string, ImageAsset>;
  awards: Record<string, ImageAsset>;
  media: Record<string, ImageAsset>;
  gallery: Record<string, ImageAsset>;
  videos: Record<string, VideoAsset>;
} = {
  hero: {
    main: {
      src: "/images/real/herosection1.jpg",
      alt: "Kailas Dada Patil",
      status: "available",
    }
  },
  profile: {
    primary: {
      src: "/images/real/media_1788016497502.jpg",
      alt: "Kailas Dada Patil Portrait",
      status: "available",
    }
  },
  initiatives: {
    farmerInsurance: {
      src: "/images/real/media_1788010692928.jpg",
      alt: "Farmer Insurance Initiative",
      status: "available",
    },
    waterSupply: {
      src: "/images/initiatives/water-supply-01.jpg",
      alt: "Water Supply Project",
      status: "placeholder",
    },
    medicalCamps: {
      src: "/images/real/media_1788016712195.jpg",
      alt: "Medical Camp",
      status: "available",
    }
  },
  journey: {
    campaign: {
      src: "/images/real/media_1788018244760.jpg",
      alt: "Election Campaign",
      status: "available",
    },
    speech: {
      src: "/images/real/media_1788018240686.jpg",
      alt: "Public Speech",
      status: "available",
    },
    interaction: {
      src: "/images/real/media_1788018248434.jpg",
      alt: "People Interaction",
      status: "available",
    },
    election2024: {
      src: "/images/real/media_1788005986170.png",
      alt: "Felicitation and Recognition",
      status: "available",
    },
    uddhavThackeray: {
      src: "/images/real/media_1788009718420.png",
      alt: "Meeting Hon. Uddhav Thackeray",
      status: "available",
    },
    wari: {
      src: "/images/real/media_1788009658808.png",
      alt: "Wari with citizens",
      status: "available",
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
      src: "/images/real/media_1788005186496.jpg",
      alt: "Public Interaction",
      status: "available",
      caption: "शेतकऱ्यांशी संवाद"
    },
    interaction2: {
      src: "/images/real/media_1788005191047.jpg",
      alt: "Public Gathering",
      status: "available",
      caption: "जनतेशी संवाद"
    },
  },
  assembly: {
    speaking: {
      src: "/images/real/media_1788009620986.jpg",
      alt: "Speaking in Assembly",
      status: "available",
    }
  },
  constituency: {
    flagHoisting: {
      src: "/images/real/media_1788009575049.png",
      alt: "Flag Hoisting at Collector Office",
      status: "available",
    }
  },
  achievements: {},
  awards: {
    felicitation: {
      src: "/images/real/media_1788010660604.jpg",
      alt: "Felicitation by Uddhav Thackeray",
      status: "available",
    }
  },
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

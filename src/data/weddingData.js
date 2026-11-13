export const weddingData = {
  slug: "priyanka-weds-reon",
  title: "Priyanka Weds Reon",
  datesSpan: "25–27 November 2026",
  hashtag: "#PriyankaWedsReon",

  bride: {
    name: "Priyanka",
    family: "D/o Smt. Shashi Kala Biswas",
    address: "Kharida, Kharagpur, Paschim Medinipur, West Bengal",
    photo: "/images/couple/bride.jpg"
  },

  groom: {
    name: "Reon",
    family: "S/o Mr. Abul Kashem Molla & Mrs. Fatema Molla",
    address: "Puratan Bazar, Sanjoal, Kharagpur, Paschim Medinipur, West Bengal",
    photo: "/images/couple/groom.jpg"
  },

  wedding: {
    date: "2026-11-26",
    time: "7:00 PM onwards",
    timezone: "Asia/Kolkata",
    datesSpan: "25 – 27 November 2026"
  },

  events: [
    {
      id: "haldi",
      title: "Haldi Ceremony",
      date: "2026-11-25",
      time: "Morning",
      description: "An auspicious beginning filled with happiness, blessings, laughter and the warmth of family.",
      image: "/images/events/haldi.jpg",
      accent: "from-amber-500/15 to-yellow-500/5",
      borderColor: "border-amber-400/40"
    },
    {
      id: "mehendi",
      title: "Mehendi Ceremony",
      date: "2026-11-25",
      time: "Evening",
      description: "An evening of beautiful traditions, colours, music and unforgettable memories.",
      image: "/images/events/mehendi.jpg",
      accent: "from-emerald-600/15 to-teal-500/5",
      borderColor: "border-emerald-500/40"
    },
    {
      id: "wedding",
      title: "Wedding Ceremony",
      date: "2026-11-26",
      time: "7:00 PM onwards",
      description: "With the blessings of our families, we invite you to witness the beginning of our beautiful journey together.",
      image: "/images/events/wedding.jpg",
      accent: "from-rose-600/15 to-amber-500/5",
      borderColor: "border-rose-400/40"
    },
    {
      id: "reception",
      title: "Wedding Reception",
      date: "2026-11-27",
      time: "7:00 PM onwards",
      description: "Join us for a beautiful evening of celebration, happiness, love and togetherness.",
      image: "/images/events/reception.jpg",
      accent: "from-purple-600/15 to-gold/10",
      borderColor: "border-purple-400/40"
    }
  ],

  venue: {
    name: "Ashoka Lodge",
    landmark: "Near Bazar Kolkata",
    road: "Malancha Road",
    address: "Near Bazar Kolkata, Malancha Road, Kharagpur, Paschim Medinipur, West Bengal – 721301",
    pinCode: "721301",
    city: "Kharagpur",
    mapsUrl: "https://maps.app.goo.gl/XzURPCksuPgBktre7"
  },

  coverImage: "/images/wedding/cover.jpg",

  welcome: {
    heading: "With the blessings of our families",
    message: "With immense joy and happiness, we invite you to join us as we celebrate the beginning of our beautiful journey together."
  },

  closing: {
    message: "Thank you for being part of our beautiful celebration.",
    couple: "PRIYANKA & REON",
    dates: "25–27 NOVEMBER 2026"
  },

  gallery: [
    {
      id: 1,
      title: "Cover Portrait",
      caption: "Priyanka & Reon — A Beautiful Story Begins",
      src: "/images/wedding/cover.jpg"
    },
    {
      id: 2,
      title: "Haldi Celebration",
      caption: "Auspicious blessings, joy and golden turmeric moments",
      src: "/images/events/haldi.jpg"
    },
    {
      id: 3,
      title: "Mehendi Traditions",
      caption: "Intricate henna, celebration and colorful joy",
      src: "/images/events/mehendi.jpg"
    },
    {
      id: 4,
      title: "Wedding Reception",
      caption: "An evening of celebration, togetherness and love",
      src: "/images/events/reception.jpg"
    }
  ],

  // ONLY ONE song as specified: "https://youtu.be/guHHhEUYAQ4"
  song: {
    title: "Mere Yaar Ki Shaadi Hai",
    youtubeId: "guHHhEUYAQ4",
    url: "https://youtu.be/guHHhEUYAQ4"
  },

  // Family Lineage & Heritage Tree
  familyTree: {
    brideTree: {
      surname: "Biswas",
      title: "The Biswas Family Lineage",
      address: "Kharida, Kharagpur, Paschim Medinipur, West Bengal",
      parents: [
        {
          id: "bride-mother",
          name: "Smt. Shashi Kala Biswas",
          relation: "Mother of the Bride",
          description: "Loving mother, carrying forward timeless family values and heritage"
        }
      ],
      member: {
        name: "Priyanka",
        role: "The Bride",
        title: "Beloved Daughter",
        photo: "/images/couple/bride.jpg"
      }
    },
    groomTree: {
      surname: "Molla",
      title: "The Molla Family Lineage",
      address: "Puratan Bazar, Sanjoal, Kharagpur, Paschim Medinipur, West Bengal",
      parents: [
        {
          id: "groom-father",
          name: "Mr. Abul Kashem Molla",
          relation: "Father of the Groom",
          description: "Respected father, guiding with honor and timeless principles"
        },
        {
          id: "groom-mother",
          name: "Mrs. Fatema Molla",
          relation: "Mother of the Groom",
          description: "Loving mother, blessing with grace, warmth and affection"
        }
      ],
      member: {
        name: "Reon",
        role: "The Groom",
        title: "Beloved Son",
        photo: "/images/couple/groom.jpg"
      }
    },
    union: {
      title: "The Sacred Union of Two Families",
      quote: "Two distinct roots uniting into one blossoming tree of love, respect and shared blessings.",
      hashtag: "#PriyankaWedsReon"
    }
  }
};

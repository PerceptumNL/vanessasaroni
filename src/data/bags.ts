export interface Bag {
  name: string;
  slug: string;
  style: string;
  price: string;
  tagline: string;
  story: string;
  fabricStory: string;
  image: string;
  stock?: number;
  collections: string[];
}

export const bags: Bag[] = [
  {
    name: "Juju",
    slug: "juju",
    style: "Top Handle",
    price: "From €675",
    tagline: "Class used to be priceless.",
    story: "Juju is our signature piece. A top handle bag that walks into a room before you do. She carries herself with the quiet confidence of someone who knows exactly who she is.",
    fabricStory: "Hand-woven tartan in forest green and warm grey. Each Juju takes three days of weaving before she even reaches the Italian workshop.",
    image: "https://www.vanessasaroni.com/cdn/shop/files/Juju_tartan_collection_vanessa_saroni_535831b3-8057-403e-8f79-3693254f8577_1400x.jpg?v=1614326105",
    stock: 12,
    collections: ["tartan"],
  },
  {
    name: "Duda",
    slug: "duda",
    style: "Shopper",
    price: "From €645",
    tagline: "For the woman who carries her world with her.",
    story: "Duda is generous. A shopper bag with room for everything you need and nothing you do not. She is the bag for the woman who lives a full life and refuses to edit it down.",
    fabricStory: "Piano weave in soft off-white and grey tones. The fabric has a subtle texture that catches light differently depending on the angle.",
    image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_20220719_E-Commerce_53-2_400x.jpg?v=1665649996",
    stock: 8,
    collections: ["piano"],
  },
  {
    name: "Lola",
    slug: "lola",
    style: "Shoulder Bag",
    price: "From €595",
    tagline: "Effortless. Always.",
    story: "Lola is easy. She sits on your shoulder like she has always been there. A shoulder bag for every day that somehow looks right with everything, whether you are heading to the studio or to dinner.",
    fabricStory: "Available across multiple collections. Each Lola takes on the character of her fabric, from bold tartan to quiet piano weaves.",
    image: "https://www.vanessasaroni.com/cdn/shop/products/FW-91-890938_400x.jpg?v=1632528913",
    stock: 15,
    collections: ["tartan", "piano"],
  },
  {
    name: "Karol",
    slug: "karol",
    style: "Belt Bag & Clutch",
    price: "From €565",
    tagline: "3 bags in 1. What else?",
    story: "Karol is clever. A belt bag, a clutch, and a crossbody in one design. She adapts to your mood, your outfit, and your evening. The kind of versatility that comes from good design, not compromise.",
    fabricStory: "Piano weave with Italian leather detailing. The combination of handwoven cotton and structured leather gives Karol her distinctive character.",
    image: "https://www.vanessasaroni.com/cdn/shop/products/FW-11-316104_400x.jpg?v=1632788509",
    stock: 10,
    collections: ["piano"],
  },
  {
    name: "Thata",
    slug: "thata",
    style: "Baguette",
    price: "From €525",
    tagline: "Small bag, big presence.",
    story: "Thata is the kind of bag people ask about. A baguette with personality, sized for the essentials and designed to be noticed. She is for the woman who travels light but makes an impression.",
    fabricStory: "Piano weave in grey tones with vies detailing. The compact shape lets the fabric pattern speak clearly.",
    image: "https://www.vanessasaroni.com/cdn/shop/products/FW-13-838649_400x.jpg?v=1632269360",
    stock: 7,
    collections: ["piano"],
  },
  {
    name: "Malu",
    slug: "malu",
    style: "Bucket Bag",
    price: "From €455",
    tagline: "Drop everything in. She can handle it.",
    story: "Malu is relaxed but refined. A bucket bag with soft structure, she holds her shape while giving you the freedom to throw in whatever your day requires. The everyday luxury you actually use every day.",
    fabricStory: "Available in Piano Royal, Forest Green, Off-White, and Grey. Each colourway changes Malu's personality entirely.",
    image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_20220719_E-Commerce_51_400x.jpg?v=1673632079",
    stock: 20,
    collections: ["piano", "timeless"],
  },
  {
    name: "Linda",
    slug: "linda",
    style: "Drawstring",
    price: "From €395",
    tagline: "The one your wardrobe has been missing.",
    story: "Linda is our most versatile bag. A drawstring design that moves between casual and elegant without trying. Named with love, carried with pride. She is the bag you reach for when you want to feel like yourself.",
    fabricStory: "Available in tartan, piano, sianinha, and ivory zaha. Linda travels across collections because she belongs everywhere.",
    image: "https://www.vanessasaroni.com/cdn/shop/products/FW-146-624068_400x.jpg?v=1632788534",
    stock: 25,
    collections: ["tartan", "piano", "colorcore", "timeless"],
  },
  {
    name: "Liz",
    slug: "liz",
    style: "Pouch & Clutch",
    price: "From €345",
    tagline: "Small enough to hold, big enough to matter.",
    story: "Liz is our entry point. A pouch and clutch that introduces you to our fabrics, our craft, and our world. She is the first Vanessa Saroni bag for many of our customers, and she makes a lasting first impression.",
    fabricStory: "Sianinha weave in black. The compact form makes the intricate weaving pattern the star.",
    image: "https://www.vanessasaroni.com/cdn/shop/products/FW-46-166226_400x.jpg?v=1631663662",
    stock: 18,
    collections: ["colorcore"],
  },
  {
    name: "Mary",
    slug: "mary",
    style: "Pouch",
    price: "From €324",
    tagline: "Our smallest bag with our biggest purpose.",
    story: "Mary is special. A phone and wrist pouch whose revenue goes directly to Mary for Life, supporting young mothers in Italy. She is proof that a beautiful object can do beautiful things.",
    fabricStory: "Available in Piano Grey, Mustard, Off-White, and Allegro Black. Each Mary is woven with the same care as our largest bags.",
    image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_E-commerce_20220228_8-2_400x.jpg?v=1665650255",
    stock: 30,
    collections: ["piano", "colorcore"],
  },
  {
    name: "Dani",
    slug: "dani",
    style: "Small Tote",
    price: "From €425",
    tagline: "The tote your wardrobe cannot do without.",
    story: "Dani is the small tote that punches above her size. Compact enough for a night out, structured enough for a working lunch. She does both, and she does them well.",
    fabricStory: "Tartan weave with our signature colour combinations. Dani's structured form shows off the pattern beautifully.",
    image: "https://www.vanessasaroni.com/cdn/shop/files/juju_tartan_collection_vanessa_saronihomepage_1400x.jpg?v=1614326298",
    stock: 10,
    collections: ["tartan"],
  },
];

export function getBag(slug: string) {
  return bags.find((b) => b.slug === slug);
}

export function getBagsByCollection(collectionSlug: string) {
  return bags.filter((b) => b.collections.includes(collectionSlug));
}

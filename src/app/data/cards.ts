export interface CardData {
    id: string
    title: string
    src: string
    alt: string
    subtitle: string
    desc: string
    buttonText: string
    link: string
  }
  
  export const cards: CardData[] = [
    {
      id: "bar",
      title: "- Ryan's Bar -",
      src: "/Ryans/ryan-exterior.jpg",
      alt: "Exterior of Ryan's Bar",
      subtitle: "Pints",
      desc: "Originally known as Duffys bar. Rebranded to Ryan's in 2020.",
      buttonText: "VIEW GALLERY",
      link: "/ryans",
    },
    {
      id: "kitchen",
      title: "- Noi's Kitchen -",
      src: "/Ryans/noi-demo.jpg",
      alt: "Noi's Thai Kitchen",
      subtitle: "Authentic Thai Food",
      desc: "Discover Noi's menu",
      buttonText: "SEE MENU",
      link: "/nois",
    },
  ]
  
  
  
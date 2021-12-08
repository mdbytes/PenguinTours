import portfolioOne from "../../images/portfolio/portfolio-1.png";
import portfolioTwo from "../../images/portfolio/portfolio-2.png";
import portfolioThree from "../../images/portfolio/portfolio-3.png";
import portfolioFour from "../../images/portfolio/portfolio-4.png";
import portfolioFive from "../../images/portfolio/portfolio-5.png";
import portfolioSix from "../../images/portfolio/portfolio-6.png";
import portfolioSeven from "../../images/portfolio/portfolio-7.png";
import portfolioEight from "../../images/portfolio/portfolio-8.png";
import portfolioNine from "../../images/portfolio/portfolio-9.png";
import portfolioTen from "../../images/portfolio/portfolio-10.png";

class PortfolioDetail {
  constructor() {
    this.images = [
      {
        image: portfolioOne,
        title: "Navigating Glaciers",
        subTitle: "To Penguin Country",
        slideLocation: 0,
      },
      {
        image: portfolioTwo,
        title: "Close Encounters",
        subTitle: "Of the Penguin Kind",
        slideLocation: 1,
      },
      {
        image: portfolioThree,
        title: "Penguin Community",
        subTitle: "At Feeding Sites",
        slideLocation: 2,
      },
      {
        image: portfolioFour,
        title: "The Circle of Life",
        subTitle: "With Penguin Babies",
        slideLocation: 3,
      },
      {
        image: portfolioFive,
        title: "Penguin Journeys",
        subTitle: "Hundreds of Miles",
        slideLocation: 4,
      },
      {
        image: portfolioSix,
        title: "Solo Encounters",
        subTitle: "With a Communal Bird",
        slideLocation: 5,
      },
      {
        image: portfolioSeven,
        title: "Growing Up Penguin",
        subTitle: "Shelter and Support",
        slideLocation: 6,
      },
      {
        image: portfolioEight,
        title: "Penguin Games",
        subTitle: "For Survival Itself",
        slideLocation: 7,
      },
      {
        image: portfolioNine,
        title: "Penguin Heights",
        subTitle: "Incredible Destinations",
        slideLocation: 8,
      },
      {
        image: portfolioTen,
        title: "Antarctica Summer",
        subTitle: "Warmer, Less Snow",
        slideLocation: 9,
      },
    ];

    this.elements = [
      {
        href: portfolioOne,
        type: "image",
      },
      {
        href: portfolioTwo,
        type: "image",
      },
      {
        href: portfolioThree,
        type: "image",
      },
      {
        href: portfolioFour,
        type: "image",
      },
      {
        href: portfolioFive,
        type: "image",
      },
      {
        href: portfolioSix,
        type: "image",
      },
      {
        href: portfolioSeven,
        type: "image",
      },
      {
        href: portfolioEight,
        type: "image",
      },
      {
        href: portfolioNine,
        type: "image",
      },
      {
        href: portfolioTen,
        type: "image",
      },
    ];
  }
}

export default PortfolioDetail;

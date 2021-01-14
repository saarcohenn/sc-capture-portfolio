// This file use me for a state management. I won't use APIs from any backend-server.

// Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur fugit, dolores quisquam repellendus quia eaque amet fuga eligendi recusandae provident?",
      awards: [
        {
          title: "Truly A Masterpiece",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          title: "Fresh look on a brutal sport",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          title: "It‘s okay lmao.",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      secondaryImg: goodtimes2,
      url: "/work/good-times",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur fugit, dolores quisquam repellendus quia eaque amet fuga eligendi recusandae provident?",
      awards: [
        {
          title: "Truly A Masterpiece",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          title: "Fresh look on a brutal sport",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          title: "It‘s okay lmao.",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      secondaryImg: theracer2,
      url: "/work/the-racer",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur fugit, dolores quisquam repellendus quia eaque amet fuga eligendi recusandae provident?",
      awards: [
        {
          title: "Truly A Masterpiece",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          title: "Fresh look on a brutal sport",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          title: "It‘s okay lmao.",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
      ],
    },
  ];
};

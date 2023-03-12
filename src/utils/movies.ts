import BigHeroSix from "../assets/big-hero-6_29fe_2880x1800.jpg";
import BladeRunner from "../assets/blade-runner-2049_5256_2880x1800.jpg";
import DCLegends from "../assets/dcs-legends-of-tomorrow_bec9_2880x1800.jpg";
import Inception from "../assets/inception_286e_2880x1800.jpg";
import Interstellar from "../assets/interstellar_d112_2880x1800.jpg";
import Avengers from "../assets/the-avengers_3057_2880x1800.jpg";
import DarkKnight from "../assets/the-dark-knight_7918_2880x1800.jpg";

interface Movie {
  src: string;
  title: string;
  desc: string;
}

export const movies: Movie[] = [
  {
    src: Inception,
    title: "Inception",

    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, doloremque. Iure ab modi quibusdam cumque! Ut earum praesentium repellat, veritatis fugiat eveniet cumque voluptatibus expedita porro, enim hic ullam aliquid!",
  },
  {
    src: Interstellar,
    title: "Inception",

    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, doloremque. Iure ab modi quibusdam cumque! Ut earum praesentium repellat, veritatis fugiat eveniet cumque voluptatibus expedita porro, enim hic ullam aliquid!",
  },
  {
    src: Avengers,
    title: "The Avengers",

    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, doloremque. Iure ab modi quibusdam cumque! Ut earum praesentium repellat, veritatis fugiat eveniet cumque voluptatibus expedita porro, enim hic ullam aliquid!",
  },
  {
    src: BigHeroSix,
    title: "Big Hero 6",

    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, doloremque. Iure ab modi quibusdam cumque! Ut earum praesentium repellat, veritatis fugiat eveniet cumque voluptatibus expedita porro, enim hic ullam aliquid!",
  },

  {
    src: DarkKnight,
    title: "The Dark Knight",

    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, doloremque. Iure ab modi quibusdam cumque! Ut earum praesentium repellat, veritatis fugiat eveniet cumque voluptatibus expedita porro, enim hic ullam aliquid!",
  },
  {
    src: BladeRunner,
    title: "Blade Runner 2049",

    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, doloremque. Iure ab modi quibusdam cumque! Ut earum praesentium repellat, veritatis fugiat eveniet cumque voluptatibus expedita porro, enim hic ullam aliquid!",
  },
  {
    src: DCLegends,
    title: "DC Legends of Tomorrow",

    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, doloremque. Iure ab modi quibusdam cumque! Ut earum praesentium repellat, veritatis fugiat eveniet cumque voluptatibus expedita porro, enim hic ullam aliquid!",
  },
];

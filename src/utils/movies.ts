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

    desc: "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
  },
  {
    src: Interstellar,
    title: "Interstellar",

    desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  },
  {
    src: Avengers,
    title: "The Avengers",

    desc: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
  },
  {
    src: BigHeroSix,
    title: "Big Hero 6",

    desc: "Hiro, a robotics prodigy, joins hands with Baymax in order to avenge his brother's death. They then team up with Hiro's friends to form a team of high-tech heroes.",
  },

  {
    src: DarkKnight,
    title: "The Dark Knight",

    desc: "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
  },
  {
    src: BladeRunner,
    title: "Blade Runner 2049",

    desc: "K, an officer with the Los Angeles Police Department, unearths a secret that could create chaos. He goes in search of a former blade runner who has been missing for over three decades.",
  },
  {
    src: DCLegends,
    title: "DC Legends of Tomorrow",

    desc: "Rip Hunter, a time traveller, comes to know of Vandal Savage's plan to cause an apocalypse to destroy Earth and time. However, he assembles superheroes to thwart Savage's evil plan and save the world.",
  },
];

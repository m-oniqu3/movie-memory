import BigHeroSix from "../assets/big-hero-6_29fe_2880x1800.jpg";
import BladeRunner from "../assets/blade-runner-2049_5256_2880x1800.jpg";
import DCLegends from "../assets/dcs-legends-of-tomorrow_bec9_2880x1800.jpg";
import Inception from "../assets/inception_286e_2880x1800.jpg";
import Interstellar from "../assets/interstellar_d112_2880x1800.jpg";
import Avengers from "../assets/the-avengers_3057_2880x1800.jpg";
import DarkKnight from "../assets/the-dark-knight_7918_2880x1800.jpg";

import BreakingBad from "../assets/breaking-bad_008b_2880x1800.jpg";
import Brooklyn99 from "../assets/brooklyn-nine-nine_7b2b_2880x1800.jpg";
import Futurama from "../assets/futurama_e1e5_2880x1800.jpg";
import HTGAWM from "../assets/how-to-get-away-with-murder_6937_2880x1800.jpg";
import PersonOfInterest from "../assets/person-of-interest_8a1b_2880x1800.jpg";
import Sherlock from "../assets/sherlock_cc81_2880x1800.jpg";
import StrangerThings from "../assets/stranger-things_67b2_2880x1800.jpg";
import Blacklist from "../assets/the-blacklist_a9d0_2880x1800.jpg";
import TVD from "../assets/the-vampire-diaries_0156_2880x1800.jpg";
import TAAHM from "../assets/two-and-a-half-men_f51c_2880x1800.jpg";

interface Film {
  src: string;
  title: string;
  desc: string;
}

export const movies: Film[] = [
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

export const tvShows: Film[] = [
  {
    src: BreakingBad,
    title: "Breaking Bad",
    desc: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
  },
  {
    src: Brooklyn99,
    title: "Brooklyn Nine-Nine",
    desc: "Jake Peralta, an immature but talented NYPD detective in Brooklyn's 99th Precinct, comes into immediate conflict with his new commanding officer, the serious and stern Captain Ray Holt.",
  },

  {
    src: Futurama,
    title: "Futurama",
    desc: "",
  },
  {
    src: HTGAWM,
    title: "How To Get Away With Murder",
    desc: "Annalise Keating, a criminal defence lawyer and professor, teaches a group of aspiring law students. However, their lives alter when they get entangled in an aberrant murder.",
  },

  {
    src: PersonOfInterest,
    title: "Person of Interest",
    desc: "An ex-CIA agent and a mysterious billionaire prevent violent crimes with the help of an all-seeing machine that can predict events before they happen.",
  },
  {
    src: Sherlock,
    title: "Sherlock",
    desc: "Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.",
  },
  {
    src: StrangerThings,
    title: "Stranger Things",
    desc: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
  },
  {
    src: Blacklist,
    title: "The Blacklist",
    desc: "A wanted fugitive mysteriously surrenders himself to the FBI and offers to help them capture deadly criminals. His sole condition is that he will work only with the new profiler, Elizabeth Keen.",
  },
  {
    src: TVD,
    title: "The Vampire Diaries",
    desc: "On her first day at high school, Elena meets Stefan and immediately feels a connection with him. However, what she does not know is that Stefan and his brother, Damon, are in fact vampires.",
  },
  {
    src: TAAHM,
    title: "Two and a Half Men",
    desc: "Charlie Harper is a jingle writer who leads a hedonistic, carefree life. Everything changes when his good-for-nothing brother, Alan, and 10-year-old nephew, Jake, move into his Malibu beach house.",
  },
];

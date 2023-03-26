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

import Avatar from "../assets/avatar_d7bc_2880x1800.jpg";
import Deadpool from "../assets/deadpool_7c01_2880x1800.jpg";
import DrStrange from "../assets/doctor-strange_ea77_2880x1800.jpg";
import JohnWick from "../assets/john-wick_84be_2880x1800.jpg";
import SpiderMan from "../assets/spider-man-homecoming_f8ff_2880x1800.jpg";
import SpiritedAway from "../assets/spirited-away_45c3_2880x1800.jpg";
import Fate from "../assets/the-fate-of-the-furious_cd30_2880x1800.jpg";
import MazeRunner from "../assets/the-maze-runner_8cae_2880x1800.jpg";
import Thor from "../assets/thor-ragnarok_c5ef_2880x1800.jpg";
import WW from "../assets/wonder-woman_b232_2880x1800.jpg";

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
    desc: "Accidentally frozen, pizza-deliverer Fry wakes up 1,000 years in the future. He is taken in by his sole descendant, an elderly and addled scientist who owns a small cargo delivery service.",
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

export const popularMovies: Film[] = [
  {
    src: Avatar,
    title: "Avatar",
    desc: "Jake Sully, a paraplegic former Marine, replaces his brother on the Na'vi inhabited Pandora for a corporate mission. He is accepted by the natives as one of their own.",
  },
  {
    src: Deadpool,
    title: "Deadpool",
    desc: "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.",
  },
  {
    src: DrStrange,
    title: "Doctor Strange",
    desc: "After a car accident, a talented neurosurgeon is forced to look for healing and hope in a world of despair. He then learns the hidden truth of the mystic arts from an ancient sorcerer.",
  },
  {
    src: JohnWick,
    title: "John Wick",
    desc: "After the sudden death of his beloved wife, John Wick receives one last gift from her, a beagle puppy named Daisy, and a note imploring him not to forget how to love. But John's mourning is interrupted when his 1969 Boss Mustang catches the eye of sadistic thug Iosef Tarasov who breaks into his house and steals it, beating John unconscious in the process. Unwittingly, he has just reawakened one of the most brutal assassins the underworld has ever known.",
  },
  {
    src: SpiderMan,
    title: "Spider-Man : Homecoming",
    desc: "Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.",
  },
  {
    src: Thor,
    title: "Thor Ragnarok",
    desc: "Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.",
  },
  {
    src: WW,
    title: "Wonder Woman",
    desc: "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.",
  },
  {
    src: SpiritedAway,
    title: "Spirited Away",
    desc: "After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku, who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents.",
  },
  {
    src: Fate,
    title: "The Fate of the Furious",
    desc: "Dom encounters a mysterious woman, Cipher, who gets him involved in the world of terrorism. The crew has to reunite to stop Cipher and save the man who brought them together as a family.",
  },
  {
    src: MazeRunner,
    title: "The Maze Runner",
    desc: "Thomas loses his memory and finds himself trapped in a massive maze called the Glade. He and his friends try to escape from the maze and eventually learn that they are subjects of an experiment.",
  },
];

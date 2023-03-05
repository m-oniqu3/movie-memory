import { BaseHeader } from "./header";

const landingHeader = document.querySelector(".header") as HTMLElement;

const baseHeader = new BaseHeader();

landingHeader.appendChild(baseHeader.generateHeader());

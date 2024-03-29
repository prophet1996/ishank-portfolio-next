import { Theme } from "./types";

const white = "#FFFFFF";
const black = "#181818";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const deviceMax = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

const spacing = (...args: (string | number)[]) =>
  args.reduce((acc, arg) => {
    if (typeof arg === "string") {
      return `${acc} ${arg}`;
    }
    // eslint-disable-next-line no-console
    if (arg > 8) console.warn("Spacing May be too large!");
    return `${acc} ${2 ** arg}px`;
  }, "");

const palleteLight = [
  "#1DE9B6ff",
  "#1CD6B7ff",
  "#1BC3B9ff",
  "#1AB0BAff",
  "#189EBCff",
  "#178BBDff",
  "#1678BFff",
  "#1565C0ff",
];

const palleteDark = [
  "#1565C0ff",
  "#1678BFff",
  "#178BBDff",
  "#189EBCff",
  "#1AB0BAff",
  "#1BC3B9ff",
  "#1CD6B7ff",
  "#1DE9B6ff",
];



const themeLight = {
  background: white,
  body: black,
  bodyFade: "#868383",
  highLight: "#1de9b6",
  device,
  deviceMax,
  spacing,
  pallete:palleteLight,
};

const themeDark = {
  background: black,
  body: white,
  bodyFade: "#b7b3b3",
  highLight: "#1565c0",
  device,
  deviceMax,
  spacing,
  pallete:palleteDark,
};

const theme = (mode: string): Theme =>
  mode === "dark" ? themeDark : themeLight;

export default theme;

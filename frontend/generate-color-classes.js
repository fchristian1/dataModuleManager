import fs from "fs";
const flags = ["", "hover:", "focus:"];
const tools = ["bg", "text", "border"];
const colors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
];
const shades = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

const safelist = [];
safelist.push('@source inline("');
flags.forEach((flag) => {
  tools.forEach((tool) => {
    colors.forEach((color) => {
      shades.forEach((shade) => {
        safelist.push(`${flag}${tool}-${color}-${shade} `);
      });
    });
  });
});
safelist.push('")');
// Schreibe die safelist in die safelist.txt-Datei
fs.writeFileSync("./src/generated-colors.css", safelist.join(""));

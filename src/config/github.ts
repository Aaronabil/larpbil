export const githubConfig = {
  username: "Aaronabil",
  githubLink: "https://github.com/Aaronabil",
  subtitle: "coding journey over the past year",
  blockSize: 11,
  blockMargin: 3,
  fontSize: 12,
  maxLevel: 4,

  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  weekDays: ["", "M", "", "W", "", "F", ""],
  totalCountLabel: `{{count}} contributions in the last year`,
  theme: {
    dark: [
      "rgb(22, 27, 34)",
      "rgb(12, 45, 80)",
      "rgb(0, 91, 172)",
      "rgb(30, 144, 255)",
      "rgb(87, 185, 255)",
    ],
    light: [
      "rgb(235, 237, 240)",
      "rgb(166, 210, 255)",
      "rgb(92, 173, 255)",
      "rgb(48, 129, 226)",
      "rgb(31, 81, 163)",
    ],
  },

  errorState: {
    title: "Unable to load GitHub Contributions",
    description: "Check out my profile directly for the latest activity",
    buttonText: "View on GitHub",
  },

  loadingState: {
    title: "Loading GitHub activities...",
    description: "Fetching the latest data from the GitHub",
  },
};

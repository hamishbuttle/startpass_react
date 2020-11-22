const designToken = {
  colors: {
    primary: {
      primaryGradient: "radial-gradient(#FFE141, #FFBB0B)",
      primary: "#FFB800",
      primaryLight: "#FFFAED",
      black: "#1D1B18"
    },
    gray: {
      lightest: "#F3F3F3",
      light: "#D5D5D5",
      medium: "#B3B1AD",
      dark: "#797773"
    }
  },
  layout: {
    media: {
      mobile: "@media (min-width: 320px)",
      tablet: "@media (min-width: 640px)",
      desktop: "@media (min-width: 940px)",
      desktopLg: "@media (min-width: 1200px)"
    }
  },
  effects: {
    shadow: {
      textShadow:
        "text-shadow: box-shadow: 0px 4.63636px 18.5455px rgba(0, 0, 0, 0.08)"
    }
  }
};

export default designToken;

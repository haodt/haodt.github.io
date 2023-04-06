import { defaultTheme, Theme, aliasColor } from "@xstyled/styled-components";

const theme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    ...aliasColor("primary", "blue"),
  },
};

export default theme;

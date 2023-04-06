import { ThemeProvider, Preflight } from "@xstyled/styled-components";

import { theme } from "@/components";

export default function Application({ children }: { children: JSX.Element }) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      {children}
    </ThemeProvider>
  );
}

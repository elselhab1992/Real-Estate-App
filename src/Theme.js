/* eslint-disable react/prop-types */
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#6309d9",
    secondary: "#000",
    grey: "#abaab5",
    green: "#0db537",
    white: "#fff",
    violet: "#9880e0",
  },
  fontSize: {
    small: "18px",
    normal: "20px",
    medium: "25px",
    large: "30px",
    xl: "50px",
  },
  fontWeight: {
    extraLight: "200",
    light: "300",
    Regular: "400",
    SemiBold: "600",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

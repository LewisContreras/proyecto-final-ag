import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
      global: {
        body: {
          backgroundColor:"#CFF7C1",
          color: "#FFFFFE"
        },
        a:{
          textDecoration: "none"
        }, 
      },
    },
 
    colors: {
      brand: {
        primary: "#33A109",
        secondary:"#77D353"
      }
    },
    textStyles: {
        h1: {
            fontSize: "46px",
            fontWeight: 800,
            lineHeight: "56px",
            letterSpacing: "0.15%",
        },
        h2: {
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "58px",
            letterSpacing: "0.15%",
        },
        h3: {
            fontSize: "37px",
            fontWeight: 700,
            lineHeight: "37px"
        },
        h4: {
            fontSize: "30px",
            fontWeight: 600,
            lineHeight: "34px"
        },
        h5: {
            fontSize: "30px",
            fontWeight: 600,
            lineHeight: "26px"
        }
    },
  });

export default theme;
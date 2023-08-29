import React from "react";
import { Suspense, useMemo } from "react";
import Router from "./Routes";
import "./App.css";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
          primary: {
            main: "#D2C3B0",
          },
          secondary: {
            main: "#D8D8D8",
          },
          error: {
            main: "#E11A1A",
          },
        },
        typography: {
          fontFamily: "Gilroy",
          h1: {
            fontFamily: "Gilroy",
            fontSize: "30px",
            fontWeight: "600",
            color: "#1b1a1a",
            marginBottom: "16px",
          },
          h2: {
            fontFamily: "Gilroy",
          },
          h3: {
            fontFamily: "Gilroy",
          },
          h4: {
            fontFamily: "Gilroy",
          },
          h5: {
            fontFamily: "Gilroy",
          },
          h6: {
            fontFamily: "Gilroy",
          },
          subtitle1: {
            color: "#707070",
            fontSize: "16px",
          },
          body1: {
            color: "#1b1a1a",
            fontSize: "16px",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: "5px",
                height: "50px",
                backgroundColor: "#2f80ed",
                color: "#FFFFFF",
                boxShadow: "none",
                fontFamily: "Gilroy",
                fontSize: "16px",
                fontWeight: 600,
                minWidth: "150px",
                textTransform: "capitalize",

                ":disbled": {
                  backgroundColor: "#2f80ed90",
                },

                ":hover": {
                  backgroundColor: "#2f80ed",
                  boxShadow: "none",
                },
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              input: {
                height: "50px",
                padding: "0 20px",
                borderRadius: "8px !important",
                fontSize: "14px",
              },
              notchedOutline: {
                borderColor: "#CFD3D4",
                borderWidth: "2px",
                borderRadius: "0px",
              },
            },
          },
          MuiFormLabel: {
            styleOverrides: {
              root: {
                fontSize: "12px",
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                border: "1px solid #0000000F",
                boxShadow: "0px 0px 8px 0px #0000000D",
                borderRadius: "16px",
                padding: "18px",
                gap: "10px",
              },
            },
          },
          MuiCardContent: {
            styleOverrides: {
              root: {
                padding: 0,
                ":last-child": {
                  paddingBottom: 0,
                },
              },
            },
          },
          MuiDialog: {
            styleOverrides: {
              paper: {
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                flexDirection: "column",
              },
            },
          },
          MuiTooltip: {
            styleOverrides: {
              tooltip: {
                backgroundColor: "#FFFFFF",
                color: "#000",
                border: "1px solid rgba(234, 236, 238, 0.6)",
                boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.04)",
              },
              arrow: {
                color: "#FFFFFF",
                "::before": {
                  border: "1px solid rgba(234, 236, 238, 0.6)",
                },
              },
            },
          },
        },
      }),
    []
  );

  return (
    <>
      <ScrollToTop />
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <Suspense>
          <Router />
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;

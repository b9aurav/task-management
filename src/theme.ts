import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#941B0F",
    },
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: "brand.primary",
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "brand.primary",
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: "brand.primary",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "5px",
      },
      variants: {
        solid: {
          bg: "brand.primary",
          color: "white",
          _hover: {
            bg: "brand.primary",
            opacity: 0.8,
          },
        },
        outline: {
          borderColor: "brand.primary",
          border: "2px solid",
          borderRadius: "5px",
          color: "brand.primary",
          _hover: {
            bg: "brand.primary",
            color: "white",
          },
        },
      },
    },
    Table: {
      baseStyle: {
        table: {
          borderColor: "brand.primary",
          borderRadius: "10px",
        },
      },
      variants: {
        simple: {
          thead: {
            th: {
              borderBottom: "1px",
              borderColor: "brand.primary"
            }
          },
          th: {
            bg: "#FFF9F8",
            color: "brand.primary",
            textTransform: "none",
          },
          tr: {
            "_odd": {
              bg: "#FFFFFF",
            },
            "_even": {
              bg: "#FFF9F8",
            },
          },
          td: {
            border: "none",
          }
        },
      },
    },
    Badge: {
      baseStyle:{
        color: "white",
        borderRadius: "16px",
        padding: "0 10px",
        textTransform: "capitalize",
      }
    }
  },
});

export default theme;
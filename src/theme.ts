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
    }
  },
});

export default theme;
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
  },
});

export default theme;
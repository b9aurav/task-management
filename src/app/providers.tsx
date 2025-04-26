"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { TaskProvider } from "@/context/TaskContext";

const emotionCache = createCache({ key: "css", prepend: true });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={theme}>
        <TaskProvider>{children}</TaskProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}

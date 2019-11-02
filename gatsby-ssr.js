/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import "./src/index.css";

export const wrapRootElement = ({ element }) => (
  <PaperProvider>{element}</PaperProvider>
);

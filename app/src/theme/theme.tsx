import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { CardComponent } from "./components/card";
import { buttonStyles } from "./components/button";
import { inputStyles } from "./components/input";
export default extendTheme(
  CardComponent,
  buttonStyles,
  inputStyles,
  globalStyles,
);

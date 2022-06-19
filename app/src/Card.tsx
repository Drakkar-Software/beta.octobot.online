import {FC} from 'react'
import { Box, useStyleConfig } from "@chakra-ui/react";

export interface CardProps {
  variant?: 'flat' | 'slim' | 'ghost' | 'naked'
  children?: any,
  // All other props
  [rest:string]: any;
}

const Card: FC<CardProps> = ({variant, children, ...rest}) => {
  const styles = useStyleConfig("Card", {variant});

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default Card

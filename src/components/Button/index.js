import React from "react";

import * as S from "./styles";

const defaultConfig = {
  color: "var(--color-normal)",
  icon: null,
  fontSize: "var(--font-small)",
  padding: "1rem",
};

export default ({
  config: { icon: Icon, variant, ...config } = {},
  children,
  ...rest
}) => (
  <S.ButtonWrapper
    className={variant}
    config={Object.assign({}, defaultConfig, config)}
    {...rest}
  >
    {Icon && <Icon />}
    {children}
  </S.ButtonWrapper>
);

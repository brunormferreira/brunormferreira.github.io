import React, { useContext } from "react";

import { store, actions } from "../../store";

import * as S from "./styles";

import about from "../../content/about";

let { logotipo } = about;

let useColored = logotipo.match(/\./g);

let colored, start, end;

if (useColored) {
  const parts = logotipo.split(".");

  const divIndex = Math.floor(parts.length / 2);

  [colored] = parts.filter((_, i) => i === divIndex);
  start = parts.filter((_, i) => i < divIndex);
  end = parts.filter((_, i) => i > divIndex);
}

export default () => {
  const { state, dispatch } = useContext(store);

  const handleLogoClick = () => {
    if (state.content.currentIndex === 0) return;

    dispatch({
      type: actions.SCROLL_TO_ABOUT,
    });
  };

  return (
    <S.LogoTextWrapper onClick={handleLogoClick}>
      {useColored ? (
        <>
          <S.LogoText>{start.join(".")}.</S.LogoText>
          <S.LogoText className="colored">{colored}</S.LogoText>
          <S.LogoText>.{end.join(".")}</S.LogoText>
        </>
      ) : (
        <S.LogoText>{about.logotipo}</S.LogoText>
      )}
    </S.LogoTextWrapper>
  );
};

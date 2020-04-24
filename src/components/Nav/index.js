import React from "react";

import { useScrollContext } from '../../context/scroll' 
import actions from '../../context/scroll/enum/actions'

import Logo from "../NavLogotipo";
import Button from "../Button";

import * as S from "./styles";

export default () => {
  const { state, dispatch } = useScrollContext();
  return (
    <S.NavWrapper>
      <S.NavContainer>
        <Logo />
        <S.ButtonsContainer>
          <Button
            config={{
              variant: state.content.currentIndex === 0 && "primary",
            }}
            as="button"
            type="button"
            onClick={() =>
              state.content.currentIndex !== 0 &&
              dispatch({ type: actions.SCROLL_TO_ABOUT })
            }
          >
            about
          </Button>
          <Button
            config={{
              variant: state.content.currentIndex === 1 && "primary",
            }}
            as="button"
            type="button"
            onClick={() =>
              state.content.currentIndex !== 1 &&
              dispatch({ type: actions.SCROLL_TO_SKILLS })
            }
          >
            skills
          </Button>
        </S.ButtonsContainer>
      </S.NavContainer>
    </S.NavWrapper>
  );
};

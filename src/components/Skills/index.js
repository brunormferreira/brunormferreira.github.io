import React from "react";

import skills from "../../content/skills";

import * as S from "./styles";

import SkillItem from "../SkillItem";

export default () => (
  <S.SkillsWrapper>
    <S.SkillsContainer>
      {Object.keys(skills).map((key) => (
        <SkillItem key={key} skill={{ ...skills[key], name: key }} />
      ))}
    </S.SkillsContainer>
  </S.SkillsWrapper>
);

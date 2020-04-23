import React from "react";

import * as S from "./styles";

export default ({ skill }) => (
  <S.Skill href={skill.url} target="_blank" rel="noopener noreferrer external">
    <S.SkillImg
      src={require("../../assets/images/" + skill.img)}
      alt={skill.name}
    />
  </S.Skill>
);

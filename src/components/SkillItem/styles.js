import styled, { keyframes, css } from "styled-components";

import { random } from "../../utils";

function generateAnimation() {
  const opacity = keyframes`
    to {
      opacity: 0.5;
    }
    from {
      opacity: 1;
    }
  `;
  const animation = css`
    animation: ${opacity} ${random(1, 3)}s linear 0s infinite alternate;
  `;

  return animation;
}

export const Skill = styled.a`
  width: 100%;
  height: 100%;

  padding: 1rem;

  max-width: 100px;
  max-height: 100px;

  border-radius: 12px;
  background: var(--content);

  margin: 4px;

  img {
    filter: grayscale(100%);
  }
  &:hover {
    img {
      filter: grayscale(0%);
    }
  }
`;

export const SkillImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
  object-position: center;

  transition: var(--transition);

  ${() => generateAnimation()}
`;

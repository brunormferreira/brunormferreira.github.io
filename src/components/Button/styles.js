import styled from "styled-components";

export const ButtonWrapper = styled.div`
  font-size: ${({ config }) => config.fontSize};
  padding: ${({ config }) => config.padding};
  color: ${({ config }) => config.color};

  display: flex;
  align-items: center;

  transition: var(--transition);

  svg {
    margin-right: 12px;
  }
  * {
    transition: var(--transition);
  }

  &:not(.primary) {
    &:hover {
      color: var(--color-hovered);
      * {
        color: var(--color-hovered);
      }
    }
  }
  &.primary {
    color: var(--color-primary);
  }
`;

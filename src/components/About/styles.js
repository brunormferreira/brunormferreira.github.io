import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding: 1rem;

  height: 100%;
`;
// ==================
// JS DEVELOPER
// ==================
export const DeveloperWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  user-select: none;
`;
export const DeveloperJsLogo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  border: 2px solid var(--color-normal);

  margin-right: 16px;

  font-family: Arial, Helvetica, sans-serif, sans-serif;

  padding: 3px 5px;
  border-radius: 8px;

  width: 45px;
  height: 45px;

  font-weight: 500;
  font-size: var(--font-normal);

  transition: var(--transition);
  &:hover {
    color: #111;
    background: #f7df1e;
    border-color: #f7df1e;
  }

  @media screen and (max-width: 390px) {
    display: none;
  }
`;
export const DeveloperText = styled.p`
  color: var(--color);
  font-weight: 400;
  font-size: 1.4em;
`;

// ==================
// PROFILE PHOTO
// ==================
export const ProfilePhoto = styled.img`
  user-select: none;

  object-fit: cover;
  object-position: center;
  border: 3px solid var(--color-normal);

  width: 120px;
  height: 120px;

  border-radius: 50%;
`;

// ==================
// DEV NAME
// ==================
export const DeveloperName = styled.h1`
  color: var(--color-normal);
  font-size: var(--font-big);

  margin: 2rem 0;
  font-weight: 400;
`;

// ==================
// DEV SOCIAL STATS
// ==================
export const DevStats = styled.div`
  display: flex;
  user-select: none;
  margin: 2rem 0;
`;

// ==================
// DEV SOCIAL LINKS
// ==================
export const DevSocial = styled.div`
  display: flex;
  user-select: none;
`;

// ==================
// DEV BIO
// ==================
export const DevBio = styled.p`
  color: var(--color);

  max-width: 400px;
  padding: 1rem;
  padding-top: 0;

  text-align: center;
  line-height: 2;
`;

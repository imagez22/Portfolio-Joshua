import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  flex-wrap: wrap;
  align-items: baseline;
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 36px;
    gap: 8px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  display: inline-grid;
  text-align: left;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  & > * {
    grid-area: 1 / 1;
  }
`;

// Invisible copy of the longest role so the typewriter doesn't shift the text after it
export const RoleSizer = styled.span`
  visibility: hidden;
  white-space: nowrap;
`;

export const Platforms = styled.span`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  gap: 12px;
  margin-top: -8px;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.text_secondary};
  white-space: nowrap;
  @media (max-width: 960px) {
    justify-content: center;
  }
  @media (max-width: 640px) {
    margin-top: 0;
    font-size: 17px;
    line-height: 26px;
    gap: 8px;
  }
`;

export const PlatformDivider = styled.span`
  width: 3px;
  height: 1em;
  border-radius: 2px;
  background: ${({ theme }) => theme.primary};
  color: transparent;
  overflow: hidden;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const heroButtonBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1 1 200px;
  max-width: 260px;
  padding: 16px 24px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease;
  &:hover {
    transform: translateY(-3px);
  }
  &:focus-visible {
    outline: 3px solid rgba(133, 76, 230, 0.5);
    outline-offset: 3px;
  }
  @media (max-width: 640px) {
    padding: 12px 20px;
    font-size: 16px;
    max-width: none;
  }
`;

export const ResumeButton = styled.a`
  ${heroButtonBase}
  color: ${({ theme }) => theme.white};
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 0 12px 32px rgba(133, 76, 230, 0.35);
  &:hover {
    box-shadow: 0 18px 40px rgba(133, 76, 230, 0.5);
  }
`;

export const EmailButton = styled.a`
  ${heroButtonBase}
  color: ${({ theme }) => theme.primary};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  &:hover {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 18px 40px rgba(133, 76, 230, 0.35);
  }
`;

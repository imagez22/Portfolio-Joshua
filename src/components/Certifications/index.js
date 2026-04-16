import React from 'react'
import styled from 'styled-components'
import { certifications } from '../../data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 16px;
  width: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 40px 16px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 720px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const CertificationsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
  max-width: 960px;
  margin-top: 24px;
`

const CertificationItem = styled.div`
  position: relative;
  padding: 24px 26px;
  border-radius: 24px;
  border: 1px solid rgba(133, 76, 230, 0.18);
  background: ${({ theme }) => theme.card};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  box-shadow: 0px 14px 40px rgba(0, 0, 0, 0.08);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease, background 0.35s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 20px;
    height: calc(100% - 40px);
    width: 5px;
    border-radius: 999px;
    background: ${({ theme }) => theme.primary};
    opacity: 0;
    transform: translateX(-6px);
    transition: opacity 0.35s ease, transform 0.35s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(133, 76, 230, 0.75);
    box-shadow: 0px 24px 64px rgba(133, 76, 230, 0.18);
    background: linear-gradient(180deg, rgba(40, 22, 83, 0.92), ${({ theme }) => theme.card} 96%);
  }

  &:hover::before {
    opacity: 1;
    transform: translateX(0);
  }
`

const CertificationTitle = styled.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  flex: 1 1 60%;
  min-width: 240px;
  line-height: 1.4;
`

const CertificationIssuer = styled.div`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text_secondary};
  min-width: 160px;
  text-align: right;
  white-space: nowrap;

  @media (max-width: 720px) {
    text-align: left;
    width: 100%;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
  width: 100%;
`

const LinkButton = styled.a`
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #854CE6, #C44CFF);
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  box-shadow: 0px 16px 35px rgba(133, 76, 230, 0.22);
  &:hover {
    transform: translateY(-2px);
    opacity: 0.98;
    box-shadow: 0px 20px 45px rgba(133, 76, 230, 0.28);
  }
`

const Certifications = () => {
  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Licenses & Certifications</Title>
        <Desc>
          Top certifications and licenses I've earned from online learning platforms and university programs.
        </Desc>
        <CertificationsList>
          {certifications.map((item) => (
            <CertificationItem key={item.id}>
              <CertificationTitle>{item.name}</CertificationTitle>
              <CertificationIssuer>{item.issuer}</CertificationIssuer>
            </CertificationItem>
          ))}
        </CertificationsList>
        <ButtonWrapper>
          <LinkButton href="https://drive.google.com/drive/folders/1piMYh9FKCO6zukonGUP32XVCzF0xtX7K" target="_blank" rel="noreferrer">
            View Licenses & Certifications
          </LinkButton>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  )
}

export default Certifications

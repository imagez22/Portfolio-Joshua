import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, RoleSizer, Platforms, PlatformDivider, SubTitle, HeroButtons, ResumeButton, EmailButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { HiOutlineDocumentText, HiOutlineMail } from 'react-icons/hi';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            <Span>
                                <RoleSizer aria-hidden="true">
                                    {Bio.roles.reduce((a, b) => (b.length > a.length ? b : a), '')}|
                                </RoleSizer>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                            <Platforms>
                                <PlatformDivider>|</PlatformDivider>
                                {Bio.platforms}
                            </Platforms>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <HeroButtons>
                            <ResumeButton href={Bio.resume} target='_blank' rel='noopener noreferrer'>
                                <HiOutlineDocumentText size={22} /> Check Resume
                            </ResumeButton>
                            <EmailButton href={`mailto:${Bio.email}?subject=${encodeURIComponent('Hello Joshua')}`}>
                                <HiOutlineMail size={22} /> Email Me
                            </EmailButton>
                        </HeroButtons>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection
import React from 'react'
import styled from 'styled-components'
import { FiExternalLink } from 'react-icons/fi'

const Card = styled.div`
    width: 650px;
    max-width: 100%;
    border-radius: 14px;
    padding: 20px 22px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.primary + 60};
    box-shadow: rgba(133, 76, 230, 0.12) 0px 4px 24px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    &:hover {
        transform: translateY(-4px);
        border-color: ${({ theme }) => theme.primary};
        box-shadow: rgba(133, 76, 230, 0.25) 0px 12px 32px;
    }
    @media only screen and (max-width: 768px) {
        width: 300px;
        padding: 14px;
        gap: 10px;
    }
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        gap: 6px;
    }
`

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px) {
        font-size: 15px;
    }
`

const Company = styled.div`
    margin-top: 2px;
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    @media only screen and (max-width: 768px) {
        font-size: 13px;
    }
`

const Date = styled.div`
    flex-shrink: 0;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    color: ${({ theme }) => theme.text_secondary};
    background: ${({ theme }) => theme.primary + 18};
    @media only screen and (max-width: 768px) {
        font-size: 11px;
    }
`

const Description = styled.p`
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px) {
        font-size: 13px;
    }
`

const Highlights = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Highlight = styled.li`
    padding: 10px 14px;
    border-left: 3px solid ${({ theme }) => theme.primary};
    border-radius: 0 10px 10px 0;
    background: ${({ theme }) => theme.primary + '0d'};
    font-size: 14px;
    line-height: 1.55;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px) {
        font-size: 12.5px;
    }
`

const HighlightName = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    &[href]:hover {
        color: ${({ theme }) => theme.primary};
    }
    @media only screen and (max-width: 768px) {
        font-size: 13.5px;
    }
`

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.span`
    padding: 4px 10px;
    border-radius: 8px;
    font-size: 13px;
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + 15};
    @media only screen and (max-width: 768px) {
        font-size: 11px;
    }
`

const LinkButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    width: fit-content;
    padding: 10px 16px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 24px rgba(133, 76, 230, 0.35);
    }
`

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <div>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                </div>
                <Date>{experience.date}</Date>
            </Top>
            {experience.desc && <Description>{experience.desc}</Description>}
            {experience.highlights &&
                <Highlights>
                    {experience.highlights.map((item) => (
                        <Highlight key={item.name}>
                            <HighlightName href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.name} {item.link && <FiExternalLink size={14} />}
                            </HighlightName>
                            <div>{item.text}</div>
                        </Highlight>
                    ))}
                </Highlights>
            }
            {experience.skills &&
                <Skills>
                    {experience.skills.map((skill) => (
                        <Skill key={skill}>{skill}</Skill>
                    ))}
                </Skills>
            }
            {experience.link &&
                <LinkButton href={experience.link} target="_blank" rel="noopener noreferrer">
                    {experience.linkText || 'View Live App'} <FiExternalLink size={14} />
                </LinkButton>
            }
        </Card>
    )
}

export default ExperienceCard

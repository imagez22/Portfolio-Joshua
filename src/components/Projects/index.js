import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to websites. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {[['all', 'All'], ['full stack', 'Full Stack'], ['frontend', 'Frontend']].map(([value, label], i) => (
            <React.Fragment key={value}>
              {i > 0 && <Divider />}
              <ToggleButton active={toggle === value || undefined} value={value} onClick={() => setToggle(value)}>{label}</ToggleButton>
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter((item) => toggle === 'all' || item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
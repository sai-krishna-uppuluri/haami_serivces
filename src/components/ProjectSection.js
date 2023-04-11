import React, { useState } from 'react';
import ProjectStyles from '../styles/Projects.module.css';
import Image from 'next/image';
import Pgsg1 from '../../public/Project-sighnagar-4.jpeg'
import poranki from '../../public/poranki.jpeg'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ProjectSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projects = [
    {
      id: 1,
      location: ' Project Singh Nagar',
      type: 'Residential House',
      storey : '2' ,
      area: '200 sq yards',
      description : 'The Project is located at Singh Nagar, Vijayawda. It was 2-storey Building. We Successfully Completed the Project from the Scratch.' , 
      images: [
        Pgsg1
      ],
    },
    {
      id: 2,
      location: 'Project Poranki',
      type: 'Residential House',
      area: '300 sq yards',
      storey : '2',
      description : 'The Project is located at Poranki, Vijayawda. It was 2-storey Building. We Successfully Completed the Project from the Scratch.' , 
      images: [
       poranki
      ],
    },
    // Add more projects here
  ];

  const onPrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1));
  };

  const onNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
  };

  const currentProject = projects[currentImageIndex];

  return (
    <div className={ProjectStyles.projectsContainer}>
      <h1 className={ProjectStyles.mainHeadingText}>Our Projects</h1>
      <div className={ProjectStyles.projectsInnerContainer}>
        <div className={ProjectStyles.eachProjectContainer}>
            <button onClick={onPrevClick} className={ProjectStyles.navBtn}>
                <FaChevronLeft className={ProjectStyles.navArrow}/>
            </button>
          <div className={ProjectStyles.ProjectDetailsRealContainer}>
            <div className={ProjectStyles.projectImages}>
                <Image
                src={currentProject.images[0]}
                alt='Project Singh nagar'
                className={ProjectStyles.projectsImages}
                />
            </div>
            <div className={ProjectStyles.projectDetails}>
                <h3 className={ProjectStyles.ProjectDetailsHead}> {currentProject.type}</h3>
                <p className={ProjectStyles.ProjectDetailsText}>Location:{currentProject.location} </p>
                <p className={ProjectStyles.ProjectDetailsText}>Area: {currentProject.area}</p>
                <p className={ProjectStyles.ProjectDetailsText}>No of Storey: {currentProject.storey}</p>
                <p className={ProjectStyles.ProjectDetailsText}>Description: {currentProject.description}</p>
            </div>
          </div>
          <div className={ProjectStyles.navigation} >
           
            <button onClick={onNextClick} className={ProjectStyles.navBtn}>
              <FaChevronRight className={ProjectStyles.navArrow}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;

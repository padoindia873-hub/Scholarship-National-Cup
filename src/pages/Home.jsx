import React from 'react'
import Hero from '../components/common/Hero'
import Facilities from '../components/common/Facilities'
import ClassSelection from '../components/common/ClassSelection'
import PrizeList from '../components/common/PrizeList'
import Syllabus from '../components/common/Syllabus'
import ScholarshipHighlights from '../components/common/ScholarshipHighlights'
import ImageGallery from '../components/common/ImageGallery'
import FacilitiesText from '../components/common/FacilitiesText'
import EducationOverview from '../components/common/EducationOverview'
import ScholarshipCupFlow from '../components/common/ScholarshipCupFlow'

import ImageSliding from '../components/common/ImageSliding'
import ImageSlidingAsset from '../components/common/ImageSlidingAsset'
import PrizeListCompetitionExam from "../components/common/prizeListCompetitionExam";

import VideoPlayer from '../components/common/VideoPlayer'
import DualCompetition from "../pages/DualCompetition";
const Home = () => {
  return (
    <div>
        <>
        <Hero/>
        <VideoPlayer/>
       
        {/* <ImageSliding/> */}
         {/* <ImageSliding/> */}
        {/* <FacilitiesText/> */}
        
        {/* <Facilities/> */}
        {/* <ClassSelection/> */}
        <ScholarshipCupFlow/>
        {/* <EducationOverview/> */}
        <PrizeList/>
         <ImageSlidingAsset/>
        <PrizeListCompetitionExam/>
        <Syllabus/>
        <ScholarshipHighlights/>
        <DualCompetition/>
        {/* <ImageGallery/> */}
        
        </>
    </div>
  )
}

export default Home
import NewsroomList from './NewsroomList.jsx'
import GrowthStories from '../../Home/GrowthStories.jsx'
import CtaSection from '../../Home/CtaSection.jsx'
import Blog from '../../Home/Blog.jsx'
import HeroSectionCompany from '../HeroSectionCompany.jsx'

function NewsroomSection() {
    return (
        <>
            <HeroSectionCompany type="Newsroom" />
            <NewsroomList />

            <GrowthStories />
            <Blog />
            <CtaSection />
        </>
    )
}

export default NewsroomSection

import AboutHero from './AboutHero.jsx'
import WhyWeOnly from './WhyWeOnly.jsx'
import WhyWeAreDifferent from './WhyWeAreDifferent.jsx'
import WhereWeAre from './WhereWeAre.jsx'
import OurValues from './OurValues.jsx'
import GrowthStories from '../../Home/GrowthStories.jsx'
import CtaSection from '../../Home/CtaSection.jsx'
import Blog from '../../Home/Blog.jsx'
import DreamTeam from './DreamTeam.jsx'

function AboutSection() {
    return (
        <>
            <AboutHero />
            <DreamTeam />
            <WhyWeOnly />
            <WhyWeAreDifferent />
            <WhereWeAre />
            <OurValues />
            <GrowthStories />
            <Blog />
            <CtaSection />
        </>
    )
}

export default AboutSection

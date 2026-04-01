import PartnerGrid from './PartnerGrid.jsx'
import GrowthStories from '../../Home/GrowthStories.jsx'
import CtaSection from '../../Home/CtaSection.jsx'
import Blog from '../../Home/Blog.jsx'
import HeroSectionCompany from '../HeroSectionCompany.jsx'

function PartnerSection() {
    return (
        <>
            <HeroSectionCompany type="Partners" />
            <PartnerGrid />

            <GrowthStories />
            <Blog />
            <CtaSection />
        </>
    )
}

export default PartnerSection

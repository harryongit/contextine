import CheckOutAwards from './CheckOutAwards.jsx'
import CompanyBenefits from './CompanyBenefits.jsx'
import YourJourneyWithUs from './YourJourneyWithUs.jsx'
import GrowthStories from '../../Home/GrowthStories.jsx'
import CtaSection from '../../Home/CtaSection.jsx'
import Blog from '../../Home/Blog.jsx'
import HeroSectionCompany from '../HeroSectionCompany';

function CareerSection() {
    return (
        <>
            <HeroSectionCompany type="careers" />
            <CheckOutAwards />
            <CompanyBenefits />
            <YourJourneyWithUs />
            <GrowthStories />
            <Blog />
            <CtaSection />
        </>
    )
}

export default CareerSection

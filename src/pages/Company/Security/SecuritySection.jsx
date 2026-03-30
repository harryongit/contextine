import GrowthStories from '../../Home/GrowthStories.jsx'
import CtaSection from '../../Home/CtaSection.jsx'
import Blog from '../../Home/Blog.jsx'
import SecurityFirst from './SecurityFirst.jsx'
import SecuritySecond from './SecuritySecond.jsx'
import SecurityThird from './SecurityThird.jsx'
import SecurityFourth from './SecurityFourth.jsx'
import SecurityFifth from './SecurityFifth.jsx'
import SecuritySixth from './SecuritySixth.jsx'
import SecuritySeventh from './SecuritySeventh.jsx'
import HeroSectionCompany from '../HeroSectionCompany';

function SecuritySection() {
    return (
        <>
            <HeroSectionCompany type="security" />
            <SecurityFirst />
            <SecuritySecond />
            <SecurityThird />
            <SecurityFourth />
            <SecurityFifth />
            <SecuritySixth />
            <SecuritySeventh />

            <GrowthStories />
            <Blog />
            <CtaSection />
        </>
    )
}

export default SecuritySection

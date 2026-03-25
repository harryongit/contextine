import SecurityHero from './SecurityHero.jsx'
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

function SecuritySection() {
    return (
        <>
            <SecurityHero />
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

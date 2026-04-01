import GlossaryHero from './GlossaryHero.jsx'
import GrowthStories from '../../../Home/GrowthStories.jsx'
import CtaSection from '../../../Home/CtaSection.jsx'
import GlossaryList from './GlossaryList.jsx'

function GlossarySection() {
    return (
        <>
            <GlossaryHero />
            <GlossaryList />

            <GrowthStories />

            <CtaSection />
        </>
    )
}

export default GlossarySection

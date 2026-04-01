import BlogHero from './BlogHero.jsx'
import GrowthStories from '../../../Home/GrowthStories.jsx'
import CtaSection from '../../../Home/CtaSection.jsx'
import BlogAllSection from './BlogAllSection.jsx'

function BlogSection() {
    return (
        <>
            <BlogHero />
            <BlogAllSection />

            <GrowthStories />

            <CtaSection />
        </>
    )
}

export default BlogSection

import ContactForm from './ContactForm.jsx'
import GrowthStories from '../../Home/GrowthStories.jsx'
import CtaSection from '../../Home/CtaSection.jsx'
import Blog from '../../Home/Blog.jsx'
import HeroSectionCompany from '../HeroSectionCompany.jsx'

function ContactSection() {
    return (
        <>
            <HeroSectionCompany type="Contact" />
            <ContactForm />

            <GrowthStories />
            <Blog />
            <CtaSection />
        </>
    )
}

export default ContactSection

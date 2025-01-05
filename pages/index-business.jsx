import { About1, Blog1, CallToAction1, Clients1, Cursor, Facts1, Footer1, HeaderTransparentLight, Hero1, HrDiagonal, Process1, ScrollToTop, Services1, SlidingText, Testimonial1 } from '@/components'
import { aboutData } from '@/components/About/AboutData';
import { blogData } from '@/components/Blog/BlogData';
import { callToActionData } from '@/components/CalltoAction/CallToActionData';
import { clientsData } from '@/components/Clients/ClientsData';
import { factsData } from '@/components/Facts/FactsData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { heroData } from '@/components/Hero/HeroData';
import { processData } from '@/components/Process/ProcessData';
import { servicesData } from '@/components/Services/ServicesData';
import { slidingData } from '@/components/Sliding/SlidingData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function IndexBusiness() {
    const themeData = mainData.business;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderTransparentLight data={headerData.business} />

            <main>
                {/* Hero */}
                <Hero1 data={heroData.business} />

                {/* CLients */}
                <Clients1 data={clientsData.business} />

                {/* About */}
                <About1 data={aboutData.business} />

                {/* Facts */}
                <Facts1 data={factsData.business} />

                {/* Hr Diagonal */}
                <HrDiagonal />

                {/* Testimonial */}
                <Testimonial1 data={testimonialData.business} />

                {/* Sliding Text */}
                <SlidingText data={slidingData.business} />

                {/* Process */}
                <Process1 data={processData.business} />

                {/* Call to Action */}
                <CallToAction1 data={callToActionData.business} />

                {/* Services */}
                <Services1 data={servicesData.business} />

                {/* Blog */}
                <Blog1 data={blogData.business} />

                {/* Footer */}
                <Footer1 data={footerData.business} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    )
}

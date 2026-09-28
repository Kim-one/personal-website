import {CaseStudySection} from "@/components/CaseStudySection";

const Contributions = [
    'Frontend Interface Development', 'Dashboard Interfaces', 'Account and Profile Interfaces',
    'Bug Fixes and Interface Improvements', 'Accessibilty Improvements',
]

export const Rentalhist = () => {
    return (
        <div className={'py-space-2xl space-y-space-2xl'}>
            <CaseStudySection index={'01'} label={'Overview'} title={'Overview'}>
                <p className={'text-body-lg font-body-lg leading-relaxed text-on-surface'}>
                    RentalHist is a rental property platform designed to help property owners and managers manage their
                    rental operations and listings.
                </p>
                <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>
                    I contributed as a <strong>Frontend Developer</strong>, working on the interface interface and user
                    experience across different areas of the platform.
                </p>
                <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>
                    My work focused on turning requirements and existing designs into functional interfaces while also
                    identifying opportunities to make the experience clearer, more consistent, and accessible.
                </p>
            </CaseStudySection>
            <CaseStudySection index={'02'} label={'Contributions'} title={'My Role'}>
                <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>
                    My work on RentalHist his primarily focused on the frontend and user experience.
                </p>
                <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>
                    Some of the areas I've contributed to include:
                </p>
                <div className={'grid grid-cols-1 lg:grid-cols-3 gap-space-md'}>
                    {Contributions.map(Contribution => (
                        <div key={Contribution} className={'rounded-lg px-space-lg py-space-sm bg-background font-label-sm text-label-sm shadow-sm'}>
                            {Contribution}
                        </div>
                    ))}
                </div>
                <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>
                    Rather than working on the entire application independently, I worked within an existing product
                    and codebase, collaborating with the team to implement and improve features.
                </p>
            </CaseStudySection>
            <CaseStudySection index={'03'} label={'Growth'} title={'Building Within an Existing Product'}>
                <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>
                    One of the most valuable parts of working on RentalHist has been learning how to contribute to an existing
                    application rather than starting from scratch.
                </p>
                <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>
                    Working in an established codebase meant understanding existing patterns, components, authentication, 
                    API interactions, styling, and conventions before making changes.
                </p>
                <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>
                    This required me to think beyond:
                </p>
                <p className={'border-l-2 border-secondary pl-4 rounded italic text-label-md'}>"How do I build this?"</p>
                <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>and instead ask:</p>
                <p className={'border-l-2 border-secondary pl-4 rounded italic text-label-md'}>&#34;How does this application already work, and how can I add this
                    feature without disrupting the experience?&#34;</p>
                <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>That has been an important shift in how I approach development.</p>
            </CaseStudySection>

        </div>
    );
}
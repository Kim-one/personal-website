import {CaseStudySection} from "@/components/CaseStudySection";
import {Callout} from "@/components/Callout";
import {ReadingStatesPrev} from "@/components/ReadingStatesPrev";
import {FeaturesSection} from "@/components/FeaturesSection";

const States = [
    {
        title: 'Want to Read',
        description: 'Books waiting on my TBR shelf ready for inspection',
        status: 'Queued',
    },
    {
        title: 'In Progress',
        description: `Books I'm currently reading with percentage & chapter logs.`,
        status: 'Active',
    }
    ,{
        title: 'Completed',
        description: `Books I've finished`,
        status: 'Archived',
    },
]

export const Bookish = () => {
    return (
        <div className={'py-space-2xl space-y-space-2xl'}>
            <CaseStudySection index={'01'} label={'Motivation'} title={'The Idea'}>
                <p className={'font-body-lg text-body-lg text-on-surface leading-relaxed'}>
                    I love books, but having a large TRB can create a funny problem: sometimes having too many books
                    to choose from makes it harder to decide what to read.
                </p>
                <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>
                    Bookish started as a simple idea, a personal app that could keep track of the books I want to read,
                    what I'm currently reading, and what I've already finished.
                </p>
                <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>
                    Rather than trying to build another social reading platform, I wanted to keep the experience
                    focused on the individual reader.
                </p>
                <Callout>
                    No account. No complicated setup. Just open the app, keep track of your books, and figure out
                    what to read next.

                </Callout>
            </CaseStudySection>
            <CaseStudySection index={'02'} label={'Architecture of State'} title={'What I wanted to Build'}>
                <p className={'font-body-lg text-body-lg text-on-surface leading-relaxed'}>
                    The main idea was to create a simple reading tracker that make managing a physical TBR feel easier. The
                    app is built around three main reading states:
                </p>
                <div className={'grid grid-cols-3 gap-space-xl'}>
                    {States.map((state, index) => (
                        <ReadingStatesPrev key={index} title={state.title} description={state.description} status={state.status}/>
                    ))}
                </div>
                <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>
                    The app also includes the ability to add books using ISBN or barcode scanning and a random <strong>"Pick Next"</strong>  feature for those moments when choosing what to read becomes the
                    hardest part.
                </p>
            </CaseStudySection>
            <CaseStudySection index={'03'} label={'Scope'} title={'Features'}>
                <FeaturesSection/>
            </CaseStudySection>
            <CaseStudySection index={'04'} label={'Reflection'} title={'Reflections'}>
                <div className={'bg-surface-container-low p-space-lg rounded-xl shadow-sm space-y-space-md'}>
                    <h1 className={'text-headline-md font-headline-md'}>What I'm Learning</h1>
                    <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>
                        Bookish has been less about simply building a mobile application and more about learning how product
                        decisions change when your building for a different platform.
                    </p>
                    <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>
                        I've had to think about mobile navigation, local storage, database design, touch interactions, screen
                        space, and how small UX decisions can affect the overall experience.
                    </p>
                    <p className={'text-body-md font-body-md text-on-surface-variant leading-relaxed'}>
                        It's also been a reminder that a project doesn't need to solve a huge problem to be worth building.
                    </p>
                    <p className={'text-body-md font-body-md text-primary italic leading-relaxed'}>
                        "Sometimes it's enough to build something because you personally want it to exist."
                    </p>
                </div>

            </CaseStudySection>
        </div>
    )
}
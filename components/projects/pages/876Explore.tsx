import {CaseStudySection} from "@/components/CaseStudySection";

const Features = [
    'Browse Local Businesses', 'Filter By Parishes', 'Explore Businesses Profiles',
    'View Highly Rated Locations', 'Discover Trending Places', 'Save Interesting Businesses',
    'Leave Reviews', 'Manage User Accounts', 'Administrative Business Approval'
]

const Concepts = [
    'Data Modeling', 'API Design', 'Authentication',
    'User-generated Content', 'Administrative Workflows',
    'Database Structure', 'Product Discovery', 'Future Scalability',
]

export const Explore = () => {
    return (
        <div className={'py-space-2xl space-y-space-2xl'}>
            <CaseStudySection index={'01'} label={'Motivation'} title={'The Idea'}>
                <p className={'text-body-md font-body-md text-on-surface leading-relaxed'}>
                    876Explore started with a simple question:
                </p>
                <p className={'pl-4 border-l-4 border-primary rounded-md font-bold italic '}>
                    What if there were a place to discover local businesses and experiences across Jamaica?
                </p>
                <p className={'text-body-md font-body-md text-on-surface leading-relaxed'}>
                    There are countless restaurants, shops, services, attractions, and other businesses that people discover
                    through word of mouth or scattered across different platforms.
                </p>
                <p className={'text-body-md font-body-md text-on-surface leading-relaxed'}>
                    I wanted to explore what a centralized local discovery experience would look like.
                </p>
                <p className={'text-body-md font-body-md text-on-surface leading-relaxed'}>
                    The idea became a platform where users would browse businesses, explore different parishes, find highly
                    rated places, and discover what's trending.
                </p>
            </CaseStudySection>

            <CaseStudySection index={'02'} label={'Experience'} title={'The Experience'}>
                <p className={'text-body-md font-body-md text-on-surface leading-relaxed'}>
                    The platform is designed around discovery.
                </p>
                <p className={'text-body-md font-body-md text-on-surface leading-relaxed'}>
                    Instead of requiring users to already know what they're looking for, the application can surface businesses
                    and businesses and places based on categories, location, ratings, and other information.
                </p>
                <p className={'text-body-md font-body-md text-on-surface leading-relaxed'}>
                    Users can explore different parishes and browse business profiles to learn more about each location.
                </p>
                <p className={'text-body-md font-body-md text-on-surface leading-relaxed'}>
                    The goal is to make discovering somewhere new feel simple.
                </p>
            </CaseStudySection>

            <CaseStudySection index={'03'} label={'Features'} title={'Core Features'}>
                <div className={'grid grid-cols-3 gap-space-md'}>
                    {Features.map(feature => (
                        <div key={feature} className={'rounded-lg px-space-lg py-space-sm bg-background font-label-sm text-label-sm shadow-sm'}>
                            {feature}
                        </div>
                    ))}
                </div>
                <p className={'text-body-md font-body-md text-on-surface leading-relaxed'}>
                    The platform is also designed with room for additional discovery features as the project develops.
                </p>
            </CaseStudySection>
            <CaseStudySection index={'04'} label={'Education'} title={'What I Learned'}>
                <p className={'text-body-md font-body-md text-on-surface leading-relaxed'}>
                    876Explore has been an opportunity to experience the process of taking an idea from concept to working
                    full-stack application.
                </p>
                <p className={'text-body-md font-body-md text-on-surface leading-relaxed'}>
                    It has challenged me to think about more than just individual screens and features. I've had to
                    consider:
                </p>
                <div className={'grid grid-cols-3 gap-space-md'}>
                    {Concepts.map(concept => (
                        <div key={concept} className={'rounded-lg px-space-lg py-space-sm bg-background font-label-sm text-label-sm shadow-sm'}>
                            {concept}
                        </div>
                    ))}
                </div>
                <p className={'text-body-md font-body-md text-on-surface leading-relaxed'}>
                    It's also taught me that building a product is an iterative process.
                </p>
                <p className={'text-body-md font-body-md text-on-surface leading-relaxed'}>
                    The original idea doesn't have to be the final idea. As I build, use, and learn from the project, the
                    product continues to evolve.
                </p>

            </CaseStudySection>
        </div>
    )
}
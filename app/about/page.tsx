import {AreasOfInterest, Principles} from '../../data/mock-data';
import {GraduationCap, Wrench, Compass, BrainCircuit} from "lucide-react";
import {CallBack} from "@/components/CallBack";

const Category_Styles: Record<string, string> = {
    'Mobile': 'bg-[#E7DDF5] text-[#5B21B6]',
    'Web': 'bg-[#DDEEDB] text-[#166534]',
    'AI & ML': 'bg-[#F7DFD2] text-[#9A3412]',
    'Games': 'bg-[#F5EBC7] text-[#854D0E]',
}

const CategoryStylesDot: Record<string, string> = {
    'Mobile': 'bg-[#5B21B6]',
    'Web': 'bg-[#166534]',
    'AI & ML': 'bg-[#9A3412]',
    'Games': 'bg-[#854D0E]',
}

export default function AboutPage() {
    return (
        <div className={'w-full bg-surface'}>
            <div className={'max-w-[350px] lg:max-w-[1120px] mx-auto py-space-md lg:py-space-2xl'}>
                <section className={'space-y-space-xs'}>
                    <p className={'inline-flex items-center gap-space-sm text-code-sm font-code-sm font-semibold tracking-widest uppercase text-primary'}>
                        03 / The Story
                        <span className={'relative w-8 bg-outline-variant h-[1px]'}></span>
                        <span className={'text-code-sm text-secondary'}></span>
                    </p>
                    <h1 className={'text-headline-xl font-headline-xl'}>Hi, I&#39;m Kimone.</h1>
                    <p className={'text-secondary text-body-md font-body-md'}>I&#39;m a developer who enjoys turning ideas into things people can actually use.</p>
                </section>
                <section className={'pt-space-xl'}>
                    <div className={'grid grid-cols-1 lg:grid-cols-12'}>
                        <div className={'col-span-5'}>

                        </div>
                        <div className={'col-span-7'}>
                            <div className={'space-y-space-md text-on-surface'}>
                                <p className={'flex items-center gap-space-sm text-code-sm font-code-sm font-semibold tracking-widest uppercase text-secondary'}>
                                    <span className={'h-2 w-2 bg-primary rounded-full'}></span>
                                    <span>A little about me</span>
                                </p>
                                <p className={'leading-relaxed font-body-lg text-body-lg'}>
                                    I graduated in 2026 with a degree in Computer Science and Business Administration.
                                    Studying both gave me a different perspective on technology. I learned how to build things,
                                    but also how to think about people, problems, and ideas behind what I&#39;m building.
                                </p>
                                <p className={'text-on-surface-variant'}>These days, I&#39;m figuring out what comes next.</p>
                                <p className={'leading-relaxed font-body-md text-body-md text-on-surface-variant'}>
                                    I&#39;m interested in web development, mobile applications, artificial intelligence,
                                    machine learning, and even game development. I&#39;m more interested in continuing to explore,
                                    build, and see where my curiosity takes me.
                                </p>
                                <div className={'bg-surface-container p-space-lg space-y-space-sm rounded-xl border-l-4 border-primary'}>
                                    <p className={'text-primary font-semibold'}>99</p>
                                    <p className={'text-headline-md font-headline-md text-secondary leading-snug'}>
                                        I&#39;m more interested in continuing to explore, build, and see where my curiosity takes me.&#34;</p>
                                    <p className={'text-code-sm font-code-sm text-secondary pt-space-xs'}>- Kimone Barrett</p>
                                </div>
                                <div className={'grid grid-cols-1 lg:grid-cols-3 gap-space-md'}>
                                    <div className={'bg-background p-space-lg rounded'}>
                                        <p className={'text-secondary uppercase text-label-sm font-label-sm'}>
                                            Education
                                        </p>
                                        <p>BSc CS & Business &#39;26</p>
                                    </div><div className={'bg-background p-space-lg rounded'}>
                                        <p className={'text-secondary uppercase text-label-sm font-label-sm'}>
                                            Focus Area
                                        </p>
                                        <p>Web {'\u00B7'} Mobile {'\u00B7'} AI</p>
                                    </div>
                                    <div className={'bg-background p-space-lg rounded'}>
                                        <p className={'text-secondary uppercase text-label-sm font-label-sm'}>
                                            Mindset
                                        </p>
                                        <p>Curious & Hands-on</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={'pt-space-2xl'}>
                    <div className={'space-y-space-md'}>
                        <div className={'flex flex-col lg:flex-row lg:justify-between md:items-end'}>
                            <div className={'flex flex-col gap-space-xs'}>
                                <p className={'text-secondary text-code-sm font-code-sm'}>03.1 / Focus Area</p>
                                <p className={'text-headline-lg font-headline-lg text-on-surface tracking-tight'}>What I like Building</p>
                            </div>
                            <div className={'text-on-surface-variant text-body-md font-body-lg max-w-md'}>
                                Thoughtful interfaces, tactile mobile products, applied intelligence, and interactive worlds.
                            </div>
                        </div>
                        <div className={'grid grid-cols-1 lg:grid-cols-4 gap-space-lg'}>
                            {AreasOfInterest.map((interest, index) =>(
                                <div key={index} className={'bg-background rounded p-space-lg shadow-sm hover:-translate-y-1 transition-transform duration-200 flex flex-col justify-between'}>
                                    <div className={'flex flex-col gap-space-md'}>
                                        <div className={'flex justify-between'}>
                                            <div className={`font-label-sm text-label-sm flex items-center gap-space-sm rounded-full py-1 px-2.5 ${Category_Styles[interest.type]}`}>
                                                <span className={`${CategoryStylesDot[interest.type]} w-1.5 h-1.5 rounded-full`}></span>
                                                {interest.type}
                                            </div>
                                            <div className={'text-code-sm font-code-sm text-on-surface-variant'}>0{index+1}</div>
                                        </div>
                                        <h1 className={'text-on-surface text-headline-md font-headline-md'}>{interest.title}</h1>
                                        <p className={'font-body-md text-body-md text-on-surface-variant leading-relaxed'}>{interest.description}</p>
                                    </div>
                                    <div className={'flex flex-wrap gap-space-xs pt-space-lg'}>
                                        {interest.techStack.map(tech => (
                                            <p key={tech} className={'text-label-sm font-body-sm text-secondary bg-surface-container rounded px-3 py.1.5'}>
                                                {tech}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className={'pt-space-2xl space-y-space-xl'}>
                    <div className={''}>
                        <p className={'font-code-sm text-code-sm text-secondary'}>03.2 / Path & Perspective</p>
                        <h1 className={'text-headline-lg font-headline-lg text-on-surface'}>My Journey</h1>
                    </div>
                    <div className={'p-space-2xl bg-background rounded-xl space-y-space-md'}>
                        <p className={'font-body-lg text-body-lg leading-relaxed text-on-surface-variant'}>My interest in technology has always been closely connected to building things.</p>
                        <p className={'font-body-md text-body-md text-on-surface-variant leading-relaxed'}>
                            Over the years, I&#39;ve worked on websites, client projects, and personal experiments that have
                            allowed me to explore different sides of development. Each project has taught me something different,
                            not just about technology, but design, problem solving, collaboration, and what is means to
                            actually build something for another person.
                        </p>
                        <p className={'font-body-md text-body-md text-on-surface-variant leading-relaxed'}>
                            My experience has taken me from frontend development and UX/UI work to exploring artificial
                            intelligence, machine learning, and mobile development.
                        </p>
                    </div>
                </section>
                <section className={'pt-space-2xl'}>
                    <div className={'pb-space-xl'}>
                        <p className={'text-code-sm font-code-sm text-secondary'}>03.3 / Principles & Practice</p>
                        <h1 className={'text-headline-lg font-headline-lg text-on-surface'}>How I Work</h1>
                        <p className={'text-body-md font-body-md max-w-xl text-on-surface-variant'}>
                            The foundational instincts and approaches that guide how I tackle problems and build software.
                        </p>
                    </div>
                    <div className={'grid grid-cols-1 lg:grid-cols-4 gap-space-xl'}>
                        {Principles.map(principle => {
                            const Icon = principle.icon;
                            return (
                                <div className={'bg-background p-space-lg space-y-space-md rounded'} key={principle.approach}>
                                    <div className={'bg-surface-container rounded-lg w-12 h-12 flex items-center justify-center'}>
                                        <Icon size={20}/>
                                    </div>
                                    <h3 className={'text-headline-md font-headline-md text-on-surface tracking-tight'}>{principle.approach}</h3>
                                    <p className={'text-secondary text-body-md font-body-md leading-relaxed'}>{principle.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section className={'pt-space-2xl'}>
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl'}>
                        <div className={'lg:col-span-7'}>
                            <div className={'p-space-xl bg-background space-y-space-md rounded-xl'}>
                                <div>
                                    <p className={'font-code-sm text-code-sm text-on-surface-variant'}>03.4 / Dimensions</p>
                                    <h1 className={'text-headline-lg font-headline-lg tracking-tight text-on-surface'}>Beyond the Code</h1>
                                </div>
                                <p className={'text-body-lg font-body-lg text-on-surface'}>
                                    Technology is a big part of what I do, but it isn&#39;t all I am.
                                </p>
                                <p className={'text-body-md font-body-md text-secondary leading-relaxed'}>
                                    I enjoy reading, exploring creative ideas, and working on personal projects simply because
                                    I find them interesting. Some of those projects turn into something real, while others teach me
                                    something.
                                </p>
                                <p className={'text-body-md font-body-md text-secondary leading-relaxed'}>
                                    I am also interested in the creative side of technology, how something looks, how it feels to use,
                                    and how a simple idea can become an experience.
                                </p>
                                <p className={'text-body-md font-body-md text-secondary leading-relaxed'}>
                                    That&#39;s one of the reasons I enjoy having personal projects. They give me room to experiment
                                    without needing everything to have a perfect purpose.
                                </p>
                            </div>
                        </div>
                        <div className={'lg:col-span-5 w-full'}>
                            <div className={'p-space-md sm:p-space-lg md:p-space-xl bg-surface-container rounded-xl w-full'}>
                                <div className={'flex sm:flex-row justify-between items-start sm:items-center gap-space-xs pb-space-lg md:pb-space-xl'}>
                                    <div className={'inline-flex items-center gap-space-xs text-on-surface uppercase text-label-sm font-label-sm'}>
                                        <span className={'w-2 h-2 relative flex shrink-0'}>
                                            <span className={'absolute w-full h-full animate-ping rounded-full  bg-primary'}></span>
                                            <span className={'w-2 h-2 bg-primary rounded-full relative inline-flex'}></span>
                                        </span>
                                        currently
                                    </div>
                                    <div className={'text-secondary text-code-sm font-code-sm'}>
                                        Updated Regularly
                                    </div>
                                </div>
                                <div className={'flex flex-col gap-space-md'}>
                                    <div className={'flex items-start gap-space-sm pb-space-sm border-b border-surface-container-highest'}>
                                        <GraduationCap size={18} className={'text-primary shrink-0 mt-0.5'}/>
                                        <div className={'flex flex-col'}>
                                            <p className={'uppercase text-secondary font-label-sm text-label-sm'}>Learning</p>
                                            <p className={'flex flex-wrap items-center gap-space-xs md:gap-space-sm text-body-md font-body-md text-on-surface font-medium'}>
                                                <span>React Native</span>
                                                {'\u00B7'}
                                                <span>Expo</span>
                                                {'\u00B7'}
                                                <span>SQLite</span>
                                                {'\u00B7'}
                                                <span>AI/ML</span>
                                            </p>
                                        </div>
                                    </div><div className={'flex items-start gap-space-sm pb-space-sm border-b border-surface-container-highest'}>
                                        <Wrench size={18} className={'text-primary shrink-0 mt-0.5'}/>
                                        <div className={'flex flex-col'}>
                                            <p className={'uppercase text-secondary font-label-sm text-label-sm'}>Building</p>
                                            <p className={'flex flex-wrap items-center gap-space-xs md:gap-space-sm text-body-md font-body-md text-on-surface font-medium'}>
                                                <span>Personal projects</span>
                                                {'\u00B7'}
                                                <span>Bookish</span>
                                                {'\u00B7'}
                                                <span>My portfolio</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={'flex items-start gap-space-sm pb-space-sm border-b border-surface-container-highest'}>
                                        <Compass size={18} className={'text-primary shrink-0 mt-.05'}/>
                                        <div className={'flex flex-col'}>
                                            <p className={'uppercase text-secondary font-label-sm text-label-sm'}>Exploring</p>
                                            <p className={'flex flex-wrap items-center gap-space-xs md:gap-space-sm text-body-md font-body-md text-on-surface font-medium'}>
                                                <span>Mobile development</span>
                                                {'\u00B7'}
                                                <span>AI</span>
                                                {'\u00B7'}
                                                <span>Game development</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={'flex items-start gap-space-sm pb-space-sm border-b border-surface-container-highest'}>
                                        <BrainCircuit size={18} className={'text-primary shrink-0 mt-0.5'}/>
                                        <div className={'flex flex-col'}>
                                            <p className={'uppercase text-secondary font-label-sm text-label-sm'}>Thing About</p>
                                            <p className={'inline-flex gap-space-sm text-body-md font-body-md text-on-surface font-medium'}>
                                                What I want the next chapter of my life to look like
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={'pt-16'}>
                    <CallBack />
                </section>
            </div>
        </div>
    )
}
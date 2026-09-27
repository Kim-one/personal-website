import {Download, GraduationCap, Mail, MapPin, Share2, SquareTerminal} from "lucide-react";
import {EducationCard} from "@/components/EducationCard";
import {ToolkitCard} from "@/components/ToolkitCard";
import {CertificationsCard} from "@/components/CertificationsCard";
import {CurrentWork} from "@/components/CurrentWork";
import {ExperienceCard} from "@/components/ExperienceCard";
import {resumeContent} from "@/data/mock-data";

export default function Resume(){
    return (
        <div className={'w-full bg-surface'}>
            <div className={'max-w-[1120px] mx-auto'}>
                {/*Page Header*/}
                <section className={'pt-16'}>
                    <p className={'mb-space-md inline-flex items-center gap-space-sm text-code-sm font-code-sm font-semibold tracking-widest uppercase text-primary'}>
                        04 / My Journey
                        <span className={'relative w-8 bg-outline-variant h-[1px]'}></span>
                        <span className={'text-code-sm text-secondary'}>Curriculum Vitae</span>
                    </p>
                </section>
                {/*Hero Section*/}
                <section>
                    <div className={'bg-background p-space-lg md:p-space-2xl rounded-lg shadow-sm'}>
                        <div className={'flex flex-col gap-space-xl lg:flex-row lg:justify-between lg:items-start'}>
                            <div className={'space-y-space-md max-w-xl'}>
                                <div className={'space-y-space-xs'}>
                                <span className={'font-code-sm text-code-sm text-primary tracking-wider uppercase font-bold'}>
                                    Curated Resume
                                </span>
                                    <h1 className={'text-headline-xl font-headline-xl tracking-tight text-on-surface'}>04 / My Journey</h1>
                                    <p className={'inline-flex items-center font-headline-md text-headline-md text-secondary tracking-tight font-medium gap-1'}>
                                        <span>Kimone Barrett</span>
                                        <span className={'h-[1px] w-8 relative bg-outline-variant'}></span>
                                        <span>Software Developer</span>
                                        <span>{'\u00B7'}</span>
                                        <span>Builder</span>
                                        <span>{'\u00B7'}</span>
                                        <span>Learner</span>
                                    </p>
                                </div>
                                <p className={'leading-relaxed font-body-lg text-body-lg text-on-surface-variant'}>
                                    My experience across software development, technology, and continuous learning.
                                    Bridging engineering rigor with intentional human product ergonomics.
                                </p>
                                <div>
                                    <p className={'inline-flex items-center gap-1 text-[11px] font-code-sm text-code-sm text-secondary uppercase font-bold tracking-wide'}>
                                        At a Glance
                                        <span className={'h-[1px] w-4 relative bg-outline-variant'}></span>
                                    </p>
                                    <div className={'flex flex-wrap items-center gap-2'}>
                                        <span className={'uppercase py-1 px-space-sm tracking-wider font-semibold font-code-sm text-code-sm text-xs bg-surface-container-high rounded-full'}>Web Development</span>
                                        <span className={'uppercase py-1 px-space-sm tracking-wider font-semibold font-code-sm text-code-sm text-xs bg-surface-container-high rounded-full'}>Mobile</span>
                                        <span className={'uppercase py-1 px-space-sm tracking-wider font-semibold font-code-sm text-code-sm text-xs bg-surface-container-high rounded-full'}>AI / ML</span>
                                        <span className={'uppercase py-1 px-space-sm tracking-wider font-semibold font-code-sm text-code-sm text-xs bg-surface-container-high rounded-full'}>UX / UI</span>
                                    </div>
                                </div>
                                <div className={'flex flex-wrap items-center pt-1 gap-space-xs'}>
                                <span className={'inline-flex items-center gap-x-1.5 px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm'}>
                                    <MapPin className={'text-primary'} size={15}/>
                                    <span>Halifax, NS {'\u00B7'} Canada</span>
                                </span>
                                    <span className={'inline-flex items-center gap-x-1.5 px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm'}>
                                    <span className={'w-2 h-2 rounded-full bg-primary animate-ping'}></span>
                                    <span>Open to Opportunities</span>
                                </span>
                                    <span className={'inline-flex items-center gap-x-1.5 px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm'}>
                                    <GraduationCap size={15}/>
                                    <span>BSc 2026</span>
                                </span>
                                </div>
                            </div>
                            <div className={'flex flex-col sm:flex-row lg:flex-col gap-space-sm lg:min-w-[240px] shrink-0 pt-space-xs'}>
                                <a href={'/resume/Kimone_Barrett_Resume.pdf'}  target={'_blank'} rel={'noopener noreferrer'}
                                   className={'inline-flex items-center gap-space-sm px-space-lg py-space-sm  bg-on-surface text-surface pt-space-xs rounded-lg font-label-md text-label-md hover:bg-primary group'}>
                                    <Download className={'group-hover:translate-y-0.5 transition-transform duration-150'} size={18}/>
                                    <span>
                                        Download Resume (PDF)
                                    </span>
                                </a>
                                <div className={'grid grid-cols-3 gap-space-xs'}>
                                    <a href={'mailto:kimonebarrett16@gmail.com'} className={'flex flex-col items-center justify-center py-space-sm bg-surface-container hover:bg-surface-container-high rounded-lg text-on-surface transition-colors duration-150'}>
                                        <Mail size={18} />
                                        <span className={'font-code-sm text-[11px] mt-0.5'}>EMail</span>
                                    </a>
                                    <a href={'https://www.linkedin.com/in/kimone-barrett/'} target={'_blank'} rel={'noopener noreferrer'}
                                       className={'flex flex-col items-center justify-center py-space-sm bg-surface-container hover:bg-surface-container-high rounded-lg text-on-surface transition-colors duration-150'}>
                                        <Share2 size={18} />
                                        <span className={'font-code-sm text-[11px] mt-0.5'}>LinkedIn</span>
                                    </a>
                                    <a href={'https://github.com/Kim-one'} target={'_blank'} rel={'noopener noreferrer'}
                                       className={'flex flex-col items-center justify-center py-space-sm bg-surface-container hover:bg-surface-container-high rounded-lg text-on-surface transition-colors duration-150'}>
                                        <SquareTerminal size={18}  />
                                        <span className={'font-code-sm text-[11px] mt-0.5'}>Github</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section>
                    <div className={'grid grid-cols-12 py-space-2xl gap-space-xl items-start'}>
                        <div className={'md:col-span-8'}>
                            <div className={'space-y-space-xs pb-space-sm'}>
                                <div className={'flex items-center gap-space-sm'}>
                                    <span className={'uppercase tracking-wider text-primary text-code-sm font-code-sm font-semibold'}>01 / Experience</span>
                                    <span className={'h-[1px] relative flex-1 bg-outline-variant'}></span>
                                </div>
                                <p className={'text-on-surface-variant font-body-md text-body-md mb-space-lg'}>
                                    Curated timeline of client engagements, co-ops, industry externships and technical fellowships.
                                </p>
                            </div>
                            <div className={'relative pl-6 space-y-space-2xl before:absolute before:left-2 before:top-3 before:bottom-3 before:w-[2px] before:bg-surface-container-high'}>
                                <div className={'space-y-space-xl relative pb-space-lg'}>
                                    {resumeContent.map(content => (
                                        <div key={content.year}>
                                            <div className={'flex items-center gap-space-sm'}>
                                                <span className={'absolute -left-6 w-4 h-4 rounded-full bg-primary flex items-center justify-center'}>
                                                    <span className={'w-1.5 h-1.5 rounded-full bg-surface'}></span>
                                                </span>
                                                <span className={'font-headline-md text-headline-md text-on-surface font-semibold tracking-tight'}>{content.year}</span>
                                                <span className={'font-code-sm text-code-sm text-secondary uppercase tracking-wider'}>- {content.workType}</span>
                                            </div>
                                            <div className={'mt-10'}>
                                                <ExperienceCard  data={content.work}/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/*Right Column*/}
                        <div className={'lg:col-span-4 space-y-space-xl lg:sticky lg:top-24'}>
                            <EducationCard />
                            <ToolkitCard/>
                            <CertificationsCard />
                            <CurrentWork/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
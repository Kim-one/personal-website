import {ArrowRight} from "lucide-react";
import Image from "next/image";
import {JournalEntries} from "@/data/mock-data";

type MonthlyEntryCardProps = {
    entry: typeof JournalEntries[number];
};

export const MonthlyEntryCard = ({entry}: MonthlyEntryCardProps) => {
    return (
        <div className={'bg-background border border-surface-container-highest p-space-lg rounded-xl shadow-sm group'}>
            <div className={'flex flex-col md:flex-row items-start md:items-center gap-2 mb-space-md'}>
                <span className={'uppercase bg-[#DDEEDB] text-[#166534] inline-flex flex-nowrap border border-[#166534]/15 rounded-full px-space-sm py-space-xs lg:px-3 lg:py-1 shadow-sm text-code-sm font-code-sm'}>
                    {entry.type} {'\u00B7'} {entry.totalReadTime} min read
                </span>
                <span className={'text-secondary text-code-sm font-code-sm uppercase'}>Article of the Month</span>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-12 gap-space-xl'}>
                <div className={'lg:col-span-7'}>
                    <h3 className={'font-headline-xl-mobile text-headline-lg-mobile lg:font-headline-xl lg:text-headline-lg text-on-surface leading-tight tracking-tight group-hover:text-primary transition-colors duration-150 mb-space-lg'}>
                        {entry.title}
                    </h3>
                    <p className={'text-body-lg font-body-lg text-secondary leading-relaxed mb-space-lg'}>
                        {entry.description}
                    </p>
                    <div className={'flex flex-wrap gap-1 mb-space-lg'}>
                        {entry.techStack.map((techStack: string)  => (
                            <div key={techStack} className={'rounded-full px-2.5 py-0.5 text-code-sm font-code-sm text-secondary bg-surface-container-low border border-surface-container-highest'}>
                                {techStack}
                                {/*Native {'\u00B7'} Expo*/}
                            </div>
                        ))}

                        {/*<div className={'rounded-full px-2.5 py-0.5 text-code-sm font-code-sm text-secondary bg-surface-container-low border border-surface-container-highest'}>Offline-First*/}
                        {/*    SQLite*/}
                        {/*</div>*/}
                        {/*<div className={'rounded-full px-2.5 py-0.5 text-code-sm font-code-sm text-secondary bg-surface-container-low border border-surface-container-highest'}>iOS*/}
                        {/*    Release*/}
                        {/*</div>*/}
                    </div>
                    <div className={'pt-space-md border-t border-surface-container-highest'}>
                        <div className={'flex flex-wrap items-center justify-between'}>
                            <div className={'flex items-center gap-space-sm text-secondary font-code-sm text-code-sm'}>
                                <span className={'text-on-surface font-medium'}>September 2026</span>
                                <span>{'\u00B7'}</span>
                                <span>By Kimone Barrett</span>
                            </div>
                            <div>
                                <a href={`/journal/${entry.slug}`}
                                   className={'inline-flex items-center gap-space-xs font-label-md text-label-md font-semibold text-primary group-hover:translate-x-1 transition-transform duration-150 hover:underline'}>
                                    <span>Read full article</span>
                                    <ArrowRight size={18}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"lg:col-span-5 relative w-full flex items-center justify-center"}>
                    <div className={"w-full bg-surface-container-low rounded-xl p-space-md flex items-center justify-center overflow-hidden relative shadow-inner border border-surface-container-highest"}>
                        <div className={"absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"}></div>
                        <div className={"relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-surface-container"}>
                            <Image alt={"MyNextRead Mobile App Showcase Screen Trio"}
                                 className={"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"}
                                 src={'/projects/mobile_app.png'} width={400} height={400}/>
                        </div>
                        {/*<div className={"absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-surface-container-highest"}>*/}
                        {/*    <span className={"relative flex h-2 w-2"}>*/}
                        {/*        <span className={"animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-30"}></span>*/}
                        {/*        <span className={"relative inline-flex rounded-full h-2 w-2 bg-primary"}></span>*/}
                        {/*    </span>*/}
                        {/*    <span className={"font-code-sm text-code-sm text-on-surface font-medium"}>iOS TestFlight v1.2</span>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}
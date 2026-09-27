'use client';
import {useState} from "react";
import {JournalEntryCards} from "@/components/JournalEntryCards";
import {ArrowRight, ArrowUpDown, BookOpen} from "lucide-react";
import {MonthlyEntryCard} from "@/components/MonthlyEntryCard";
import {JournalEntries} from "@/data/mock-data";

const Categories = [
    'All',
    'Tech',
    'Building',
    'Career',
    'Thoughts'
]

const Category_Styles = {
    'All': 'bg-inverse-surface text-surface',
    'Tech': 'bg-[#E7DDF5] text-[#5B21B6]',
    'Building': 'bg-[#DDEEDB] text-[#166534]',
    'Career': 'bg-[#F7DFD2] text-[#9A3412]',
    'Thoughts': 'bg-[#F5EBC7] text-[#854D0E]',
}

export default function Journal() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
    const currentMonth = new Date();
    const monthlyKey = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2,'0')}`;

    const monthlyArticle = JournalEntries.find((entry) => entry.articleofmonth === monthlyKey)

    const filteredEntries = JournalEntries.filter((entry) => activeCategory === 'All' || entry.type === activeCategory );

    const sortedEntries = [...filteredEntries].sort((a,b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();

        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    })

    return (
        <div className={"w-full bg-surface"}>
            <div className={"max-w-[1120px] mx-auto py-space-2xl "}>
                <section className={''}>
                    <p className={'mb-space-md inline-flex items-center gap-space-sm text-code-sm font-code-sm font-semibold tracking-widest uppercase text-primary'}>
                        02 / Journal
                        <span className={'relative w-8 bg-outline-variant h-[1px]'}></span>
                        <span className={'text-code-sm text-secondary'}>Field Notes & Essays</span>
                    </p>
                    <div className={'max-w-3xl mb-space-2xl'}>
                        <h1 className={'text-headline-lg font-headline-lg mb-space-md'}>Writing about technology, things I’m building, and what I’m learning.</h1>
                        <p className={'leading-relaxed font-body-lg text-body-lg text-secondary'}>A collection of personal field notes on software craft, mobile architectures, AI/ML experiments, career transitions, and everything figured out along the way.</p>
                    </div>
                    <div className={'mb-space-lg flex flex-wrap items-center gap-space-sm'}>
                        {Categories.map((category) => {
                            const isActive = activeCategory === category;
                            return (
                                <button key={category}
                                        className={`px-3.5 py-1.5 rounded-full text-label-md font-label-md font-bold tracking-tight transition-opacity ${Category_Styles[category]} ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                                        onClick={() => setActiveCategory(category)}>
                                    {category}</button>
                            );
                        })}
                    </div>
                </section>
                <section className={'mb-space-lg'}>
                    {monthlyArticle &&(
                        <MonthlyEntryCard entry={monthlyArticle}/>
                    )}
                </section>
                {/*Chronological articles*/}
                <section className={'w-full pb-4'}>
                    <div className={'max-w-[1120px] mx-auto'}>
                        <div className={'flex items-center justify-between pb-space-md mb-space-md'}>
                            <h3 className={'text-secondary font-semibold tracking-wider uppercase font-label-md text-label-md'}>Chronological Archive</h3>
                            <button type={'button'}
                                    onClick={() => setSortOrder((current) => current === 'newest' ? 'oldest' : 'newest')}
                                    className={'font-code-sm text-code-sm text-secondary flex items-center gap-2'}>
                                <span>
                                    Sort: {sortOrder === 'newest' ? 'Newest' : 'Oldest'} First
                                </span>
                                <span><ArrowUpDown size={'12px'}/></span>
                            </button>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-space-md'}>
                        {sortedEntries.map((journal) => (
                            <JournalEntryCards key={journal.id}
                                               index={journal.id}
                                               slug={journal.slug}
                                               title={journal.title}
                                               type={journal.type}
                                               date={journal.date}
                                               time={journal.totalReadTime}
                                               techStack={journal.techStack}
                                               description={journal.description} />

                        ))}
                    </div>
                </section>
                <section className={'mt-space-2xl  bg-surface-container-low rounded-xl p-space-lg md:p-space-xl border border-surface-container-highest shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg'}>
                    <div className={'flex items-start gap-space-md max-w-xl'}>
                        <div className={'w-12 h-12 rounded-xl bg-background text-primary border border-surface-container-highest flex items-center justify-center shrink-0 shadow-sm'}>
                            <span><BookOpen size={24}/></span>
                        </div>
                        <div >
                            <h4 className={'font-headline-md text-headline-md text-on-surface'}>Enjoyed Reading?</h4>
                            <p className={'text-body-md font-body-md text-on-surface mt-1'}>
                                Explore more things I’m building, architectures I’m testing, and what I’m learning about.
                            </p>
                        </div>
                    </div>
                    <div className={' w-full md:w-auto flex flex-col sm:flex-row items-center gap-space-md shrink-0'}>
                        <a href={'/'} className={'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-background hover:bg-container hover:text-primary text-on-surface font-label-md text-label-md border border-surface-container-highest transition-colors duration-150 shadow-sm'}>
                            <span>View all projects</span>
                            <ArrowRight size={18}/>
                        </a>
                        <a href={'/'} className={'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-inverse-surface hover:bg-primary text-white font-label-md text-label-md border border-surface-container-highest transition-colors duration-150 shadow-sm'}>
                            <span>About me</span>
                            <ArrowRight size={18}/>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}
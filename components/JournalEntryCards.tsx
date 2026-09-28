import {ArrowRight} from "lucide-react";
import Link from "next/link";

const Category_Styles: Record<string, string> = {
    'All': 'bg-inverse-surface text-surface',
    'Tech': 'bg-[#E7DDF5] text-[#5B21B6]',
    'Building': 'bg-[#DDEEDB] text-[#166534]',
    'Career': 'bg-[#F7DFD2] text-[#9A3412]',
    'Thoughts': 'bg-[#F5EBC7] text-[#854D0E]',
}

export type JournalPageVariant = 'home' | 'journal';

interface JournalEntryCardProps {
    index: number;
    date: string;
    time: string;
    type: string;
    title: string;
    description: string;
    slug: string;
    techStack: string[];
    page?: JournalPageVariant;
}

export const JournalEntryCards = ({index, date, time, type, title, description, slug, techStack, page = 'journal'}:JournalEntryCardProps) => {
    return (
        <div className={'bg-background border border-surface-container-highest hover:bg-surface-container-low transition-all duration-200 shadow-sm rounded-xl p-space-lg md:p-space-xl group'}>
            <div className={`${page !== 'home' ? 'grid grid-cols-1 md:grid-cols-12 gap-space-md items-start' : ' justify-between'}`}>
                <div className={`${page === 'home' ? 'top-0 flex' : ''} md:col-span-3 flex flex-col h-full justify-between`}>
                    <div className={`${page === 'home' ? 'hidden' : ''} flex items-baseline gap-space-md`}>
                        <span className={'font-display-num text-headline-lg text-outline-variant font-light group-hover:text-primary transition-colors duration-150'}>
                            {index < 9 ? `0${index}` : index}
                        </span>
                        <span className={`px-3 py-1 rounded-full font-semibold font-label-sm text-label-sm tracking-wide uppercase 
                        ${Category_Styles[type]} shadow-sm`}>{type}</span>
                    </div>
                    <div className={`${page==='home' ? 'flex flex-col gap-2 lg:flex-row justify-between' : ''} font-code-sm text-code-sm text-secondary`}>
                        <div>
                            <span>{date}</span>
                            <span className={'mx-1'}>{'\u00B7'}</span>
                            <span className={`${page === 'home' ? 'text-primary' : ''} `}>{time} mins read</span>
                        </div>
                        <div className={`${page === 'home' ? 'flex flex-nowrap gap-space-xs my-2 ' : 'hidden'}`}>
                            {techStack.length > 0 && techStack.map(item => (
                                <p key={item} className={'bg-surface-container-high rounded-full px-3 py-1.5 text-label-sm font-label-sm text-secondary'}>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={'md:col-span-7'}>
                    <h4 className={'text-headline-md font-headline-md group-hover:text-primary transition-colors duration-150 mb-space-xs'}>
                        <a href={`/journal/${slug}`}>{title}</a>
                    </h4>
                    <p className={'text-secondary text-body-md font-body-md leading-relaxed'}>
                        {description}
                    </p>
                </div>
                <div className={`md:col-span-2 flex ${page !== 'home' ? 'md:justify-end' : ''} mt-2  items-center self-center md:pt-0 pt-space-xs `}>
                    <Link href={`/journal/${slug}`} className={`${page === 'home' ? 'text-primary' : 'group-hover:text-primary group-hover:translate-x-1 transition-all duration-150'} inline-flex items-center gap-1 font-label-md text-label-md font-semibold text-on-surface  `}>
                        <span>Read More</span>
                        <ArrowRight size={18} className={`${page === 'home' ? 'group-hover:translate-x-1 transition-transform duration-150' : ''}`}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
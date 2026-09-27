import {JournalEntries} from "@/data/mock-data";
import {JournalArticles} from "@/components/journal/articles/articles";
import {ArrowLeft, Bookmark, Link2} from "lucide-react";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function PersonalJournalEntries({params}: Props) {
    const { slug } = await params;

    const project = JournalEntries.find(
        (entries) => entries.slug === slug
    );

    const Article = JournalArticles[slug];

    return (
        <div className={'bg-surface'}>
            <div className={'max-w-[1120px] mx-auto'}>
                <div className={'w-full flex justify-between'}>
                    <div className={'inline-flex items-center gap-1 text-label-sm font-label-sm pt-space-sm'}>
                        <a href={'/journal'} className={'inline-flex items-center gap-1 text-secondary hover:text-primary'}>
                            <ArrowLeft size={14}/>
                            Journal Archive
                        </a>
                        <p className={'font-code-sm text-code-sm text-on-surface-variant'}>/ 02 Notes</p>
                    </div>
                    <div>
                        <p>28%</p>
                    </div>
                </div>
                <div className={'max-w-3xl mx-auto flex flex-col gap-space-lg mb-space-2xl py-space-2xl'}>
                    <h1 className={'font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight'}>{project?.title}</h1>
                    <p className={'text-body-lg text-secondary font-body-lg leading-tight'}>{project?.description}</p>
                    <div className={'flex justify-between p-space-md rounded-lg bg-background'}>
                        <div className={'flex items-center gap-space-sm'}>
                            <div className={'w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary font-headline-md font-bold text-sm'}>
                                KB
                            </div>
                            <div>
                                <div className={'flex items-center gap-1.5'}>
                                    <span className={'font-label-md text-label-md text-on-surface font-bold'}>Kimone Barrett</span>
                                    <span className={'text-[11px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-code-sm'}>Halifax, NS</span>
                                </div>
                                <p className={'font-label-sm text-label-sm text-secondary'}>Software Developer {'\u00B7'} Builder</p>
                            </div>
                        </div>
                        <div className={'flex gap-2'}>
                            <div className={'flex items-center py-1.5 px-3 gap-space-sm bg-surface-container-low rounded text-label-sm text-on-surface'}>
                                <Link2 size={18}/>
                                <span>Share</span>
                            </div>
                            <div className={'py-1 px-space-md gap-space-sm bg-surface-container-low rounded'}>
                                <Bookmark size={18}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        {project?.status === 'building' && project.techStack.length > 0 && (
                            <div className={'flex flex-wrap gap-space-xs font-code-sm text-xs text-on-surface-variant'}>
                                {project.techStack.map((techStack, index) => (
                                    <p key={index} className={'px-2.5 py-1 rounded-full bg-surface-container-low'}>
                                        {techStack}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <Article/>
            </div>
        </div>
    );
}
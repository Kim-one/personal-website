import {products} from "@/data/Products";
import {ArrowLeft, ArrowUpRight, Terminal} from "lucide-react";
import {ProjectPages} from "@/components/projects/pages/projects";
import {ComingSoon} from '@/components/ComingSoon';
import Link from "next/link";

type Props = {
    params: Promise<{
        slug: string;
    }>;
}
export default async function ProjectsPage ({ params}: Props) {
    const {slug} = await params;
    const project = products.find(
        (project) => project.slug === slug)

    const ProjectPage = ProjectPages[slug as keyof typeof ProjectPages];

    if (!project) {
        return (
            <div className="bg-surface min-h-screen">
                <div className="max-w-[1120px] mx-auto py-space-2xl">
                    <h1 className="font-headline-xl text-headline-xl text-on-surface">
                        Project not found
                    </h1>

                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-1 mt-space-md text-primary"
                    >
                        <ArrowLeft size={14} />
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    if (!ProjectPage) {
        return (
            <ComingSoon />
        )
    }

    return (
        <div className={'w-full bg-surface'}>
            <div className={'max-w-[1120px] mx-auto'}>
                <div className={'pt-16'}>
                    <div className={'flex justify-between group'}>
                        <a href={'/projects'} className={'inline-flex items-center gap-space-xs text-label-md text-on-surface-variant font-label-md hover:text-primary hover:cursor-pointer'}>
                            <ArrowLeft size={16}/>
                            <span>Back to Projects</span>
                        </a>
                        <div>
                            <p className={'font-code-sm text-code-sm text-primary font-semibold'}>
                                {project?.id < 9 ? `0${project?.id}` : `${project?.id}`}
                                <span className={'text-secondary font-normal'}> / {project?.prodType}</span>
                            </p>
                        </div>
                    </div>
                    <div className={'mt-space-lg'}>
                        <div className={'inline-flex items-center gap-space-md rounded-full px-3 py-1 bg-primary-fixed/60'}>
                            <span className={'w-2 h-2 rounded-full bg-primary-container'}></span>
                            <div className={'text-label-sm font-label-sm'}>
                                {project?.prodType} {'\u00B7'} {project?.type} {'\u00B7'} 2026
                            </div>
                        </div>
                    </div>
                    <div className={'mt-space-lg space-y-space-md'}>
                        <h1 className={'text-headline-xl font-headline-xl'}>{project?.name}</h1>
                        <p className={'text-body-md font-body-md max-w-xl text-secondary'}>{project?.description}</p>
                        <div className={'flex gap-2 pt-space-xs'}>
                            <a href={`${project?.liveLink}`} target={'_blank'} rel={'noopener noreferrer'}
                               className={`${!project?.liveLink ? 'hidden' : 'inline-flex items-center gap-2 px-space-lg py-space-sm hover:bg-primary rounded'} bg-black text-white text-label-md font-label-md `}>
                                View Project
                                <ArrowUpRight size={16}/>
                            </a>
                            <a href={`${project?.githublink}`} target={'_blank'} rel={'noopener noreferrer'}
                               className={`${!project?.githublink ? 'hidden' : 'inline-flex items-center gap-2 px-space-lg py-space-sm hover:bg-surface-container rounded'} bg-background text-black text-label-md font-label-md `}>
                                <Terminal size={16}/>
                                View on GitHub
                            </a>
                        </div>
                    </div>
                    <div>
                        <ProjectPage />
                    </div>
                </div>
            </div>
        </div>
    );
}
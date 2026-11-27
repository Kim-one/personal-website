'use client'
import {ProjectsData} from "@/data/Products";
import Image from "next/image";
import {ArrowRight} from "lucide-react";

const ProdTypesStyles: Record<string, string> =  {
    'Personal Project': 'bg-[#E7DDF5] text-[#5B21B6]',
    'Client Work': 'bg-[#DDEEDB] text-[#166534]',
    'Co-op': 'bg-[#F7DFD2] text-[#9A3412]',
    'Externship': 'bg-[#F5EBC7] text-[#854D0E]',
}

const ProdTypesDot: Record<string, string> = {
    'Personal Project': 'bg-[#5B21B6]',
    'Client Work': 'bg-[#166534]',
    'Co-op': 'bg-[#9A3412]',
    'Externship': 'bg-[#854D0E]',
}
export const ProjectsCard = ({project}: {project: ProjectsData}) => (
    <div className={'bg-surface-container-low rounded-xl group'}>
        <div className={'grid grid-cols-1 lg:grid-cols-12 '}>
            <div className={'col-span-7 p-space-lg'}>
                <div className={'p-space-xs lg:p-space-lg'}>
                    <Image
                        width={1000}
                        height={1000}
                        sizes={'(min-width: 1024px) 58vw, 100vw'}
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        className={'rounded-lg object-cover w-full aspect-video group-hover:scale-[1.015] ease-out transition-transform duration-500'}
                    />
                </div>
            </div>
            <div className={'col-span-5 bg-background'}>
                <div className={'p-space-lg'}>
                    <div className={'p-space-lg '}>
                        <div className={'space-y-space-md'}>
                            <p className={`${ProdTypesStyles[project.prodType]} inline-flex flex-wrap items-center gap-space-sm rounded-full px-2.5 py-0.5 font-label-sm text-label-sm`} >
                                <span className={`${ProdTypesDot[project.prodType]} rounded-full h-1.5 w-1.5`}></span>
                                {project.prodType}
                            </p>
                            <h1 className={'text-headline-lg font-headline-lg text-on-surface group-hover:text-primary transition-colors duration-150'}>{project.name}</h1>
                            <p className={'font-body-md text-body-md text-on-surface-variant'}>{project.description}</p>
                            <div className={'flex flex-col gap-space-xs'}>
                                <p className={'font-code-sm text-code-sm tracking-wider text-secondary uppercase'}>Architecture & Stack</p>
                                <div className={'flex flex-wrap gap-space-xs'}>
                                    {project.technologies.map((tech, index) => (
                                        <p key={index} className={'px-2.5 py-0.5 rounded-full bg-surface-container font-code-sm text-code-sm text-on-surface'}>{tech}</p>
                                    ))}
                                </div>
                            </div>
                            <div className={'pt-space-md border-t border-surface-container-highest'}>
                                <a href={`/projects/${project.slug}`} className={'flex items-center group gap-space-sm font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors'}>
                                    View Project
                                    <ArrowRight className={'group-hover:translate-x-1 transition-transform duration-200'} size={18}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
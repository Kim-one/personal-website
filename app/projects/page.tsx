'use client';
import {products} from '@/data/Products';
import {SquareTerminal} from "lucide-react";
import {useState} from "react";
import {ProjectsCard} from "@/components/ProjectsCard";

const Sections = [
    'All',
    'Mobile Apps',
    'Website Development',
]

const SectionStyles: Record<string, string> = {
    'All': 'bg-inverse-surface text-surface border border-surface hover:bg-inverse-surface/60',
    'Mobile Apps': 'bg-[#DDEEDB] text-[#166534] border border-[#166534] hover:bg-[#DDEEDB]/60',
    'Website Development': 'bg-[#F7DFD2] text-[#9A3412] border border-[#9A3412] hover:bg-[#F7DFD2]/60',
    'Externship': 'bg-[#F5EBC7] text-[#854D0E]',
}

export default function ProjectsPage() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredProducts = products.filter(
        product => activeTab === 'All' || product.type === activeTab)
    return (
        <div className={'w-full bg-surface'}>
            <div className={'max-w-[350px] lg:max-w-[1120px] mx-auto'}>
                <div className={'pt-16'}>
                    <div className={'inline-flex items-center gap-space-sm'}>
                        <h2 className={'text-primary text-code-sm font-code-sm uppercase font-bold'}>01 / Projects</h2>
                        <span className={'h-[1px] w-8 bg-outline-variant relative'}></span>
                        <p className={'text-code-sm text-secondary'}>Selected Projects</p>
                    </div>
                </div>
                <section>
                    <div className={'pt-4 space-y-space-md'}>
                        <h2 className={'font-headline-xl text-headline-xl tracking-tight text-on-surface'}>Projects</h2>
                        <p className={'text-body-lg font-body-lg '}>
                            Things I've built, designed and experimented with.
                        </p>
                        <p className={'text-body-md font-body-md text-on-surface-variant max-w-lg'}>
                            From client platforms to autonomous tools and low latency experiments, these projects explore
                            the tension between rigorous engineering, tactile interfaces, and editorial clarity.
                        </p>
                    </div>
                </section>
                <section className={'pt-space-xl'}>
                    <div className={'py-6 flex justify-between border-b border-surface-container-highest'}>
                        <div className={'flex gap-space-md'}>
                            {Sections.map((section, i) => (
                                <div key={i}
                                     onClick={() => setActiveTab(section)}
                                     className={`${activeTab === section ? '' : 'opacity-60'} ${SectionStyles[section]} rounded-full px-3.5 py-1.5 font-bold tracking-tight font-label-md text-label-md hover:cursor-pointer`}>
                                    {section}
                                </div>
                            ))}
                        </div>
                        <div className={'hidden lg:flex items-center gap-space-sm'}>
                            <SquareTerminal size={16} className={'text-primary'}/>
                            <p className={'font-code-sm text-code-sm text-secondary'}>
                                {filteredProducts.length} visible {filteredProducts.length > 1 ? (<span>works</span>) : (<span>work</span>)}
                            </p>
                        </div>
                    </div>
                </section>
                <section className={'pt-space-2xl'}>
                    <div className={'grid grid-cols-1 gap-space-xl'}>
                        {filteredProducts.map((product, i) => (
                            <div key={product.id} style={{top: `${96 + Math.min(i, 5) * 20}px`}} className={'md:sticky rounded-xl overflow-hidden shadow-sm'}>
                                <ProjectsCard projects={product}/>
                            </div>
                        ))}
                        <div aria-hidden className={'hidden md:block h-[40vh]'}/>
                    </div>
                </section>
            </div>
        </div>
    );
}
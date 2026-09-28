import {ReactNode} from 'react';

type SectionProps = {
    index: string;
    label: string;
    title: string;
    children: ReactNode;
}

export const CaseStudySection = ({index,label,title,children}:SectionProps) => {
    return (
        <div>
            <div className={'grid grid-cols-1 lg:grid-cols-12 gap-space-xl'}>
                <div className={'col-span-4'}>
                    <div className={'sticky top-24 space-y-space-md'}>
                        <span className={'text-code-sm font-code-sm font-semibold text-primary uppercase tracking-wider'}>
                            {index} / {label}
                        </span>
                        <h2 className={'md:text-headline-lg md:font-headline-lg text-headline-lg-mobile font-headline-lg-mobile text-on-surface'}>
                            {title}
                        </h2>
                    </div>
                </div>
                <div className={'col-span-8 space-y-space-lg'}>
                    {children}
                </div>
            </div>
        </div>
    )
}
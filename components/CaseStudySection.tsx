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
            <div className={'grid grid-cols-1 gap-space-md lg:grid-cols-12 lg:gap-space-xl'}>
                <div className={'lg:col-span-4'}>
                    <div className={'sticky top-24 space-y-space-md'}>
                        <span className={'text-code-sm font-code-sm font-semibold text-primary uppercase tracking-wider'}>
                            {index} / {label}
                        </span>
                        <h2 className={'lg:text-headline-lg lg:font-headline-lg text-headline-lg-mobile font-headline-lg-mobile text-on-surface'}>
                            {title}
                        </h2>
                    </div>
                </div>
                <div className={'lg:col-span-8 space-y-space-lg'}>
                    {children}
                </div>
            </div>
        </div>
    )
}
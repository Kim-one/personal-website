import {ReactNode} from 'react';

type FeaturesCardProps = {
    icon: ReactNode;
    label: string;
}

export const FeaturesCard = ({icon, label}:FeaturesCardProps) => {
    return (
        <div className={'bg-background rounded-md shadow-sm p-space-md flex items-start gap-space-sm'}>
            <span className={'text-primary shrink-0 mt-0.5 text-[20px]'}>{icon}</span>
            <span className={'font-label-md text-label-md text-on-surface leading-snug'}>{label}</span>
        </div>
    )
}
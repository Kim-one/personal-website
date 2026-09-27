import {ReactNode} from 'react';

export const Callout = ({children}: { children: ReactNode }) => {
    return (
        <div className={'bg-surface-container-low p-space-xl rounded-xl my-space-lg relative shadow-sm'}>
            <div className={'font-display-num text-[48px] text-primary/20 absolute left-4 top-4 select-none'}>"</div>
            <p className={'italic pl-space-md z-10 relative text-on-surface text-headline-md font-headline-md'}>
                {children}
            </p>
        </div>
    )
}
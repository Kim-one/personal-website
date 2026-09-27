import {CircleCheck} from "lucide-react";

export const CurrentWork = () => {
    return (
        <div className={'bg-background rounded-lg p-space-lg flex flex-col gap-space-sm shadow-sm'}>
            <div className={'flex justify-between'}>
                <h2 className={'text-primary uppercase tracking-wider text-code-sm font-code-sm font-bold'}>05 / Currently</h2>
                <span className={'relative flex h-2 w-2'}>
                    <span className={'absolute animate-ping bg-primary rounded-full h-full w-full'}></span>
                    <span className={'h-2 w-2 bg-primary rounded-full'}></span>
                </span>
            </div>
            <div>
                <ul className={'space-y-2 text-xs'}>
                    <li className={'flex items-start gap-2'}>
                        <span className={'font-code-sm text-primary font-semibold'}>01</span>
                        <div className={'space-x-1.5'}>
                            <span className={'font-semibold text-on-surface '}>Building</span>
                            <span className={'text-on-surface-variant '}>Bookish (Mobile app with offline sync)</span>
                        </div>
                    </li>
                    <li className={'flex items-start gap-2'}>
                        <span className={'font-code-sm text-primary font-semibold'}>02</span>
                        <div className={'space-x-1.5'}>
                            <span className={'font-semibold text-on-surface '}>Exploring</span>
                            <span className={'text-on-surface-variant '}>Isolation fores models for telemetry</span>
                        </div>
                    </li>
                    <li className={'p-2 rounded bg-surface-container-low text-on-surface flex items-center gap-1.5'}>
                        <CircleCheck size={14} className={'text-primary'}/>
                        <span className={'font-medium'}>Open for roles starting in 2026</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
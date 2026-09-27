import {ReactNode} from "react";
import {Bookmark, LibraryBig, CircleCheckBig} from 'lucide-react';

const StateIcon: Record<string, ReactNode> = {
    Queued: <Bookmark size={18} className={'text-primary'}/>,
    Active: <LibraryBig size={18} className={'text-background'}/>,
    Archived: <CircleCheckBig size={18} className={'text-secondary'}/>
}

const StateIconBg: Record<string, string> = {
    Queued: 'bg-primary/10',
    Active: 'bg-primary',
    Archived: 'bg-secondary/10',
}

export const ReadingStatesPrev = ({title, description,status}:{title:string, description:string, status: string}) => {
    return (
        <div className={'bg-background rounded-md p-space-md flex flex-col justify-between shadow-sm'}>
            <div className={'space-y-space-sm'}>
                {StateIcon[status] &&(
                    <span className={`rounded-full p-2 inline-flex items-center justify-center ${StateIconBg[status]}`}>
                        {StateIcon[status]}
                    </span>
                )}
                <h1 className={'font-headline-md text-[1.25rem] text-on-surface font-semibold'}>{title}</h1>
                <p className={'text-secondary text-body-md font-body-md leading-relaxed'}>{description}</p>
            </div>
            <div className={'pt-space-lg'}>
                <p className={`${status === 'Archived' ? 'text-secondary' : 'text-primary'} uppercase font-code-sm text-code-sm`}>
                    State: <span>{status}</span>
                </p>
            </div>
        </div>
    )
}
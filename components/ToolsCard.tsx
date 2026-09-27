import React from 'react';
import { PanelsTopLeft, Server, Wrench } from 'lucide-react';

const Titles: Record<string, React.ReactNode> = {
    Frontend: <PanelsTopLeft className={'text-primary'} size={20}/>,
    Backend: <Server className={'text-primary'} size={20}/>,
    Tools: <Wrench className={'text-primary'} size={20} />,
};

export const ToolsCard = ({title, stack}:{title:string, stack: string[]}) => {
    return (
        <div className={'bg-surface-container rounded-lg p-[1.5rem]'}>
            <div className="flex items-center gap-2 mb-4">
                {Titles[title] && (
                    <span className="text-on-surface flex items-center justify-center">
                        {Titles[title]}
                    </span>
                )}
                <p className={"text-on-surface text-label-md font-label-md font-semibold"}>{title}</p>
            </div>
            <div className={'flex flex-wrap gap-[0.25rem]'}>
                {stack.map((item, i) => (
                    <div key={i} className={'bg-white text-on-surface text-label-sm rounded-full py-1 px-[0.5rem]'}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
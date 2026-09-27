import {Layers2} from "lucide-react";
import {Tools} from '@/data/mock-data';

export const ToolkitCard = () => {
    return (
        <div className={'bg-background p-space-lg rounded-lg flex flex-col justify-center gap-space-sm shadow-sm'}>
            <div className={'flex justify-between'}>
                <h2 className={'text-primary uppercase tracking-wider text-code-sm font-code-sm font-bold'}>03 / ToolKit</h2>
                <Layers2 size={18}/>
            </div>
            {Tools.map((tool, index) => (
                <div className={'flex flex-col gap-1'} key={index}>
                    <h2 className={'text-secondary font-code-sm text-[12px] tracking-wider font-bold block uppercase'}>{tool.title}</h2>
                    <div className={'flex flex-wrap gap-1.5'}>
                        {tool.techStack.map((techStack, index) => (
                            <p key={index} className={'px-2 py-0.5 bg-surface-container rounded font-code-sm text-xs text-on-surface'}>{techStack}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
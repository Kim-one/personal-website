import {WorkItem} from "@/data/mock-data";

const Category_Styles = {
    'Mobile': 'bg-[#E7DDF5] text-[#5B21B6]',
    'Client Work': 'bg-[#DDEEDB] text-[#166534]',
    'Co-op': 'bg-[#F7DFD2] text-[#9A3412]',
    'Externship': 'bg-[#F5EBC7] text-[#854D0E]',
}

const CategoryStylesDot = {
    'Mobile': 'bg-[#5B21B6]',
    'Client Work': 'bg-[#166534]',
    'Co-op': 'bg-[#9A3412]',
    'Externship': 'bg-[#854D0E]',
}

export const ExperienceCard = ({data}:{data: WorkItem[]}) => {

    return (
        <div className={'flex flex-col space-y-6'}>
            {data.map((item, index) => (
                <div key={index} className={'bg-background p-space-lg md:p-space-2xl rounded-lg flex flex-col justify-center gap-space-sm shadow-sm'}>
                    <div className={'flex flex-col gap-space-md'}>
                        <div className={'space-y-1.5'}>
                            <div className={'flex flex-wrap items-center gap-space-xs'}>
                                <div className={`flex items-center gap-space-sm px-space-sm py-1 rounded-full ${Category_Styles[item.type]}`}>
                                    <span className={`h-1.5 w-1.5 rounded-full ${CategoryStylesDot[item.type]}`}></span>
                                    <h1 className={` font-label-sm text-[11px] tracking-wider font-semibold uppercase`}>
                                        {item.type}
                                    </h1>
                                </div>
                                <span className={'text-secondary font-code-sm text-code-sm'}>{item.time}</span>
                            </div>
                            <h3 className={'font-headline-md text-headline-md text-on-surface'}>{item.jobTitle}</h3>
                            <div className={'flex items-center gap-2 text-primary font-label-md text-label-md'}>
                                <span>{item.company}</span>
                                <span className={'text-outline'}>{'\u00B7'}</span>
                                <span className={`${!item.companyType ? 'hidden' : ''} text-on-surface-variant`}>{item.companyType}</span>
                            </div>
                        </div>
                        <div className={'bg-surface-container-low lg:hidden text-right px-space-sm py-1.5 rounded-lg sm:block'}>
                            <span className={'font-code-sm text-[11px] uppercase tracking-wider text-secondary block'}>Production</span>
                            <span className={'font-label-sm text-label-sm font-semibold text-on-surface'}>Web Platform</span>
                        </div>
                    </div>
                    <p className={'font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md'}>
                        {item.jobDescription}
                    </p>
                    <div className={'flex flex-wrap gap-space-xs'}>
                        {item.stack.map((item, index) => (
                            <span key={index} className={'px-space-sm py-1 rounded-full bg-surface-container text-secondary font-code-sm text-code-sm'}>{item}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
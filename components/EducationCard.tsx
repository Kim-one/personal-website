import {GraduationCap} from "lucide-react";

export const EducationCard = () => {
    return (
        <div className={'bg-background p-space-lg rounded-lg flex flex-col justify-center gap-space-sm shadow-sm'}>
            <div className={'flex justify-between'}>
                <h2 className={'text-primary uppercase tracking-wider text-code-sm font-code-sm font-bold'}>02 / Education</h2>
                <GraduationCap size={18}/>
            </div>
            <div className={'flex flex-col gap-space-xs'}>
                <h2 className={'font-headline-md text-on-surface font-semibold text-base'}>Bachelor of Science (BSc)</h2>
                <p className={'text-primary font-body-md font-medium text-sm'}>Computer Science and Business Admin</p>
            </div>
            <div className={'flex flex-col gap-space-xs'}>
                <h2 className={'font-semibold text-on-surface '}>Saint Mary's University <span>{'\u00B7'} <br/>Halifax, NS</span></h2>
                <p className={'text-secondary font-code-sm text-code-sm'}>Class Of 2026</p>
            </div>
        </div>
    );
}
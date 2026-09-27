import {BadgeCheck, } from "lucide-react";

export const CertificationsCard = () => {
    return (
        <div className={'bg-background rounded-lg p-space-lg flex flex-col gap-space-sm shadow-sm'}>
            <div className={'flex justify-between'}>
                <h2 className={'text-primary uppercase tracking-wider text-code-sm font-code-sm font-bold'}>04 / Certifications</h2>
                <BadgeCheck size={18}/>
            </div>
            <div className={'space-y-2'}>
                <div className={'bg-surface-container p-space-sm rounded-lg'}>
                    <h2 className={'text-primary uppercase font-bold font-label-sm text-[11px]'}>ACENET</h2>
                    <p className={'font-label-md text-xs font-semibold text-on-surface'}>Machine Learning & Scientific Computing </p>
                </div>
                <div className={'bg-surface-container p-space-sm rounded-lg'}>
                    <h2 className={'text-primary uppercase font-bold font-label-sm text-[11px]'}>Google Coursera</h2>
                    <p className={'font-label-md text-xs font-semibold text-on-surface'}>Cloud & Data Foundations</p>
                </div>
            </div>
        </div>
    );
}
import {ArrowUpRight, Download, Mail} from "lucide-react";

export const CallBack = () => {
    return (
        <div className={'pt-10 bg-white rounded-xl p-6 text-center flex flex-col items-center shadow-sm'}>
            <div className={'space-y-[1rem] mx-auto max-w-2xl'}>
                <p className={'text-primary tracking-wider uppercase text-code-sm font-semibold'}>Initiate Conversation</p>
                <h2 className={'text-headline-lg text-on-surface'}>Let's Build something exceptional together.</h2>
                <p className={'text-body-md text-secondary'}>I am currently open to full-time engineering roles, collaborative projects, and technical discussions.</p>
                <div className={'flex flex-wrap justify-center items-center gap-3'}>
                    <a href={'mailto:kimonebarrett16@gmail.com'} className={'flex items-center gap-1 text-white hover:bg-primary bg-black py-2 px-6 rounded-md text-label-md'}>
                        <Mail size={18}/>
                        <span>Send an email</span>
                    </a>
                    <a href={'/resume/Kimone_Barrett_Resume.pdf'}
                       className={'flex items-center bg-surface-container-low hover:bg-surface-container py-2 px-6 rounded-md gap-1 text-label-md'}
                       target={'_blank'} rel={'noopener noreferrer'}
                    >
                        <Download size={18}/>
                        <span>Download resume</span>
                    </a>
                </div>
                <div className={'flex flex-wrap justify-center items-center gap-3 text-label-md text-secondary'}>
                    <a href={'https://github.com/Kim-one'}
                       className={'flex gap-1 transition-colors hover:text-primary'}
                       target={'_blank'} rel={'noopener noreferrer'}>
                        Github
                        <ArrowUpRight size={14}/>
                    </a>
                    <a href={'https://www.linkedin.com/in/kimone-barrett/'}
                       className={'flex gap-1 transition-colors hover:text-primary'}
                       target={'_blank'}
                       rel={'noopener noreferrer'}>
                        LinkedIn
                        <ArrowUpRight size={14}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
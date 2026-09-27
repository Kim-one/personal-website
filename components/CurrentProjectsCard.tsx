const Status_Labels: Record<string, string> = {
    in_progress: 'Building',
    learning: 'Learning',
}

export default function CurrentProjectsCard({status, name, slogan}:{status: string, name: string, slogan: string}) {

    return(
        <div className={'bg-surface-container-low rounded-xl shadow-sm p-space-md transition-transform hover:-translate-y-0.5 duration-150'}>
            <p className={'block text-code-sm uppercase text-secondary mb-3'}>{Status_Labels[status] ?? status }</p>
            <p className={'text-label-md font-semibold text-on-surface'}>{name}</p>
            <p className={'text-secondary mt-0.5 text-label-sm'}>{slogan}</p>
        </div>
    );
}
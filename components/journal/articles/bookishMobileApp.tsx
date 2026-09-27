import Image from 'next/image';
export const BookishMobileApp = () => {
    return (
        <div>
            <section className={'w-full max-w-4xl mx-auto mb-space-3xl flex flex-col gap-space-sm'}>
                <div
                    className="relative w-full rounded-2xl overflow-hidden bg-surface-container-high p-4 md:p-8 flex items-center justify-center">
                    <div
                        className="relative w-full overflow-hidden rounded-xl shadow-md bg-surface-container-lowest flex items-center justify-center">
                        <Image className="w-full h-auto max-h-[580px] object-cover rounded-xl" height={100} width={100}
                             alt="A clean, cozy high-resolution photograph of three modern smartphones standing upright on a warm wooden studio tabletop. Each screen displays the refined warm-cream minimalist reading app MyNextRead showing reading logs, book covers, and book notes in rich typographic hierarchy with soft ambient daylight."
                             src="/projects/mobile_app.png"/>
                    </div>
                </div>
                <div className={'flex items-center justify-between text-secondary font-code-sm text-code-sm px-2'}>
                    <span>Fig 1.1: Multi-screen workflow test of MyNextRead running build #42 across iPhone 15 Pro hardware.</span>
                    <span className={'hidden sm:inline text-outline-variant'}>Production</span>
                </div>
            </section>
        </div>
    )
}
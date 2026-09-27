import Link from 'next/link';

export const ComingSoon = () => {
    return (
        <main className={"min-h-screen flex items-center justify-center px-space-lg"}>
            <div className={"max-w-xl text-center"}>
                <p className={"text-sm uppercase tracking-widest text-muted-foreground mb-space-md"}>
                    Project
                </p>

                <h1 className={"text-5xl font-semibold mb-space-md"}>
                    Coming soon.
                </h1>

                <p className={"text-lg text-muted-foreground leading-relaxed mb-space-xl"}>
                    I’m still putting this project page together.
                    Check back soon for the story behind the project,
                    what I built, and what I learned along the way.
                </p>

                <Link href={"/projects"} className={"inline-flex items-center rounded-full px-space-lg py-space-md bg-surface-container"}>
                    Back to projects
                </Link>
            </div>
        </main>
    );
}
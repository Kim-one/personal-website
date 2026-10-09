export const LifeAfterUniversity = () => {
    return (
        <article className="space-y-12 pb-10">
            <p className={'font-body-lg text-body-lg text-on-surface leading-loose first-letter:float-left first-letter:text-5xl first-letter:pr-3 first-letter:font-headline-xl first-letter:font-bold first-letter:text-primary'}>
                Graduating from university is something I had looked forward to for years. For so long, there was always a
                clear, predictable next step: finish this semester, pass this course, complete that Software Engineering assignment,
                make it to the next academic year. December 2025 on a random day of the week I wrote my last exam, and that marked the end of a 4 year journey.
                There was suddenly no structure and no syllabus awaiting me dictating what I should expect for the new year.
            </p>

            {/*No Syllabus*/}
            <section className={'pt-space-md space-y-md'}>
                <div className={'flex items-baseline gap-space-sm'}>
                    <span className={'text-primary font-semibold text-code-sm font-code-sm'}>01</span>
                    <h2 className={'font-headline-lg text-headline-lg text-on-surface tracking-tight'}>The Vanishing Syllabus</h2>
                </div>
                <p className={'font-body-md text-body-md text-on-surface-variant'}>
                    In university, success is measured through different constraints. The professor defines the test cases; the rubrics
                    specify the grade distribution; the calendar marks the midterms. Even when an assignment felt impossible at 2:00 AM, there
                    was always comfort in knowing that a clean, correct answer existed somewhere in the lecture slides.
                </p>
                <p className={'font-body-md text-body-md text-on-surface-variant'}>
                    Post-grad life immediately dismantles that certainty. In software engineering, there is rarely a single solution,
                    and certainly no TA office hours when you cant figure out the solution to your problem. Learning how to self-diagnose what you don't know, and having the stamina to sit with
                    open-ended ambiguity is the hidden curriculum of the first year out.
                </p>
            </section>
            {/*Job Search*/}
            <section className={'pt-space-md space-y-md'}>
                <div className={'flex items-baseline gap-space-sm'}>
                    <span className={'text-primary font-semibold text-code-sm font-code-sm'}>02</span>
                    <h2 className={'font-headline-lg text-headline-lg text-on-surface tracking-tight'}>The Job Search Reality Check</h2>
                </div>
                <p className={'font-body-md text-body-md text-on-surface-variant'}>
                    Entering the job market as an early-career developer in 2026 requires an honest mental posture. We
                    have all seen the LinkedIn highlight reels: peers landing dream roles in various top companies.
                    What isn't broadcasted is the the automated rejection emails at 5:00 AM, the coffee chat requests on LinkedIn,
                    and the emotional toll of interviewing for a job position and never hearing back.
                </p>
                <p className={'font-body-md text-body-md text-on-surface-variant'}>
                    Post-grad life immediately dismantles that certainty. In software engineering, there is rarely a single solution,
                    and certainly no TA office hours when you cant figure out the solution to your problem. Learning how to self-diagnose what you don't know, and having the stamina to sit with
                    open-ended ambiguity is the hidden curriculum of the first year out.
                </p>
            </section>

        </article>
    );
};

export default LifeAfterUniversity;
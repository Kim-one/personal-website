import './globals.css';
import {mockData, Tools} from "@/data/mock-data";
import {products} from '@/data/Products'
import CurrentProjectsCard from "@/components/CurrentProjectsCard";
import {ProductsCard} from "@/components/ProductsCard";
import {GraduationCap, Code, Terminal, Mail, Download, ArrowUpRight, ArrowRight} from "lucide-react";
import {ToolsCard} from "@/components/ToolsCard";
import {JournalEntryCards} from "@/components/JournalEntryCards";
import {JournalEntries} from "@/data/mock-data";
import {CallBack} from "@/components/CallBack";

export default function Home() {
  return (
      <div className={'w-full bg-surface'}>
          <div className={"max-w-[350px] md:max-w-[750px] lg:max-w-[1120px]  mx-auto "}>
              {/*Hero Section*/}
              <section className={'lg:pt-16 py-space-md'}>
                  <div className={'flex flex-col md:flex-row items-start gap-5 lg:gap-10 mb-10'}>
                      <div className={'inline-flex items-center rounded-full bg-background py-1 px-3 gap-[0.25rem]'}>
                          <span className={'h-2 w-2 bg-primary rounded-full'}></span>
                          <span className={'uppercase text-label-sm font-label-sm text-secondary tracking-wider'}>Based in Canada</span>
                      </div>
                      <div className={'inline-flex items-center rounded-full bg-background py-1 px-3 gap-[0.25rem]'}>
                          <span className={'relative flex h-2 w-2'}>
                              <span className={'absolute animate-ping bg-primary rounded-full w-full h-full opacity-30'}></span>
                              <span className={'relative inline-flex h-2 w-2 bg-primary-container rounded-full'}></span>
                          </span>
                          <span className={'uppercase text-primary text-label-sm font-label-sm tracking-wider'}>Open to Opportunities</span>
                      </div>
                  </div>
                  <div className={'max-w-4xl space-y-5'}>
                      <h2 className={'text-headline-xl-mobile font-headline-xl-mobile md:text-headline-xl md:font-headline-xl'}>I build software, explore ideas, and document what I learn along the way.</h2>
                      <p className={'text-body-lg max-w-2xl'}>
                          I'm <strong className={'font-semibold text-on-surface'}>Kimone Barrett</strong>, a Computer Science & Business Administration graduate,
                          focused on web development, AI/ML systems, and crafting intentional digital products with clean human ergonomics.
                      </p>
                  </div>
                  <div className={'mt-10 mb-10 flex gap-2 lg:gap-5 text-label-md'}>
                      <a href={'/projects'} className={'bg-black hover:bg-primary text-white py-3 px-6 inline-flex items-center gap-1 rounded-md transition-all duration-150 group'}>
                          <span className={'whitespace-nowrap'}>View my work</span>
                          <span><ArrowRight size={18} className={'group-hover:translate-x-0.5 transition-transform'}/></span>
                      </a>
                      <a href={'/journal'} className={'bg-white hover:text-primary text-black py-3 px-6 rounded-md group inline-flex items-center gap-1 transition-all duration-150 group'}>
                          <span className={'whitespace-nowrap'}>Read my writings</span>
                          <span><ArrowRight className={'group-hover:translate-x-0.5 transition-transform'} size={18}/></span>
                      </a>
                  </div>
              </section>
              {/*Current Work*/}
              <section className={'bg-white rounded-xl space-y-space-md p-space-lg shadow-sm'}>
                  <div className={'flex items-center gap-1'}>
                      <span className={'bg-primary h-2 w-2 rounded-full'}></span>
                      <span className={'text-primary text-code-sm font-semibold uppercase tracking-wider'}>Currently</span>
                  </div>
                  <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg'}>
                      {mockData.map((item, index) => (
                          <CurrentProjectsCard key={index} status={item.status} name={item.name} slogan={item.slogan}/>
                      ))}
                  </div>
              </section>
              {/*Selected Work*/}
              <section id={'work'} className={'pt-10'}>
                  <div className={'flex flex-col md:flex-row md:items-end md:justify-between'}>
                      <div className={'flex items-baseline gap-2'}>
                          <span className={'text-display-num text-outline-variant'}>01</span>
                          <h2 className={'uppercase text-headline-lg text-on-surface'}>Selected Work</h2>
                      </div>
                  </div>
                  <div className={'flex flex-col md:flex-row justify-between mb-[2rem] lg:mb-[4rem]'}>
                      <p className={'text-body-md font-body-md text-secondary'}>Thoughtful products crafted for web and mobile.</p>
                      <a href={'/projects'} className={'inline-flex items-center gap-space-xs group text-primary hover:text-on-primary-fixed-variant'}>
                          <span className={'text-label-md font-label-md'}>View archive & experiments ({products.length})</span>
                          <ArrowRight size={16} className={'text-primary group-hover:translate-x-0.5 transition-transform duration-150'}/>
                      </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
                      {products.slice(0, 3).map((item, index) => (
                          <div key={index} className={index === 0 ? "md:col-span-2" : ""}>
                              <ProductsCard
                                  index={index}
                                  technologies={item.technologies}
                                  slug={item.slug}
                                  name={item.name}
                                  image={item.image}
                                  category={item.category}
                                  description={item.description}
                              />
                          </div>
                      ))}
                  </div>
              </section>
              {/*Journal*/}
              <section className={'pt-10'}>
                  <div className={'flex'}>
                      <div className={'flex items-baseline gap-2'}>
                          <span className={'text-display-num text-outline-variant'}>02</span>
                          <h2 className={'uppercase font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface'}>
                              Journal</h2>
                      </div>
                  </div>
                  <div className={'mb-[2rem] lg:mb-[4rem] flex flex-col gap-1 md:flex-row justify-between'}>
                      <p className={'text-body-md font-body-md text-secondary'}>Thoughts, experiments, and things I'm learning and building as a software engineer.</p>
                      <a href={`/journal/`} className={'inline-flex items-center whitespace-nowrap gap-1 text-label-md font-label-md text-primary hover:text-on-primary-fixed-variant group'}>
                          View archive & experiments ({JournalEntries.length})
                          <ArrowRight size={16} className={'group-hover:translate-x-0.5 transition-transform'}/>
                      </a>
                  </div>
                  <div className={'space-y-space-md'}>
                      {JournalEntries.slice(0,3).map((item, index) => (
                          <JournalEntryCards key={index} index={index} date={item.date} page={'home'}
                                             time={item.totalReadTime} techStack={item.techStack}
                                             type={item.type} title={item.title} description={item.description} slug={item.slug}/>

                      ))}
                  </div>
              </section>
              <section id={'about'} className={'pt-10 mb-10'}>
                  <div className={'flex'}>
                      <div className={'flex items-baseline gap-2 '}>
                          <span className={'text-display-num text-outline-variant'}>03</span>
                          <div>
                              <h2 className={'uppercase text-headline-lg text-on-surface'}>About & Education</h2>
                              <p className={'mb-[4rem] hidden md:flex text-body-md font-body-md text-secondary'}>Intersections of engineering, product logic and craftsmanship.</p>
                          </div>
                      </div>
                  </div>
                  <div className={'grid grid-cols-1 lg:grid-cols-12 gap-4'}>
                      <div className={'md:col-span-5 space-y-[1.5rem]'}>
                          <div className={'bg-background rounded-xl p-[2.5rem] space-y-[2.5rem] shadow-sm'}>
                              <h3 className={'text-headline-md text-on-surface'}>Hello, I'm Kimone.</h3>
                              <p className={'text-body-md leading-relaxed text-secondary'}>
                                  I am a software developer and recent Computer Science & Business Administration graduate,
                                  from Saint Mary's University. I focus on bridging complex technical systems with approachable human experience.
                              </p>
                              <p className={'text-body-md leading-relaxed text-secondary'}>
                                  Whether architecting robust frontend applications for property platforms or experimenting with predictive intelligence,
                                  I treat code as a medium for thoughtful, durable product craft.
                              </p>
                              <div className={'flex flex-col gap-[0.05rem] text-code-sm text-secondary'}>
                                  <div className={'flex items-center gap-space-sm'}>
                                      <GraduationCap className={'text-primary'} size={20}/>
                                      <span>BSc. Computer Science & Business Admin  {"\u00B7"} SMU</span>
                                  </div>
                                  <div className={'flex items-center gap-space-sm'}>
                                      <Terminal className={'text-primary'} size={20}/>
                                      <span>Active full stack engineering practitioner</span>
                                  </div>
                              </div>
                          </div>
                          <div className={'bg-surface-container-low rounded-xl p-[2.5rem] flex items-center justify-between shadow-sm'}>
                              <div className={'space-y-0.5'}>
                                  <span className={'text-code-sm text-secondary'}>Code Commit Rhythm</span>
                                  <div className={'text-headline-md text-on-surface'}>Consistent {'\u00B7'} 2026</div>
                              </div>
                              <div className={'h-12 w-12 rounded-full flex items-center justify-center text-on-primary-fixed  bg-primary-fixed'}>
                                  <Code className={'text-[24px]'}/>
                              </div>
                          </div>
                      </div>
                      <div className={'md:col-span-7 rounded-xl bg-background p-[2.5rem] space-y-[2.5rem] shadow-sm'}>
                          <h3 className={'text-on-surface text-headline-md'}>Experience & Milestones</h3>
                          <div className={'relative space-y-[2.25rem]'}>
                              <div className={'flex items-start gap-[1rem]'}>
                                  <div className={'w-16 shrink-0 text-code-sm text-primary font-semibold pt-1'}>2026</div>
                                  <div className={'flex-1'}>
                                      <div className={'flex flex-wrap items-baseline justify-between gap-1'}>
                                          <div className={'text-label-md text-on-surface font-semibold'}>RentalHist</div>
                                          <span className={'text-label-sm text-secondary'}>Frontend (React) Developer</span>
                                      </div>
                                      <p className={'text-body-md text-secondary'}>
                                          Architecting customer onboarding workflows, building responsive tenant dashboards, and refactoring reusable design token component libraries.
                                      </p>
                                  </div>
                              </div>
                              <div className={'flex items-start gap-[1rem]'}>
                                  <div className={'w-16 shrink-0 text-code-sm text-primary font-semibold pt-1'}>2026</div>
                                  <div className={'flex-1'}>
                                      <div className={'flex flex-wrap items-baseline justify-between gap-1'}>
                                          <div className={'text-label-md text-on-surface font-semibold'}>Millennial Designs</div>
                                          <span className={'text-label-sm text-secondary'}>Web Developer</span>
                                      </div>
                                      <p className={'text-body-md text-secondary'}>
                                          Developed client-facing websites, optimized SEO audits, and engineered modern micro-sites for regional businesses.                                      </p>
                                  </div>
                              </div>
                              <div className={'flex items-start gap-[1rem]'}>
                                  <div className={'w-16 shrink-0 text-code-sm text-primary font-semibold pt-1'}>2025</div>
                                  <div className={'flex-1'}>
                                      <div className={'flex flex-wrap items-baseline justify-between gap-1'}>
                                          <div className={'text-label-md text-on-surface font-semibold'}>Cognizant (Externship)</div>
                                          <span className={'text-label-sm text-secondary'}>Generative AI Externship</span>
                                      </div>
                                      <p className={'text-body-md text-secondary'}>
                                          Implemented machine learning anomaly detection pipelines and fine-tuning architectures for enterprise data sets using Python and scikit-learn.                                      </p>
                                  </div>
                              </div>
                              <div className={'flex items-start gap-[1rem]'}>
                                  <div className={'w-16 shrink-0 text-code-sm text-primary font-semibold pt-1'}>2025</div>
                                  <div className={'flex-1'}>
                                      <div className={'flex flex-wrap items-baseline justify-between gap-1'}>
                                          <div className={'text-label-md text-on-surface font-semibold'}>Saint Mary's University</div>
                                          <span className={'text-label-sm text-secondary'}>Graduate</span>
                                      </div>
                                      <p className={'text-body-md text-secondary'}>
                                          Completed Bachelor of Science in Computer Science with Business Administration, building foundations in algorithms, database design, and managerial analytics.                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/*Core Stack*/}
              <section className={'bg-white rounded-xl p-6 mb-10 shadow-sm'}>
                  <div className={'mb-space-lg'}>
                      <p className={'text-primary text-code-sm font-code-sm block mb-space-xs font-semibold uppercase tracking-wider'}>Core Stack</p>
                      <p className={'font-headline-md text-headline-md text-on-surface'}>Technologies I work with</p>
                      <p className={'font-body-md text-body-md text-secondary mt-1'}>Tools and frameworks I leverage daily to produce reliable, reliable high performance software.</p>
                  </div>
                  <div className={'flex flex-wrap mx-auto items-center gap-4'}>
                      <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
                          {Tools.map((item, index) => (
                              <ToolsCard key={index} title={item.title} stack={item.techStack}/>
                          ))}
                      </div>
                  </div>
              </section>

              {/*Contact*/}
              <section id={'contact'} className={'pb-10'}>
                  <CallBack />
              </section>
          </div>
      </div>
  );
}

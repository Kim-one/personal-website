import Image from "next/image";
import {ArrowRight} from "lucide-react";

export const ProductsCard =
    ({
         name,
         image,
         slug,
         description,
         category, technologies, index}: {slug:string, name:string, image:string, description:string, category:string, technologies:string[], index: number}) => {
    return (
      <div className={`${index < 1 ? 'flex flex-col-reverse lg:grid lg:grid-cols-12 ' : 'flex flex-col-reverse '} bg-white rounded-xl shadow-sm group`}>
          <div className={'col-span-5'}>
              <div className={'p-6 flex flex-col justify-between'}>
                  <div className={'space-y-[1rem]'}>
                      <p className={`${index > 0 ? 'hidden' : ''} font-semibold text-code-sm text-primary tracking-widest uppercase`}>Featured Case Study</p>
                      <h2 className={'text-headline-lg text-on-surface tracking-tight'}>{name}</h2>
                      <div className={`${index > 0 ? 'hidden' : ''} uppercase text-label-sm tracking-wider text-secondary`}>{category}</div>
                      <p className={'leading-relaxed text-secondary text-body-md'}>{description}</p>
                      <div className={'flex flex-wrap pt-[1rem] gap-[0.25rem]'}>
                          {technologies.map((item, index) => (
                              <p key={index} className={'text-label-sm bg-surface-container text-secondary rounded-full py-0.5 px-[0.5rem]'}>{item}</p>
                          ))}
                      </div>
                      <div>
                          <a href={`/projects/${slug}`} className={'font-label-md text-label-md font-semibold inline-flex items-center gap-space-xs text-primary'}>
                              View Case Study
                              <ArrowRight size={14} className={'group-hover:translate-x-1 transition-transform duration-200'} />
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <div className={`${index < 1 ? 'col-span-7' : ''} overflow-hidden relative`}>
              <Image src={image} alt={name}
                     className={`h-full w-full ${index > 0 ? 'rounded-t-xl' : 'rounded-r-xl'} object-cover object-center group-hover:scale-[1.02] transition-transform duration-500`}
                     width={500} height={500}/>
          </div>
      </div>
    );
}
'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLinks = [
    {name: 'Projects', href:'/projects'},
    {name: 'Journal', href:'/journal'},
    {name: 'About', href:'/about'},
    {name: 'Resume', href:'/resume'}
]
export const Footer = () => {
    const pathName = usePathname();

    return (
        <div className={'w-full bg-surface/85 border-t border-surface-container-highest'}>
            <div className={'h-16 max-w-[350px] md:max-w-[750px] lg:max-w-[1120px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between'}>
                <h1 className={'text-code-sm font-code-sm text-on-surface-variant'}>Kimone Barrett 2026</h1>
                <div className={'flex gap-3'}>
                    {NavLinks.map(link => {
                        const isActive = pathName === link.href;
                        return (
                            <Link key={link.href}
                                  className={`${isActive ? 'text-primary border-b-2 border-primary' : ''} hover:text-primary-container text-label-md `}
                                  href={link.href}>{link.name}</Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Menu, X} from "lucide-react";
import {useState} from "react";

const NavLinks = [
    {name: 'Projects', href:'/projects'},
    {name: 'Journal', href:'/journal'},
    {name: 'About', href:'/about'},
    {name: 'Resume', href:'/resume'}
]
export function NavBar(){
    const pathName = usePathname();
    const [openMenuMobile, setOpenMenuMobile] = useState(false);

    return (
        <nav className={"fixed w-full top-0 left-0 z-50 bg-surface/85 border-b border-surface-container-highest"}>
            <div className={'h-16 lg:max-w-[1120px] max-w-[350px] mx-auto flex items-center justify-between'}>
                <div className={'flex items-center'}>
                    <Link href="/" onClick={() => setOpenMenuMobile(false)} className={'font-headline-md text-label-md uppercase tracking-wider text-on-surface font-semibold hover:text-primary transition-colors duration-150'}>
                        Kimone Barrett</Link>
                </div>
                <div className={`hidden md:flex gap-3`}>
                    {NavLinks.map(link => {
                        const isActive = pathName === link.href;
                        return (
                            <Link key={link.href}
                                  className={`${isActive ? 'text-primary border-b-2 border-primary' : ''} hover:text-primary-container text-label-md `}
                                  href={link.href}>{link.name}</Link>
                        )
                    })}
                </div>
                <div className={'md:hidden relative'}>
                    {!openMenuMobile ?<Menu onClick={() => setOpenMenuMobile(!openMenuMobile)}/> : <X onClick={() => setOpenMenuMobile(!openMenuMobile)}/>}
                    {openMenuMobile && (
                        <div className={'bg-surface shadow-sm rounded-xl flex flex-col gap-3 absolute -left-14 p-space-lg'}>
                            {NavLinks.map(link => {
                                const isActive = pathName === link.href;
                                return (
                                    <Link key={link.href} onClick={() => setOpenMenuMobile(!openMenuMobile)}
                                          className={`${isActive ? 'text-primary border-b-2 border-primary' : ''} hover:text-primary-container text-label-md `}
                                          href={link.href}>{link.name}</Link>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}
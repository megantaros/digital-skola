import React, { memo, useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {

    const { setTheme } = useTheme();
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <nav className={`bg-[#182B5C] ${isScroll ? 'dark:bg-card' : 'dark:bg-transparent'} text-white fixed top-0 w-full z-50 text-sm`}>
            <div className="container py-4 flex items-center justify-between ">
                <div>
                    <Image
                        src="/brand-nav.png"
                        alt="Logo"
                        width={240}
                        height={240}
                        priority
                    />
                </div>
                <div className="lg:block hidden">
                    <ul className="flex items-center space-x-8">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="#experience">Testimoni</Link>
                        </li>
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="bg-transparent">
                                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setTheme("light")}>
                                        Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                                        Dark
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("system")}>
                                        System
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                </div>
                <div className="lg:hidden block">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="space-y-5">
                            <SheetHeader className="space-y-5">
                                <SheetTitle>
                                    <Image
                                        src="/brand-nav-dark.png"
                                        alt="Logo"
                                        width={200}
                                        height={200}
                                    />
                                </SheetTitle>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/" className="flex justify-start text-primary hover:text-foreground font-medium">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="#experience" className="flex justify-start text-primary hover:text-foreground font-medium">Testimoni</Link>
                                    </li>
                                    <li>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <p className="flex justify-start text-primary hover:text-foreground font-medium cursor-pointer">Change Theme</p>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="start" className="w-56">
                                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                                    Light
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                                    Dark
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                                    System
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </li>
                                </ul>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav >
    )
}

export default memo(Navbar)
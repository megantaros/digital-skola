import React, { memo } from 'react'
import Image from "next/image";
import { Quicksand } from "next/font/google";
import { useTheme } from 'next-themes';

const quicksand = Quicksand({ subsets: ["latin"] });

const Hero = () => {

    const { theme } = useTheme();

    return (
        <header className="lg:pt-14 pt-28 lg:pb-0 pb-10 relative overflow-hidden">
            <div className="container flex items-center justify-center min-h-screen">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 animate-fade-up">
                    <div className="space-y-8 lg:order-first order-last">
                        <div className="px-6 py-2 bg-blue-400 bg-opacity-30 text-blue-500 rounded-full w-fit">
                            <h4 className={`${quicksand.className}`}>🔥 Digital Skola Bootcamp</h4>
                        </div>
                        <h1>
                            <span className="text-primary">Digital Marketing</span> Job Guarantee Bootcamp
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            Raih karir impian dengan pelatihan intensif dan eksklusif bersama para high-achievers dengan jaminan 100% uang kembali.
                        </p>
                        <p className="font-semibold text-lg">
                            100% Alumni Job Guarantee Program telah bekerja di:
                        </p>
                        <div className="flex items-center lg:justify-start justify-center gap-10">
                            <Image
                                src={`${theme === 'dark' ? '/images/brands/bukalapak-dark.png' : '/images/brands/bukalapak.png'}`}
                                className="lg:h-[30px] h-[25px] w-auto hover:scale-105 duration-500"
                                alt="Logo Bukalapak"
                                width={250}
                                height={250}
                            />
                            <Image
                                src={`${theme === 'dark' ? '/images/brands/gojek-dark.png' : '/images/brands/gojek.png'}`}
                                className="lg:h-[30px] h-[25px] w-auto hover:scale-105 duration-500"
                                alt="Logo Gojek"
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>
                    <div className="flex lg:justify-end justify-center items-center">
                        <Image
                            src="/images/hero.png"
                            className="drop-shadow-lg hover:scale-105 duration-500"
                            alt="Hero Images"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default memo(Hero)
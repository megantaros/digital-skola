import React, { memo } from 'react'
import Image from "next/image";

const Hero = () => {
    return (
        <header className="lg:py-10 py-28 relative overflow-hidden">
            <div className="container flex items-center justify-center min-h-screen">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 animate-fade-up">
                    <div className="space-y-10 lg:order-first order-last">
                        <h6 className="text-xl font-semibold">
                            Selamat Datang di
                        </h6>
                        <h1 className="lg:text-5xl text-4xl font-bold m-0">
                            <span className="text-primary">Digital Marketing</span> Job Guarantee Bootcamp
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Raih karir impian dengan pelatihan intensif dan eksklusif bersama para high-achievers dengan jaminan 100% uang kembali.
                        </p>
                        <p className="font-semibold text-lg">
                            100% Alumni Job Guarantee Program telah bekerja di:
                        </p>
                        <div className="flex items-center justify-center gap-10">
                            <Image
                                src="/images/brands/bukalapak.png"
                                className="lg:h-[40px] h-[25px] w-auto hover:scale-105 duration-500"
                                alt="Logo Bukalapak"
                                width={250}
                                height={250}
                            />
                            <Image
                                src="/images/brands/gojek.png"
                                className="lg:h-[40px] h-[25px] w-auto hover:scale-105 duration-500"
                                alt="Logo Gojek"
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <Image
                            src="/images/hero.png"
                            className="drop-shadow-lg hover:scale-105 duration-500"
                            alt="Hero Images"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default memo(Hero)
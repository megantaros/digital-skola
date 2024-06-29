import { SectionProps } from '@/types'
import Image from 'next/image'
import React, { FC, memo } from 'react'

const Section: FC<SectionProps> = ({
    id,
    title,
    description,
    className,
    children
}) => {
    return (
        <section id={id} className={`py-10 relative overflow-hidden ${className}`}>
            {/* <Image
                src="/images/shapes/round.png"
                className="absolute top-0 right-0 z-0 opacity-10"
                alt="Shapes Round"
                width={500}
                height={500}
            /> */}
            <div className="container min-h-screen space-y-10">
                <div className="lg:mb-20 mb-10">
                    <h1 className="font-semibold text-center leading-normal">{title}</h1>
                    <p className="text-center lg:text-xl text-lg text-primary">{description}</p>
                </div>
                {children}
            </div>
        </section>
    )
}

export default memo(Section)
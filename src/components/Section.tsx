import { SectionProps } from '@/types'
import React, { FC, memo } from 'react'

const Section: FC<SectionProps> = ({
    id,
    // title,
    // description,
    // className,
    children
}) => {
    return (
        <section id={id} className="relative overflow-hidden bg-[#182B5C] dark:bg-gray-900 text-white">
            <div className="container min-h-screen">
                {children}
            </div>
        </section>
    )
}

export default memo(Section)
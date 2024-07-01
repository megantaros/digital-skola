import { SectionProps } from '@/types'
import React, { FC, memo } from 'react'

const Section: FC<SectionProps> = ({
    id,
    className,
    children
}) => {
    return (
        <section id={id} className={`relative overflow-hidden bg-[#182B5C] dark:bg-gray-900 text-white ${className}`}>
            <div className="container min-h-screen">
                {children}
            </div>
        </section>
    )
}

export default memo(Section)
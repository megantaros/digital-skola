export interface SectionProps {
    id?: string
    // title: string
    // description: string
    // className?: string
    children: React.ReactNode
}

export interface SwiperProps {
    children: React.ReactNode
    dots?: boolean
    infinite?: boolean
    slidesToShow?: number
    slidesToShowSm?: number
    autoplay?: boolean
}

export interface ExperienceProps {
    avatar: string;
    name: string;
    // before?: string;
    // after?: string;
    description: string;
    testimonial?: string;
}

export interface ExperienceItemsProps {
    data: ExperienceProps[],
}

export interface AchieverItemsProps {
    data: ExperienceProps[],
}
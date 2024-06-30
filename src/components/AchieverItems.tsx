import { FC, memo } from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import Swiper from './Swiper';
import Image from 'next/image';
import { AchieverItemsProps } from '@/types';
import { FaLinkedin } from 'react-icons/fa';

const AchieverItems: FC<AchieverItemsProps> = ({ data }) => {
    return (
        <Swiper
            slidesToShow={4}
            autoplay={true}
            slidesToShowSm={1}
        >
            {data?.map((_, index) => (
                <div key={index} className="p-2">
                    <Card className="overflow-hidden border-none rounded-t-3xl">
                        <CardHeader className="p-0">
                            <div className="relative h-60 w-full bg-primary overflow-hidden rounded-b-3xl">
                                <Image
                                    src={_.avatar}
                                    className="drop-shadow-lg hover:scale-105 duration-500 absolute bottom-0 -translate-x-1/2 left-1/2"
                                    alt="Hero Images"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </CardHeader>
                        <CardContent className="h-32 flex flex-col items-start justify-center gap-2 py-6">
                            <h3 className="text-lg font-bold text-[#182B5C] dark:text-foreground">
                                {_.name}
                            </h3>
                            <p className="text-[#182B5C] dark:text-foreground h-12">
                                {_.description}
                            </p>
                        </CardContent>
                        <CardFooter className="h-20 border-t flex items-center justify-between pb-0">
                            <p className="text-[#182B5C] dark:text-foreground text-sm">
                                {_.description}
                            </p>
                            <FaLinkedin size={24} className="text-[#182B5C] dark:text-foreground ml-2" />
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </Swiper>
    )
}

export default memo(AchieverItems)
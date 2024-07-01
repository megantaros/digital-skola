import { FC, memo } from "react";
import { ExperienceItemsProps } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowDown } from "lucide-react";
import Swiper from "./Swiper";
import { IoMdQuote } from "react-icons/io";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

const ExperienceItems: FC<ExperienceItemsProps> = ({ data }) => {
  return (
    <Swiper dots={true} autoplay={true} slidesToShow={2}>
      {data?.map((_, index) => (
        <div key={index} className="p-2">
          <Card className="border-none">
            <CardHeader>
              <div className="flex items-center gap-5">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={_.avatar} alt={_.name} />
                  <AvatarFallback className="bg-gray-200 text-gray-400">AR</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg text-[#182B5C] dark:text-foreground font-bold">{_.name}</CardTitle>
                  <CardDescription className="font-medium text-sm">{_.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="min-h-80 space-y-2">
              <IoMdQuote size={24} className="text-primary" />
              <p className={`text-[#182B5C] dark:text-foreground font-bold text-base ${quicksand.className}`}>
                {_.testimonial}
              </p>
              <div className="w-full flex justify-end">
                <IoMdQuote size={24} className="text-primary" />
              </div>
            </CardContent>
            {/* <CardFooter>
              <div className="p-4 border text-center space-y-2 w-full">
                <h5 className="text-gray-600 font-medium">Sebelum Bootcamp</h5>
                <h5 className="font-semibold text-[#182B5C] dark:text-foreground">{_.before}</h5>
                <ArrowDown size={24} className="text-green-400 mx-auto" />
                <h5 className="font-semibold text-[#182B5C] dark:text-foreground">{_.after}</h5>
              </div>
            </CardFooter> */}
          </Card>
        </div>
      ))}
    </Swiper>
  )
}

export default memo(ExperienceItems)
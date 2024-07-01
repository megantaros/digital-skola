import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ExperienceProps } from "@/types";
import ExperienceItems from "@/components/ExperienceItems";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import AchieverItems from "@/components/AchieverItems";
import Head from "next/head";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home({
  experiences,
  achievers
}: {
  experiences: ExperienceProps[],
  achievers: ExperienceProps[]
}) {
  return (
    <>
      <Head>
        <title>Digital Skola | Bootcamp Digital Marketing Job Guarantee</title>
        <meta name="description" content="Digital Skola" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 p-8">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden">
            <Section id="experience">
              <Image
                src="/images/shapes/round.png"
                className="absolute top-0 right-0 opacity-10"
                alt="Shapes Round"
                width={600}
                height={600}
              />
              <div className="space-y-2 my-10">
                <h2 className="text-center">Pengalaman <span className="text-primary">Alumni</span></h2>
                <h5 className="text-center font-medium">Apa kata mereka setelah mengikuti Bootcamp Digital Marketing Job Guarantee?</h5>
              </div>
              <ExperienceItems data={experiences} />
              <div className="flex justify-center my-10">
                <Button size={'lg'} variant={`default`} className="text-lg p-7">Lihat Semua Pengalaman Alumni</Button>
              </div>
            </Section>
            <Section id="achievers" className="pb-10">
              <div className="space-y-2 my-10">
                <h2 className="text-center">Belajar Digital Marketing<span className="text-primary"> Bersama High Achievers</span></h2>
                <h5 className="text-center font-medium">Bergabunglah bersama para high achievers dan raih karir impianmu!</h5>
              </div>
              <AchieverItems data={achievers} />
            </Section>
          </div>
          <aside className="lg:col-span-1 lg:order-last order-first">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary mb-4">Promo</CardTitle>
                <CardDescription className="rounded-lg overflow-hidden">
                  <Image src="/images/hero.png" alt="Hero Images" width={500} height={500} />
                </CardDescription>
              </CardHeader>
              <CardContent className="text-[#182B5C] dark:text-white space-y-2">
                <h2>Online Bootcamp</h2>
                <h6 className="line-through text-destructive">Rp. 4.999.999</h6>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-red-400 bg-opacity-10 text-destructive rounded-lg">
                    <span>22%</span>
                  </div>
                  <h6>Rp. 3.400.000</h6>
                </div>
                <Button size={'sm'} variant={`default`} className="w-full">Daftar Sekarang</Button>
                <Button size={'sm'} variant={`default`} className="w-full bg-green-600 hover:bg-green-700">Klaim Discount</Button>
              </CardContent>
            </Card>
          </aside>
        </div>
        <footer className="bg-[#182B5C] dark:bg-gray-900 text-white py-10">
          <div className="container">
            <div className="text-center">
              <p className="text-xs">&copy; 2020 Digital Skola. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main >
    </>
  );
}

export async function getStaticProps() {
  const experiences: ExperienceProps[] = [
    {
      name: "Agus Wibowo",
      description: "Digital Campaign Specialist",
      testimonial: "Setelah mengikuti Bootcamp Digital Marketing Job Guarantee, saya merasa lebih siap dan percaya diri untuk menghadapi tantangan di dunia digital marketing. Bootcamp ini memberikan pengetahuan praktis yang sangat berguna dalam pekerjaan saya sekarang di PT. ABC.",
      // before: "Digital Marketing Intern di PT. XYZ",
      // after: "Digital Campaign Specialist di PT. ABC",
      avatar: "/images/avatars/avatar-1.png"
    },
    {
      name: "John Doe",
      description: "Web Developer",
      testimonial: "Bootcamp ini benar-benar membuka mata saya terhadap berbagai aspek digital marketing yang sebelumnya tidak saya pahami. Berkat Bootcamp Digital Marketing Job Guarantee, saya berhasil mendapatkan posisi Web Developer di PT. ABC, yang sangat mengapresiasi keahlian baru saya.",
      // before: "Digital Marketing Intern di PT. XYZ",
      // after: "Web Developer di PT. ABC",
      avatar: "/images/avatars/avatar-2.png"
    },
    {
      name: "Cristiano Sihombing",
      description: "Digital Campaign Specialist",
      testimonial: "Mengikuti Bootcamp Digital Marketing Job Guarantee adalah langkah terbaik yang pernah saya ambil untuk karir saya. Bootcamp ini memberikan wawasan mendalam dan keterampilan praktis yang langsung dapat diterapkan di tempat kerja. Sekarang, saya dengan bangga bekerja sebagai Digital Campaign Specialist di PT. ABC.",
      // before: "Digital Marketing Intern di PT. XYZ",
      // after: "Digital Campaign Specialist di PT. ABC",
      avatar: "/images/avatars/avatar-3.png"
    }
  ];

  const achievers: ExperienceProps[] = [
    {
      avatar: "/images/achievers/achievers-1.png",
      name: "Wijaya Kusuma",
      description: "Product Engineer at Gojek Indonesia",
    },
    {
      avatar: "/images/achievers/achievers-2.png",
      name: "Agus Rangga Dwi Wibowo",
      description: "Software Engineer at Tokopedia",
    },
    {
      avatar: "/images/achievers/achievers-3.png",
      name: "Megan",
      description: "Tech Lead at CookDev"
    },
    {
      avatar: "/images/achievers/achievers-4.png",
      name: "Kusuma Wijaya",
      description: "Product Manager at Bukalapak",
    },
    {
      avatar: "/images/achievers/achievers-5.png",
      name: "Leroy Sane",
      description: "Product Manager at Bukalapak",
    },
  ]

  return {
    props: {
      experiences,
      achievers
    }
  }
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ExperienceProps } from "@/types";
import ExperienceItems from "@/components/ExperienceItems";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import AchieverItems from "@/components/AchieverItems";
import Head from "next/head";

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
        <title>Digital Skola</title>
        <meta name="description" content="Digital Skola" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Section
          id="experience"
          title="Pengalaman Alumni"
          description="Apa kata mereka setelah mengikuti Bootcamp Digital Marketing Job Guarantee?"
          className="bg-[#182B5C] dark:bg-gray-900 text-white"
        >
          <ExperienceItems data={experiences} />
          <div className="flex justify-center">
            <Button size={'lg'}>Lihat Semua Pengalaman Alumni</Button>
          </div>
        </Section>
        <Section
          id="achievers"
          title="Belajar Digital Marketing Bersama High Achievers"
          description="Bergabunglah bersama para high achievers dan raih karir impianmu!"
          className="bg-[#182B5C] dark:bg-gray-900 text-white"
        >
          <AchieverItems data={achievers} />
        </Section>
        <footer className="bg-[#182B5C] dark:bg-gray-900 text-white py-10">
          <div className="container">
            <div className="text-center">
              <p>&copy; 2020 Digital Skola. All rights reserved.</p>
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
      testimonial: "Saya sangat senang bisa bergabung di PT. ABC, sebelumnya saya hanya seorang Digital Marketing Intern di PT. XYZ",
      before: "Digital Marketing Intern di PT. XYZ",
      after: "Digital Campaign Specialist di PT. ABC",
      avatar: "/images/avatars/avatar-1.png"
    },
    {
      name: "John Doe",
      description: "Digital Campaign Specialist",
      testimonial: "Saya sangat senang bisa bergabung di PT. ABC, sebelumnya saya hanya seorang Digital Marketing Intern di PT. XYZ",
      before: "Digital Marketing Intern di PT. XYZ",
      after: "Digital Campaign Specialist di PT. ABC",
      avatar: "/images/avatars/avatar-2.png"
    },
    {
      name: "Cristiano Sihombing",
      description: "Digital Campaign Specialist",
      testimonial: "Saya sangat senang bisa bergabung di PT. ABC, sebelumnya saya hanya seorang Digital Marketing Intern di PT. XYZ",
      before: "Digital Marketing Intern di PT. XYZ",
      after: "Digital Campaign Specialist di PT. ABC",
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
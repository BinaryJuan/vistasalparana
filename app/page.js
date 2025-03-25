"use client";
import Head from 'next/head';
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import TitleButton from "@/components/TitleButton/TitleButton";
import BrandSlider from "@/components/BrandSlider/BrandSlider";
import Sections from "@/components/Sections/Sections";
import Resenas from "@/components/Resenas/Resenas";
import BannerInfo from '@/components/BannerInfo/BannerInfo';
import ServiceInfo from '@/components/ServiceInfo/ServiceInfo';

const Main = () => {
  return (
    <div className="mainContainer">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className='mainContainerG'>
        <Banner />
        <TitleButton />
        <BrandSlider mensaje1='VAP' anim='slide' style='brandNameS1' />
        <BrandSlider mensaje1='VISTAS AL PARANA' anim='slideR' style='brandNameS2' />
        <Sections />
        <Resenas />
        <ServiceInfo />
        <BannerInfo />
        <BrandSlider mensaje1='VAP' anim='slide' style='brandNameS1' />
        <BrandSlider mensaje1='VISTAS AL PARANA' anim='slideR' style='brandNameS2' />
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default Main;
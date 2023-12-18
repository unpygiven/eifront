import Image from 'next/image'
import styles from './page.module.css'
import { getVideos } from '@/service/fetchdata'
import Header from '@/components/layoutcomponents/Header';
import VideoCarousel from '@/components/videocomponents/Carousel';
import Videos from '@/components/videocomponents/Videos';
import Page from '@/components/videocomponents/Pages';
import { getCategories } from '@/service/fetchdata';
import { getOtd } from '@/service/fetchdata';

export default async function Home() {
  const data = await getVideos("all", 1);
  const videosOTD = await getOtd();
  return (
    <div style={{background: 'black'}}>
      <Header/>
      <VideoCarousel videos={videosOTD}/>
      <Videos videos={data}/>
      <Page currentPage={1} keywords={"all"}/>
    </div>
  )
}

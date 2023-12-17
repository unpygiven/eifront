import Image from 'next/image'
import styles from './page.module.css'
import { getVideos } from '@/service/fetchdata'
import Header from '@/components/layoutcomponents/Header';
import VideoCarousel from '@/components/videocomponents/Carousel';
import Videos from '@/components/videocomponents/Videos';
import Page from '@/components/videocomponents/Pages';
import { getCategories } from '@/service/fetchdata';

export default async function Home() {
  const data = await getVideos("all", 1);
  return (
    <div style={{background: '#4A4A4A'}}>
      <Header/>
      <VideoCarousel/>
      <Videos videos={data}/>
      <Page currentPage={1} keywords={"all"}/>
    </div>
  )
}

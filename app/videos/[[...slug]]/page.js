
import { getVideos } from '@/service/fetchdata'
import Header from '@/components/layoutcomponents/Header';
import VideoCarousel from '@/components/videocomponents/Carousel';
import Videos from '@/components/videocomponents/Videos';
import Page from '@/components/videocomponents/Pages';
import { getOtd } from '@/service/fetchdata';
import { resolve } from 'styled-jsx/css';

export default async function Home({params}) {
    const keywords =  params.slug[0];
    const page = params.slug[1];
    const data = await getVideos(keywords, parseInt(page));
    var isLast = false;
    const videosOTD = await getOtd();
    if(data.length < 10)
    {
      isLast = true;
    }
  return (
    <div style={{background: 'black'}}>
      <title>{"porno-" + keywords}</title>
      <Header/>
      <VideoCarousel videos={videosOTD}/>
      <Videos videos={data}/>
      <Page currentPage={page} keywords={keywords} isLast={isLast}/>
    </div>
  )
}

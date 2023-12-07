
import { getVideos } from '@/service/fetchdata'
import Header from '@/components/layoutcomponents/Header';
import VideoCarousel from '@/components/videocomponents/Carousel';
import Videos from '@/components/videocomponents/Videos';
import Page from '@/components/videocomponents/Pages';


export default async function Home({params}) {
    const keywords =  params.slug[0];
    const page = params.slug[1];
    const data = await getVideos(keywords, parseInt(page));
    var isLast = false;
    if(data.length < 10)
    {
      isLast = true;
    }
  
  return (
    <div style={{background: '#4A4A4A'}}>
      <title>{"porno" + keywords}</title>
      <Header/>
      <VideoCarousel/>
      <Videos videos={data}/>
      <Page currentPage={page} keywords={keywords} isLast={isLast}/>
    </div>
  )
}

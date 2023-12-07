import Header from "@/components/layoutcomponents/Header";
import Videoplay from "@/components/videocomponents/Videoplay";
import { getVideoById, getVideos } from "@/service/fetchdata";
import Videos from "@/components/videocomponents/Videos";

export default async function page({params})
{
    const videoId = params.video[0];
    var categories = "";
    const video = await getVideoById(parseInt(videoId));
    video.keywords.map(function(x) {
        categories += x.name + '-';
    })

    const recVideos = await getVideos(categories, 1);
    return(
        <>
            <Header/>
            <title>{"porno" + "-" + video.title + "-" + categories}</title>
            <div className="container">
                <div id="title" style={{marginTop: '2%', color: 'white'}}>
                    {video.title}
                </div>
                <div id="videoplay" style={{marginTop: '2%'}}>
                    <Videoplay video={video}/>
                </div>
                <div id="keywords" style={{marginTop: '2%', color: 'white'}}>
                    {video.keywords.map(function(x) {
                        return <a key={x.id} href={`/videos/${x.name}/1`} style={{color: 'white', marginLeft: '1%'}}><span style={{backgroundColor: 'black'}}>#{x.name}</span> </a>
                    })}
                </div>
                <div style={{marginTop: '2%', color: 'white'}}>
                    <p>
                        {video.text}
                    </p>
                </div>
                <div style={{height: '2%', width: '100%', backgroundColor: 'black', marginTop: '2%', marginBottom: '2%'}}>*</div>
                <div id="recomendedvideos" style={{marginTop: '2%'}}>
                    <h3 style={{color: 'white'}}>Önerilenler</h3>
                    <Videos videos={recVideos}/>
                </div>
                <footer style={{marginTop: '2%'}}>Footer</footer>
            </div>
        </>
    )
}
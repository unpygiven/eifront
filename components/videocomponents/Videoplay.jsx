"use client"

export default function Videoplay(props)
{
    const video = props.video;
    return (
  <div style={{position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '56.25%'}} className="embed-responsive">
    <iframe style={{position: 'absolute', top:'0', bottom: '0', right: '0', left: '0', width: '100%', height: '100%'}} src={video.video_link} allowFullScreen=""></iframe>
  </div>
    )
}
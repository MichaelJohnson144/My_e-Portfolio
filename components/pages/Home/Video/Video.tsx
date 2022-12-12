export default function Video() {
  return (
    <video
      playsInline
      autoPlay
      loop
      muted
      className={'absolute inset-0 -z-10 object-cover w-full h-screen'}
    >
      <source src={'../../assets/videos/silver_lake_park.mp4'} type={'video/mp4'} />
      <source src={'../../assets/videos/silver_lake_park.webm'} type={'video/webm'} />
    </video>
  );
}

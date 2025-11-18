interface CoverSectionProps {
  imageUrl?: string;
  videoUrl?: string;
  alt: string;
  className?: string;
}

const CoverSection = ({ imageUrl, videoUrl, alt, className = "" }: CoverSectionProps) => {
  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      {/* Full Width Image/Video Container */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'top',
              margin: 0,
              padding: 0
            }}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : imageUrl ? (
          <img 
            src="https://res.cloudinary.com/df2zirjvd/image/upload/v1763435869/582054060_4219191611742664_1859862735658718281_n_imwkto.jpg"
            alt={alt}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'top',
              margin: 0,
              padding: 0
            }}
          />
        ) : null}
      </div>
    </section>
  );
};

export default CoverSection;
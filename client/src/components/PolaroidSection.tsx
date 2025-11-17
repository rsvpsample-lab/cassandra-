import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import soulmatesImage from '@assets/SOULMATES_1763380051431.JPG';
import belovedImage from '@assets/BELOVED_1763380037358.JPG';
import foreverImage from '@assets/FOREVER_1763380043376.JPG';

const PolaroidSection = () => {
  const { animationsEnabled } = useAnimationContext();

  const polaroids = [
    {
      image: soulmatesImage,
      label: 'soulmates',
      rotation: -3,
    },
    {
      image: belovedImage,
      label: 'beloved',
      rotation: 2,
    },
    {
      image: foreverImage,
      label: 'forever',
      rotation: -2,
    },
  ];

  return (
    <section
      id="polaroids"
      className="section-pastel-blue py-16 md:py-24 px-4 overflow-hidden"
      data-testid="section-polaroids"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {polaroids.map((polaroid, index) => (
            <motion.div
              key={polaroid.label}
              initial={animationsEnabled ? { opacity: 0, y: 50, rotate: 0 } : { opacity: 1, rotate: polaroid.rotation }}
              whileInView={animationsEnabled ? { 
                opacity: 1, 
                y: 0, 
                rotate: polaroid.rotation 
              } : {}}
              viewport={{ once: true, amount: 0.3 }}
              transition={animationsEnabled ? { 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut" 
              } : { duration: 0 }}
              whileHover={animationsEnabled ? {
                scale: 1.05,
                rotate: 0,
                transition: { duration: 0.3 }
              } : {}}
              className="polaroid-card"
              style={{
                transform: `rotate(${polaroid.rotation}deg)`,
              }}
              data-testid={`polaroid-${polaroid.label}`}
            >
              <div className="polaroid-inner bg-white p-4 pb-12 shadow-2xl">
                <div className="polaroid-image-container overflow-hidden">
                  <img
                    src={polaroid.image}
                    alt={polaroid.label}
                    className="w-full h-full object-cover"
                    data-testid={`img-${polaroid.label}`}
                  />
                </div>
                <div className="polaroid-label mt-4 text-center">
                  <p
                    className="text-lg md:text-xl font-script text-foreground tracking-wide"
                    style={{ fontFamily: 'Boska, serif', fontWeight: 400 }}
                    data-testid={`text-${polaroid.label}`}
                  >
                    {polaroid.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .polaroid-card {
          width: 280px;
          transition: transform 0.3s ease;
        }

        @media (min-width: 768px) {
          .polaroid-card {
            width: 320px;
          }
        }

        .polaroid-inner {
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .polaroid-image-container {
          width: 100%;
          aspect-ratio: 4 / 5;
          background-color: #f5f5f5;
        }

        .polaroid-card:hover .polaroid-inner {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .polaroid-label {
          font-style: italic;
        }
      `}</style>
    </section>
  );
};

export default PolaroidSection;

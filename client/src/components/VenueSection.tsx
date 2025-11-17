"use client";;
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { LinkPreview } from '@/components/ui/link-preview';

const VenueSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const venues = [
    {
      title: 'Ceremony',
      name: 'The Diocesan Shrine and Parish of Our Lady of the Abandoned',
      address: 'J.P. Rizal, Corner V. Gomez St, Marikina, 1801 Metro Manila',
      image: 'https://res.cloudinary.com/dsan7eodz/image/upload/v1763385281/2fcfc710-ab92-4b57-b465-d5f9ff028edb.png',
      mapUrl: 'https://maps.app.goo.gl/iYgWHyVgkahY6pwW7',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.450014227641!2d121.09372147487339!3d14.630377785859537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b833fbc2818f%3A0x9d133b0831c4c5f5!2sDiocesan%20Shrine%20and%20Parish%20of%20Our%20Lady%20of%20the%20Abandoned!5e0!3m2!1sen!2sph!4v1763386717593!5m2!1sen!2sph',
      description: 'Join us at The Diocesan Shrine and Parish of Our Lady of the Abandoned for our sacred wedding ceremony. This beautiful church will witness our vows of eternal love as we begin our journey together.',
      details: 'The ceremony begins promptly at 4:00 PM. Please arrive early to be seated.',
      startTime: '4:00 PM',
      locationGuide: 'View on Maps →'
    },
    {
      title: 'Reception',
      name: 'Teodore Events Place',
      address: '61 Katipunan St., Sto. Nino Marikina City',
      image: 'https://res.cloudinary.com/dsan7eodz/image/upload/v1763385499/recep_hirzj0.jpg',
      mapUrl: 'https://maps.app.goo.gl/uRtk5V9kb6FKWFN19',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.2856458254078!2d121.10696867487347!3d14.639719985851308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b953365d1915%3A0xcc770456bb69751c!2sTeodore%20Events%20Place!5e0!3m2!1sen!2sph!4v1763386770029!5m2!1sen!2sph',
      description: 'Celebrate with us at Teodore Events Place, an elegant venue where we will host our celebration of love and create unforgettable memories together.',
      details: 'Join us immediately following the ceremony for an evening of fine dining, dancing, and celebration',
      startTime: '6:00 PM',
      locationGuide: 'View on Maps →'
    }
  ];

  return (
    <motion.section
      id="venue"
      className="section-pastel-blue py-16 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 6.5 } : { duration: 0 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 } : { duration: 0 }}
        >
          <h1 className="text-4xl font-display mb-2 text-foreground" data-testid="text-venue-section-title">
            Venue
          </h1>
        </motion.div>
        {/* Venues List */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 + (index * 0.4) } : { duration: 0 }}
            >
              {/* Venue Title */}
              <motion.div
                className="text-center mb-12"
                initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 7.0 + (index * 0.4) } : { duration: 0 }}
              >
                <h2 className="font-display text-foreground mb-3 text-2xl" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                  {venue.title}
                </h2>
                <h3 className="font-body text-foreground/80 mb-3 text-base" data-testid={`text-${venue.title.toLowerCase()}-name`}>
                  {venue.name}
                </h3>
              </motion.div>

              {/* Venue Content */}
              <div className="max-w-3xl mx-auto text-center space-y-6">
                {/* Venue Image */}
                <div className="mb-8">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                    data-testid={`img-${venue.title.toLowerCase()}-venue`}
                  />
                </div>

                {/* Address */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-primary" />
                  <p className="text-sm font-body text-foreground/80" data-testid={`text-${venue.title.toLowerCase()}-address`}>
                    {venue.address}
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-3 mb-8">
                  <p className="text-base font-body leading-relaxed text-foreground/90" data-testid={`text-${venue.title.toLowerCase()}-description`}>
                    {venue.description}
                  </p>
                </div>

                {/* Details */}
                <p className="text-base font-body text-foreground/90" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                  {venue.details}
                </p>

                {/* Google Maps Embed */}
                <div className="mt-8 mb-8">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border border-primary/20">
                    <iframe
                      src={venue.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      data-testid={`map-${venue.title.toLowerCase()}-embed`}
                    />
                  </div>
                </div>

                {/* Time and Location Guide */}
                <div className="flex justify-between items-center pt-6 border-t border-primary/20">
                  <div className="text-left">
                    <p className="text-sm font-body italic text-foreground/80" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                      Start time {venue.startTime}
                    </p>
                  </div>
                  <div className="text-right">
                    <a
                      href={venue.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="location-guide-btn font-body text-primary hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1"
                      data-testid={`button-${venue.title.toLowerCase()}-location`}
                    >
                      {venue.locationGuide}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </div>

        {/* Unplugged Ceremony Note */}
        <motion.div
          className="mt-16 text-center border border-primary/30 rounded-lg p-8 max-w-4xl mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 8.4 } : { duration: 0 }}
        >
          <h3 className="text-xl font-display text-foreground mb-4">Unplugged Ceremony</h3>
          <p className="text-sm font-body text-foreground/80 leading-relaxed mb-4">
            We kindly ask that the ceremony be camera-free so everyone can be fully present in the moment. Once we move to the reception venue, please feel free to take as many photos and videos as you like. We would love for you to help us capture more memories!
          </p>
          <h4 className="text-lg font-display text-foreground mb-2 mt-6">SNAP AND SHARE</h4>
          <p className="text-sm font-body text-foreground/80 leading-relaxed">
            Help us capture every special moment, whether candid, sweet, or wacky!<br />
            Don't forget to tag us and use our wedding hashtags to share the love.<br />
            We can't wait to see your photos!<br />
            <span className="font-semibold text-foreground">#JAROLDfoundhisSANDYgan</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VenueSection;
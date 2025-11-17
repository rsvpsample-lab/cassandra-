import { motion } from 'framer-motion';

import guestAttireImage from "@assets/image_1763384357228.png";
const formalImage = 'https://res.cloudinary.com/dsan7eodz/image/upload/v1763386255/Gemini_Generated_Image_gy52h6gy52h6gy52_lfj3xa.png';

const DressCodeSection = () => {
  const principalSponsorsColors = [
    { name: 'Sage Green', color: '#9CAF88' }
  ];

  const guestsColors = [
    { name: 'Sage Green', color: '#9CAF88' },
    { name: 'Light Sage', color: '#B8C5A8' },
    { name: 'Forest Green', color: '#6B8E5F' }
  ];

  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-primary/30 rounded-full"></div>
          <div className="absolute top-4 right-1/4 w-4 h-4 bg-primary/20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-primary/40 rounded-full"></div>
          <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-primary/30 rounded-full"></div>

          <h2 className="font-display italic text-foreground mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
          <div className="bg-white/5 border border-primary/20 rounded-xl p-6 max-w-2xl mx-auto relative">
            <div className="space-y-4">
              <div>
                <p className="text-lg font-display font-semibold text-foreground mb-2">
                  Principal Sponsor
                </p>
                <p className="text-base text-foreground">
                  Ninong: Barong & Black Slacks<br />
                  Ninang: Dress that compliments Sage Green colors<br />
                  Formal Attire - Please dress elegantly for this special occasion
                </p>
              </div>
              <div className="border-t border-primary/30 pt-4">
                <p className="text-lg font-display font-semibold text-foreground mb-2">
                  Guests
                </p>
                <p className="text-base text-foreground">
                  Formal-SemiFormal Attire<br />
                  You may glam up in these shades of sage green to complement our wedding theme
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modern Dress Code Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Principal Sponsors */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.3 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      FOR PRINCIPAL SPONSORS
                    </h3>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-normal text-foreground">FORMAL ATTIRE</span>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={formalImage}
                  alt="Principal Sponsors attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.5 }}
                />
                {/* Color Palette for Principal Sponsors */}
                <div className="mt-6 flex justify-center gap-3">
                  {principalSponsorsColors.map((colorItem, index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="w-12 h-12 mx-auto rounded-full border-2 border-white/20 shadow-md"
                        style={{ backgroundColor: colorItem.color }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.6 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      FOR GUESTS
                    </h3>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-normal text-foreground">SEMI-FORMAL ATTIRE</span>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={guestAttireImage}
                  alt="Guests attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.8 }}
                />
                {/* Color Palette for Guests */}
                <div className="mt-6 flex justify-center gap-3">
                  {guestsColors.map((colorItem, index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="w-12 h-12 mx-auto rounded-full border-2 border-white/20 shadow-md"
                        style={{ backgroundColor: colorItem.color }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modern Additional Guidelines */}
        <motion.div 
          className="bg-card/30 border border-border rounded-xl p-8 shadow-soft max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <motion.h3 
            className="text-xl font-body font-medium text-foreground mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 9.2 }}
          >
            Additional Guidelines
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            {[
              { 
                title: "No cream or white colors", 
                description: "Avoid wearing cream or white, as these colors are reserved for the couple.",
                delay: 9.4
              },
              { 
                title: "Respectful attire", 
                description: "Kindly ensure your attire is respectful and appropriate for a religious ceremony.",
                delay: 9.45
              },
              { 
                title: "Avoid Casual Attire", 
                description: "Please avoid overly casual attire such as polo shirts, slippers, denim, jeans and loud colors. Please avoid mini dresses.",
                delay: 9.5
              },
              { 
                title: "Dress Code Adherence", 
                description: "Please adhere to the specified dress code and color motif provided. Dressing accordingly is deeply appreciated, as it will contribute to the elegance and harmony of our celebration.",
                delay: 9.55
              }
            ].map((guideline, index) => (
              <motion.div 
                key={index}
                className="bg-card/20 rounded-xl p-4 border border-border/50 hover:bg-card/40 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: guideline.delay }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{guideline.title}</h4>
                    <p className="text-foreground text-sm leading-relaxed">{guideline.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodeSection;
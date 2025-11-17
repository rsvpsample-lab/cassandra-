import { motion } from 'framer-motion';
import { Camera, Gift } from 'lucide-react';
const qrUnionBank = 'https://res.cloudinary.com/dsan7eodz/image/upload/v1763386227/gift_m06s2o.jpg';
const qrInstaPay = 'https://res.cloudinary.com/dsan7eodz/image/upload/v1763386227/gift2_gheccc.jpg';

const HashtagGiftsSection = () => {
  return (
    <motion.section 
      id="hashtag-gifts" 
      className="section-pastel-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Oh Snap! Section */}
        <motion.div 
          className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Camera className="w-8 h-8 text-primary" data-testid="icon-camera" />
            </div>
          </motion.div>

          <motion.h2 
            className="font-display italic text-foreground mb-4 text-[48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            data-testid="text-ohsnap-title"
          >
            Oh Snap!
          </motion.h2>

          <motion.p 
            className="text-lg text-foreground mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            data-testid="text-hashtag-description"
          >
            Help us capture moments on our
            <br />
            special day by using these hashtags:
          </motion.p>

          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="bg-primary/10 border border-primary/20 rounded-xl px-6 py-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            >
              <p 
                className="text-xl md:text-2xl font-display font-semibold text-foreground"
                data-testid="text-hashtag-1"
              >
                #JAROLDfoundhisSANDYgan
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Gifts Section */}
        <motion.div 
          className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-primary" data-testid="icon-gift" />
            </div>
          </motion.div>

          <motion.h2 
            className="font-display italic text-foreground mb-6 text-[48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            data-testid="text-gifts-title"
          >
            Gifts
          </motion.h2>

          <motion.div
            className="bg-card/20 border border-border/50 rounded-xl p-6 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <p 
              className="text-lg text-foreground leading-relaxed mb-4"
              data-testid="text-gifts-message"
            >
              With all the blessings that God poured out on us we cannot ask for more. 
              <br />
              Your presence and prayers are all that we request,
              <br />
              But should you still believe that a gift is worth giving, 
              <br />
              monetary gifts for our future would be much appreciated.
            </p>
          </motion.div>

          {/* QR Codes Section */}
          <motion.div
            className="flex flex-col gap-6 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <motion.div
              className="bg-white rounded-xl p-4 shadow-lg border border-primary/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={qrUnionBank} 
                alt="UnionBank InstaPay QR Code - Erhica Estanislao" 
                className="w-full h-auto rounded-lg"
                data-testid="img-qr-unionbank"
              />
            </motion.div>
            <motion.div
              className="bg-white rounded-xl p-4 shadow-lg border border-primary/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={qrInstaPay} 
                alt="InstaPay QR Code - William John D." 
                className="w-full h-auto rounded-lg"
                data-testid="img-qr-instapay"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;

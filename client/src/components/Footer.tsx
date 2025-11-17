import { Heart, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-secondary text-foreground py-16 px-4 relative overflow-hidden border-t border-primary/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 12.5 }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 12.8 }}
        >
          {/* RSVP Reminder */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-display mb-4 text-foreground" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              RSVP
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              The favor of a response is requested on or before November 30, 2025.
            </p>
            <p className="text-foreground/90 leading-relaxed italic">
              We are excited to celebrate our Wedding with our closest families and friends!
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 py-6">
            <div className="w-16 h-px bg-primary/30"></div>
            <Heart className="w-6 h-6 text-primary animate-float" />
            <div className="w-16 h-px bg-primary/30"></div>
          </div>

          {/* Confidentiality Notice */}
          <div className="max-w-2xl mx-auto">
            <p className="text-foreground/90 leading-relaxed text-sm">
              We kindly request that you treat this invitation with utmost confidentiality. Our wedding is an intimate and small ceremony, reserved for our dearest and closest loved ones. We trust that only those invited will be present, so we ask that you refrain from sharing this information with others. Your understanding and respect for our privacy are sincerely appreciated. Thank you for being part of our special day.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 py-6">
            <div className="w-16 h-px bg-primary/30"></div>
            <Heart className="w-6 h-6 text-primary animate-float" />
            <div className="w-16 h-px bg-primary/30"></div>
          </div>

          {/* Gratitude Message */}
          <div className="max-w-2xl mx-auto">
            <p className="text-foreground/90 leading-relaxed italic">
              We are grateful to have you as part of our story. You have made our journey more beautiful, and we can't wait to share our special day with you.
            </p>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-primary/20 pt-8">
            <p className="text-foreground/80 text-sm">
              With love and gratitude,
            </p>
            <p className="text-foreground text-xl" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Jarold & Sandy
            </p>
          </div>
        </motion.div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/10 to-transparent opacity-50 pointer-events-none"></div>
    </motion.footer>
  );
};

export default Footer;
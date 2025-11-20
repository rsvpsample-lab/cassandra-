import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="section-hard-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Invitation Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <p className="text-foreground/90 text-lg mb-4">We,</p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-8" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
            Jarold and Sandy
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-4 text-foreground/90 leading-relaxed mb-8">
            <p>with thanksgiving to God</p>
            <p>and with the blessing of our parents</p>
          </div>

          {/* Parents Names */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            <div>
              <p className="text-foreground font-medium">Mr. Johnny C. Grasparil</p>
              <p className="text-foreground font-medium">Mrs. Tessie S. Grasparil</p>
            </div>
            <div>
              <p className="text-foreground font-medium">Mr. Reginold R. Roces</p>
              <p className="text-foreground font-medium">Mrs. Ana Marie M. Roces</p>
            </div>
          </div>

          {/* Invitation Text */}
          <div className="max-w-2xl mx-auto space-y-3 text-foreground/90 leading-relaxed mb-8">
            <p>invite you to share in the joy of the beginning of our new life</p>
            <p>together when we exchange our matrimonial vows</p>
            <p>of union before God</p>
            <p>on Wednesday, the 10th day of December,</p>
            <p>twenty hundred and twenty five</p>
            <p>at 4:00 in the afternoon</p>
            <p>at The Diocesan Shrine and Parish</p>
            <p>of Our Lady of the Abandoned</p>
            <p>J.P. Rizal, Corner V. Gomez St,</p>
            <p>Marikina, 1801 Metro Manila</p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 py-6">
            <div className="w-16 h-px bg-primary/30"></div>
            <Heart className="w-5 h-5 text-primary" />
            <div className="w-16 h-px bg-primary/30"></div>
          </div>

          {/* Reception Details */}
          <div className="max-w-2xl mx-auto space-y-3 text-foreground/90 leading-relaxed">
            <p>Join us as we share our first meal as husband and wife</p>
            <p>at the Teodore Events Place</p>
            <p>61 Katipunan St., Sto. Nino Marikina City</p>
          </div>
        </motion.div>

        {/* Entourage Section Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-display italic text-foreground mb-4 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          data-testid="text-entourage-title"
        >
          Grasparil-Roces Nuptial
        </motion.h2>
        <motion.h3
          className="text-2xl md:text-3xl font-display text-foreground mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          BRIDAL ENTOURAGE
        </motion.h3>

        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
        >
          {/* Principal Witnesses */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-display italic text-foreground mb-6">To Stand as Principal Witnesses to our Vows</h3>
            <div className="space-y-3">
              {/* Couple 1 */}
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <p className="text-foreground/90 text-sm md:text-base">Mr. Rene A. Asugao</p>
                <p className="text-foreground/90 text-sm md:text-base">Mrs. Marilou M. Asugao</p>
              </div>
              {/* Couple 2 */}
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <p className="text-foreground/90 text-sm md:text-base">Mr. Delfin R. Ramos</p>
                <p className="text-foreground/90 text-sm md:text-base">Dr. May Grace S. Mendoza</p>
              </div>
              {/* Couple 3 */}
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <p className="text-foreground/90 text-sm md:text-base">Mr. Anthony M. Green</p>
                <p className="text-foreground/90 text-sm md:text-base">Mrs. Vilma D. Green</p>
              </div>
              {/* Couple 4 */}
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <p className="text-foreground/90 text-sm md:text-base">Mr. Richard R. Roces</p>
                <p className="text-foreground/90 text-sm md:text-base">Mrs. Cristy O. Schroo</p>
              </div>
              {/* Couple 5 */}
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <p className="text-foreground/90 text-sm md:text-base">Mr. Ronnie A. Murillo</p>
                <p className="text-foreground/90 text-sm md:text-base">Mrs. Maribel S. Murillo</p>
              </div>
              {/* Couple 6 */}
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <p className="text-foreground/90 text-sm md:text-base">Mr. Angelo Acsayan-Williams</p>
                <p className="text-foreground/90 text-sm md:text-base">Mrs. Rowena M. Jarabata</p>
              </div>
              {/* Couple 7 */}
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <p className="text-foreground/90 text-sm md:text-base">Mr. Daniel Wayne Williams</p>
                <p className="text-foreground/90 text-sm md:text-base">Mrs. Cristina L. Gumia</p>
              </div>
              {/* Couple 8 */}
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <p className="text-foreground/90 text-sm md:text-base">Vice Mayor Maximo B. Sotomayor</p>
                <p className="text-foreground/90 text-sm md:text-base">Mrs. Ma Belinda C. Sotomayor</p>
              </div>
            </div>
          </div>

          {/* Maid of Honor and Best Man */}
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-foreground mb-3">Bestman</h4>
                <p className="text-foreground/90 text-sm md:text-base">Mr. Jassie S. Grasparil</p>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-foreground mb-3">Maid of Honor</h4>
                <p className="text-foreground/90 text-sm md:text-base">Ms. Angelica Redge M. Roces</p>
              </div>
            </div>
          </div>

          {/* Secondary Sponsors */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-display italic text-foreground mb-6">To Stand as Secondary Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4">Usher</h4>
                <div className="space-y-2">
                  <p className="text-foreground/90 text-sm md:text-base">Mr. Leon Vince S. Grasparil</p>
                  <p className="text-foreground/90 text-sm md:text-base">Mr. Khing Jomar M. Esguerra</p>
                  <p className="text-foreground/90 text-sm md:text-base">Mr. Michael John B. Esteban</p>
                  <p className="text-foreground/90 text-sm md:text-base">Mr. Julou Augustine S. Medrano</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4">Bridesmaid</h4>
                <div className="space-y-2">
                  <p className="text-foreground/90 text-sm md:text-base">Ms. Chezca Nicolette S. Mendoza</p>
                  <p className="text-foreground/90 text-sm md:text-base">Ms. Ma. Dominique Jasmin R. Ramos</p>
                  <p className="text-foreground/90 text-sm md:text-base">Ms. Michele Lenin M. Roces</p>
                  <p className="text-foreground/90 text-sm md:text-base">Ms. Mara Loren M. Roces</p>
                  <p className="text-foreground/90 text-sm md:text-base">Ms. Asliah M. Macabuat</p>
                  <p className="text-foreground/90 text-sm md:text-base">Ms. Camille N. Recio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Special Roles */}
          <div className="space-y-8">
            {/* To light our path */}
            <div className="text-center">
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-3">To light our path</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-3xl mx-auto">
                <p className="text-foreground/90 text-sm md:text-base">Mr. Don Ricardo Jose M. Roces</p>
                <p className="text-foreground/90 text-sm md:text-base">Ms. Christine Jennifer M. Asugao, RMT</p>
              </div>
            </div>

            {/* To bind us together */}
            <div className="text-center mt-6">
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-3">To bind us together</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-3xl mx-auto">
                <p className="text-foreground/90 text-sm md:text-base">Mr. Alejandro Jose F. Caro</p>
                <p className="text-foreground/90 text-sm md:text-base">Ms. Alexandra Nicole S. Mendoza</p>
              </div>
            </div>

            {/* To clothe us as one */}
            <div className="text-center mt-6">
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-3">To clothe us as one</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-3xl mx-auto">
                <p className="text-foreground/90 text-sm md:text-base">Mr. Don Joaquin Rafael M. Roces</p>
                <p className="text-foreground/90 text-sm md:text-base">Ms. Anne Kathleen M. Santos</p>
              </div>
            </div>

            {/* Bearers */}
            <div className="mt-8">
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-4 text-center">To carry our symbol of love, treasure and faith</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <p className="text-foreground font-medium text-sm md:text-base mb-1">RING</p>
                  <p className="text-foreground/90 text-sm md:text-base">Gabriel John F. Grasparil</p>
                </div>
                <div className="text-center">
                  <p className="text-foreground font-medium text-sm md:text-base mb-1">BIBLE</p>
                  <p className="text-foreground/90 text-sm md:text-base">Prince Johniel G. Billones</p>
                </div>
                <div className="text-center">
                  <p className="text-foreground font-medium text-sm md:text-base mb-1">COIN</p>
                  <p className="text-foreground/90 text-sm md:text-base">Zian Marco Villacacan</p>
                </div>
              </div>
            </div>

            {/* Flower Girl */}
            <div className="mt-8">
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-4 text-center">To Shower our aisle with flowers</h4>
              <div className="space-y-1 text-center">
                <p className="text-foreground/90 text-sm md:text-base">Gzyll Tahlia F. Grasparil</p>
                <p className="text-foreground/90 text-sm md:text-base">Gabrielle R. Zamora</p>
              </div>
            </div>

            {/* Mass Offerings */}
            <div className="mt-8">
              <p className="text-foreground/90 text-sm md:text-base text-center mb-4">The Offertory gifts will be lovingly presented by our sponsors,</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-3xl mx-auto">
                <div className="space-y-1 text-center">
                  <p className="text-foreground/90 text-sm md:text-base">Mr. Mc Delian O. Saldajeno</p>
                  <p className="text-foreground/90 text-sm md:text-base">Mr. Sirhan F T. Candaza</p>
                  <p className="text-foreground/90 text-sm md:text-base">Mr. Mico Ramuel M. Jarabata</p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-foreground/90 text-sm md:text-base">Mrs. Mitchie R. Santos</p>
                  <p className="text-foreground/90 text-sm md:text-base">Mrs. Eva S. Santos</p>
                </div>
              </div>
              <p className="text-foreground/90 text-sm md:text-base text-center mt-4">as we celebrate the Holy Sacrament of Matrimony.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
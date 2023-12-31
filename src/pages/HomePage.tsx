import { Box } from "@mui/system";
import Header from "../components/Header";
import MiddleTextWrapper from "../components/MiddleTextWrapper";
import WeBuy from "../components/WeBuy";
import { motion } from "framer-motion";

import WeBuyItems from "../components/WeBuyItems";
import Swiper from "../components/Swiper";
import AboutUsData from "../components/AboutUsData";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import "../App.css";
import backgroundMain from "../assets/images/backgroundMain.png";
import AnimatedPage, { fadeIn } from "../animation/AnimatedPage";
import OurProducts from "../components/OurProducts";
import { productsData } from "../data/productsData";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function HomePage() {
  const themeMain = useTheme();
  const isMobile = useMediaQuery(themeMain.breakpoints.down("sm"));
  const styles: any = {
    paperContainer: {
      backgroundImage: `url(${backgroundMain})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    cards: {
      alignItems: "center",
      flexWrap: "wrap",
      display: "grid",
      gridTemplateColumns: isMobile
        ? "repeat(auto-fill, minmax(90%, 1fr))"
        : "repeat(auto-fill, minmax(360px, 1fr))",
      gap: isMobile ? 0 : 32,
      padding: isMobile ? "10px" : "100px",
      justifyContent: "center",
      paddingTop: isMobile ? "50px" : "100px",
    },
  };
  return (
    <AnimatedPage>
      <Box style={styles.paperContainer}>
        <Header />
        <MiddleTextWrapper />
      </Box>
      <WeBuy />
      <Box style={styles.cards}>
        {productsData.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <WeBuyItems key={index} card={card} />
          </motion.div>
        ))}
      </Box>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <OurProducts />
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Swiper />
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AboutUsData />
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ContactUs />
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </AnimatedPage>
  );
}

export default HomePage;

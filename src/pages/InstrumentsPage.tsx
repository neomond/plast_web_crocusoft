import { Box } from "@mui/system";
import Header from "../components/Header";

import "../App.css";
import backgroundBlurred from "../assets/images/backgroundBlurred.png";
import AnimatedPage, { fadeIn } from "../animation/AnimatedPage";
import Footer from "../components/Footer";

import FourthPageMiddleText from "../components/FourthMiddleText";
import { motion } from "framer-motion";
import InstrumentsItems from "../components/InstrumentsItems";
import { productsData } from "../data/productsData";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function InstrumentsPage() {
  const footerBackgroundColor = "#F8F8F7";
  const footerText = "#090C06";
  const svgColor = "#090C06";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const styles: any = {
    paperContainer: {
      backgroundImage: `url(${backgroundBlurred})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw",
      height: isMobile ? "100vh" : "42vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    cards: {
      alignItems: "center",
      flexWrap: "wrap",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
      gap: isMobile ? 8 : 32,
      padding: isMobile ? "20px" : "100px",
      justifyContent: "center",
    },
  };
  return (
    <AnimatedPage>
      <Box style={styles.paperContainer}>
        <Header />
        <FourthPageMiddleText />
      </Box>

      <Box style={styles.cards}>
        {productsData.map((card, index) => (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <InstrumentsItems key={index} card={card} />
          </motion.div>
        ))}
      </Box>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Footer
          backgroundColor={footerBackgroundColor}
          footerText={footerText}
          svgColor={svgColor}
        />
      </motion.div>
    </AnimatedPage>
  );
}

export default InstrumentsPage;

import { Box } from "@mui/system";
import Header from "../components/Header";
import "../App.css";
import backgroundBlurred from "../assets/images/backgroundBlurred.png";
import AnimatedPage, { fadeIn } from "../animation/AnimatedPage";
import Footer from "../components/Footer";
import SixthMiddleText from "../components/SixthMiddleText";
import Form from "../components/Form";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

function ContactPage() {
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
      gap: 32,
      padding: "100px",
      justifyContent: "center",
    },
  };

  return (
    <AnimatedPage>
      <Box style={styles.paperContainer}>
        <Header />
        <SixthMiddleText />
      </Box>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Form textColor="#AEAEAE" backgroundColor="#FFFFFF" />
      </motion.div>
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

export default ContactPage;

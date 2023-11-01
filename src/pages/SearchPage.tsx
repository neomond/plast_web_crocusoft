import AnimatedPage, { fadeIn } from "../animation/AnimatedPage";
import { Box } from "@mui/system";
import Header from "../components/Header";
import Footer from "../components/Footer";
import backgroundBlurred from "../assets/images/backgroundBlurred.png";
import Search from "../components/Search";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

function SearchPage() {
  const footerBackgroundColor = "#F8F8F7";
  const footerText = "#090C06";
  const svgColor = "#090C06";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const styles: any = {
    paperContainer: {
      background: `url(${backgroundBlurred}) no-repeat center center fixed`,
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
      "-o-background-size": "cover",
      "background-size": "cover",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw",
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
        <Search />
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

export default SearchPage;

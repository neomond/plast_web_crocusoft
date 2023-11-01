import { Box } from "@mui/system";
import Header from "../components/Header";
import WeBuyItems from "../components/WeBuyItems";
import "../App.css";
import backgroundBlurred from "../assets/images/backgroundBlurred.png";
import AnimatedPage from "../animation/AnimatedPage";
import SecondPageMiddleText from "../components/SecondPageMiddleText";
import Footer from "../components/Footer";
import { productsData } from "../data/productsData";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function WeBuyPage() {
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
        <SecondPageMiddleText />
      </Box>
      <Box style={styles.cards}>
        {productsData.map((card, index) => (
          <WeBuyItems key={index} card={card} />
        ))}
      </Box>
      <Footer
        backgroundColor={footerBackgroundColor}
        footerText={footerText}
        svgColor={svgColor}
      />
    </AnimatedPage>
  );
}

export default WeBuyPage;

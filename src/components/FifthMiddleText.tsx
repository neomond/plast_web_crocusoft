import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import pointer from "../assets/icons/pointer.svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { fadeIn } from "../animation/AnimatedPage";
import { motion } from "framer-motion";

function FifthPageMiddleText() {
  const { t } = useTranslation("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const styles: any = {
    mainContainer: {
      padding: isMobile ? "0%" : "12%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      marginTop: isMobile ? "70%" : "0%",
    },
    firstWord: {
      color: "#fff",
      marginRight: 10,
      fontSize: 36,
      fontWeight: "700",
      textTransform: "uppercase",
      textAlign: "center",
    },
    spanWordFirst: {
      color: "#fff",
      fontSize: 14,
      borderBottom: "1px solid #fff",
    },
    spanWord: {
      color: "#fff",
      fontSize: 14,
    },
    secondaryContainer: {
      display: "flex",
      alignItems: "center",
      columnGap: 8,
    },
  };
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={styles.mainContainer}
    >
      <Typography style={styles.firstWord}>{t("about_us_header")}</Typography>
      <Box style={styles.secondaryContainer}>
        <span style={styles.spanWordFirst}>{t("home")}</span>
        <img src={pointer} alt="pointer" />
        <span style={styles.spanWord}>{t("contactdata")}</span>
      </Box>
    </motion.div>
  );
}

export default FifthPageMiddleText;

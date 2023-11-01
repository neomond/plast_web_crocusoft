import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import pointer from "../assets/icons/pointer.svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function SixthMiddleText() {
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
      marginRight: isMobile ? 0 : 10,
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
    <Box style={styles.mainContainer}>
      <Typography style={styles.firstWord}>{t("contactfooter")}</Typography>
      <Box style={styles.secondaryContainer}>
        <span style={styles.spanWordFirst}>{t("home")}</span>
        <img src={pointer} alt="pointer" />
        <span style={styles.spanWord}>{t("contact")}</span>
      </Box>
    </Box>
  );
}

export default SixthMiddleText;

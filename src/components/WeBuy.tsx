import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function WeBuy() {
  const { t } = useTranslation();
  const themeMain = useTheme();
  const isMobile = useMediaQuery(themeMain.breakpoints.down("sm"));
  const styles: any = {
    mainContainer: {
      padding: isMobile ? 34 : 74,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      textTransform: "uppercase",
      fontSize: isMobile ? 24 : 44,
      backgroundColor: "#090C06",
      position: "relative",
    },
    firstWord: {
      color: "#fff",
      marginRight: 10,
    },
    secondWord: {
      color: "#00AD33",
    },
    thirdWord: {
      color: "#fff",
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeft: "50px solid transparent",
      borderRight: "50px solid transparent",
      borderTop: "32px solid #090C06",
      position: "absolute",
      bottom: -30,
      left: isMobile ? "calc(50% - 15%)" : "calc(50% - 3%)",
    },
  };

  return (
    <Box style={styles.mainContainer}>
      <span style={styles.firstWord}>{t("webuy_label_1")}</span>
      <span style={styles.secondWord}>{t("webuy_label_2")}</span>
      <span style={styles.thirdWord}>!</span>
      <span style={styles.triangle}></span>
    </Box>
  );
}

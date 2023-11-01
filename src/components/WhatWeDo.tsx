import { Box, Card, Grid, Typography } from "@mui/material";
import whatwedo from "../assets/images/whatwedo.png";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function WhatWeDo() {
  const { t } = useTranslation("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const styles: any = {
    mainCont: {
      padding: isMobile ? 20 : 100,
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
      justifyContent: "center",
    },
    imagestyles: {
      maxWidth: "95%",
    },
    imageCont: {
      padding: isMobile ? 8 : 16,
      textAlign: "center",
      position: "relative",
    },
    textCont: {
      marginLeft: isMobile ? 0 : 56,
      marginTop: isMobile ? 42 : 0,
    },
    spancolor: {
      color: "#00AD33",
      fontSize: isMobile ? 22 : 32,
      fontWeight: "700",
    },
    headText: {
      fontSize: isMobile ? 22 : 32,
      fontWeight: "700",
      color: "#090C06",
    },
    card: {
      width: isMobile ? "40%" : 300,
      backgroundColor: "#00AD33",
      position: "absolute",
      left: isMobile ? "0% " : 30,
      top: isMobile ? "40%" : 250,
      padding: isMobile ? 16 : 24,
      borderRadius: 16,
      flexDirection: "column",
    },
    cardText: {
      color: "#fff",
      textAlign: "left",
      fontSize: isMobile ? "60%" : 14,
      fontWeight: "500",
    },
    cardTextMain: {
      color: "#fff",
      textAlign: "left",
      fontSize: isMobile ? 11 : 18,
      paddingTop: isMobile ? 8 : 16,
      fontWeight: "700",
    },
  };

  return (
    <Grid container style={styles.mainCont} sx={{ mb: 6 }}>
      <Grid item xs={12} md={6}>
        <Box style={styles.imageCont}>
          <img src={whatwedo} alt="Image" style={styles.imagestyles} />
          <Card style={styles.card}>
            <Typography style={styles.cardText}>
              Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
              euismod nisi viverra. Pretium id massa adipiscing pellentesque
              euismod ut pharetra.
            </Typography>
            <Typography style={styles.cardTextMain}>
              {t("quote_author")}
            </Typography>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box style={styles.textCont}>
          <Typography style={styles.headText}>
            {t("what_do_we_do")}
            <span style={styles.spancolor}>?</span>
          </Typography>
          <Typography sx={{ paddingTop: 2, fontSize: 14, lineHeight: 1.6 }}>
            Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
            euismod nisi viverra. Pretium id massa adipiscing pellentesque
            euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum
            tristique. Turpis laoreet euismod nisi viverra. Pretium id massa
            adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci, sed
            in sed sed dictum tristique. Turpis laoreet euismod nisi viverra.
            Pretium id massa adipiscing pellentesque euismod ut pharetra.
          </Typography>
          <Typography sx={{ py: 2, fontSize: 14, lineHeight: 1.6 }}>
            Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
            euismod nisi viverra. Pretium id massa adipiscing pellentesque
            euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum
            tristique. Turpis laoreet euismod nisi viverra. Pretium id massa
            adipiscing pellentesque euismod ut pharetra.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default WhatWeDo;

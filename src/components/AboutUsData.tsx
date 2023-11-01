import { Box, Card, Grid, Grow, Paper, Typography } from "@mui/material";
import avatar from "../assets/images/avatar.png";
import poligon from "../assets/icons/poligon.svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function AboutUsData() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const styles: any = {
    mainCont: {
      padding: isMobile ? 20 : 100,
      display: "flex",
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
      marginTop: isMobile ? 42 : 0,
    },
    textCont: {
      padding: 16,
      marginLeft: isMobile ? 0 : 56,
      marginTop: isMobile ? 40 : 0,
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
      width: isMobile ? "45%" : 300,
      backgroundColor: "#00AD33",
      position: "absolute",
      left: isMobile ? "55% " : 350,
      top: isMobile ? "60%" : 250,
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
    polygon: {
      position: "absolute",
      top: isMobile ? "46%" : 220,
      left: isMobile ? "60%" : 400,
      width: 50,
      height: 50,
    },
  };

  return (
    <>
      <Grid container style={styles.mainCont}>
        <Grid item xs={12} md={6}>
          <Box style={styles.imageCont}>
            <img src={avatar} alt="Image" style={styles.imagestyles} />
            <img src={poligon} alt="Polygon" style={styles.polygon} />
            <Card style={styles.card}>
              <Typography style={styles.cardText}>
                Tortor, nibh orci, sed in sed sed dictum tristique. Turpis
                laoreet euismod nisi viverra. Pretium id massa adipiscing
                pellentesque euismod ut pharetra.
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
              {t("who_are_we")}
              <span style={styles.spancolor}>?</span>
            </Typography>
            <Typography sx={{ paddingTop: 2, fontSize: 14, lineHeight: 1.6 }}>
              Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
              euismod nisi viverra. Pretium id massa adipiscing pellentesque
              euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum
              tristique. Turpis laoreet euismod nisi viverra. Pretium id massa
              adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci,
              sed in sed sed dictum tristique. Turpis laoreet euismod nisi
              viverra. Pretium id massa adipiscing pellentesque euismod ut
              pharetra.
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
    </>
  );
}

export default AboutUsData;

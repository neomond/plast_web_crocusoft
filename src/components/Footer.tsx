import { Box, Card, CardContent, Link, Typography, Grid } from "@mui/material";
import work from "../assets/icons/facility.svg";
import contact from "../assets/icons/headset.svg";
import location from "../assets/icons/locat.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Footer({ backgroundColor, footerText, svgColor }: any) {
  const { t } = useTranslation("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const svgFillColor = svgColor || "#fff";
  const styles: any = {
    mainGrid: {
      backgroundColor: backgroundColor || "#090C06",
      padding: isMobile ? "2rem 2%" : "5rem 7%",
      paddingRight: isMobile ? 0 : 25,
    },

    textMain: {
      color: footerText || "#fff",
      fontSize: isMobile ? 18 : 24,
      fontWeight: "700",
    },
    textinrange: {
      color: footerText || "#fff",
      fontSize: isMobile ? 12 : 14,
      width: "80%",
    },
    textinrangelast: {
      width: "90%",
      fontSize: 14,
    },
    iconsRange: {
      display: "flex",
      flexDirection: "row",
      columnGap: 24,
      marginTop: "32px",
    },
    cardStyles: {
      width: "100%",
      backgroundColor: backgroundColor || "#090C06",
      color: footerText || "#fff",
      display: "flex",
      flexDirection: "column",
      border: "none",
      boxShadow: "none",
    },
    borderStyles: {
      borderBottom: "1px solid #999",
      width: "100%",
      opacity: 0.8,
    },
    footerLabels: {
      color: footerText || "rgba(255, 255, 255, 0.64)",
      fontSize: isMobile ? 10 : 12,
    },
    booterLabelsWrapper: {
      backgroundColor: backgroundColor || "#090C06",
      padding: isMobile ? "24px" : "24px 100px 24px 100px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      columnGap: isMobile ? "16px" : "0px",
    },
    spanStyle: {
      color: footerText || "#fff",
    },
    iconStyle: {
      fill: svgFillColor,
      width: "16px",
      height: "16px",
      display: "flex",
      alignItems: "center",
    },
    linkStyle: {
      textDecoration: "none",
      color: footerText || "#fff",
      display: "block",
      paddingBottom: "8px",
      transition: "border 0.3s",
    },
    linkHoverStyle: {
      borderLeft: "1px solid green",
      paddingLeft: "12px",
    },
  };

  return (
    <>
      <Grid container style={styles.mainGrid} spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={styles.cardStyles}>
            <CardContent>
              <img src={work} alt="work" />
              <Typography sx={{ py: 2 }} style={styles.textMain}>
                {t("activity")}
              </Typography>
              <Box sx={{ flexDirection: "column" }}>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.linkStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderLeft = "2px solid #00AD33")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderLeft = "none")
                  }
                >
                  <Typography sx={{ pt: 1, pl: 1 }} style={styles.textinrange}>
                    {t("productsfooter")}
                  </Typography>
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.linkStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderLeft = "2px solid #00AD33")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderLeft = "none")
                  }
                >
                  <Typography sx={{ pt: 1, pl: 1 }} style={styles.textinrange}>
                    {t("we_buy")}
                  </Typography>
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.linkStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderLeft = "2px solid #00AD33")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderLeft = "none")
                  }
                >
                  <Typography sx={{ pt: 1, pl: 1 }} style={styles.textinrange}>
                    {t("instruments")}
                  </Typography>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item style={styles.cardGridItem} xs={12} sm={6} md={4}>
          <Card style={styles.cardStyles}>
            <CardContent>
              <img src={contact} alt="contact" />
              <Typography sx={{ py: 2 }} style={styles.textMain}>
                {t("contactfooter")}
              </Typography>
              <Box sx={{ flexDirection: "column" }}>
                <Typography sx={{ pt: 1 }} style={styles.textinrange}>
                  +994 12 222 22 22
                </Typography>
                <Typography sx={{ pt: 1 }} style={styles.textinrange}>
                  info@plast.az
                </Typography>
                <Box style={styles.iconsRange}>
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon style={styles.iconStyle} />
                  </Link>
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon style={styles.iconStyle} />
                  </Link>
                  <Link
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YouTubeIcon style={styles.iconStyle} />
                  </Link>
                  <Link
                    href="https://www.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon style={styles.iconStyle} />
                  </Link>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item style={styles.cardGridItem} xs={12} sm={6} md={4}>
          <Card style={styles.cardStyles}>
            <CardContent>
              <img src={location} alt="location" />
              <Typography sx={{ py: 2 }} style={styles.textMain}>
                {t("location")}
              </Typography>
              <Typography sx={{ pt: 1 }} style={styles.textinrange}>
                {t("address")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box style={styles.borderStyles}></Box>
      <Box sx={{ py: 2 }} style={styles.booterLabelsWrapper}>
        <Typography style={styles.footerLabels}>
          Copyright © 2021 <span style={styles.spanStyle}> PLAST</span>.{" "}
          {t("rights_reserved")}
        </Typography>
        <Typography style={styles.footerLabels}>
          Developed by <span style={styles.spanStyle}>Crocusoft LLC</span>.
        </Typography>
      </Box>
    </>
  );
}

export default Footer;

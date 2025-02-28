import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HomeIcon from "@mui/icons-material/Home";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/Constants";
import { CONTACT_CONSTANTS } from "../utils/Constants";

const styles = {
  mainBox: {
    minHeight: "calc(100vh - 120px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    py: 2,
  },
  paper: {
    p: 4,
    width: "100%",
    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
  },
  donationButton: {
    background: "linear-gradient(90deg, #7986cb 0%, #ffffff 300%)",
    "&:hover": {
      background: "linear-gradient(90deg, #5c6bc0 0%, #f5f5f5 300%)",
    },
    fontWeight: "500",
    boxShadow: "0 2px 4px rgba(121, 134, 203, 0.25)",
    py: 0.5,
    minHeight: "32px",
    fontSize: "0.95rem",
    color: "#2c387e",
    border: "1px solid #7986cb40",
  },
  dialogPaper: {
    m: { xs: 1, sm: 2 },
    width: "100%",
    maxWidth: { xs: "100%", sm: "400px" },
  },
  dialogTitle: {
    fontSize: { xs: "1.2rem", sm: "1.5rem" },
    px: { xs: 2, sm: 3 },
  },
  dialogContent: {
    px: { xs: 2, sm: 3 },
    py: 2,
  },
  ibanBox: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    bgcolor: "#f5f5f5",
    p: 2,
    borderRadius: 1,
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "stretch", sm: "center" },
  },
  ibanText: {
    fontFamily: "monospace",
    wordBreak: "break-all",
  },
  copyButton: {
    minWidth: { xs: "100%", sm: "auto" },
    mt: { xs: 1, sm: 0 },
  },
  dialogActions: {
    px: { xs: 2, sm: 3 },
    pb: 2,
  },
  homeButton: {
    fontSize: "0.9rem",
    color: "text.secondary",
  },
  homeButtonBox: {
    width: "100%",
    borderTop: "1px solid #e0e0e0",
    pt: 3,
    mt: 2,
  },
};

const Contact = () => {
  const navigate = useNavigate();
  const phoneNumber = CONTACT_CONSTANTS.PHONE_NUMBER;
  const [openDonationDialog, setOpenDonationDialog] = useState(false);
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [goldPrice, setGoldPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const IBAN = CONTACT_CONSTANTS.IBAN;

  useEffect(() => {
    const fetchGoldPrice = async () => {
      if (openDonationDialog) {
        setLoading(true);
        try {
          const response = await fetch("https://finans.truncgil.com/today.json");
          const data = await response.json();
          console.log("API Response:", data);
          const goldPrice = data["gram-altin"]["Satış"];
          const cleanPrice = goldPrice.replace(".", "").replace(",", ".");
          setGoldPrice(parseFloat(cleanPrice).toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
        } catch (error) {
          console.error("Altın fiyatı çekme hatası:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchGoldPrice();
  }, [openDonationDialog]);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.location.href = `https://wa.me/${phoneNumber.replace("+", "")}`;
  };

  const handleDonation = () => {
    setOpenDonationDialog(true);
  };

  const handleCloseDonation = () => {
    setOpenDonationDialog(false);
  };

  const handleCopyIBAN = async () => {
    try {
      await navigator.clipboard.writeText(IBAN);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
    } catch (err) {
      console.error("IBAN kopyalama hatası:", err);
    }
  };

  const handleAddContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Evren Uzuntaş
TEL:${phoneNumber}
END:VCARD`;
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "evren-uzuntas.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={styles.mainBox}>
        <Paper elevation={3} sx={styles.paper}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            İletişim
          </Typography>

          <Typography variant="body1" color="text.secondary" align="center" paragraph>
            Sorularınız için bize ulaşabilirsiniz
          </Typography>

          <Button variant="contained" size="large" startIcon={<PhoneIcon />} onClick={handleCall} fullWidth sx={{ mb: 2 }} color="primary">
            {phoneNumber}
          </Button>

          <Button variant="contained" size="large" startIcon={<WhatsAppIcon />} onClick={handleWhatsApp} fullWidth sx={{ mb: 2 }} color="success">
            WhatsApp'tan Mesaj Gönder
          </Button>

          <Button variant="contained" size="large" startIcon={<ContactPhoneIcon />} onClick={handleAddContact} fullWidth sx={{ mb: 2 }} color="info">
            Rehbere Ekle
          </Button>

          <Box sx={{ width: "100%", mt: 3, mb: 2 }}>
            <Button variant="contained" size="small" startIcon={<CurrencyLiraIcon />} onClick={handleDonation} fullWidth sx={styles.donationButton}>
              {" Altın Tak :)"}
            </Button>
          </Box>

          <Dialog
            open={openDonationDialog}
            onClose={handleCloseDonation}
            maxWidth="xs"
            fullWidth
            PaperProps={{
              sx: styles.dialogPaper,
            }}
          >
            <DialogTitle sx={styles.dialogTitle}>Bağış Bilgileri</DialogTitle>
            <DialogContent sx={styles.dialogContent}>
              <Typography variant="body1" gutterBottom>
                Evren Uzuntaş
              </Typography>
              <Box
                sx={{
                  bgcolor: "#fafafa",
                  p: 2,
                  mb: 2,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body1">Güncel Gram Altın:</Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#d4af37" }}>
                  {loading ? "Yükleniyor..." : goldPrice ? `₺${goldPrice}` : "Fiyat alınamadı"}
                </Typography>
              </Box>
              <Box sx={styles.ibanBox}>
                <Typography variant="body1" sx={styles.ibanText}>
                  {IBAN}
                </Typography>
                <Button startIcon={<ContentCopyIcon />} onClick={handleCopyIBAN} size="small" sx={styles.copyButton}>
                  Kopyala
                </Button>
              </Box>
            </DialogContent>
            <DialogActions sx={styles.dialogActions}>
              <Button onClick={handleCloseDonation} color="primary" fullWidth variant="contained">
                Kapat
              </Button>
            </DialogActions>
          </Dialog>

          <Snackbar open={showCopySuccess} autoHideDuration={2000} message="IBAN kopyalandı" anchorOrigin={{ vertical: "bottom", horizontal: "center" }} />

          <Box sx={styles.homeButtonBox}>
            <Button variant="text" startIcon={<HomeIcon />} onClick={() => navigate(ROUTES.HOME)} fullWidth color="inherit" sx={styles.homeButton}>
              Ana Sayfaya Dön
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Contact;

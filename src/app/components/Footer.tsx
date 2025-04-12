import { Box, Typography, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ 
      py: 4,
      mt: 8,
      backgroundColor: 'primary.main',
      color: 'primary.contrastText',
      textAlign: 'center',
    }}>
      <Divider sx={{ mb: 2, backgroundColor: 'rgba(0, 0, 0, 0.2)' }} />
      <Typography variant="body2">
        © 2025 | Hania's Blog Dashboard. All rights reserved.
      </Typography>
    </Box>
  );
}
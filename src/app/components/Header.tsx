'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import blogBanner from "../../assets/images/blog-banner.webp"

export default function Header() {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '300px', mb: 4 }}>
      <Image
        src={blogBanner}
        alt="Blog Banner"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        p: 4,
        textAlign: 'center',
      }}>
        <Typography variant="h1" component="h1" sx={{ color: '#FFDB58' }}>
          Blog Dashboard
        </Typography>
        <Typography variant="subtitle1">
          Thoughts, stories and ideas
        </Typography>
      </Box>
    </Box>
  );
}
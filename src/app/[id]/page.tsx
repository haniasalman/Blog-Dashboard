'use client';

import { Container, Typography, Button, Box, Divider } from '@mui/material';
import Link from 'next/link';
import { useGetPostByIdQuery } from '../features/posts/postApi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { use } from 'react';

export default function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: post, isLoading, isError } = useGetPostByIdQuery(Number(id));
  if (isLoading) {
    return (
      <>
        <Header />
        <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h5">Loading post...</Typography>
        </Container>
        <Footer />
      </>
    );
  }

  if (isError || !post) {
    return (
      <>
        <Header />
        <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
          <Typography color="error" variant="h5" sx={{ mb: 3 }}>
            Error loading post
          </Typography>
          <Link href="/" passHref>
            <Button 
              variant="contained"
              sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              Back to Posts
            </Button>
          </Link>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ mb: 4 }}>
          <Link href="/" passHref>
            <Button 
              variant="outlined"
              sx={{
                mb: 4,
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.dark',
                  backgroundColor: 'rgba(255, 219, 88, 0.08)',
                },
              }}
            >
              ← Back to Posts
            </Button>
          </Link>
          
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              mb: 3,
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            {post.title}
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 4,
          }}>
            <Box sx={{
              width: '8px',
              height: '8px',
              backgroundColor: 'primary.main',
              borderRadius: '50%',
              mr: 1,
            }} />
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: 'text.secondary',
                fontStyle: 'italic',
              }}
            >
              Author: User {post.userId}
            </Typography>
          </Box>
          
          <Divider sx={{ 
            mb: 4,
            borderColor: 'rgba(0, 0, 0, 0.12)',
          }} />
          
          <Typography 
            variant="body1" 
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'text.primary',
              whiteSpace: 'pre-line',
            }}
          >
            {post.body}
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
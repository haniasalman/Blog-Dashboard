'use client';

import { Container, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import { useGetPostsQuery } from './features/posts/postApi';
import BlogPostCard from './components/BlogPostCard';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const { data: posts, isLoading, isError, refetch } = useGetPostsQuery();

  if (isLoading) {
    return (
      <Container maxWidth="lg">
        <Header />
        <Typography align="center" sx={{ py: 8 }}>Loading posts...</Typography>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container maxWidth="lg">
        <Header />
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography color="error" variant="h5" sx={{ mb: 2 }}>
            Error loading posts
          </Typography>
          <Button 
            onClick={refetch} 
            variant="contained" 
            sx={{ 
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
            }}
          >
            Retry
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mb: 6,
        }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
            Latest Articles
          </Typography>
          <Link href="/add-post" passHref>
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
              Add New Post
            </Button>
          </Link>
        </Box>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 4,
          mb: 8,
        }}>
          {posts?.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </Box>
      </Container>
      <Footer />
    </>
  );
}
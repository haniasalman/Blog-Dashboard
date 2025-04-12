import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import PostForm from '../components/PostForm';

export default function AddPostPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Link href="/" passHref>
          <Button variant="outlined" sx={{ mb: 2 }}>
            Back to Posts
          </Button>
        </Link>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Add New Post
        </Typography>
        <PostForm />
      </Box>
    </Container>
  );
}
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Post } from '../../types/post';

interface BlogPostCardProps {
  post: Post;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card sx={{ 
      mb: 4,
      width: '100%',
      borderLeft: '4px solid',
      borderLeftColor: 'primary.main',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      },
    }}>
      <CardContent>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          {post.title}
        </Typography>
        <Typography 
          variant="subtitle2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            fontStyle: 'italic',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ 
            display: 'inline-block',
            width: '8px',
            height: '8px',
            backgroundColor: 'primary.main',
            borderRadius: '50%',
            marginRight: '8px',
          }} />
          Author: User {post.userId}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 3,
            lineHeight: 1.6,
            color: 'text.primary',
          }}
        >
          {post.body.length > 100 ? `${post.body.substring(0, 100)}...` : post.body}
        </Typography>
        <Link href={`/${post.id}`} passHref>
          <Button 
            variant="contained" 
            size="medium"
            sx={{
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
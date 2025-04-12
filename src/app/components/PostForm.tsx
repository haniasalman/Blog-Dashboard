'use client'

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAddPostMutation } from '../features/posts/postApi';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(1);
  const [addPost, { isLoading, isError, isSuccess }] = useAddPostMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addPost({ title, body, userId }).unwrap();
      setTitle('');
      setBody('');
    } catch (err) {
      console.error('Failed to save the post: ', err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Author ID"
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
        required
      />
      <TextField
        label="Content"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading}
        sx={{ mt: 2 }}
      >
        {isLoading ? 'Submitting...' : 'Submit Post'}
      </Button>
      {isError && (
        <Typography color="error" sx={{ mt: 2 }}>
          Error submitting post. Please try again.
        </Typography>
      )}
      {isSuccess && (
        <Typography color="success.main" sx={{ mt: 2 }}>
          Post submitted successfully!
        </Typography>
      )}
    </Box>
  );
}
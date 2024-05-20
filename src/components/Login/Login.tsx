import React, { useState, FormEvent } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Логика авторизации
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '300px', margin: '0 auto', marginTop: '100px' }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Авторизация
      </Typography>
      <TextField
        label="Логин в системе УлГТУ"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Пароль в системе УлГТУ"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Войти
      </Button>
    </Box>
  );
};
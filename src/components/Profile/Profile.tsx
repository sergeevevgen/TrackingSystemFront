import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

interface UserProfile {
  login: string;
  password: string;
  group: string;
  fullName: string;
}

export const Profile: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    login: 'e.sergeev',
    password: '',
    group: 'ПИбд-42',
    fullName: 'Сергеев Евгений Дмитриевич',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Ваш профиль:', userProfile);
    // Здесь можно добавить логику для сохранения профиля
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '300px', margin: '0 auto', marginTop: '50px' }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Ваш профиль
      </Typography>
      <TextField
        label="Логин"
        variant="outlined"
        fullWidth
        name="login"
        value={userProfile.login}
        onChange={handleInputChange}
      />
      <TextField
        label="Пароль"
        type="password"
        variant="outlined"
        fullWidth
        name="password"
        value={userProfile.password}
        onChange={handleInputChange}
      />
      <TextField
        label="Учебная группа"
        variant="outlined"
        fullWidth
        name="group"
        value={userProfile.group}
        onChange={handleInputChange}
      />
      <TextField
        label="ФИО"
        variant="outlined"
        fullWidth
        name="fullName"
        value={userProfile.fullName}
        onChange={handleInputChange}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Save
      </Button>
    </Box>
  );
};
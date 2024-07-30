'use client'

import { useState, useEffect } from 'react'
import { Box, Stack, Typography, Button, Modal, TextField } from '@mui/material'
import { firestore } from '@/firebase'
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
}

const items = [
  'Flour', 'Sugar', 'Cocoa Powder', 'Baking Soda', 'Cinnamon', 'Lemon', 'Molasses', 'Brown Sugar', 'Nutmeg'
];

export default function Home() {
  return (
    <Box
    width="100vw"
    height="100vh"
    display={'flex'}
    justifyContent={'center'}
    flexDirection={'column'}
    alignItems={'center'}
    >
      <Box border={'1px solid #333'}>
      <Box width="800px" height="100px" bgcolor={'#ADD8E6'} display={'flex'}>
        <Typography variant={'h4'} color={'#333'} textAlign={'center'}>
          Pantry Items
        </Typography>
      </Box>
      <Stack width="800px" height="300px" spacing={2} overflow={'auto'}>
        {items.map((i) => (
          <Box
          width="100%"
          height="300px"
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          bgcolor={'#f0f0f0'}
          >
            <Typography variant={'h4'} color={'#333'} textAlign={'center'} fontWeight={'bold'}>
              {
                i.charAt(0).toUpperCase() + i.slice(1)
              }
            </Typography>
          </Box>
        )) }
      </Stack>
      </Box>
    </Box>
  );
}

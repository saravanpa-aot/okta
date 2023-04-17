import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import EnvestnetLogo from '../assets/env-logo-reverse.png'
import styled from 'styled-components'

const navItems = ['Home', 'About']

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(null)

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav' sx={{background: 'linear-gradient(to right,rgba(0,123,199,1) 0%,rgba(52,55,65,1) 100%)'}}>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
          >
            <Logo src={EnvestnetLogo}/>
          </Typography>
          <Box>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const Logo = styled.img`
width: 100px;
height: 30px;
padding-top: 6.5px;
`

export default Navbar

import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Button, Drawer, IconButton, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import { MENU_ROUTES } from '../../constants/routes'

const Header: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <AppBar className="flex !flex-row items-center p-4 gap-4 h-[90px]">
        <IconButton onClick={() => setMenuOpen(!isMenuOpen)}>
          <MenuIcon className="text-white" />
        </IconButton>
        <Typography variant="h6">Тест РТК и хук форм</Typography>
      </AppBar>
      <Drawer
        anchor="left"
        classes={{
          paper: 'flex flex-col gap-4 w-[600px] p-4',
        }}
        open={isMenuOpen}
        onClose={() => setMenuOpen(false)}
      >
        <div className="flex !flex-row items-center h-[58px]">
          <IconButton onClick={() => setMenuOpen(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="flex flex-col gap-2">
          {MENU_ROUTES.map((item) => (
            <Button
              key={item.path}
              className="w-fit"
              size="small"
              component={Link}
              onClick={() => setMenuOpen(false)}
              {...{ to: item.path }}
            >
              {item.title}
            </Button>
          ))}
        </div>
      </Drawer>
    </>
  )
}

export { Header }

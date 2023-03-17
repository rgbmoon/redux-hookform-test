import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from '../../constants/routes'

function Layout() {
  return (
    <div className="w-full min-h-screen p-4 pt-[106px] [&>*]:mb-4">
      <Routes>
        <Route path={ROUTES.index.path} element={ROUTES.index.element} />
        <Route path={ROUTES.hookFormDemo.path} element={ROUTES.hookFormDemo.element} />
        <Route path={ROUTES.pokemon.path} element={ROUTES.pokemon.element} />
        <Route path={ROUTES.reduxDemo.path} element={ROUTES.reduxDemo.element} />
        <Route path={ROUTES.stateMonitor.path} element={ROUTES.stateMonitor.element} />
        <Route path={ROUTES.notFound.path} element={ROUTES.notFound.element} />
      </Routes>
    </div>
  )
}

export { Layout }

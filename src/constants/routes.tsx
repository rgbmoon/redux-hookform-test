import { ReactNode } from 'react'

import { HookFormDemo } from '../pages/HookFormDemo'
import { Main } from '../pages/Main'
import { NotFound } from '../pages/NotFound'
import { Pokemon } from '../pages/Pokemon'
import { ReduxDemo } from '../pages/ReduxDemo'
import { StateMonitor } from '../pages/StateMonitor'

type TRoute = {
  path: string
  title: string
  inMenu?: boolean
  element: ReactNode
}

export const ROUTES: Record<string, TRoute> = {
  index: {
    path: '/',
    title: 'Главная',
    inMenu: true,
    element: <Main />,
  },
  hookFormDemo: {
    path: '/hookFormDemo',
    title: 'Демо хук форм',
    inMenu: true,
    element: <HookFormDemo />,
  },
  pokemon: {
    path: '/pokemon',
    title: 'Демо RTK query',
    inMenu: true,
    element: <Pokemon />,
  },
  reduxDemo: {
    path: '/reduxDemo',
    title: 'Демо Redux',
    inMenu: true,
    element: <ReduxDemo />,
  },
  stateMonitor: {
    path: '/stateMonitor',
    title: 'Монитор состояния стора',
    inMenu: true,
    element: <StateMonitor />,
  },
  notFound: {
    path: '*',
    title: 'Страница не найдена',
    element: <NotFound />,
  },
}

export const MENU_ROUTES = Object.keys(ROUTES)
  .filter((key) => ROUTES[key].inMenu)
  .map((key) => {
    return ROUTES[key]
  })

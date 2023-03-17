import React, { FC } from 'react'

import { useGetPokemonByNameQuery } from '../../store/api'

const Pokemon: FC = () => {
  const { data, isLoading } = useGetPokemonByNameQuery('pikachu')

  return (
    <div className="w-full p-4 bg-slate-200 border border-neutral-400 rounded-lg">
      <div>
        {data?.id} - {data?.name}
      </div>
      {isLoading && <div>Покемон загружается</div>}
    </div>
  )
}

export { Pokemon }

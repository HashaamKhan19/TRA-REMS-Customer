import React from 'react'
import { BuyFilter } from '../Filter/BuyFilter'
import { BuyHero } from './BuyHero'
import { BuyCard } from './BuyCard'

export const Buy = () => {
  return (
    <div>
      <BuyHero />
      <BuyFilter />
    </div>
  )
}

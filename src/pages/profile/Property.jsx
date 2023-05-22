import React from 'react'
import Tile from './Tile'
import { Box } from '@mui/material'
import styled from "@emotion/styled"
import Filter from './Filter'

const Container = styled(Box)`
    overflow-y: auto;
    max-height: 100vh;
    position: relative;
`

const TileRow = styled(Box)`
    display: flex;
    align-items: initial;
    flex-wrap: wrap;
    gap: 20px;
    padding-left: 20px;
    

  & > * {
    flex: 3;
  }
`

function Property() {
  return (
    <Container>
      <Filter />
      <TileRow>
        <Tile />
        <Tile />
        <Tile />
      </TileRow>
    </Container>
  )
}

export default Property
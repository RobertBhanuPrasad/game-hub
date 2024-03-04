import { Grid, GridItem, HStack } from "@chakra-ui/react"
import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"
import PlatformSelector from "./components/PlatformSelector"
import SortSlector from "./components/SortSlector"
import { Platform } from "./hooks/useGames"
import { Genre } from "./hooks/useGenres"

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
}
function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "200px  1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" padding={5}>
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
      </GridItem>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
          />
          <SortSlector
            sortOrder={gameQuery.sortOrder}
            onSlectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
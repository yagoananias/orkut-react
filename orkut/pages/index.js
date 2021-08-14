import MainGrid from '../src/componentes/MainGrid';
import Box from '../src/componentes/Box';

export default function Home() {
  const githubUser = 'yagoananias'

  return (
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <Box>
          <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} />
        </Box>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          Bem-vindo
        </Box>
      </div>
      <div className="relationsArea" style={{ gridArea: 'relationsArea' }}>
      <Box>
          Amigos
        </Box>
        <Box>
          Comunidades
        </Box>
      </div>
    </MainGrid>
  )
}

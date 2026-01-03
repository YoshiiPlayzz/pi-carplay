import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const Car = () => {
  const theme = useTheme()

  return (
    <Box
      id="car-root"
      className={theme.palette.mode === 'dark' ? 'App-header-dark' : 'App-header-light'}
      p={2}
      display="flex"
      flexDirection="column"
      height="calc(100vh - 64px)"
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 2,
          border: `1px dashed ${theme.palette.divider}`,
          backgroundColor:
            theme.palette.mode === 'dark'
              ? theme.palette.background.default
              : theme.palette.background.paper
        }}
      >
        <Typography variant="h5" color="text.secondary">
          Test Text
        </Typography>
      </Box>
    </Box>
  )
}

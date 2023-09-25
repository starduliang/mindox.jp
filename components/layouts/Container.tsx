import { Container as MUIContainer } from '@mui/material'

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <MUIContainer maxWidth="lg" className={className}>
    {children}
  </MUIContainer>
)

export default Container

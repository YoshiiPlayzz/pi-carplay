import { Typography } from '@mui/material'
import { StackItem } from '../stackItem'
import { ReactNode } from 'react'

type Props = {
  label: string
  labelIcon?: React.ElementType
  children?: ReactNode
}

export const SettingsItemRow = ({ label, labelIcon: LabelIcon, children }: Props) => {
  return (
    <StackItem>
      <Typography sx={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        {LabelIcon ? <LabelIcon style={{ fontSize: '1.1em' }} /> : null}
        {label}
      </Typography>
      {children}
    </StackItem>
  )
}

import { Typography } from '@mui/material'
import { StackItem } from './stackItem'
import { SettingsItemRow } from './settingsItemRow'
import { SettingsFieldControl } from './SettingsFieldControl'
import { SettingsNode } from '../../../../routes'
import { getValueByPath } from '../utils'
import { ExtraConfig } from '../../../../../../main/Globals'
import { useTranslation } from 'react-i18next'

type Props<T, K> = {
  node: SettingsNode<ExtraConfig>
  value: T
  state: K
  onChange: (v: T) => void
  onClick?: () => void
}

export const SettingsFieldRow = <T, K>({ node, value, state, onChange, onClick }: Props<T, K>) => {
  const { t } = useTranslation()
  const label = node.labelKey ? t(node.labelKey) : node.label
  const LabelIcon = node.labelIcon

  if (onClick) {
    return (
      <StackItem
        withForwardIcon
        onClick={onClick}
        node={node}
        value={getValueByPath(state, node.path)}
        showValue={node.displayValue}
      >
        <Typography sx={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          {LabelIcon ? <LabelIcon style={{ fontSize: '1.1em' }} /> : null}
          {label}
        </Typography>
      </StackItem>
    )
  }

  return (
    <SettingsItemRow label={label} labelIcon={LabelIcon}>
      <SettingsFieldControl node={node} value={value} onChange={onChange} />
    </SettingsItemRow>
  )
}

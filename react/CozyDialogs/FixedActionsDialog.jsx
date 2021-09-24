import React from 'react'
import cx from 'classnames'

import useCozyDialog from './useCozyDialog'
import Dialog, { DialogTitle, DialogActions, DialogContent } from '../Dialog'
import Divider from '../MuiCozyTheme/Divider'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const FixedActionsDialog = props => {
  const { onClose, onBack, title, content, actions, actionsLayout } = props
  const {
    dialogProps,
    dialogTitleProps,
    fullScreen,
    id,
    dialogActionsProps
  } = useCozyDialog(props)

  const onBackOrClose = onBack || onClose

  return (
    <Dialog {...dialogProps}>
      {!fullScreen && onClose && (
        <DialogCloseButton
          data-test-id={`modal-close-button-${id}`}
          onClick={onClose}
        />
      )}
      <DialogContent>
        <div className="dialogContentInner">
          <DialogTitle {...dialogTitleProps} className="dialogTitleFluid">
            {!fullScreen && onBack && <DialogBackButton onClick={onBack} />}
            {fullScreen && onBackOrClose && <DialogBackButton onClick={onBackOrClose} />}
            {title}
          </DialogTitle>
          {content}
        </div>
      </DialogContent>
      <Divider />
      {actions && (
        <DialogActions
          {...dialogActionsProps}
          disableSpacing
          className={cx({ columnLayout: actionsLayout == 'column' })}
        >
          {actions}
        </DialogActions>
      )}
    </Dialog>
  )
}

FixedActionsDialog.propTypes = dialogPropTypes

export default FixedActionsDialog

import React, { FC, useRef } from 'react';
import {
  AlertDialog,
  AlertDialogButton,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  Paragraph,
} from 'supernova-ui';

/**
 * comment out for Next
 *
 * otherwise import when using Storybook
 */
// import './styles.scss';

interface WarningAlertDialogProps {
  /**
   * Title for the cancel button.
   */
  cancelButtonTitle: string;
  /**
   * Callback function to call when the cancel button is clicked.
   */
  cancelButtonOnClick: () => void;
  /**
   * Main content of the modal.
   */
  content: string;
  /**
   * Header of the modal.
   */
  header: string;
  /**
   * flag to indicate whether the modal is open
   */
  isOpen: boolean;
  /**
   * Function to call when closing the modal with the 'X' button.
   */
  onClose: () => void;
  /**
   * Title for the submit button.
   */
  submitButtonTitle: string;
  /**
   * Callback function to call when the submit button is clicked.
   */
  submitButtonOnClick: () => void;
}

/**
 * AlertDialog used to remind the user to save their work.
 */
const WarningAlertDialog: FC<WarningAlertDialogProps> = props => {
  const {
    cancelButtonOnClick,
    cancelButtonTitle,
    content,
    header,
    isOpen,
    onClose,
    submitButtonOnClick,
    submitButtonTitle,
  } = props;
  const leastDestructiveRef = useRef<HTMLButtonElement | null>(null);

  return (
    <AlertDialog
      className="warn-ad"
      closeOnOverlayClick={false}
      leastDestructiveRef={leastDestructiveRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialogHeader className="warn-ad__header">
        {header}
      </AlertDialogHeader>
      <AlertDialogBody className="warn-ad__body">
        <Paragraph fontSize="0.8rem">{content}</Paragraph>
        <AlertDialogFooter className="warn-ad__footer">
          <div className="warn-ad__inner">
            <AlertDialogButton
              borderRadius="xxl"
              onClick={cancelButtonOnClick}
              margin="0 sm"
              ref={leastDestructiveRef}
              variant="outline"
            >
              {cancelButtonTitle}
            </AlertDialogButton>
            <AlertDialogButton
              asSubmitButton
              borderRadius="xxl"
              onClick={submitButtonOnClick}
            >
              {submitButtonTitle}
            </AlertDialogButton>
          </div>
        </AlertDialogFooter>
      </AlertDialogBody>
    </AlertDialog>
  );
};

export default WarningAlertDialog;

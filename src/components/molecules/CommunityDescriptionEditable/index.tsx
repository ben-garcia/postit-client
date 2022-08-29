import React, {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useState,
} from 'react';

import {
  Button,
  EditablePreview,
  EditableTextarea,
  useEditableControls,
  Text,
} from 'supernova-ui';
import { PencilIcon } from '../../atoms';
import WarningAlertDialog from '../../organisms/WarningAlertDialog';

import './styles.scss';

interface CommunityDescriptionEditableProps {
  description: string;
  descriptionRef: MutableRefObject<string>;
  setDescription: Dispatch<SetStateAction<string>>;
}

const CommunityDescriptionEditable: FC<CommunityDescriptionEditableProps> = props => {
  const { description, descriptionRef /* setDescription */ } = props;
  const {
    enterEditMode,
    isEditing,
    getCancelButtonProps,
    getSubmitButtonProps,
  } = useEditableControls();
  const [comDescWarnModalIsOpen, setComDescWarnModalIsOpen] = useState(false);

  const handleClickOutside = (value: string) => {
    if (value !== descriptionRef.current) {
      descriptionRef.current = value;
      setComDescWarnModalIsOpen(true);
    }
  };

  return (
    <div className="com-desc-editable">
      <div className="com-desc-editable__wrapper">
        <EditablePreview
          className={
            description.length
              ? 'com-desc-editable__preview com-desc-editable__preview--black'
              : 'com-desc-editable__preview com-desc-editable__preview--blue'
          }
        />
        {description && !isEditing && (
          <PencilIcon margin="0 0 0 0.2rem" size="1.2rem" />
        )}
      </div>
      <EditableTextarea
        className="com-desc-editable__textarea"
        isAutoResize
        maxLength={500}
        onClickOutside={handleClickOutside}
        rows={1}
      />
      {isEditing && (
        <div className="com-desc-editable__container">
          <Text
            color={description.length === 500 ? 'error500' : undefined}
            fontSize="0.7rem"
          >
            {description.length > 0 ? `${500 - description.length} ` : '500 '}
            Character/s remaining
          </Text>
          <div className="com-desc-editable__button-container">
            <Button
              aria-label="Cancel changes"
              backgroundColor="transparent"
              className="com-desc-editable__button"
              color="error500"
              hoverBackgroundColor="transparent"
              hoverColor="error500"
              margin="0 sm 0 0"
              {...getCancelButtonProps()}
            >
              <Text fontSize="0.7rem">Cancel</Text>
            </Button>
            <Button
              aria-label="Save changes"
              backgroundColor="transparent"
              className="com-desc-editable__button"
              color="info700"
              hoverBackgroundColor="transparent"
              hoverColor="info700"
              {...getSubmitButtonProps()}
            >
              <Text fontSize="0.7rem">Save</Text>
            </Button>
          </div>
        </div>
      )}

      {comDescWarnModalIsOpen && (
        <WarningAlertDialog
          cancelButtonTitle="Discard"
          cancelButtonOnClick={() => {
            setComDescWarnModalIsOpen(false);
          }}
          content="You have made some changes to your community, do you wish to leave
          this menu without saving?"
          header="Save changes before leaving?"
          isOpen={comDescWarnModalIsOpen}
          onClose={() => {
            // closes the modal.
            setComDescWarnModalIsOpen(false);
            // enables 'edit' mode.
            enterEditMode();
            // since there is no 'ref' for textarea.
            (document as any)
              .querySelector('.com-desc-editable__textarea')
              .focus();
          }}
          submitButtonTitle="Save"
          submitButtonOnClick={() => {
            setComDescWarnModalIsOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default CommunityDescriptionEditable;

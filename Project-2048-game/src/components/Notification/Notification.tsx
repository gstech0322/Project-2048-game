import React, { FC } from 'react';
import StyledBackdrop from './StyledBackdrop';
import StyledModal from './StyledModal';
import Button from '../Button';
import Box from '../Box';
import Text from '../Text';

export interface NotificationProps {
  win: boolean;
  onClose: () => void;
}

const Notification: FC<NotificationProps> = ({ win, onClose }) => (
  <StyledModal>
    <StyledBackdrop />
    <Box paddingBlock="s10" background="transparent">
      {win ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text fontSize={49} color="white">
            C'est gagné !!!
          </Text>
          <br />
          <Text fontSize={22} color="primary">
            Cliquez sur Nouveau jeu pour continuer, Nombre de tuiles
          </Text>
        </div>
      ) : (
        <Text fontSize={22} color="primary">
          Oups... Fin du jeu ! » Réessayez
        </Text>
      )}
    </Box>
    {win ? (
      ''
    ) : (
      <Button onClick={onClose}>{win ? 'réessayer' : 'réessayer'}</Button>
    )}
  </StyledModal>
);

export default Notification;

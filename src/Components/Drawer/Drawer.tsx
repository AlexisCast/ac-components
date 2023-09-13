import React from 'react';
import ReactDOM from 'react-dom';

import './Drawer.css';

interface BackdropProps {
  onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose} />;
};

interface DrawerOverlayProps {
  children: React.ReactNode;
}

const DrawerOverlay: React.FC<DrawerOverlayProps> = ({ children }) => {
  return <div className="container__drawer">{children}</div>;
};

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen = false,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  const backdropRoot = document.getElementById('backdrop-root');
  const portalRoot = document.getElementById('portal-root');

  if (!portalRoot || !backdropRoot) return null;

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, backdropRoot)}

      {ReactDOM.createPortal(
        <DrawerOverlay>{children}</DrawerOverlay>,
        portalRoot
      )}
    </>
  );
};

import React from 'react';
import Icon from '@mui/material/Icon';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

interface IconSwitchProps {
  icon: string;
  onSwitch: () => void;
}

const IconSwitch: React.FC<IconSwitchProps> = ({ icon, onSwitch }) => {
  return (
    <Icon onClick={onSwitch}>
      {icon === 'view_list' ? <ViewListIcon /> : <ViewModuleIcon />}
    </Icon>
  );
};

export default IconSwitch;
import React from 'react';
import EachUserInformation from './EachUserInformation';

const COLOR = '#686868';

const selectIcons = (icon) => {
  if (!icon) return <></>;
  return <>{React.createElement(icon, { size: 16, color: COLOR })}</>;
};

const EtchUserInformation = ({ cls, icon, info }) => {
  return (
    <p className={cls}>
      {selectIcons(icon)}
      <EachUserInformation information={info} />
    </p>
  );
};

export default EtchUserInformation;

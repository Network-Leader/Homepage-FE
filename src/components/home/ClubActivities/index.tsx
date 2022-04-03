import React from 'react';
import ActivityCard from './ActivityCard';
import MountainSkies from '../../../../public/mountainskies.jpg';

const ClubActivities = () => (
  <>
    <ActivityCard
      image={MountainSkies}
      width={300}
      height={300}
      title='Mountains'
      content='There are too many mountains'
    />
  </>
);

export default ClubActivities;

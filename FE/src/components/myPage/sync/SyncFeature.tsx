import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {SyncFeatureProps} from '../../../interfaces/props/SyncFeatureProps';
import {
  Feature,
  FeatureImage,
  FeatureImageView,
  FeatureTitle,
  FeatureView,
  Wrapper,
} from './SyncFeatureStyle';

const SyncFeature = ({image, title, features}: SyncFeatureProps) => {
  return (
    <Wrapper>
      <FeatureImageView>
        <FeatureImage source={imagePath[image]} resizeMode="contain" />
      </FeatureImageView>
      <FeatureView>
        <FeatureTitle>{title}</FeatureTitle>
        {features.map((feature, idx) => (
          <Feature key={idx}>{feature}</Feature>
        ))}
      </FeatureView>
    </Wrapper>
  );
};

export default SyncFeature;

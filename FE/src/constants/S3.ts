import {S3_ACCESS_KEY_ID, S3_ACCESS_KEY_SECRET} from '@env';
import AWS from 'aws-sdk';

const awsS3config = {
  region: 'ap-northeast-2',
  bucket: 'triptogether',
};

const s3 = new AWS.S3({
  accessKeyId: S3_ACCESS_KEY_ID,
  secretAccessKey: S3_ACCESS_KEY_SECRET,
  region: awsS3config.region,
});

export {awsS3config};
export default s3;

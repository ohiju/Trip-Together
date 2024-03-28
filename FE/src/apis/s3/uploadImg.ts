import {ManagedUpload} from 'aws-sdk/clients/s3';
import {Buffer} from 'buffer';
import * as RNFS from 'react-native-fs';
import s3, {awsS3config} from '../../constants/S3';
import {RootState} from '../../store';
import {useAppSelector} from '../../store/hooks';
import usePutMember, {PutMemberData} from '../member/usePutMember';

const useS3Upload = () => {
  const putMember = usePutMember();
  const {imgConfig, nickname, description} = useAppSelector(
    (state: RootState) => state.user.putData,
  );
  const {username} = useAppSelector((state: RootState) => state.user.user);
  if (!imgConfig) return;

  const readFileAsync = async (filepath: string) => {
    try {
      return await RNFS.readFile(filepath, 'base64');
    } catch (error) {
      throw new Error(`Error read file: ${error}`);
    }
  };

  const uploadToS3 = async (
    fileData: string,
    Key: string,
    ContentType: string | undefined,
  ) => {
    try {
      const params = {
        Bucket: awsS3config.bucket,
        Key,
        Body: Buffer.from(fileData, 'base64'),
        ACL: 'public-read',
        ContentType,
      };

      const result = await new Promise(
        (resolve: (value: string) => void, reject: (err: Error) => void) => {
          s3.upload(
            params,
            function (err: Error, data: ManagedUpload.SendData) {
              if (err) {
                reject(err);
              } else {
                console.log(`File uploaded successfully. ${data.Location}`);
                resolve(data.Location);
              }
            },
          );
        },
      );

      return result;
    } catch (error) {
      throw new Error(`Error uploading to S3: ${error}`);
    }
  };

  const s3Upload = async () => {
    try {
      if (!imgConfig.uri) throw new Error('uri 가 없습니다.');
      const fileData = await readFileAsync(imgConfig.uri);
      const image_url = await uploadToS3(fileData, username, imgConfig.type);
      const data: PutMemberData = {
        image_url,
        nickname,
        description,
      };
      await putMember(data);
    } catch (error) {
      throw new Error(`Error in s3Upload: ${error}`);
    }
  };

  return s3Upload;
};

export default useS3Upload;

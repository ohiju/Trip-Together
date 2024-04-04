import {ManagedUpload} from 'aws-sdk/clients/s3';
import {Buffer} from 'buffer';
import * as RNFS from 'react-native-fs';
import s3, {awsS3config} from '../../constants/S3';
import {ProfileMainProps} from '../../interfaces/router/myPage/ProfileStackParams';
import {RootState} from '../../store';
import {useAppSelector} from '../../store/hooks';
import usePutMember, {PutMemberData} from '../member/usePutMember';

interface S3UploadData {
  fileData: string;
  Key: string;
  ContentType: string | undefined;
}

const useS3Upload = () => {
  const putMember = usePutMember();
  const {imgConfig, nickname, description} = useAppSelector(
    (state: RootState) => state.user.putData,
  );
  const member = useAppSelector((state: RootState) => state.user.member);
  if (!imgConfig) return;

  const readFileAsync = async (filepath: string) => {
    try {
      return await RNFS.readFile(filepath, 'base64');
    } catch (error) {
      throw new Error(`Error read file: ${error}`);
    }
  };

  const uploadToS3 = async (s3Data: S3UploadData) => {
    try {
      const params = {
        Bucket: `${awsS3config.bucket}/profileImg`,
        Key: s3Data.Key,
        Body: Buffer.from(s3Data.fileData, 'base64'),
        ACL: 'public-read',
        ContentType: s3Data.ContentType,
      };

      const result = await new Promise(
        (resolve: (value: string) => void, reject: (err: Error) => void) => {
          s3.upload(
            params,
            function (err: Error, data: ManagedUpload.SendData) {
              if (err) {
                reject(err);
              } else {
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

      const s3Data: S3UploadData = {
        fileData: fileData,
        Key: member.member_id.toString(),
        ContentType: imgConfig.type,
      };
      const location = await uploadToS3(s3Data);

      const regex =
        /https:\/\/triptogether\.s3\.ap-northeast-2\.amazonaws\.com\/(.+)/;
      const match = location.match(regex);
      const image_url = match ? match[1] : '';

      const data: PutMemberData = {
        image_url,
        nickname: nickname ? nickname : member.nickname,
        description: description ? description : member.description,
      };
      const props: ProfileMainProps = {
        member_id: member.member_id,
      };
      await putMember(data, props);
    } catch (err) {
      console.error(err);
      throw new Error(`Error in s3Upload: ${err}`);
    }
  };

  return s3Upload;
};

export default useS3Upload;

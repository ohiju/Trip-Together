import {ParamListBase} from '@react-navigation/native';

interface ProfileMainProps {
  member_id: number;
}

interface ProfileStackParams extends ParamListBase {
  ProfileMain: ProfileMainProps;
  ProfileEdit: undefined;
  ProfileTrip: undefined;
  ProfileFlashMob: undefined;
}

export type {ProfileMainProps, ProfileStackParams};

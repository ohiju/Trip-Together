import {SyncFeatureProps} from '../interfaces/props/SyncFeatureProps';

const syncFeatures: SyncFeatureProps[] = [
  {
    image: 'exchange',
    title: '환전',
    features: [
      '수수료 없는 부담없는 환전!',
      '세계 각국의 화폐로 수수료 없이',
      '환전해드려요.',
    ],
  },
  {
    image: 'pay',
    title: '결제',
    features: [
      '편리한 결제 시스템!',
      '환전한 금액은 어디서든',
      '사용할 수 있습니다.',
    ],
  },
  {
    image: 'remit',
    title: '송금',
    features: [
      '모임을 편리하게!',
      '더치페이 기능으로 손쉬운',
      '정산이 가능합니다.',
    ],
  },
];

export {syncFeatures};

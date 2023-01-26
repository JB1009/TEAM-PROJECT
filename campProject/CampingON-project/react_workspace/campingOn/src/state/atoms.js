import { atom } from 'recoil';

//atom === store
//atom은 데이터를 저장하는 단위
export const searchLocal = atom({
  key: '지역검색', //key 값
  default: '', //초깃값
});
//atom에 어떤 변화가 있으면 그 atom을 구독하는 모든 컴포넌트들이 재 렌더링 되는 결과가 발생

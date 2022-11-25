// 绿 #06AEA6
// 蓝 #198EEB
const ColorObjArr = [
  {
    A1_1: '#06AEA6',
    A1_2: '#1AC3BB',
    A1_3: '#4A9591',
    A1_4: '#E3F8F5',
    A1_5: '#D8F6F5',
    A2_1: '#FEB034',
    A2_2: '#FFC569',
    A2_3: '#E7A02F',
    A3_1: '#F36969',
    A3_2: '#FA8383',
    A3_3: '#D45353',
    C1: '#FFFFFF',
    C2: '#F5F7F8',
    C3: '#F8F8F8',
    C4: '#F4F5F6',
    C5: '#EEEEEE',
    C6: '#F5F5F5',
    C7: '#D1D1D1',
    C8: '#C1C1C1',
    C9: '#DBDBDB',
    C10: '#979797',
    C11: '#E8E8E8',
    C12: '#F0F0F0',
    C13: '#E6E6E6',
    C14: '#B3B3B3',
    C15: '#C1C1C1',
    C16: '#FAFAFA',
    C17: '#F9F9F9',
    D1: '#53BDE7',
    D2: '#3AC9A8',
    D3: '#F88464',
    D4: '#FFBF47',
    D5: '#A5B8D1',
    D6: '#FFFBE0',
    D7: '#E7F9F7',
    D8: '#E1F0EF',
    E1: '#333',
    E2: '#666',
    E3: '#999',
    E4: '#CCC',
    E5: '#E48D02',
    E6: '',
    E1_1: '#F36969',
    E1_2: '#FFF4F2',
    E2_1: '#FF9B54',
    E2_2: '#FFFAF2',
    E3_1: '#4ACFB1',
    E3_2: '#ECFBFB',
    E4_1: '#45A8E6',
    E4_2: '#F2FCFF',
    E5_1: '#24BEE8',
    E5_2: '#F4FCFF',
    F1: '#68D1BE',
    F2: '#28BEA3',
    F3: '#14AB90',
    F4: '#0D8F78',
    F1_1: '#3B8FD9',
    F1_2: '#1A78B8',
    F1_3: '#1A78B8',
    F1_4: '#73461D',
    F1_5: '#CCC',
    F1_6: '',
  },
  {
    A1_1: '#198EEB',
    A1_2: '#4FB1FF',
    A1_3: '#197BC9',
    A1_4: '#ECF8FF',
    A1_5: '#D1EBFF',
    A2_1: '#FF7631',
    A2_2: '#FF925B',
    A2_3: '#D45C1F',
    A3_1: '#F36969',
    A3_2: '#FA8383',
    A3_3: '#D45353',
    C1: '#FFFFFF',
    C2: '#FAFAFA',
    C3: '#F8F8F8',
    C4: '#F5F7F8',
    C5: '#F4F5F6',
    C6: '#F0F0F0',
    C7: '#F9F9F9',
    C8: '#EEEEEE',
    C9: '#F5F5F5',
    C10: '#E8E8E8',
    C11: '#E6E6E6',
    C12: '#DBDBDB',
    C13: '#D1D1D1',
    C14: '#C1C1C1',
    C15: '#B3B3B3',
    C16: '#AEAEAE',
    C17: '#979797',
    D1: '#53BDE7',
    D2: '#3AC9A8',
    D3: '#F88464',
    D4: '#FEB034',
    D5: '#A5B8D1',
    D6: '#FFFBE0',
    D7: '#E7F9F7',
    D8: '#E5F1FA',
    E1: '#333',
    E2: '#666',
    E3: '#999',
    E4: '#CCC',
    E5: '#FF7631',
    E6: '',
    E1_1: '#F36969',
    E1_2: '#FFF4F2',
    E1_3: '#F2D2CE',
    E2_1: '#FF9B54',
    E2_2: '#FFFAF2',
    E2_3: '#F2E3CE',
    E3_1: '#4ACFB1',
    E3_2: '#ECFBFB',
    E3_3: '#C6EAE8',
    E4_1: '#45A8E6',
    E4_2: '#F2FCFF',
    E4_3: '#CEEAF2',
    E5_1: '#24BEE8',
    E5_2: '#F4FCFF',
    E5_3: '#CEEBF3',
    F1: '#68CAFF',
    F2: '#35AEFF',
    F3: '#198EEB',
    F4: '#2074D2',
    F5: '',
    F1_1: '#3B8FD9',
    F1_2: '#1A78B8',
    F1_3: '#1A78B8',
    F1_4: '#73461D',
    F1_5: '#CCC',
    F1_6: '',
  },
];

export const getCurrColorObj = theme => {
  const obj = ColorObjArr.find(x => theme === x.A1_1) || ColorObjArr[0];

  return obj;
};

export function loadStyleString(css) {
  document.querySelector('#wj-var-style') && document.querySelector('#wj-var-style').remove();
  let style = document.createElement('style');
  style.type = 'text/css';
  style.id = 'wj-var-style';
  try {
    style.appendChild(document.createTextNode(css));
  } catch (ex) {
    style.textContent = css;
  }
  let head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
}

export default ColorObjArr;

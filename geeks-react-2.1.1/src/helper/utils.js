import { config } from 'components/utils/Constants';

/**
 * Functions in utils
 */

const baseURL = config.url.API_BASE_URL;

/**
 * 빈 객체 확인
 * v1.0.0
 */
export const isNotEmptyObj = (obj) => {
  if (obj.constructor === Object && Object.keys(obj).length === 0) {
    return false;
  }
  return true;
};

function leftPad(value) {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
}
/**
 * date - > YYYY-MM-DD
 * v1.0.0
 */
export function toDateByYYYYMMDD(source, delimiter = '-') {
  const date = new Date(source);
  const year = date.getFullYear();
  const month = leftPad(date.getMonth() + 1);
  const day = leftPad(date.getDate());

  return [year, month, day].join(delimiter);
}

/**
 * D-Day 계산
 * v1.0.0
 */
export function calculateDday(source) {
  var targetDate = new Date(source);
  // 현재 날짜 구하기
  var currentDate = new Date();

  // 주어진 날짜와 현재 날짜 사이의 시간 차이 계산
  var timeDifference = currentDate - targetDate;

  // 시간 차이를 밀리초에서 일로 변환
  var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // D-Day 문자열 생성
  var ddayString = '';
  if (daysDifference > 0) {
    ddayString = 'D+' + daysDifference + '일';
  } else if (daysDifference < 0) {
    ddayString = 'D' + daysDifference + '일';
  } else {
    ddayString = 'D-Day';
  }

  return ddayString;
}
/**
 * 페이지 리로드
 * v1.0.0
 */
export const refreshPage = () => {
  window.location.reload();
};

/**
 * 현재 링크 클립보드 복사
 * v1.0.0
 */
export const handleCopyLinkClipBoard = async (text) => {
  try {
    await navigator.clipboard.writeText(`${baseURL}${text}`);
    console.log(`${baseURL}${text}`);
    alert('클립보드에 링크가 복사되었어요.');
  } catch (err) {
    console.log(err);
  }
};

/**
 * 현재 링크 클립보드 복사
 * v1.0.0
 */
export const handleCopyTextClipBoard = async (text) => {
  try {
    await navigator.clipboard.writeText(`${text}`);
    console.log(`${text}`);
    alert(`클립보드에 ${text}가 복사되었어요.`);
  } catch (err) {
    console.log(err);
  }
};

/**
 * 파일 다운로드
 * v1.0.0
 */
export const downloadFile = (uuid) => {
  const url = s3Link(uuid);

  fetch(url, { method: 'GET' })
    .then((res) => {
      return res.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = '파일명';
      document.body.appendChild(a);
      a.click();
      setTimeout((_) => {
        window.URL.revokeObjectURL(url);
      }, 60000);
      a.remove();
    })
    .catch((err) => {
      console.error('err: ', err);
    });
};

/**
 * 링크 만들기
 * v1.0.0
 */
export const s3Link = (uuid) => {
  const url = baseURL + '/aws/' + uuid;
  return url;
};

/**
 * Add commas to a number
 * v1.0.0
 */
export const numberWithCommas = (x, decimal = 0) => {
  return x.toLocaleString('en-US', { minimumFractionDigits: decimal });
};

/**
 * Get the file extension from given file name
 * v1.2.0
 */
export const getFileExtension = (filename) => {
  const extension = filename.split('.').pop();
  return extension;
};

/**
 * Get the random number between min and max value
 * v1.2.0
 */
export const getRandomNo = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Get the color name/value based on given status
 * v1.2.0
 */
export const getStatusColor = (itemstatus) => {
  let color = '';
  switch (itemstatus) {
    case 'In Progress':
      color = 'info';
      break;
    case 'Pending':
      color = 'warning';
      break;
    case 'Finished':
      color = 'success';
      break;
    case 'Cancel':
      color = 'danger';
      break;
    default:
      color = 'primary';
  }
  return color;
};

/**
 * Get the color name/value based on given status
 * v1.2.0
 */
export const getCategoryColor = (category) => {
  let color = '';
  switch (category) {
    case 'Saas Services':
    case 'Entertainment':
    case 'Extra':
      color = 'info';
      break;
    case 'Design':
      color = 'warning';
      break;
    case 'Marketing':
      color = 'success';
      break;
    case 'Development':
      color = 'danger';
      break;
    case 'SEO':
      color = 'primary';
      break;
    default:
      color = 'primary';
  }
  return color;
};

//get chunk from array
export const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr];
  if (chunkSize <= 0) return cache;
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
};

// function to get time value in hh:mm AM | PM format
export const getTimeValue = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

// function to get date value in Month Name DD, YYYY format
export const getDateValue = (date) => {
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const yyyy = date.getFullYear();
  let mm = date.getMonth();
  let dd = date.getDate();
  var today = month[mm] + ' ' + dd + ', ' + yyyy;
  return today;
};

// function to generate slug or ID with slug format
export const getSlug = (text) => {
  text = text.toLowerCase();
  text = text.replace(/ /g, '-').replace(/[^\w-]+/g, '');
  return text;
};

const utils = [
  numberWithCommas,
  getFileExtension,
  getRandomNo,
  getStatusColor,
  chunk,
  getTimeValue,
  getDateValue,
  getSlug,
];

export default utils;

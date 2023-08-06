const prod = {
  url: {
    API_BASE_URL:
      'http://ec2-43-202-1-241.ap-northeast-2.compute.amazonaws.com:8080',
  },
};

const dev = {
  url: {
    // API_BASE_URL: 'http://localhost:8080',
    API_BASE_URL:
      'http://ec2-43-202-1-241.ap-northeast-2.compute.amazonaws.com:8080',
  },
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;

const https = require('https');

const urls = [
  'https://ibb.co/7c4y14B',
  'https://ibb.co/VYX96bLz',
  'https://ibb.co/6JVPNqHn',
  'https://ibb.co/3YRRGj1B',
  'https://ibb.co/2YcVx4RG',
  'https://ibb.co/jvr7fFCN',
  'https://ibb.co/6cDK6k2m',
  'https://ibb.co/rKwMbhP6',
  'https://ibb.co/RG1yFrch',
  'https://ibb.co/TBjq5CYj'
];

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  for (const url of urls) {
    const html = await fetchUrl(url);
    const match = html.match(/<meta property="og:image" content="([^"]+)"/);
    if (match) {
      console.log(match[1]);
    } else {
      console.log('Not found for', url);
    }
  }
}

main();

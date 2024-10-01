export function generateUniqueIDforShortURL() {
  const charSet = process.env.CHARSET;
  const length = 12;

  let gnid = '';
  for (let i = 0; i < length; i++) {
    gnid += charSet[Math.floor(Math.random() * charSet.length)];
  }

  return gnid;
}

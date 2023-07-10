
const DATE_WEBSITE_URL = 'https://californiacrossroads.com/san-francisco-date-ideas/';
const H2_REGEX = /<h2>(.*?)<\/h2>/gm;

async function findDate(){

  const response = await fetch(DATE_WEBSITE_URL);
  const websiteText = await response.text();

  const h2Matches = websiteText.match(H2_REGEX);
  if(h2Matches) {
    const randomDate = h2Matches[Math.floor(Math.random() * h2Matches.length)];
    if(randomDate){
      return randomDate.replace('<h2><strong>', '').replace('</strong></h2>', '').replace('&nbsp;', '').replace('&#8217;', "'");
    }
  }

  return 'Error: No date found!';

}

console.log(await findDate());

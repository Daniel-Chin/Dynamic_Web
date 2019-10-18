import axios from 'axios';
import { TTS_KEY, URBAN_KEY } from './keys';

const MAX_TRY = 6;

const getTTS = (phrase) => (
  `https://api.voicerss.org?key=${TTS_KEY}&hl=en-us&src=${phrase}`
);

async function getUrban(term, fails) {
  fails = fails || 0;
  try {
    const response = await axios.get(`https://mashape-community-urban-dictionary.p.rapidapi.com/define`, {
      params: {
        term, 
      }, 
      headers: {
        'content-type': "application/octet-stream", 
        'x-rapidapi-host': "mashape-community-urban-dictionary.p.rapidapi.com", 
        'x-rapidapi-key': URBAN_KEY, 
      },
    });
    const results = response.data.list;
    return results[Math.floor(Math.random() * results.length)]; 
    // { definition, example }
  } catch (err) {
    console.log(err);
    if (fails < MAX_TRY) {
      console.log(`Trying again, ${fails} / ${MAX_TRY}...`)
      return await getUrban(term, fails + 1);
    } else {
      console.error('Urban Dict api does not respond.');
    }
  }
};

export { getTTS, getUrban };

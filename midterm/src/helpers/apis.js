import axios from 'axios';
import { TTS_KEY, URBAN_KEY } from './keys';

const MAX_TRY = 6;

const getTTS = (phrase) => (
  `https://api.voicerss.org?key=${TTS_KEY}&hl=en-us&src=${phrase}`
);

async function getUrban(term, fails) {
  fails = fails || 0;
  let response = null;
  try {
    response = await axios.get(`https://mashape-community-urban-dictionary.p.rapidapi.com/define`, {
      params: {
        term, 
      }, 
      headers: {
        'content-type': "application/octet-stream", 
        'x-rapidapi-host': "mashape-community-urban-dictionary.p.rapidapi.com", 
        'x-rapidapi-key': URBAN_KEY, 
      },
      validateStatus: (status) => (
        (status >= 200 && status < 300) || status === 429
      ),    
    });
    console.log(response);
  } catch (err) {
    console.log(err);
    response = null;
    if (fails < MAX_TRY) {
      console.log(`Trying again, ${fails} / ${MAX_TRY}...`)
      return await getUrban(term, fails + 1);
    } else {
      throw Error('Urban Dict api refused.');
    }
  }
  if (response !== null) {
    if (response.status === 429) {
      throw Error('Urban Dict API: ' + response.data);
    }
    const results = response.data.list;
    if (results.length > 0) {
      return results[Math.floor(Math.random() * results.length)]; 
      // { definition, example }
    }
    throw Error('No such word.');
  }
};

export { getTTS, getUrban };

module.exports = {
  VOICEIT_API_KEY: process.env.VOICEIT_TWO_API_KEY ? process.env.VOICEIT_TWO_API_KEY : 'API_KEY_HERE',
  VOICEIT_API_TOKEN: process.env.VOICEIT_TWO_API_TOKEN ? process.env.VOICEIT_TWO_API_TOKEN : 'API_TOKEN_HERE',
  contentLanguage: 'en-US',
  phrase: 'Never forget tomorrow is a new day',
  numLivTests: 3,
  maxLivTries: 2
}

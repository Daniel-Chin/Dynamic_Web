# Urban Voicinary
## Warning
The app may show rude content, as provided by Urban Dictionary.  

## How to Run
Run it on your own machine using `npm start`.  

I don't host it on Heroku because the app uses free third-party services and I don't want hackers to use my server to dDos any one.  

## Two Sources of Data
The app uses the unofficial API of [Urban Dictionary](https://urbandictionary.com) provided by [RapidApi](https://rapidapi.com/).  
The app also uses [Voice RSS TextToSpeech](http://www.voicerss.org/api/demo.aspx) API.  

## Data Display
The definition and examples of the word are displayed as text.  
The voice is played automatically to the user.  

## Interactive UI
* You can click on the word links in the text to go to the word page.  
* Buttons highlight when the mouse hovers on them.  
* The "search" button only displays when the searchbox is focused and not empty.  
* The rest of the page is dimmed when the user is typing.  
* ESC and Enter works as you would expect.  

## UI Change due to Data
The UI elements activate when the browser receive response from the APIs.  
Besides that, the regular stuff. Text updates, and audio updates.  
```useEffect``` basically handles everything automatically...  

## Accessibility
Full support for tab navigation.  

bounce balls, without using any third party library.
![image](https://cloud.githubusercontent.com/assets/10692276/16894215/75933462-4b82-11e6-8d9c-b1a6dcb291e5.png)

## Development
After clone this repo, run `npm install && npm run dev` then, open `open dist/index.html`.
![xqmcasyjjg](https://cloud.githubusercontent.com/assets/10692276/16894229/badec446-4b82-11e6-9809-69d2aeecd22e.gif)

## Enable live reloading
Let's stop wasting time on hit CMD(or CTRL) + R by ourselves.   
`npm install -g browser-sync`  
After installed browser-sync, run `npm run watchDev`.  
Now, whatever you want, happy coding! :)  
![image](https://cloud.githubusercontent.com/assets/10692276/16894251/a1844858-4b83-11e6-8824-1f1843da0af2.gif)

## Project structure

├── cfg   
│   ├── base.js (Webpack configuration file)  
│   ├── defaults.js (Webpack configuration file)  
│   ├── dev.js (Webpack configuration file)  
│   └── dist.js (Webpack configuration file)  
├── dist   
│   └── index.html  
├── package.json  
├── src  
│   ├── components    
│   │   ├── ball.js (Ball in the app)   
│   │   ├── ballsController.js (Control position for each ball)    
│   │   ├── canvas.js (Provide canvas context, handle browser resize)    
│   │   └── performanceCounter.js (That's where FPS: number came from)   
│   ├── helpers  
│   │   └── color.js (Provide a method to generate random color)  
│   ├── index.js (Application entry point)  
│   └── styles  
│       └── app.scss  
└── webpack.config.js (Webpack configuration file)    

## Browser support
Support:   
Mac: Chrome, Safari.  
IPhone 5S: Chrome, Safari, Wechat browser

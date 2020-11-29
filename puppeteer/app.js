const puppeteer = require('puppeteer');
const fs = require('fs');
const iPhone = puppeteer.devices['iPhone 6'];

// (async()=>{
//     const browser = await puppeteer.launch({headless:false});

//     const page = await browser.newPage();
//     // await page.emulate(iPhone);
//     await page.goto('https://www.baidu.com');
//     // await page.type('#kw','puppeteer',{delay:200})
//     await page.keyboard.type('puppeteer!!!!!',{delay:3000})
//     // await page.keyboard.down('Enter')
//     // console.log(await page.content());
//     const button = await page.$('#su');
//     console.log(button)
//     // page.waitFor(1000)
//     const input = await page.$eval('#su',el => el.value)
//     // const divCount = await page.$eval('.s-hotsearch-wrapper .s-hotsearch-content .title-content .title-content-title', el=> el.textContent);
//     console.log(input)
//     await button.click()
//     // await page.screenshot({path: 'screenshot.png'});

//     // await browser.close();
// })()




// page.$()
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });

//   const page = await browser.newPage();
//   // await page.emulate(iPhone);
//   await page.setViewport({ width: 1920, height: 1080 })
//   await page.goto('https://www.baidu.com');
//   const input = await page.$('#kw');

//   await input.type('hello puppeteer!', { delay: 100 });
//   //
//   // const text = await page.$eval('#su', el => el.value)
//   // console.log(text);

//   // await browser.close();
// })()











// (async () => {
//     const browser = await puppeteer.launch({headless:false});
//     const page = await browser.newPage();
//     await page.goto('https://www.baidu.com');

//     // Get the "viewport" of the page, as reported by the page.
//     const dimensions = await page.evaluate(() => {
//       return {
//         width: document.documentElement.clientWidth,
//         height: document.documentElement.clientHeight,
//         deviceScaleFactor: window.devicePixelRatio
//       };
//     });

//     console.log('Dimensions:', dimensions);

//     await browser.close();
//   })();





// login

// ( async ()=>{
//         const browser = await puppeteer.launch({headless:false});

//         const page = await browser.newPage();
//         // await page.emulate(iPhone);
//         await page.setViewport({width:1200,height:800})
//         const crm = {
//             name:'authToken',
//             value:'5b004eca7d573f073c6cf90b85b6bf4c',
//             domain:'crm-dev.ymt360.com',
//             path:'/',
//         }
//         await page.setCookie(crm)
//         await page.goto('https://crm-dev.ymt360.com/new/#/dashboard')

//         await page.mouse.move(10,200,{steps:20})
//         await page.mouse.down()
//         await page.mouse.up()
//         await page.mouse.move(10,520,{steps:160});
//         await page.mouse.down()
//         await page.mouse.up()

//         // await page.mouse.click(10,300)

//         // await browser.close();
//     })()





// js

// ( async ()=>{
//     const browser = await puppeteer.launch({headless:false});

//     const page = await browser.newPage();
//     // await page.emulate(iPhone);
//     await page.setViewport({width:1200,height:800})
//     await page.goto('https://www.baidu.com');
//     await page.evaluate(()=>{
//         setTimeout(() => {
//            document.querySelector('#su').value = 'Google一下'
//         }, 3000);
//     })
//     // await browser.close();
// })()




// tracing


// (async () => {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();

//   // Get the "viewport" of the page, as reported by the page.
//   await page.tracing.start({ path: 'trace.json' });
//   await page.goto('https://www.baidu.com');
//   await page.tracing.stop();

//   // console.log('Dimensions:', dimensions);

//   await browser.close();
// })();
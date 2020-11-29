const puppeteer = require('puppeteer');


// (async () => {
//     const browser = await puppeteer.launch({ headless: false });

//     const page = await browser.newPage();
//     // await page.emulate(iPhone);
//     await page.setViewport({ width: 1200, height: 800 })
//     await page.goto('https://www.baidu.com');
//     const rs = await page.evaluate(() => {
//         // setTimeout(() => {
//         //     document.querySelector('#su').value = 'Google一下'
//         //     console.log('sdf')
//         // }, 3000);
//         console.log('sdfsf')
//         return document.querySelector('#su').value
//     })
//     console.log(rs)
//     // await browser.close();
// })()


(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 })
    await page.goto('https://www.jd.com');
    // const input = page.$('#key');
    await page.type('#key', '内存条', { delay: 100 });
    await page.click('.search-m .button');
    // 加载DOM
    await page.waitForSelector('.gl-item');
    await page.waitForSelector('.p-skip em b')
    // await page.click('.p-img');
    // console.log(js)
    const list = await page.$$('.gl-item a em');
    // console.log(list)
    // const rs = await page.evaluate((el) => {
    //     console.log(el)
    //     console.log('sdfsdf')
    // }, list)
    // await list.dispose()
    // console.log(rs)
    const pages = await page.$eval('.p-skip em b', page => page.toString())

    const options = await page.$$eval('.gl-item a em', options => options.map(option => option.textContent));
    const prices = await page.$$eval('.gl-item .p-price', options => options.map(option => option.textContent.trim()));

    // console.log(options)
    // console.log(prices)
    console.log(pages)

    // => js
    // await page.evaluate(() => {
    //     const rs = document.querySelector('.gl-item')
    //     console.log(rs)
    // })

    // console.log('Dimensions:', dimensions);
    // console.log(rs)
    // await browser.close();
})();

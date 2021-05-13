const fs = require('fs');
const puppeteer = require('puppeteer');
const Config = require('./Config.json');
const request = require('request-promise');

module.exports = {
    getApps: async function (params) {
        console.log(params)
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });
        await page.goto(Config.LienNinite);
        await page.waitForSelector(`input[value="${params.apps[0]}"]`);
        for (var i = 0; i < params.apps.length; i++) {
            await page.click(`input[value="${params.apps[i]}"]`);
        }
        await page.click('button[type="submit"]');
        setTimeout(async () => {
            if (params.path) {
                if (params.name) {
                    request.get(`${page.url()}ninite.exe`).pipe(fs.createWriteStream(`${params.path}/${params.name}.exe`))
                } else if (!params.name) {
                    request.get(`${page.url()}ninite.exe`).pipe(fs.createWriteStream(`${params.path}/Ninite ${params.apps}.exe`))
                }
            } else if (!params.path) {
                if (params.name) {
                    request.get(`${page.url()}ninite.exe`).pipe(fs.createWriteStream(`.//${params.name}.exe`))
                } else if (!params.name) {
                    request.get(`${page.url()}ninite.exe`).pipe(fs.createWriteStream(`.//Ninite ${params.apps}.exe`))
                }
            }
            await browser.close();
        }, 750)
    },
}; 
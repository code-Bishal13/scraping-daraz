const axios = require("axios");
const process = require('process');

const cheerio = require("cheerio");

console.log(process.argv);

const scrape = async (item) => {
  config = {
    method: 'get',
    url: `https://www.daraz.com.np/catalog/?q=${item}&_keyori=ss&from=input&spm=a2a0e.searchlist.search.go.7a6b2911Ibio6x`,
  };
  const response = await axios(config)
  const data = response.data
  const $ = cheerio.load(data)
  const datas=(JSON.parse($('script')[3].children[0].parent.children[0].data.replaceAll("window.pageData=","")))
  console.log(datas.mods.listItems.splice(0,10))

};
scrape(process.argv[2])

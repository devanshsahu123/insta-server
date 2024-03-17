import axios from 'axios';
import fs from 'fs';
import qs from "qs"
import ejs from "ejs"
import Cheerio from 'cheerio';
import { gzip } from 'zlib';
class downlodController {


    static downloadPost = async (req, res) => {
        const url = "https://www.instagram.com/p/Cxao2EMMvbB/?utm_source=ig_web_copy_link"


        // Fetch the HTML content of the Instagram page
        const response = await axios.get(url);
        const html = response.data;

        const regex = /"display_url":"(https:\/\/[^"]+)"/;
        const match = html.match(regex);

        console.log(match, "data")


        //    return res.send(html);
        return res.render('response.data')
        // Extract the media URL from the HTML content
        // const matches = response.data.match(/"display_url":"([^"]+)"/);
        // if (!matches || matches.length < 2) {
        //   throw new Error('Media URL not found on the page');
        // }

        const mediaUrl = matches[1].replace(/\\u0026/g, '&'); // Handle unicode escape sequences

        // Download the media
        const mediaResponse = await axios({
            method: 'get',
            url: mediaUrl,
            responseType: 'stream',
        });

        const fileName = 'downloaded_media.jpg'; // You can generate a unique name
        const writeStream = fs.createWriteStream(fileName);
        mediaResponse.data.pipe(writeStream);






        return res.send({
            status: true,
            msg: 'downloaded'
        })
    }

    // static viewPost = async (req, res) => {
    //     try {


    //         const url = 'https://sssinstagram.com/r';


    //         const headers = {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json',
    //             'X-Xsrf-Token': 'eyJpdiI6ImhRUyt4TW1hRDFJTjVYR0RpZmZwSXc9PSIsInZhbHVlIjoic2hoU002dlRyVk1USjYrUVJna0txczBFOW9CNHB6RzRyRG1rWldqdVNIWnFiMDd3OG4rVjM2SDdzU3c5T1NXdTNpNXYvVzYwMFJzajcxZDlabHVET0kvdWFLcTRNaHJJcy9XZmJ4Zm1SQWNITWUvcGFuaWRaV2o3T0JtaEltdGIiLCJtYWMiOiJhMzkzMTNmN2FiNmE5NjhjMGQ3ZWU4MWZkMGM5ZDBhYTFmNmI2ODc4ZTAzNzg0NjAzYzNiYjY2ZmZjY2FiYjc4IiwidGFnIjoiIn0='
    //         };

    //         ;


    //         const result = await axios.post(url, {
    //             link: "https://www.instagram.com/reel/C4GRjPEvDwp/", token: ""
    //         }, { headers });

    //         console.log(result);
    //         return res.render('downloadPage')
    //     } catch (error) {
    //         console.log(error);
    //         return res.send({ error })
    //     }
    // }

    static viewPost = async (req, res) => {
        try {
            const url = 'https://vidinsta.app/web/home/fetch';

            const headers = {
                'authority': 'vidinsta.app',
                'accept': 'text/html, */*; q=0.01',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'cookie': '_csrf=5b27f2687e97524769c5f437a915aa4fdaf617161741ead888cb345e522d46a1a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22I9DpxOMcMO07LS_Ic61doDtWjcYS73mu%22%3B%7D; _ga_V3DS4P6657=GS1.1.1710431015.1.0.1710431015.0.0.0; _ga=GA1.1.1062136457.1710431015; __gads=ID=36a8754ee5a0d480:T=1710431043:RT=1710431043:S=ALNI_MbvnJJwMZwjLKCDRRY8ybaBnVsaag; __gpi=UID=00000d37a371e2a1:T=1710431043:RT=1710431043:S=ALNI_MZEP_uvjfRLpIfdbEx3cthYCy1zSQ; __eoi=ID=173e08d097d2d827:T=1710431043:RT=1710431043:S=AA-Afjb7HUKu1vkNAEEWPa_HNLZG; FCNEC=%5B%5B%22AKsRol-yWAvi3J8GPXMhd4je06zc5Hm_WWTrdXDFAKbeEB4EZ3SCLhavb-0ZKge3qi6ey2beFXnmo4XasCkN98CvxpGKClBfJSAQBjSjTOYuyrgngVCG7DRUBqtjzYGtZ7rAMrJ97DB2CauUyr64RMUZAwALM1-O4A%3D%3D%22%5D%5D; _ga_C685S7JGC5=GS1.1.1710431015.1.1.1710431056.0.0.0',
                'origin': 'https://vidinsta.app',
                'referer': 'https://vidinsta.app/',
                'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                'x-csrf-token': 'hj4OCv1Q4OulobuhwntsHHM_rBKC-ji3OW3txFEGFb_PB0p6hR-tiOjui5aOKDNVEAmddu2-TOBTDrSXZjV4yg==',
                'x-requested-with': 'XMLHttpRequest'
            };

            const data = 'url=https%3A%2F%2Fwww.instagram.com%2Freel%2FC4GRjPEvDwp&type=';

            axios.post(url, data, { headers })
                .then(response => {
                    res.send(response.data)
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });

        } catch (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    }
}

export default downlodController

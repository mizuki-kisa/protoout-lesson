const axios = require('axios');
const qs = require('querystring');

console.log(qs.stringify({
    message: 'ProtoOut Studioからの通知だよー！GitHub Actionsだよー！',
    imageThumbnail: "http://randomfox.ca/images/60.jpg",
    imageFullsize: "http://randomfox.ca/images/60.jpg",
}))
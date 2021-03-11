let URL = process.argv[2]
let localPath = process.argv[3];
const fs = require('fs');

const request = require('request');

const fetchNSave = function(URL, localPath) {
  request(URL, (error, response, body) => {
    if (error) {
      console.log('error:', error); 
      return;
    } 
    fs.writeFile(localPath, body, (error) => {
      if (error) {
        console.log('error:', error)
        return;
      } else {
        console.log(`Downloaded and saved to ${localPath}`);
      }
    });
    }) 
};

fetchNSave(URL, localPath);
  

  


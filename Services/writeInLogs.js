const fs = require("file-system");

function writeInLogs(message) {
  try {
    fs.open("../logs.txt", "a", (err, fd) => {
      if (err) {
      } else {
        const date = new Date();
        const time = date.getTime();
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        if (month.toString().length == 1) {
          month = "0" + month;
        }
        const day = date.getDate();
        const hour = date.getHours();
        let minute = date.getMinutes();
        if (minute.toString().length == 1) {
          minute = "0" + minute;
        }

        const errorText = `${month}/${day}/${year}  ${hour}:${minute} \n  ${message} \n\n`;


        fs.appendFile("./logs.txt", errorText, function (err) {
        });
      }
    });
  } catch (err) {
    writeInLogs(err);
  }
}

module.exports = writeInLogs;

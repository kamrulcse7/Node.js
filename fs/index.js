const fs = require('fs');
// // console.log(fs);

// file create and value set. this way use if we set another value in this file then the override value
fs.writeFile('info.txt', 'My name is Kamrul Hasan. I am from Noakhali, Bangladesh.', function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("File create successful")
  }
})
// or another way to use error function
fs.writeFile('info2.txt', 'I am a student of Dhaka International University', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File create successful");
  }
})

// add value in existing file. If the file does not exist, it will create the file
fs.appendFile('info.txt', 'I am 27 years old', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Successful");
  }
});

// read file data (utf-8 is encoding system)
fs.readFile('info.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// rename file (fast one is old name and last one is new name)
fs.rename('info.txt', 'information.txt', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Rename Successful");
  }
})


// delete file
fs.unlink('info2.txt', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Delete Successful");
  }
});


// check file exist in folder
fs.exists('information.txt', (e) => {
  if (e) {
    console.log('this file exist');
  } else {
    console.log('this file not found');
  }
});


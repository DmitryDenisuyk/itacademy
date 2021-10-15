const fs = require('fs-extra');

fs.emptyDir('./home work L8/folder1', err => {
  if (err) return console.log(err);
  console.log('Folder was created'); {

    fs.writeFile('./home work L8/folder1/file.txt', "Text", err => {
      if (err) return console.error(err);
      console.log('File was created'); {

        fs.emptyDir('./home work L8/folder2', err => {
          if (err) return console.log(err);
          console.log('Folder2 was created'); {

            fs.copyFile('./home work L8/folder1/file.txt', './home work L8/folder2/file.txt', err => {
              if (err) return console.log(err);
              console.log('File was copied'); {

                fs.remove('./home work L8/folder2/file.txt', err => {
                  if (err) return console.log(err);
                  console.log('File was removed'); {

                    fs.remove('./home work L8/folder1', err => {
                      if (err) return console.log(err);
                      console.log('Folder1 was removed'); {
                        
                        fs.remove('./home work L8/folder2', err => {
                          if (err) return console.error(err);
                          console.log('Folder2 was removed');
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
var fs = require('fs');

fs.appendFile('test.txt', 'Hello Class!', function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Append operation complete.');
});
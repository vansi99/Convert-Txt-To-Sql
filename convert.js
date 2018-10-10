const con = require('./database');
let count = 0;
const sql = "INSERT INTO my_db (word, detail) VALUES (?,?)";
async function line() {

    const lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('./E_V.txt')
    });

    lineReader.on('line',await function (line) {
        var arr = line.split('*');
        arr[0]=arr[0].toLowerCase();
        console.log(arr[0],arr[1]);
        var str = arr[0] + "," + arr[1];
        var  stmt = con.prepare("INSERT INTO dictionary VALUES(?,?);");
        stmt.run(arr[0],arr[1]);
        count++;
        console.log(count);

    });
}
line();
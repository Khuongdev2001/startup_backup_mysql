const mysqlBackup = require("./mysql");
const fs = require("fs");

mysqlBackup({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}).then(data => {
    let dir = process.env.FOLDER_BACKUP ?? "backups" ;
    const filename = `${dir}/backup_glampoint_${Number(new Date)}.sql`;
    fs.writeFile(filename, data, function (error) {
        if (error) throw error;
        console.log('Saved!', filename);
    });
})

var PORT = 8022;
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var cache = {};
var length_cache = {};
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var LastModified = new Date().toUTCString();
var mime = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "application/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml",
    "woff2": "font/woff2",
    "woff": "font/woff",
    "ttf": "font/ttf",
    "eot": "font/eot"
};
var expiresConfig = {
    fileMatch: /^(gif|png|jpg|js|css|woff|woff2|ttf|eot)$/ig,
    maxAge: 60 * 60 * 24 * 365,
    age: 60 * 60 * 24 * 365 * 1000
};
var callback = function (request, response) {
    var clientTime = request.headers["if-modified-since"];
    var pathname_ = url.parse(request.url).pathname.replace(/%20|\.\.|\s/g, "");
    var pathname = pathname_.split(",");
    var ext = path.extname(pathname_);
    ext = ext ? ext.slice(1) : 'unknown';
    var contentType = mime[ext] || "text/plain";
    var header = {
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Methods': 'GET',
        'Content-Type': contentType
    };

    if (LastModified === clientTime) {
        response.writeHead(304, header);
        response.end();
        return;
    }
    if (pathname_ === "/favicon.ico") {
        response.writeHead(200, header);
        response.end();
        return;
    }
    var array = [];
    var length = 0;
    pathname.forEach(function (ele) {
        array.push(new Promise(function (resolve, reject) {
            var realPath = path.join("assets",path.normalize(ele));
            if (!cache[realPath]) {
                fs.stat(realPath, function (e, status) {
                    if (e === null) {
                        length = status.size;
                        length_cache[realPath] = length;
                        fs.readFile(realPath, "binary", function (err, file) {
                            if (!err) {
                                cache[realPath] = file;
                                resolve(file);
                            } else {
                                reject(realPath);
                            }
                        });
                    } else {
                        reject(realPath);
                    }
                });
            } else {
                length = length_cache[realPath];
                resolve(cache[realPath]);
            }
        }));
    });
    Promise.all(array).then(function (values) {
        var expires = new Date();
        expires.setTime(expires.getTime() + expiresConfig.age);
        if (values.length === 1) {
            header["Content-Length"] = length;
        }
        header["Expires"] = expires.toUTCString();
        header["Cache-Control"] = "public, max-age=" + expiresConfig.maxAge;
        header["Last-Modified"] = LastModified;

        response.writeHead(200, header);
        values.forEach(function (file) {
            if (file !== false) {
                response.write(file, "binary");
                file.length !== 1 && response.write("\n");
            }
        });
        response.end();
    }).catch(function (path) {
        response.writeHead(404, header);
        response.write(path + " not found!");
        response.end();
    });
};
//if (cluster.isMaster) {
//    for (var i = 0; i < numCPUs; i++) {
//        cluster.fork();
//    }
//    cluster.on('listening', function (worker, address) {
//        console.log('listening: worker ' + worker.process.pid + ', Address: ' + address.address + ":" + address.port);
//    });
//    cluster.on('exit', function (worker, code, signal) {
//        console.log('worker ' + worker.process.pid + ' died');
//    });
//} else {
//    http.createServer(callback).listen(PORT);
//}

http.createServer(callback).listen(PORT);
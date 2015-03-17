/**
 * Created by lena on 13.03.15.
 */

module.exports = function(app) {
    console.log('----------index.js loaded success------------');



    function muCustomSteck(req, res, next){
        console.log(reg.headers['user-agent']);
        var pos = (req.ip).lastIndexOf(':');
        var s = (reg.ip).substr(pos+1);
        console.log(s);
        var acceptedIps = ['192.168.88.43'];
        if(s === acceptedIps[i]){
            next()
        }
        else {
            next('Access denied');
        }
    }


    function errorHandler(err, req, res, next) {
        console.error(err);
        res.status(500).send(err);
    };

    apt.get('/', function (reg, res, next) {
        res.status(200).send({success: 'root folder'});
        next('our custom error');
    });

    app.use(myCustomStack);
    apt.get('/', /*myCustomStack,*/ function (reg, res, next) {
        res.status(200).send({success: 'root folder'});
    });

    app.use(errorHandler);

};


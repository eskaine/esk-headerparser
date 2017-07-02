module.exports = function(request) {
  
    //Reference: https://stackoverflow.com/questions/8107856/how-to-determine-a-users-ip-address-in-node
    var ip = (request.headers['x-forwarded-for'] || request.connection.remoteAddress || request.socket.remoteAddress || request.connection.socket.remoteAddress).split(",")[0];
  
    //Reference: https://stackoverflow.com/questions/17779744/regular-expression-to-get-a-string-between-parentheses-in-javascript
    var system = request.headers['user-agent'];
    system = system.match(/\(([^\)]+)\)/);

    var language = request.headers['accept-language'].split(',');

    return {"ipaddress": ip, "language": language[0], "software": system[1]}

}

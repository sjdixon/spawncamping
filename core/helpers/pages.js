/**
 * Created by stephen on 05/03/14.
 */

exports.PAGE_SIZE = 30;

exports.getPageNumber = function(query){
    if (!query){
        return 0;
    }
    else {
        var offset = parseInt(query.split('=')[1])-1;
        console.log('offset=' + offset);
        return offset;
    }
}

exports.getItemOffset = function(req){
    return exports.getPageNumber(url.parse(req.url).query) * exports.PAGE_SIZE;
}
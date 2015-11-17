'use strict'

module.exports = function(content, file, setting) {
    var re = /(<a.*?)href=(['"]?)([^'"\s?]+)((\?[^'"\s]*)?)\2([^>]*>)/ig;

    return content.replace(re, function(all, prefix, quote, value, query, queryInner, postfix) {
        
        if(value.substr(0,1) === '/' && value.indexOf(setting.left_delimiter) == -1){

            var f = fis.uri(value);
            

            if(f.file) {
                all = prefix + 'href=' + quote + f.file.release + query + quote + postfix
            }           
        }


        return  all
    })
}
'use strict'

module.exports = function(content, file, setting) {
    var re = /(<a.*?)href=(['"]?)([^'"\s?]+)((\?[^'"\s]*)?)\2([^>]*>)/ig;

    return content.replace(re, function(all, prefix, quote, value, query, queryInner, postfix) {
        
        if(value.substr(0,1) === '/' && value.indexOf(setting.left_delimiter) == -1){

            var f = fis.uri(value);

            if(f.file) {
                if(f.file.useHash){
                    var releaseFile = f.file.release, 
                        realName = releaseFile.substring(0, releaseFile.lastIndexOf('.')), 
                        extName = releaseFile.substr(releaseFile.lastIndexOf('.') + 1);

                    all = prefix + 'href=' + quote + f.file.domain + realName + '_' + f.file.getHash() + '.' + extName + query + quote + postfix;
                }else{
                    all = prefix + 'href=' + quote + f.file.domain + f.file.release + query + quote + postfix;
                }
            }           
        }


        return  all
    })
}
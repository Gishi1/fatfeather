$(function() {
    //settings for repo
    repo = '';
    //get url pram
    $.getUrlVar = function(key){
        var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search);
        return result && unescape(result[1]) || "";
    };



    if(getUrlVar(page) === 'edit'){
        import GitHub from 'github-api';

        if($.cookie('git') === null){

        }

    }
});
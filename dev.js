if(typeof YMJsObject === 'undefined') {
    window.YMJsObject={
        writeLog: function(s){console.log(s)},
        onViewClicked: function(){
            console.log('onViewClicked', arguments)
        }
    }
}

var model = function model(XMLHttpRequest)  {
    this.XMLHttpRequest = XMLHttpRequest
}

model.prototype.getItem = function getItem(index, fn){
    var oReq = new this.XMLHttpRequest()

    oReq.onload = onLoad = (e) =>{
        var ajaxResponse = JSON.parse(e.currentTarget.responseText)
        var item = ajaxResponse[index]
        item.index = index
        item.count = ajaxResponse.length
        fn(item)
    }
    oReq.open('GET', 'datafile.js')
    oReq.send()
}


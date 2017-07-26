

var controller = function controller(view, model){
    this.view = view
    this.model = model
}

controller.prototype.initialize = function initialize(){
    this.view.onClickGetItem = this.onClickGetItem.bind(this)
}

controller.prototype.onClickGetItem = function onClickGetItem(e){
    var target = e.currentTarget
    var index = parseInt(target.dataset.itemIndex, 10)
    this.model.getItem(index, this.showItem.bind(this))
}

controller.prototype.showItem = function showItem(itemModelData){
    var itemViewModel = {
        name: itemModelData.name,
        imageUrl: itemModelData.imageUrl,
        size: itemModelData.size,
        favoriteFood: itemModelData.favoriteFood
    }
    itemViewModel.previousIndex = itemModelData.index === 0 ? itemModelData.count -1 : itemModelData.index -1
    itemViewModel.nextIndex = itemModelData.index === itemModelData.count -1 ? 0 : itemModelData.index + 1
    this.view.render(itemViewModel)
}

var itemModel = new model(XMLHttpRequest)
var targetElement = document.getElementById('list')

var itemView = new view(targetElement)
var itemController = new controller(itemView, itemModel)

itemController.initialize()
itemController.onClickGetItem({currentTarget: {dataset:{itemIndex : 0}}})


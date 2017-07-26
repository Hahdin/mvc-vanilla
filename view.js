
var view = function view(element){
    this.element = element
    this.onClickGetItem = null
}

view.prototype.render = function render(viewModel){

  let keys = Object.keys(viewModel)
  let vals = Object.values(viewModel)
  //name, image url, data 1, data 2, prev index, next index
  console.log(keys, vals)
  this.element.innerHTML = '<h3>' + viewModel[keys[0]] + '</h3>' +
    '<img class="item-image" src="' + viewModel[keys[1]] +
    '" alt="' + viewModel[keys[0]] + '" />'  +
    '<p><b>'+ keys[2] +':</b> ' + viewModel[keys[2]] + '</p>' +
    '<p><b>' + keys[3] +':</b> ' + viewModel[keys[3]] + '</p>' +
    '<a id="previousItem" class="previous button" href="javascript:void(0);"' +
    ' data-item-index="' + viewModel[keys[4]] + '">Previous</a> ' +
    '<a id="nextItem" class="next button" href="javascript:void(0);"' +
    ' data-item-index="' + viewModel[keys[5]] + '">Next</a>'

  this.previousIndex = viewModel.previousIndex
  this.nextIndex = viewModel.nextIndex
  var previousItem = this.element.querySelector('#previousItem')
  previousItem.addEventListener('click', this.onClickGetItem)
  var nextItem = this.element.querySelector('#nextItem')
  nextItem.addEventListener('click', this.onClickGetItem)

}
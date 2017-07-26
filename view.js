
var view = function view(element){
    this.element = element
    this.onClickGetItem = null
}

view.prototype.render = function render(viewModel){
    this.element.innerHTML = '<h3>' + viewModel.name + '</h3>' +
    '<img class="item-image" src="' + viewModel.imageUrl +
      '" alt="' + viewModel.name + '" />' +
    '<p><b>Size:</b> ' + viewModel.size + '</p>' +
    '<p><b>Favorite food:</b> ' + viewModel.favoriteFood + '</p>' +
    '<a id="previousItem" class="previous button" href="javascript:void(0);"' +
      ' data-item-index="' + viewModel.previousIndex + '">Previous</a> ' +
    '<a id="nextItem" class="next button" href="javascript:void(0);"' +
      ' data-item-index="' + viewModel.nextIndex + '">Next</a>'

      this.previousIndex = viewModel.previousIndex
      this.nextIndex = viewModel.nextIndex
      var previousItem = this.element.querySelector('#previousItem')
      previousItem.addEventListener('click', this.onClickGetItem)
      var nextItem = this.element.querySelector('#nextItem')
      nextItem.addEventListener('click', this.onClickGetItem)

}
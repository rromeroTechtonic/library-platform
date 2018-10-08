function Library(){
 this.bookShelf = new Array();
}

Library.prototype.addBook = function(book)
{
  for(var i=0; i<this.bookShelf.length; i++) {
      if(this.bookShelf[i].title.toLowerCase().trim() === book.title.toLowerCase().trim()){
        return false;
      }
    }
    this.bookShelf.push(book);
    return true;
 //
};

Library.prototype.removeBookByTitle = function(title)//title will be a string
 {
  for(var i=0; i<this.bookShelf.length; i++) {
    //1st time we loop this.bookShelf[0].title value is "harry potter"
    //2nd time we loop this.bookShelf[1].title value is "IT"
     if(this.bookShelf[i].title === title){
        //only way to end up inside this if statement is if the value of this.bookShelf[i].title equals title
      this.bookShelf.splice(i,1)
      return true;
       }
     }
return false;
};

Library.prototype.removeBookByAuthor = function(author)
  {
    var haveRemoved = false;
    for(var i=0; i<this.bookShelf.length; i++) {
      if(this.bookShelf[i].author === author){
        this.bookShelf.splice(i,1);
        i--;
        haveRemoved = true;
      }
    }
    return haveRemoved;
};

Library.prototype.getRandomBook = function()
{
  if(this.bookShelf.length === 0){
    return null;
  }

  var max = this.bookShelf.length;
  var getRandomBook = this.bookShelf[Math.floor(Math.random() * max)];
  return getRandomBook;
};

// Library.prototype.getBookByTitle = function (title)
// {
//
// };
//
// Library.prototype.getBookByAuthor = function (author)
// {
//
// };
//
// Library.prototype.addBooks = function (books)
// {
//
// };
//
// Library.prototype.getAuthors = function ()
// {
//
// };
//
// Library.prototype.getRandomAuthorName = function ()
// {
//
// };

document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();

});

setTimeout(function(){
 gLibrary.addBook(mango);
 gLibrary.addBook(stormy);
},500);

function Library(){
 this.bookShelf = new Array();
}

Library.prototype.addBook = function(book)
{
  for(var i=0; i<this.bookShelf.length; i++) {
      if(this.bookShelf[i].title === book.title){
        return false;
      }
    }
    this.bookShelf.push(book);
    return true;
};

Library.prototype.removeBookByTitle = function(title)
 {
  for(var i=0; i<this.bookShelf.length; i++) {
     if(this.bookShelf[i].title === book.title){
     return false;
       }
     }
     this.bookShelf.splice(title);
     return true;
};

Library.prototype.removeBookByAuthor = function(author)
  {
    for(var i=0; i<this.bookShelf.length; i++) {
      if(this.bookShelf[i].author === author){
        this.bookShelf.splice(i,1,);
        i--;
        return true;
      }
    }
    return false;
};

Library.prototype.getRandomBook = function()
{
  max = Library.length;
  var getRandomBook = Library[Math.floor(Math.random() * max)];
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

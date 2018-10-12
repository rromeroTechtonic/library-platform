function Library(){
 this.bookShelf = new Array();
}

Library.prototype.addBook = function(book)
{
  for(var i=0; i<this.bookShelf.length; i++) {
      if (this.bookShelf[i].title === book.title){
        return false;
      }
    }
    this.bookShelf.push(book);
    return true;
};

Library.prototype.removeBookByTitle = function(title)
  {
    var haveRemoved = false;
    for(var i=0; i<this.bookShelf.length; i++) {
      if(this.bookShelf[i].title === title){
        this.bookShelf.splice(i,1);
        i--;
        haveRemoved = true;
      }
    }
    return haveRemoved;
};

Library.prototype.removeBookByAuthor = function(authorName)
  {
    var haveRemoved = false;
    for(var i=0; i<this.bookShelf.length; i++) {
      if(this.bookShelf[i].author === authorName){
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


Library.prototype.getBookByTitle = function(title) {
  var foundBooks = [  ];
  for (var i = 0;   i < this.bookShelf.length; i++) {
    if (this.bookShelf[i].title.indexOf(title) > -1) {
      foundBooks.push(this.bookShelf[i])
    }
  }
  return foundBooks;
};


Library.prototype.getBookByAuthor = function(author) {
  var foundBooks = [  ];
  for (var i = 0;   i < this.bookShelf.length; i++) {
    if (this.bookShelf[i].author.indexOf(author) > -1) {
      foundBooks.push(this.bookShelf[i])
    }
  }
  return foundBooks;
};


Library.prototype.addBooks = function(bookArray) {
  var addedBooks = 0;
	 for (var i = 0; i < bookArray.length; index++) {
  	if (this.addBook(bookArray[i])){
			addedBooks ++;
		}
  }
   return addedBooks
 };

Library.prototype.getAuthors = function () {
  var foundAuthors = [];
  if (this.bookShelf.length === 0) {
    return foundAuthors;
  }
  foundAuthors.push(this.bookShelf[0].author);
  for (var i = 0; i < this.bookShelf.length; i++) {
    if (!foundAuthors.includes(this.bookShelf[i].author)) {
      foundAuthors.push(this.bookShelf[i].author);
    }
  }
  return foundAuthors;
}


Library.prototype.getRandomAuthorName = function() {
  var randomBook = this.getRandomBook();
  return randomBook.author;
};


document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();
});

setTimeout(function(){
 gLibrary.addBook(mango);
 gLibrary.addBook(stormy);
 gLibrary.addBook(caramelo);
},500);

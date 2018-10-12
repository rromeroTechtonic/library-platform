function Book(title, author, numPages, pubDate)
{
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;
}

// Book.prototype.editBook = function(oBook)
// {
// 
// };

var mango = new Book ("House On Mango Street", "Sandra Cisneros", 110, 1984);
var stormy = new Book ("Full Disclosure", "Stormy Daniels", 288, 2018);
var caramelo = new Book ("Caramelo", "Sandra Cisneros", 449, 2002);

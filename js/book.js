function Book(title, author, numPages, pubDate)
{
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;
};

Book.prototype.editBook = function(oBook)
{

};

var stormy = new Book( {
  title: "Full Disclosure",
  author: "Stormy Daniels",
  numPages: "288",
  pubDate: 2018
});

var mango = new Book( {
  title: "House On Mango Street",
  author: "Sandra Cisneros",
  numPages: "110",
  pubDate: 1984
});

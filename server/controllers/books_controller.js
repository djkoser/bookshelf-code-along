const books = []; 
let id = 0;

function Book(title, author, key = id) {
  this.id = key;
  this.title = title;
  this.author = author;
}


module.exports = {
  read: (req,res,next) => res.status(200).send(books),
  create: (req,res,next) => {
    let newBook = new Book(req.body.title,req.body.author) 
    books.push(newBook);
    id = books.length;  
    res.status(200).send(books);
  },
  update: (req,res,next) => {
    books.forEach((book,ind,arr)=> book.id===parseInt(req.params.id) ? arr[ind]= new Book(req.body.title || book.title, req.body.author || book.author, ind) : null )
    res.status(200).send(books);
  }, 
  delete: (req,res,next) => {
    books.forEach((book,ind,arr)=> book.id===parseInt(req.params.id) ? arr.splice(ind,1) : null )
    res.status(200).send(books); 
  }
};
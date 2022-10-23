class LibraryCollection{
        constructor(capacity){
            this.capacity = Number(capacity);
            this.books = [];
        }

        addBook (bookName, bookAuthor){
            
            if (this.capacity === 0){
                throw new Error("Not enough space in the collection.")
            }
            this.books.push({
                bookName,
                bookAuthor,
                payed: false
            })
            this.capacity--
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }

        payBook( bookName ) {
            let currentBook = this.books.find(x => x.bookName === bookName);

            if(!currentBook){
                throw new Error (`${bookName} is not in the collection.`)
            }
            if(currentBook.payed){
                throw new Error(`${bookName} has already been paid.`)
            }else{
                currentBook.payed = true;
                return `${bookName} has been successfully paid.`
            }
            
        }

        removeBook(bookName) {
            let currentBook = this.books.find(x => x.bookName === bookName);

            if(!currentBook){
                throw new Error ("The book, you're looking for, is not found.")
            }else  if(currentBook.payed === false){
                throw new Error (`${bookName} need to be paid before removing from the collection.`)
            }else{

                this.books.filter(currentBook => currentBook.bookName !== bookName );
                return `${bookName} remove from the collection.`
            }

        }

        getStatistics(bookAuthor){

           let currentBook = this.books.find(x => x.bookAuthor === bookAuthor);
           let paidYesOrNo = '';
           let buff = [];
           
           if(currentBook){
            currentBook.payed ? paidYesOrNo = 'Has Paid' : paidYesOrNo = 'Not Paid'
           }

           if(!bookAuthor){
            let firstLine = `The book collection has ${this.capacity} empty spots left.`
            buff.push(firstLine);

            this.books.sort((a,b) => a.bookName.localeCompare(b))
                .forEach((book) => {
                    book.payed === false ? paidYesOrNo = 'Not Paid' : paidYesOrNo = "Has Paid"

                    buff.push(`${book.bookName} == ${book.bookAuthor} - ${paidYesOrNo}.`);
                })
                return buff.join('\n');
           }else if (currentBook){
            return `${currentBook.bookName} == ${currentBook.bookAuthor} - ${paidYesOrNo}."`
           }else if(!currentBook){
            return `${bookAuthor} is not in the collection.`
           }
 
        }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());




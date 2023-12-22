class Book {
    constructor(title, author, readingStatus) {
      this.title = title;
      this.author = author;
      this.readingStatus = readingStatus;
    }

    displayInfo() {
      if (this.readingStatus) {
        console.log(`Already read '${this.title}' by ${this.author}.`);
      } else {
        console.log(`You still need to read '${this.title}' by ${this.author}.`);
      }
    }
  }

  const title1 = prompt("Enter the title of the first book:");
  const author1 = prompt("Enter the author of the first book:");
  const readingStatus1 = confirm(`Have you already read this book?`);
  
  const book1 = new Book(title1, author1, readingStatus1);

  book1.displayInfo();
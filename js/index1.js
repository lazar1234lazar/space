
document.getElementById('search-button').addEventListener('click', function(){
    var searchTerm=
    document.getElementById('search-input').value.toLowerCase();
    var books = document.querySelectorAll('.book');
    books.forEach(function(book) { var title = 
      book.querySelector('h3').textContent.toLocaleLowerCase();
      if (title.includes(searchTerm)) {
        book.style.display = 'block';
     } else {
     book.style.display = 'none'
     }
     });
    });
    
    const booksContainer = document.querySelector('.books');
    const showMoreButton = document.getElementById('show-more');
    const booksPerPage = 12;
    let currentVisibleBooks = booksPerPage;
  
    // Function to show/hide books based on the currentVisibleBooks variable
    function updateVisibleBooks() {
      const books = document.querySelectorAll('.book');
      books.forEach((book, index) => {
        if (index < currentVisibleBooks) {
          book.style.display = 'block';
        } else {
          book.style.display = 'none';
        }
      });
    }
  
    // Function to handle the "Show More" button click event
    
    
    function showMoreBooks() {
      currentVisibleBooks += booksPerPage;
      updateVisibleBooks();
  
      // Hide the "Show More" button if all books are visible
      if (currentVisibleBooks >= document.querySelectorAll('.book').length) {
        showMoreButton.style.display = 'none';
      }
    }
  
    // Show the initial set of books
    updateVisibleBooks();
  
    // Add event listener to the "Show More" button
    showMoreButton.addEventListener('click', showMoreBooks);
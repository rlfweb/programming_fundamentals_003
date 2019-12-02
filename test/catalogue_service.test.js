const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {

  describe("catalogueService.countBooksByAuthor", () => {
    
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });
});



describe("catalogueService", () => {
  describe("catalogueService.checkBookByTitle", () => {

    test("returns true if the book exists", () => {
      expect(catalogueService.checkBookByTitle("The Assassination of Margaret Thatcher")).toBe(true);
    });

    test("returns false if the book does not exist", () => {
      expect(catalogueService.checkBookByTitle("Moby Dick")).toBe(false);
    });
  });
});



describe("catalogueService", () => {

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the total number of books that begin with a particular letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
      expect(catalogueService.countBooksByFirstLetter("w")).toBe(2);
    });
  });
});




describe("catalogueService", () => {

  describe("catalogueService.getQuantity", () => {
    test("when given a title, returns the quantity of books available of that title", () => {
      expect(catalogueService.getQuantity("A Place of Greater Safety")).toBe(11);
      expect(catalogueService.getQuantity("Wolf Hall")).toBe(33);
    });
  });
});




describe("catalogueService", () => {

  describe("catalogueService.getBooksByAuthor", () => {
    test("when given an author, returns the data for each title written by that author", () => {
      
      expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual
        ({ title: "2666", author: "Robert Bolaño", quantity: 17 },
        { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 });
      
      expect(catalogueService.getBooksByAuthor("J.D. Salinger")).toEqual
        ({ title: "Catcher in the Rye", author: "J.D. Salinger", quantity: 10 });
    
      });
  });
});




describe("catalogueService", () => {

  describe("catalogueService.checkQuantity", () => {
    test("for a particular title, when given a quantity, returns true if quantity is correct", () => {
      
      expect(catalogueService.checkQuantity("By Night In Chile", 8)).toBe(true);
      expect(catalogueService.checkQuantity("By Night In Chile", 100)).toBe(false);
    
      });
  });
});


type AddressType = {
   city: string
   house?: number
}
export type UserType = {
   name: string
   hair: number
   address: AddressType
}
export type LaptopType = {
   title: string
}
export type UserWithLaptopType = UserType & {
   laptop: LaptopType
}
export type UserWithBooksType = {
   books: string[]
}
type CompanyType = {
   id: number
   title: string
}
export type UserWithCompanyType = {
   companies: CompanyType[]
}


export const makeHairStyle = (u: UserType, power: number) => {
   return {
      ...u,
      hair: u.hair / power,
   };
};
export const moveUser = (u: UserWithLaptopType, city: string) => {
   return {
      ...u,
      address: {
         ...u.address,
         city: city
      }
   };
   // copy.address = {
   //    ...copy.address,
   //    city: city
   // };
}
export const upgradeUserLaptop = (u: UserWithLaptopType, laptop: string) => {
   return {
      ...u,
      laptop: {
         ...u.laptop,
         title: laptop
      }
   }
}
export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBooksType, house: number) => {
   return {
      ...u,
      address: {
         ...u.address,
         house: house
      }
   };
}
export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooksType, newBooks: string[]) => {
   return {
      ...u,
      books: [...u.books, ...newBooks]
   }
}
export const updateBook = (u: UserWithLaptopType & UserWithBooksType, currentBook: string, newBook: string) => ({
   /**
    * вместо return ставим кгрулые скобки
    */
      ...u,
      books: u.books.map(el => el === currentBook ? newBook : el)
})
export const removeBook = (u: UserWithLaptopType & UserWithBooksType, deleteBook: string) => ({
   /**
    * вместо return ставим кгрулые скобки
    */
      ...u,
      books: u.books.filter(el => el !== deleteBook)
})
export const updateCompanyTitle = (u: UserWithCompanyType, companyId: number, newTitle: string) => ({
   /**
    * вместо return ставим кгрулые скобки
    */
      ...u,
      companies: u.companies.map(el => el.id === companyId
         ? {...el, title: newTitle}
         : el)
})
export const updateCompanyTitle2 = (company: { [key: string]: CompanyType[]},
                                    userName: string,
                                    companyId: number,
                                    newTitle: string
                                    ) => {
   const companyCopy = {...company};
   companyCopy[userName] = companyCopy[userName].map(el => el.id === companyId
   ? {...el, title: newTitle}
   : el
   )

   return companyCopy;
}
import {
   addNewBooksToUser,
   makeHairStyle,
   moveUser,
   moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
   upgradeUserLaptop,
   UserType,
   UserWithBooksType, UserWithCompanyType,
   UserWithLaptopType
} from "./10_01";


test('reference type test', () => {

   const user: UserType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk'
      }
   }

   const awesomeUser = makeHairStyle(user, 2);

   expect(user.hair).toBe(32);
   expect(awesomeUser.hair).toBe(16);
   expect(awesomeUser.address).toBe(user.address);
});
test('change adress', () => {

   let user: UserWithLaptopType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: 'ZenBook'
      }
   }

   const movedUser = moveUser(user, 'Kiev');

   expect(user).not.toBe((movedUser));
   expect(user.address).not.toBe(movedUser.address);
   expect(movedUser.address.city).toBe('Kiev');
   expect(user.laptop).toBe(movedUser.laptop)
})
test('upgrade laptop to macbook', () => {

   let user: UserWithLaptopType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: 'ZenBook'
      }
   }

   const movedLaptop = upgradeUserLaptop(user, 'MackBook');

   expect(user).not.toBe((movedLaptop));
   expect(user.laptop).not.toBe(movedLaptop.laptop);
   expect(user.address).toBe(movedLaptop.address);
   expect(movedLaptop.laptop.title).toBe('MackBook');
   expect(user.laptop.title).toBe('ZenBook');
})
test('move user to other house', () => {

   let user: UserWithLaptopType & UserWithBooksType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: 'ZenBook'
      },
      books: ['css', 'html', 'js', 'react']
   }

   const changeHouse = moveUserToOtherHouse(user, 99);

   expect(user).not.toBe(changeHouse);
   expect(user.books).toBe(changeHouse.books);
   expect(user.laptop).toBe(changeHouse.laptop);
   expect(user.address).not.toBe(changeHouse.address);
   expect(user.address.house).toBe(12);
   expect(changeHouse.address.house).toBe(99);
})
test('add new books to user', () => {

   let user: UserWithLaptopType & UserWithBooksType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: 'ZenBook'
      },
      books: ['css', 'html', 'js', 'react']
   }

   const changeBooks = addNewBooksToUser(user, ['ts', 'rest api']);

   expect(user).not.toBe(changeBooks);
   expect(user.laptop).toBe(changeBooks.laptop);
   expect(user.address).toBe(changeBooks.address);
   expect(user.books).not.toBe(changeBooks.books);
   expect(user.books.length).toBe(4);
   expect(changeBooks.books[4]).toBe('ts');
   expect(changeBooks.books[5]).toBe('rest api');
   expect(changeBooks.books.length).toBe(6);
})
test('udate book', () => {

   let user: UserWithLaptopType & UserWithBooksType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: 'ZenBook'
      },
      books: ['css', 'html', 'js', 'react']
   }

   const changeBooks = updateBook(user, 'js', 'ts');

   expect(user).not.toBe(changeBooks);
   expect(user.laptop).toBe(changeBooks.laptop);
   expect(user.address).toBe(changeBooks.address);
   expect(user.books).not.toBe(changeBooks.books);
   expect(changeBooks.books[2]).toBe('ts');
})
test('remove book', () => {

   let user: UserWithLaptopType & UserWithBooksType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: 'ZenBook'
      },
      books: ['css', 'html', 'js', 'react']
   }

   const changeBooks = removeBook(user, 'js');

   expect(user).not.toBe(changeBooks);
   expect(user.laptop).toBe(changeBooks.laptop);
   expect(user.address).toBe(changeBooks.address);
   expect(user.books).not.toBe(changeBooks.books);
   expect(changeBooks.books.length).toBe(3);
   expect(changeBooks.books[2]).toBe('react');
})
test('update Company Title', () => {

   let user: UserWithLaptopType & UserWithBooksType & UserWithCompanyType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: 'ZenBook'
      },
      books: ['css', 'html', 'js', 'react'],
      companies: [
         {id: 1, title: 'Епам'},
         {id: 2, title: 'IT-INCUBATOR'}
      ]
   }

   const changeBooks = updateCompanyTitle(user, 1, 'Epam') as UserWithLaptopType & UserWithBooksType & UserWithCompanyType;

   expect(user).not.toBe(changeBooks);
   expect(user.laptop).toBe(changeBooks.laptop);
   expect(user.address).toBe(changeBooks.address);
   expect(user.companies).not.toBe(changeBooks.companies);
   expect(changeBooks.companies[0].title).toBe('Epam');
   expect(changeBooks.companies[0].id).toBe(1);

})
test('update Company', () => {

   const companies = {
      'Dimych': [
         {id: 1, title: 'Епам'},
         {id: 2, title: 'IT-INCUBATOR'}
      ],
      'Artem': [
         {id: 2, title: 'IT-INCUBATOR'}
      ]
   }
   const copy = updateCompanyTitle2(companies, 'Dimych', 1, 'Epam')

   expect(copy['Dimych']).not.toBe(companies['Dimych']);
   expect(copy['Artem']).toBe(companies['Artem']);
   expect(copy['Dimych'][0].title).toBe('Epam');
})
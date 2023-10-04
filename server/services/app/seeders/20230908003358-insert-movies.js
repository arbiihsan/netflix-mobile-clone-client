"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "Daredevil",
          slug: "daredevil",
          synopsis:
            "Matt Murdock manages to overcome the challenges that he faces due to him being blind since childhood and fights criminals as a lawyer and Daredevil.",
          trailerUrl: "http://youtu.be/jAy6NJ_D5vU",
          imgUrl:
            "https://www.themoviedb.org/t/p/original/jYU7cj7ETOV3o7Bfk6cweAAbnq1.jpg",
          rating: 9.0,
          genreId: 1,
          authorId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Don't Look Up",
          slug: "dont-look-up",
          synopsis:
            "Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth.",
          trailerUrl: "http://youtu.be/RbIxYm3mKzI",
          imgUrl:
            "https://www.themoviedb.org/t/p/original/w4mdpbqx0NqsgNKZ170U0QDcyl3.jpg",
          rating: 8.1,
          genreId: 4,
          authorId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Breaking Bad",
          slug: "breaking-bad",
          synopsis:
            "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.",
          trailerUrl: "http://youtu.be/2gTC4uWP3_Y",
          imgUrl:
            "https://www.themoviedb.org/t/p/original/n3u3kgNttY1F5Ixi5bMY9BwZImQ.jpg",
          rating: 10,
          genreId: 2,
          authorId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Your Name.",
          slug: "your-name",
          synopsis:
            "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
          trailerUrl: "http://youtu.be/xU47nhruN-Q",
          imgUrl:
            "https://www.themoviedb.org/t/p/original/3VIRYQTEC6pZSv3kUE5yPGVVg0i.jpg",
          rating: 8,
          genreId: 2,
          authorId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lost in Space",
          slug: "lost-in-space",
          synopsis:
            "After crash-landing on an alien planet, the Robinson family fights against all odds to survive and escape. But they're surrounded by hidden dangers.",
          trailerUrl: "http://youtu.be/fzmM0AB60QQ",
          imgUrl:
            "https://www.themoviedb.org/t/p/original/iRJt2SPLNGIfl9sQnDjWHArpwQF.jpg",
          rating: 7,
          genreId: 1,
          authorId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Movies", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

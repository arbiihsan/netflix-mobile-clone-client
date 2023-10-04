"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Casts",
      [
        {
          movieId: 1,
          name: "Charlie Cox",
          profilePict: "https://flxt.tmsimg.com/assets/318295_v9_bb.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 1,
          name: "Deborah Ann",
          profilePict: "https://flxt.tmsimg.com/assets/519636_v9_bb.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 1,
          name: "Vincent D'Onofrio",
          profilePict: "https://flxt.tmsimg.com/assets/64804_v9_bb.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 2,
          name: "Jennifer Lawrence",
          profilePict:
            "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 2,
          name: "Leonardo DiCaprio",
          profilePict: "https://flxt.tmsimg.com/assets/435_v9_bc.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 2,
          name: "Jonah Hill",
          profilePict:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Jonah_Hill-4939_%28cropped%29_%28cropped%29.jpg/1200px-Jonah_Hill-4939_%28cropped%29_%28cropped%29.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 3,
          name: "Bryan Cranston",
          profilePict:
            "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7Jahy5LZX2Fo8fGJltMreAI49hC.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 3,
          name: "Aaron Paul",
          profilePict:
            "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8Ac9uuoYwZoYVAIJfRLzzLsGGJn.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 3,
          name: "Anna Gunn",
          profilePict:
            "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/adppyeu1a4REN3khtgmXusrapFi.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 4,
          name: "Ryunosuke Kamiki",
          profilePict:
            "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ut7ewXjdgUmgkhJ1EtbOo9tbc7s.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 4,
          name: "Mone Kamishiraishi",
          profilePict:
            "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9gewWa82e0tviXmBB94bJdcEAEW.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 4,
          name: "Ryo Narita",
          profilePict:
            "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2EFimbwi4lf9B19cgu2bJaNJiVq.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 5,
          name: "Toby Stephens",
          profilePict:
            "https://www.themoviedb.org/t/p/w138_and_h175_face/7hZVlhxd4FkhEQxaF4lTgwj3SYc.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 5,
          name: "Molly Parker",
          profilePict:
            "https://www.themoviedb.org/t/p/w138_and_h175_face/xo0GT4MAUkqCKKL8qq6WEmHDre5.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 5,
          name: "Maxwell Jenkins",
          profilePict:
            "https://www.themoviedb.org/t/p/w138_and_h175_face/c1co2Hd4epwyMNroPDb3bFFYFjY.jpg",
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
    return queryInterface.bulkDelete("Casts", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

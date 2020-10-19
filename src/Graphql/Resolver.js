const { Score } = require("../Database/Model/Score");

const resolvers = {
  Query: {
    test: () => "salami",
    Scores: async (_, {level}, context, info)  => {
      return Score.find({level:level}).sort({points:-1}).exec();
    },
  },
  Mutation: {
    addScore: async (_, args, context, info) => {
      const { username, points, level } = args.user;
      const _score = new Score({
        username: username,
        points: points,
        level: level,
      });

      await _score.save();

      return _score;
    },
  },
};

module.exports = { resolvers };

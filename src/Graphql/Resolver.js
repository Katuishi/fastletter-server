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

      _score.save()
      .then((value)=>console.log(value))
      // console.log(_score);
      return true;
    },
  },
};

module.exports = { resolvers };

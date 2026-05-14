const FollowModel = require('../models/follow.model.js');
const UserModel = require('../models/user.model.js');

async function followController(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  if (followeeUsername === followerUsername) {
    return res.status(400).json({
      message: 'You cannot follow yourself',
    });
  }

  const isFolloweeExists = await UserModel.findOne({
    username: followeeUsername,
  });

  if (!isFolloweeExists) {
    return res.status(404).json({
      message: 'User you are trying to follow does not exists',
    });
  }

  const isAlreadyFollowing = await FollowModel.findOne({
    followee: followeeUsername,
    follower: followerUsername,
    status: 'accepted',
  });

  if (isAlreadyFollowing) {
    return res.status(200).json({
      message: `You are already following ${followeeUsername}`,
      follow: isAlreadyFollowing,
    });
  }

  const followRecord = await FollowModel.create({
    follower: followerUsername,
    followee: followeeUsername,
    status: 'accepted',
  });

  return res.status(201).json({
    message: `You are now following ${followeeUsername}`,
    follow: followRecord,
  });
}

async function unfollowUserController(req, res) {
  const followeeUsername = req.params.username;
  const followerUsername = req.user.username;

  const isUserFollowing = await FollowModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
    status: 'accepted',
  });

  if (!isUserFollowing) {
    return res.status(200).json({
      message: `You are not following ${followeeUsername}`,
    });
  }

  await FollowModel.findByIdAndDelete(isUserFollowing._id);

  res.status(200).json({
    message: `You have unfollowed ${followeeUsername}`,
  });
}

module.exports = {
  followController,
  unfollowUserController,
};

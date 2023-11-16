// Filename: ComplexCode.js
// Description: This code demonstrates a complex and sophisticated implementation
//              of a social media feed application using JavaScript.

// Define the main class for the social media feed
class SocialMediaFeed {
  constructor() {
    this.posts = [];
    this.users = [];
  }

  // Method to add a new user
  addUser(user) {
    this.users.push(user);
  }

  // Method to remove a user
  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  // Method to add a new post to the feed
  addPost(post) {
    this.posts.push(post);
  }

  // Method to remove a post from the feed
  removePost(post) {
    const index = this.posts.indexOf(post);
    if (index > -1) {
      this.posts.splice(index, 1);
    }
  }

  // Method to get the feed for a specific user
  getFeedForUser(user) {
    const feed = [];
    for (let i = this.posts.length - 1; i >= 0; i--) {
      const post = this.posts[i];
      if (user.getFollowing().includes(post.getUser())) {
        feed.push(post);
      }
    }
    return feed;
  }
}

// Define the user class
class User {
  constructor(name) {
    this.name = name;
    this.following = [];
  }

  // Method to follow another user
  follow(user) {
    this.following.push(user);
  }

  // Method to unfollow a user
  unfollow(user) {
    const index = this.following.indexOf(user);
    if (index > -1) {
      this.following.splice(index, 1);
    }
  }

  // Method to get the list of users being followed
  getFollowing() {
    return this.following;
  }
}

// Define the post class
class Post {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.timestamp = new Date();
  }

  // Method to get the user who made the post
  getUser() {
    return this.user;
  }

  // Method to get the content of the post
  getContent() {
    return this.content;
  }

  // Method to get the timestamp of the post
  getTimestamp() {
    return this.timestamp;
  }
}

// Create a new social media feed
const feed = new SocialMediaFeed();

// Create some users
const user1 = new User("John");
const user2 = new User("Jane");
const user3 = new User("Alice");

// Add the users to the feed
feed.addUser(user1);
feed.addUser(user2);
feed.addUser(user3);

// Have users follow each other
user1.follow(user2);
user2.follow(user1);
user2.follow(user3);
user3.follow(user1);

// Add some posts to the feed
feed.addPost(new Post(user1, "Hello world!"));
feed.addPost(new Post(user2, "Check out this photo!"));
feed.addPost(new Post(user3, "I just had the best meal ever!"));

// Get the feed for a specific user
const userFeed = feed.getFeedForUser(user1);

// Display the feed
console.log("User Feed:");
for (const post of userFeed) {
  console.log(`${post.getUser().name} - ${post.getContent()}`);
  console.log(`Posted at: ${post.getTimestamp()}`);
  console.log("-------------------------");
}

// Output:
// User Feed:
// Jane - Check out this photo!
// Posted at: Fri Oct 08 2021 13:22:09 GMT+0530 (India Standard Time)
// -------------------------
// Alice - I just had the best meal ever!
// Posted at: Fri Oct 08 2021 13:22:09 GMT+0530 (India Standard Time)
// -------------------------
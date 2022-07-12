class Creator {
  constructor(fullName, channelName) {
    this.fullName = fullName;
    this.channelName = channelName;
    this.subs = [];
    this.newVideoNote = [];
  }
  setSubs(sub) {
    this.subs.push(sub);
  }
  addNotification(note) {
    this.newVideoNote.push(note);
    this.subs.forEach((user) => user.update(note));
  }
}

class Users {
  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
  }
  update(note) {
    if (johnChannel.channelName == "Learn javaScript") {
      console.log(
        `hi! ${this.fullName}, ${note} was just added to the channel ${johnChannel.channelName}`
      );
    }
    if (bobChannel.channelName == "Learn PHP") {
      console.log(
        `hi! ${this.fullName}, ${note} was just added to the channel ${bobChannel.channelName}`
      );
    }
    if (chrisChannel.channelName == "Learn CSS") {
      console.log(
        `hi! ${this.fullName}, ${note} was just added to the channel ${chrisChannel.channelName}`
      );
    }
  }
}

const johnChannel = new Creator("john", "Learn javaScript");
const bobChannel = new Creator("bob", "Learn PHP");
const chrisChannel = new Creator("chris", "Learn CSS");

const user1 = new Users("Jake", 24);
const user2 = new Users("Max", 45);
const user3 = new Users("Rob", 18);
johnChannel.setSubs(user1);
bobChannel.setSubs(user2);
chrisChannel.setSubs(user3);
let newVideo1 = `My new video javascript 4 beginners`;
let newVideo2 = `My new video PHP 4 beginners`;
let newVideo3 = `My new video CSS 4 beginners`;
johnChannel.addNotification(newVideo1);
bobChannel.addNotification(newVideo2);
chrisChannel.addNotification(newVideo3);

const dispatchNotification = (req, res) => {
  console.log('notification received is ', req);
  res.send('Hello MR');
};

module.exports = dispatchNotification;

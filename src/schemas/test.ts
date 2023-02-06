// const user1 = new User({
//   email: "1",User.find((err, res) => {
// console.log(res)
// })

// Post.find((err, res) => {
//   console.log(res)
// })

// const user2 = new User({
//   email: "2",
//   password: "123"
// })
// user2.save()

// const user3 = new User({
//   email: "3",
//   password: "123"
// })
// user3.save()

// User.findOne({ email: "3" }, (err, res) => {
//   Post.updateOne({ _id: "63da59d50b9b771ac13e5c97" }, { $push: { likes: res } }).then(async (val) => {
//     const user3 = await User.updateOne({ email: "3" }).exec()
//     console.log(user3!)
//     const post1 = await Post.findOne({ _id: "63da59d50b9b771ac13e5c97" }).exec()
//     console.log(post1)

//     Post.find((er, resp) => {
//       console.log(resp)
//     })
//   })
// })

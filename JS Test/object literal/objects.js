const x_post = {
    username: "@abdullah",
    tags: ["@shahid", "@opu", "@rakiba"],
    reacts: 170,
    comments: 56,
    content: "This post is about gaza"
};
console.log(x_post);

//delete a property
delete x_post.tags;
console.log(x_post);

//add property
x_post.reach = 300;
console.log(x_post);

//change a value of a property
x_post.username = "@itzmemahmud";
console.log(x_post);

//access with []
console.log(x_post["content"]);

//access with variable
let rct = "reacts";
console.log(x_post[rct]);

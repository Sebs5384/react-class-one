const taskOneProps = {
    image: "https://avatars.githubusercontent.com/u/120617688?s=400&u=6cf55ef8f71d0bb11ec3191ef6a82aee5790767d&v=4",
    name: "Sebastian Araya",
    title: "Front-end dev",
    blogPostTitle: "My journal",
    paragraph: "Today i saw a squirrle\nIt was black and fat",
};

const taskTwoProps = {
    MY_NAME: "Sebastian",
    minimumLength: 7,
    typePassword: true,
};

const isPassword = taskTwoProps.typePassword ? "password" : "text";
const blogPostContent = taskOneProps.paragraph.split("\n").map((content, index) => <p key={`parrafo-${index}`}>{content}</p>)

const validateInput = (value) => {
    const isMinimumLength = value => value.length >= 7;
    const hasNoSpaces = value => !value.match(" ");
    const isEmail = value => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    return isMinimumLength(value) && hasNoSpaces(value) && isEmail(value);
};

const items = {
    one: true,
    two: false,
    three: false
};

export { taskOneProps, taskTwoProps, isPassword, items, blogPostContent, validateInput };
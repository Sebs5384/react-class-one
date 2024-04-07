import { Card, BlogPost, MatchName, PasswordInput, ValidationInput, UncontrolledCheckbox, CheckboxList, ControlledCheckbox, CheckboxListWithState } from "./components/index.js";

/*const profilePicture = "https://avatars.githubusercontent.com/u/120617688?s=400&u=6cf55ef8f71d0bb11ec3191ef6a82aee5790767d&v=4";
const developerName = "Sebastian Araya";
const specialization = "Front-end dev";

ReactDOM.render(<Card image={profilePicture} name={developerName} title={specialization}  />, document.querySelector("#react-app"));*/

/*const blogPostTitle = "My journal";
const paragraph = "Today i saw a squirrle\nIt was black and fat";
const blogPostContent = paragraph.split("\n").map((content, index) => <p key={`parrafo-${index}`}>{content}</p>)
const author = {
    name: "Sebastian Araya",
    title: "Front-end dev",
    image: "https://avatars.githubusercontent.com/u/120617688?s=400&u=6cf55ef8f71d0bb11ec3191ef6a82aee5790767d&v=4"
}

ReactDOM.render(<BlogPost title={blogPostTitle} content={blogPostContent} author={author} Card={Card} />, document.querySelector("#react-app"));*/

/*const MY_NAME = "Sebastian";

ReactDOM.render(<MatchName name={MY_NAME} />, document.querySelector("#react-app"));*/

/*const minimumLength = 7;

ReactDOM.render(<PasswordInput minLength={minimumLength} />, document.querySelector("#react-app"));*/

/*const validateInput = (value) => {
    const isMinimumLength = value => value.length >= 7;
    const hasNoSpaces = value => !value.match(" ");
    const isEmail = value => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    return isMinimumLength(value) && hasNoSpaces(value) && isEmail(value);
};
const typePassword = false;
const isPassword = typePassword ? "password" : "text";
 
ReactDOM.render(
    <ValidationInput validation={validateInput} isPassword={isPassword}/>,
    document.querySelector("#react-app")
);*/

ReactDOM.render(
    <UncontrolledCheckbox name={"one"} initialValue={false} />,
    document.querySelector("#react-app")
);

/*const items = {
    one: true,
    two: false,
    three: false
};

ReactDOM.render(
    <CheckboxList items={items} UncontrolledCheckbox={UncontrolledCheckbox} />,
    document.querySelector("#react-app")
);*/

/*ReactDOM.render(
    <ControlledCheckbox name="one" value={true} onChange={() => {}} />,
    document.querySelector("#react-app")
);*/

/*const items = {
    one: false,
    two: true,
    three: false
};

ReactDOM.render(
    <CheckboxListWithState items={items} ControlledCheckbox={ControlledCheckbox} />,
    document.querySelector("#react-app")
);*/

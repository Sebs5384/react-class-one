import { Card, BlogPost, MatchName, PasswordInput, ValidationInput, UncontrolledCheckbox, CheckboxList, ControlledCheckbox, CheckboxListWithState } from "../components/index.js";
import { taskOneProps, taskTwoProps, isPassword, items, blogPostContent, validateInput } from "../utils/general.js";

function App(){
    return (
        <>
            <Card image={ taskOneProps.image	} name={taskOneProps.name} title={taskOneProps.title}  />
            <BlogPost title={taskOneProps.blogPostTitle} content={blogPostContent} author={taskOneProps} Card={Card} />
            <MatchName name={taskTwoProps.MY_NAME} /><br/>
            <PasswordInput minLength={taskTwoProps.minimumLength} typePassword={isPassword} /><br/>
            <ValidationInput validation={validateInput} /><br/>
            <UncontrolledCheckbox name={"one"} initialValue={false} />
            <CheckboxList items={items} UncontrolledCheckbox={UncontrolledCheckbox} />
            <ControlledCheckbox name="one" value={true} onChange={() => {}} />
            <CheckboxListWithState items={items} ControlledCheckbox={ControlledCheckbox} />
        </>
    );
};

export default App;
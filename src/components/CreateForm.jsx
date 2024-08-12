import nextId from "react-id-generator";

import Button from "../ui/Button.jsx";
import Input from "../ui/Input.jsx";

import {useRef} from "react";

const CreateForm = (props) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleRef.current.value && descriptionRef.current.value && dateRef.current.value) {
      props.onFormSubmit({
        id: nextId(),
        name: titleRef.current.value,
        description: descriptionRef.current.value,
        dueDate: new Date(dateRef.current.value),
        tasks: [],
      })
    }

    formRef.current.reset();
  }

  return (<>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="create-header flex justify-end gap-2">
          <Button onClick={() => props.onFormCancel('')} type={"reset"} additionalClasses={"bg-gray-100 text-gray-800 w-auto mx-0 mt-0 hover:bg-gray-300"} text={"Cancel"}/>
          <Button type={"submit"}
                  additionalClasses={"bg-gray-800 text-gray-100 w-1/12 mx-0 mt-0 hover:bg-gray-900 hover:text-white"}
                  text={"Save"}/>
        </div>
        <Input label={"title"}>
          <input required ref={titleRef}
                 className="bg-blue-900 bg-opacity-10 h-8 border-b-4 border-b-blue-900 p-1 font-medium"
                 type="text"/>
        </Input>
        <Input label={"description"}>
          <textarea required ref={descriptionRef}
                    className="bg-blue-900 bg-opacity-10 border-b-4 border-b-blue-900 p-1 h-32 font-medium"/>
        </Input>
        <Input label={"Due date"}>
          <input required ref={dateRef}
                 className="bg-blue-900 bg-opacity-10 border-b-4 border-b-blue-900 p-1 h-8 font-medium"
                 type="date"/>
        </Input>
      </form>
    </>)
};

export default CreateForm;
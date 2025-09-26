import FormInput from "./FormInput";
import Textarea from "./Textarea";
import DatePicker from "./DatePicker";
import SubmitButton from "./SubmitButton";

const TaskForm = ({ formData, onInputChange, onSubmit, fieldErrors = {} }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
    <div className="space-y-8">
        
      <FormInput
        label="Task Title"
        id="title"
        name="title"
        type="text"
        value={formData.title}
        onChange={onInputChange}
        placeholder="Enter a task title"
        error={fieldErrors.title}
      />

      <Textarea
        label="Task Description"
        name="description"
        value={formData.description}
        onChange={onInputChange}
        placeholder="Describe what volunteers do in this task..."
        required={true}
        rows={3}
        error={fieldErrors.description}
      />
      
      <DatePicker
        label="Task Deadline"
        name="dueDate"
        value={formData.dueDate}
        onChange={onInputChange}
        required={true}
        error={fieldErrors.dueDate}
      />

      <div className="pt-4">
        <SubmitButton onClick={onSubmit} />
      </div>
    </div>
  </div>
);

export default TaskForm;
import FormInput from "./FormInput";
import Textarea from "./Textarea";
import DatePicker from "./DatePicker";
import SubmitButton from "./SubmitButton";

const ProjectForm = ({ formData, onInputChange, onSubmit, fieldErrors = {} }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
    <div className="space-y-8">
        
      <FormInput
        label="Project Title"
        id="title"
        name="title"
        type="text"
        value={formData.title}
        onChange={onInputChange}
        placeholder="Enter a descriptive project title"
        error={fieldErrors.title}
      />

      <Textarea
        label="Project Description"
        name="description"
        value={formData.description}
        onChange={onInputChange}
        placeholder="Describe what this project aims to achieve and its impact..."
        required={true}
        rows={5}
        error={fieldErrors.description}
      />
      
      <DatePicker
        label="Project Due Date"
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

export default ProjectForm;
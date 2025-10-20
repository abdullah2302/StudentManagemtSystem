import React, { useState } from "react";
import { toast } from "react-hot-toast";
import StudentActionButtons from "./StudentActionButtons";
import StudentEditForm from "./StudentEditForm";
import { deleteStudent,updateStudent} from "../../api/studentApi"; 


const StudentActions = ({ student, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(student);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${student.name}?`
    );
    if (!confirmDelete) return;

    try {
      await deleteStudent(student.id); 
      onDelete(student.id); 
      toast.success(`${student.name} has been deleted successfully!`);
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("❌ Failed to delete student. Try again.");
    }
  };

  // ✅ Save Edited Student (PUT or PATCH)
  const handleSave = async (e) => {
    e.preventDefault();

    try {
      await updateStudent(student.id, formData); 
      if (onEdit) onEdit(formData); 
      toast.success(`${student.name}'s record has been updated!`);
      setIsEditing(false);
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("❌ Failed to update student. Try again.");
    }
  };

  const handleCancel = () => {
    setFormData(student);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <StudentEditForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <StudentActionButtons
          onEdit={() => setIsEditing(true)}
          onDelete={handleDelete}
          student={student}
        />
      )}
    </>
  );
};

export default StudentActions;

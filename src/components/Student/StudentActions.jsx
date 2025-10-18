import React, { useState } from "react";
import { toast } from "react-hot-toast";


import StudentActionButtons from "./StudentActionButtons";
import StudentEditForm from "./StudentEditForm";

const StudentActions = ({ student, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(student); 

  

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${student.name}?`
    );
    if (!confirmDelete) return;

    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
    const updatedStudents = savedStudents.filter(
      (s) => s.rollNumber !== student.rollNumber
    );

    localStorage.setItem("students", JSON.stringify(updatedStudents));
    onDelete(student.rollNumber);
    toast.success(`${student.name} has been deleted successfully!`);
  };

  const handleSave = (e) => {
    e.preventDefault();

    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
    const updatedStudents = savedStudents.map((s) =>
      s.rollNumber === student.rollNumber ? formData : s
    );

    localStorage.setItem("students", JSON.stringify(updatedStudents));
    
    // Call a prop function to notify the parent list component about the edit
    if (onEdit) {
      onEdit(formData);
    }
    
    setIsEditing(false);
    toast.success(`${student.name}'s record has been updated!`);
  };
  
  const handleCancel = () => {
    // rest form if click on cancle
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
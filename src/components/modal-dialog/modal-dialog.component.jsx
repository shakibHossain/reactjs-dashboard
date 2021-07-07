import React from "react";
import Dialog from "@material-ui/core/Dialog";
import CreateEmployeeForm from "../create-employee-form/create-employee-form.component";
import EditEmployeeForm from "../edit-employee-form/edit-employee-form.component";

const ModalDialog = ({
  createEmployeeModalOpen,
  handleCreateEmployeeModalClose,
  editEmployeeModalOpen,
  handleEditEmployeeModalClose,
  modalValue,
}) => {
  return (
    <div>
      {createEmployeeModalOpen ? (
        <Dialog
          open={createEmployeeModalOpen}
          onClose={handleCreateEmployeeModalClose}
        >
          <CreateEmployeeForm
            handleCreateEmployeeModalClose={handleCreateEmployeeModalClose}
          />
        </Dialog>
      ) : editEmployeeModalOpen ? (
        <Dialog
          open={editEmployeeModalOpen}
          onClose={handleEditEmployeeModalClose}
        >
          <EditEmployeeForm
            handleEditEmployeeModalClose={handleEditEmployeeModalClose}
            modalValue={modalValue}
          />
        </Dialog>
      ) : (
        ""
      )}
    </div>
  );
};

export default ModalDialog;

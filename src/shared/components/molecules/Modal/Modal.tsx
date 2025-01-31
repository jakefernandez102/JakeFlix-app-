/* eslint-disable @typescript-eslint/no-explicit-any */

import { Form, FormField } from "../Form/Form";

export interface ModalI {
  isModalForm?: boolean;
  formFields?: FormField[];
  title: string;
  description?: string;
  initialValues?: Record<string, any>;
  open: boolean;
  onSubmit?: (values: Record<string, any>) => void;
}
export const Modal = ({
  title,
  description,
  formFields,
  isModalForm,
  initialValues,
  open,
  onSubmit,
}: ModalI) => {
  if (open)
    return (
      <div
        className={`bg-form absolute flex w-1/3 flex-col items-center justify-between rounded-md p-4`}
      >
        <h3 className="text-xl">{title}</h3>
        {description && <p className="text-sm">{description}</p>}

        {isModalForm && (
          <Form
            fields={formFields!}
            onSubmit={onSubmit!}
            initialValues={initialValues}
            mainButtontext="Add Profile"
          />
        )}
      </div>
    );
  else return null;
};

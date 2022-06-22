import { Label, TextField, FieldError } from "@redwoodjs/forms"

interface TextInputProps {
  name?: string
  label?: string
  placeholder?: string
}

const TextInput = ({ name, label, placeholder }: TextInputProps) => {
  return (
    <div>
      <Label name={name} className="block text-sm font-medium text-gray-700">
        {label}
      </Label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <TextField
          name={name}
          errorClassName="block w-full pr-10 focus:outline-none sm:text-sm rounded-md border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
          className="block w-full pr-10 focus:outline-none sm:text-sm rounded-md focus:ring-brand-500 focus:border-brand-500 border-gray-300"
          placeholder={placeholder}
        />
      </div>
      <FieldError
        name={name}
        className="mt-2 text-sm text-red-600"
        id="email-error"
      >
        Your password must be less than 4 characters.
      </FieldError>
    </div>
  )
}

export default TextInput

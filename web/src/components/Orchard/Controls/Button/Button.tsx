import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

const Button = ({children,
  ...rest
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...rest}
      className="text-white bg-gradient-to-br from-rose-400 to-brand-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-brand-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      {children}
    </button>
  )
}

export default Button

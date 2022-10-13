export type HeadingProps = {
  text: string
}

export const Heading = ({ text }: HeadingProps) => (
  <h1 className="text-violet-500">{text}</h1>
)

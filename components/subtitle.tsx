type ContainerProps = {
    children: React.ReactNode
  }
  
  export default function Subtitle({ children }: ContainerProps) {
    return <div className="m-auto text-4xl font-bold">{children}</div>
  }
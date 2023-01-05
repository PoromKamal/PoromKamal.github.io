type ContainerProps = {
    children: React.ReactNode
  }
  
  export default function Subtitle({ children }: ContainerProps) {
    return <div className="container m-auto text-4xl font-bold">{children}</div>
  }
type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-7xl mx-auto w-full">{children}</div>;
};
export default Container;

type TProps = {
  children: React.ReactNode;
};

export const ArticleLayout = ({ children }: TProps) => {
  return (
    <div className="w-screen h-full bg-clay font-medium relative z-40">
      {children}
    </div>
  );
};

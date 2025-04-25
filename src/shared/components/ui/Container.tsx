interface ContainerProps {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
    <div className="max-w-4xl mx-auto p-4">{children}</div>
);

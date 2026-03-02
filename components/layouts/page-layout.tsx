interface Props {
    children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
    return (
        <div className={
            "flex flex-col gap-4 items-start py-4 " + 
            "w-full px-8 lg:px-32 2xl:px-64"
        }>
            {children}
        </div>
    );
}
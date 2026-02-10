interface Props {
    children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
    return (
        <div className={
            "flex flex-col gap-4 items-center lg:items-start py-4 " + 
            "w-[85%] lg:w-[75%] 2xl:w-[65%]"
        }>
            {children}
        </div>
    );
}
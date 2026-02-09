export type Project = {
    slug: string;
    title: string;
    description: string;
    period: string;
    role: {
        main: string;
        description: string;
        responsabilities: string[];
    };
    language: string[];
    stack: {
        core: string[];
        libraries: string[];
    };
    context: string[];
    tecnical_challenges: {
        description: string;
        items: string[];
    };
    results: {
        description: string;
        items: string[];
    };
};

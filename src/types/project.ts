export interface Project {
    id: number;
    title: string;
    text: string;
    url: string;
    image: {
        src: string;
        alt: string;
    }
}
export { default as AnimatedLogoCloud } from "./AnimatedLogoCloud.vue";


interface Logo {
    name: string;
    path: string;
}
export interface AnimateLogoCloudProps {
    class?: string;
    title?: string;
    logos?: Logo[];
}
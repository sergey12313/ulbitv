declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}



declare module "\*.jpg" {
    const content: string;
    export default content;
}

declare module "\*.jpeg" {
    const content: string;
    export default content;
}

declare module "\*.gif" {
    const content: string;
    export default content;
}

declare module "\*.png" {
    const content: string;
    export default content;
}


declare module "\*.svg" {
    import React = require("react");
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;

    export default SVG;
}

declare const __IS_DEV__: boolean
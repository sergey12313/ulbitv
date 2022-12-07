export type BuildMode = 'development' | 'production'

export interface BuildPath {
    entry: string,
    build: string,
    html: string,
    src: string,
    public: string,
}

export interface BuildOptions {
    mode : BuildMode,
    paths: BuildPath
    isDev: boolean,
    port: number
}
export interface BuildEnv  {
    port?: string,
    mode?: string,
}
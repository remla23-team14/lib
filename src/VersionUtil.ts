import lib from  '../package.json';

export class VersionUtil {
    static getVersion() {   
        return lib.version;
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCoreBioses = exports.isBios = exports.getPlatforms = void 0;
const defaultBiosesUrls_1 = require("./defaultBiosesUrls");
const platforms_1 = require("./platforms");
const getPlatforms = (biosesUrls = defaultBiosesUrls_1.defaultBiosesUrls) => {
    return platforms_1.platforms.map((platform) => ({
        ...platform,
        bioses: platform.bioses?.map((bios) => ({
            ...bios,
            url: biosesUrls[bios.name],
        })),
    }));
};
exports.getPlatforms = getPlatforms;
const isBios = (value) => {
    if (value &&
        typeof value === "object" &&
        "name" in value &&
        "descriptions" in value &&
        "url" in value)
        return true;
    return false;
};
exports.isBios = isBios;
const findCoreBioses = (core, biosesUrls = defaultBiosesUrls_1.defaultBiosesUrls) => {
    const platforms = (0, exports.getPlatforms)(biosesUrls);
    const foundByPlatformId = platforms.find(({ id }) => id === core);
    if (foundByPlatformId && foundByPlatformId.bioses)
        return foundByPlatformId.bioses;
    const foundByPlatformCore = platforms.find(({ cores }) => 
    // @ts-ignore
    cores.includes(core));
    if (foundByPlatformCore && foundByPlatformCore.bioses)
        return foundByPlatformCore.bioses;
};
exports.findCoreBioses = findCoreBioses;

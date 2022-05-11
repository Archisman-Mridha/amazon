module.exports = {
    displayName: "web",
    preset: "../../jest.preset.ts",
    transform: {
        "^.+\\.[tj]sx?$": "babel-jest"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    coverageDirectory: "../../coverage/libs/web"
}
